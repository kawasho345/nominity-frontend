import React from 'react'
import styles from "./PopUp.module.css";
import Shadow from '../Shadow/Shadow';

const PopUp = (props) => {
    const {
        children,
        func,
    } = props
    return (
        <div className={ styles.frame }>
            <Shadow func={ func? () => func() : "" }/>
            <div className={ styles.body }>
                { children }
            </div>
        </div>
    )
}

export default PopUp