import React from 'react'
import styles from "./OnClick.module.css";
import Link from 'next/link';

const OnClick = (props) => {
    const {
        link = null,
        func = null,
        type = null,
        children,
        style = "center", 
        form,
    } = props

    return (
        <>
            { link? 
                <Link href={ link } className={ styles.on_click }>
                    <div className={ styles[style] }>{ children }</div>
                </Link>
            : func?
                <button onClick={ () => func() } className={ styles.on_click } type={ type }>
                    <div className={ styles[style] }>{ children }</div>
                </button>
            : type?
                <button className={ styles.on_click } type={ type } form={ form }>
                    <div className={ styles[style] }>{ children }</div>
                </button>    
            :""}
        </>
    )
}

export default OnClick