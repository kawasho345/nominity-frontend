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
            <div className={`${ "button" } ${ styles.button }`}>
                <OnClick func={ () => okFunc() }>
                    <Font style="button">OK</Font>
                </OnClick>
            </div>
        </div>
    )
}

export default Modal