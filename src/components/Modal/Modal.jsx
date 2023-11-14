import React from 'react'
import styles from "./Modal.module.css";
import OnClick from '../OnClick/OnClick';
import Font from '../Font/Font';

const Modal = (props) => {
    const {
        okFunc,
        children,
    } = props

    return (
        <div className={ styles.frame }>
            { children }
            <div className={`${ "green_button" } ${ styles.button }`}>
                <OnClick func={ () => okFunc() }>
                    <Font style="default_button">OK</Font>
                </OnClick>
            </div>
        </div>
    )
}

export default Modal