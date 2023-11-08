import React from 'react'
import styles from "./styles/Preference.module.css"
import Heading from '@/components/Heading/Heading';
import Font from '@/components/Font/Font';

const Preference = (props) => {
    const {
        heading,
        content,
        style,
    } = props
    return (
        <>
            <div className={`${ styles.frame } ${ styles[style] }`}>
                <Heading style="middle">{ heading }</Heading>
                <Font style="large_text">{ content }</Font>
            </div>
        </>
    )
}

export default Preference