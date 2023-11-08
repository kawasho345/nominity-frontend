import React from 'react'
import styles from "./Heading.module.css";
import Font from '../Font/Font';

const Heading = (props) => {
    const { 
        children, 
        style = "heading", 
    } = props

    return (
        <>
            {(style === "heading")?
                <div className={ styles.frame }>
                    <Font style="heading">{ children }</Font>
                </div>
            :(style === "middle")?
                <div className={ styles.middle_frame }>
                    <Font style="default_text">{ children }</Font>
                </div>
            :""}
        </>
    )
}

export default Heading