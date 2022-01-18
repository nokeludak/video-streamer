import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'
import { useParams } from 'react-router-dom'

const StreamEdit = ({ fetchStream, editStream, stream }) => {

    const { id } = useParams()
    console.clear()
    console.log('stream from streamEdit props', stream)

    useEffect(() => {
        fetchStream(id)
        // eslint-disable-next-line
    }, [])

    const onSubmit = (formValues) => {
        editStream(id, formValues)
    }

    return (
        <div>
            {!stream ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h3>Edit a Stream</h3>
                    <StreamForm
                        initialValues={_.pick(stream, 'title', 'description')}
                        onSubmitCallback={onSubmit}
                    />
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)

