import React from 'react'
import styles from "./ConfirmationDialog.module.css";

const ConfirmationDialog = (props) => {
    const {
        message,
        dialogFunction,
    } = props;

    return (
        <div className={ styles.frame }>
            <p className={ styles.message }>{ message }</p>
            <div>
                <div className={ styles.true_button }>
                    <button className="button" onClick={ () => dialogFunction()}>
                        <p className="button_text">OK</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationDialog