import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
    componentDidMount() {
         if (!window.gapi) {
             return <div>Loading...</div>
         }
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:
                        '331603116082-vldkb06nb0kqfv11dars57hhiot4mumr.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance()
                    this.onAuthChange(this.auth.isSignedIn.get())
                    this.auth.isSignedIn.listen(this.onAuthChange)

                    //console.log(this.auth.isSignedIn.get())
                })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn === true) {
            console.log('You are Signed In')
            return (
                <button
                    onClick={this.onSignOutClick}
                    className="ui red google button"
                    style={{borderRadius:'15px', marginLeft:'20px'}}
                >
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            console.log('You are Signed Out')
            return (
                <button
                    onClick={this.onSignInClick}
                    className="ui red google button"
                    style={{borderRadius:'25px'}}
                >
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)

