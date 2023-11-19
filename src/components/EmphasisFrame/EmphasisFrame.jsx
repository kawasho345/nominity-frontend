import React from 'react';
import styles from "./Emphasis.module.css";
import Shadow from '../Shadow/Shadow';

//強調フレーム
const EmphasisFrame = (props) => {
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

export default EmphasisFrame