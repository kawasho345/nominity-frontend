import React from 'react'
import styles from "./PopUp.module.css";
import Font from '../Font/Font';

const PopUp = (props) => {
    const { 
        children, 
        style=success,
    } = props;
    return (
        <div className={`${ styles.frame } ${ styles[style] }`}>
            <Font style="button">{ children }</Font>
        </div>
    )
}

export default PopUp