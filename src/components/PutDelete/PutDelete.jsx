"use client"
import React from 'react'
import styles from "./PutDelete.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import OnClick from '../OnClick/OnClick';
import { Edit } from '@mui/icons-material';

//フォームの更新、削除ボタン
const PutDelete = (props) => {
    const {
        putFunc,
        deleteFunc,
    } = props;

    return (
        <div className={ styles.frame }>
            <div className={ styles.edit }>
                <OnClick func={ () => putFunc() }>
                    <Edit sx={{typography:{ fontSize: '2rem' }}}/>
                </OnClick>
            </div>
            <div className={ styles.delete }>
                <OnClick func={ () => deleteFunc() }>
                    <DeleteIcon sx={{typography:{ fontSize: '2rem' }}}/>
                </OnClick>
            </div>
        </div>
    )
}

export default PutDelete