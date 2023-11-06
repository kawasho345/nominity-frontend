import React from 'react'
import styles from "./BooleanDialog.module.css";

const BooleanDialog = (props) => {
    const {
        message,
        dialogFunction,
    } = props;

    return (
        <div className={ styles.frame }>
            <p className={ styles.message }>{ message }</p>
            <div>
                <div className={ styles.false_button }>
                    <button className="button" onClick={ () => dialogFunction(false) }>
                        <span className="button_text">No</span>
                    </button>
                </div>
                <div className={ styles.true_button }>
                    <button className="button" onClick={ () => dialogFunction(true) }>
                        <span className="button_text">Yes</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BooleanDialog