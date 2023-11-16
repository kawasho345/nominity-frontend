import React from 'react'
import styles from "./Dialog.module.css";
import OnClick from '../OnClick/OnClick';
import Font from '../Font/Font';

const Dialog = (props) => {
    const {
        yesFunc,
        noFunc,
        children,
    } = props

    return (
        <div className={ styles.frame }>
            { children }
            <div className={ styles.buttons }>
                <div className={ styles.no }>
                    <OnClick func={ () => noFunc() }>
                        <Font style="button">No</Font>
                    </OnClick>
                </div>  
                <div className={ styles.yes }>
                    <OnClick func={ () => yesFunc() }>
                        <Font style="button">Yes</Font>
                    </OnClick>
                </div>
            </div>
        </div>
    )
}

export default Dialog