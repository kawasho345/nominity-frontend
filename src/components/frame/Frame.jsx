import React from 'react'
import styles from "./Frame.module.css";

const Frame = (props) => {
    const {
        children,
        style = "frame",
        width,
        height,
    } = props;
    const frameStyle = {
        width: width,
        height: height,
    }

    return (
        <div style={ frameStyle } className={ styles[style] }>
            { children }
        </div>
    )
}

export default Frame