import React from "react"


const Modal = (props) => {

    if (!props.show) {
        return null
    }

    return (
        <div className="modal" onClick = {props.onClose}>
            <div className="modal-content" onClick = {e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4>No More Cakie :( ?</h4>
                </div>
                <div className="modal-buttons">
                    {props.delButton}
                    <button onClick={props.onClose} className="buttonShow">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal