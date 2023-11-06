"use client"
import React from 'react'
import styles from "./EditTextArea.module.css";
import { useFormContext } from 'react-hook-form';
import { TextareaAutosize } from '@mui/material';

const EditTextArea = (props) => {
    const {
        name,
        value,
        title,
        required = false,
        maxLength = null,
    } = props
    const { register, formState:{errors} } = useFormContext();

    return (
        <>
            <label>
                <p className={ styles.title }>{ title }</p>
                { errors[name]?.type && <div className={ styles.error }>{errors[name].message}</div>}
                <TextareaAutosize
                    rows="3"
                    className={ styles.textarea }
                    defaultValue={ value }
                    {...register(name , {
                        required: {
                            value: required,
                            message: "入力が必須の項目です"
                        },
                        maxLength: {
                            value: maxLength,
                            message: maxLength + "文字以内で入力してください"
                        }
                    })}
                    type="text"
                />
            </label>
        </>
    )
}

export default EditTextArea