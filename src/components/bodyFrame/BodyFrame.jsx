import React from 'react'
import styles from "./BodyFrame.module.css";

const BodyFrame = (props) => {
    const { children } = props;

    return (
        <div className={ styles.frame }>
            { children }
        </div>
    )
}

export default BodyFrame