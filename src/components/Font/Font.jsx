import React from 'react';
import styles from "./Font.module.css"

//フォントの統一
const Font = (props) => {
    const { 
        children,
        style,
        tag = "p",
    } = props
    return (
        <>
            {(tag === "div")?
                <div className={ styles[style] }>{ children }</div>
            :(tag === "p")?
                <p className={ styles[style] }>{ children }</p>
            :""}
        </>
    )
}

export default Font