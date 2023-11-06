import React from 'react'
import styles from "./Shadow.module.css";

const Shadow = (props) => {
    const { 
        func = null,
        style = "shadow", 
    } = props

    return (
        <div className={ styles[style] }>
            {func?
                <button className={ styles.button } onClick={ () => func() } />
            :""}
        </div>
    )
}

export default Shadow