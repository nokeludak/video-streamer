import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ title, content, actionButtons, onDissmiss }) => {
   
    return ReactDOM.createPortal(
        <div
            onClick={()=> onDissmiss()}
            className="ui dimmer modals visible active">
            <div
                onClick={(e)=> e.stopPropagation()}
                className="ui standard modal visible active">
                <div className="header">{ title}</div>
                <div className="content">
                    {content}
                </div>
                <div className="actions">
                    {actionButtons}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal


