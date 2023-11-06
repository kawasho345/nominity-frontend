"use client"
import React from 'react'
import styles from "./EditText.module.css";
import { useFormContext } from 'react-hook-form';

const EditText = (props) => {
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
                <p className={`${ styles.title } ${ styles[style] }`}>
                    { title }
                    {required? <span className={ styles.required }>※必須</span> : ""}
                </p>
                { errors[name]?.type && <div className={`${ styles.error } ${ styles[style] }`}>{ errors[name].message }</div> }
                <input
                    className={`${ styles.text } ${ styles[style] }`}
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

export default EditText