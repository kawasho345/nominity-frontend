"use client"
import React from 'react'
import styles from "./PutDelete.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import OnClick from '../OnClick/OnClick';
import { Edit } from '@mui/icons-material';

const PutDelete = (props) => {
    const {
        putFunc,
        deleteFunc,
    } = props

    return (
        <div className={ styles.frame }>
            <div className={ styles.edit }>
                <OnClick func={ () => putFunc() }>
                    <Edit />
                </OnClick>
            </div>
            <div className={ styles.delete }>
                <OnClick func={ () => deleteFunc() }>
                    <DeleteIcon />
                </OnClick>
            </div>
        </div>
    )
}

export default PutDelete