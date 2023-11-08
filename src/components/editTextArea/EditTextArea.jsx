"use client"
import React from 'react'
import styles from "./EditTextArea.module.css";
import { useFormContext } from 'react-hook-form';
import { TextareaAutosize } from '@mui/material';
import Font from '../Font/Font';

const EditTextArea = (props) => {
    const {
        name,
        value,
        title,
        style,
        required = false,
        maxLength = null,
    } = props
    const { register, formState:{errors} } = useFormContext();

    return (
        <>
            <label>
                <Font style="weak_button">
                    { title }
                    {required? <span className={ styles.required }>※必須</span> : ""}
                </Font>
                { errors[name]?.type && <div className={ styles.error }>{errors[name].message}</div>}
                <TextareaAutosize
                    className={`${ styles.textarea } ${ styles[style] }` }
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