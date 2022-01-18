import React, { useEffect } from 'react'
import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStream, deleteStream } from '../../actions'
import { useParams } from 'react-router-dom'

const StreamDelete = ({ fetchStream, deleteStream, stream }) => {
    const { id } = useParams()

    useEffect(() => {
        fetchStream(id)
        // eslint-disable-next-line
    }, [])

    const onDissmiss = () => history.push('/')

    const renderContent = !stream
        ? 'Are you sure you want to delete this stream'
        : `Are you sure you want to delete this stream with title : ${stream.title} ?`

    const renderActionButtons = (
        <>
            <button
                onClick={() => deleteStream(id)}
                className="ui button negative"
            >
                Delete
            </button>
            <Link to={'/'} onClick={() => onDissmiss()} className="ui button">
                Cancel
            </Link>
        </>
    )

    return (
        <Modal
            title="Delete Stream"
            content={renderContent}
            actionButtons={renderActionButtons}
            onDissmiss={onDissmiss}
        />
    )
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, { fetchStream, deleteStream })(
    StreamDelete
)


