"use client"
import React from 'react'
import styles from "./PutDelete.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import OnClick from '../onClick/OnClick';
import { Edit } from '@mui/icons-material';

const PutDelete = (props) => {
    const {
        putFunc,
        deleteFunc,
        style,
    } = props

    return (
        <div className={`${ styles.frame } ${ styles[style]}` }>
            <div className={ styles.edit }>
                <OnClick func={ () => putFunc() }>
                    <Edit />
                </OnClick>
            </div>
            <div className={ styles.delete_icon }>
                <OnClick func={ () => deleteFunc() }>
                    <DeleteIcon />
                </OnClick>
            </div>
        </div>
    )
}

export default PutDelete