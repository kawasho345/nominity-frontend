import React from 'react'
import styles from "./Cancel.module.css";
import OnClick from '../OnClick/OnClick';
import { ArrowForwardIos } from '@mui/icons-material';
import Font from '../Font/Font';

const Cancel = (props) => {
    const { cancelFunc } = props;
    return (
        <>
            <div className={ styles.button }>
                <OnClick func={ () => cancelFunc() }>
                    <div className={ styles.text }>
                        <Font style="default_text">キャンセル</Font>
                        <ArrowForwardIos sx={{typography:{ fontSize: '2rem' }}} />
                    </div>
                </OnClick>
            </div>
        </>
    )
}

export default Cancel