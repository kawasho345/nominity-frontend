import React from 'react'
import styles from "./BodyFrame.module.css";

//メインフレームの統一化
const BodyFrame = (props) => {
    const { children } = props;

    return (
        <div className={ styles.frame }>
            { children }
        </div>
    )
}

export default BodyFrame