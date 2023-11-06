import React from 'react'
import styles from "./Text.module.css"

const Text = (props) => {
    const { 
        children,
        style,
    } = props
    return (
        <p className={ styles[style] }>{ children }</p>
    )
}

export default Text