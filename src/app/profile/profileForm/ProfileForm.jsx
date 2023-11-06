"use client"
import React from 'react'
import styles from "./ProfileForm.module.css";
import EditText from '@/components/editText/EditText';
import EditIcon from '@/components/editIcon/EditIcon';
import { FormProvider, useForm } from 'react-hook-form';
import EditTextArea from '@/components/editTextArea/EditTextArea';

const profileForm = (props) => {
    const {
        username, 
        userIcon 
    } = props
    const methods = useForm();
    const onSubmit = (data) => console.log(data)

    return (
        <FormProvider { ...methods }>
            <form onSubmit={ methods.handleSubmit(onSubmit) }>
                <ul>
                    <li className={ styles.element }>
                        <EditText
                            name="username"
                            value={ username }
                            title="名前"
                            required={ true }
                            maxLength="25"
                    />
                    </li>
                    <li className={ styles.element }>
                        <EditIcon
                            name="userIcon"
                            title="ユーザーアイコン"
                            icon={ userIcon }
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="favoriteFood"
                            title="好きな料理"
                            maxLength="200"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="hatedFood"
                            title="好きなお酒"
                            maxLength="200"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="favoriteAlcohol"
                            title="苦手な料理"
                            maxLength="200"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="hatedAlcohol"
                            title="苦手なお酒"
                            maxLength="200"
                        />
                    </li>
                </ul>
                <div className={ styles.submit_button }>
                    <div className="button_frame">
                        <button type="submit" className="button">
                            <span className="button_text">更新</span>
                        </button>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}

export default profileForm