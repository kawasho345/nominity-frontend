"use client"
import React, { useEffect } from 'react'
import styles from "./styles/GroupForm.module.css";
import EditText from '@/components/EditText/EditText';
import { FormProvider, useForm } from 'react-hook-form';
import EditImage from '@/components/EditImage/EditImage';
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';

const GroupForm = (props) => {
    const { 
        submitText,
        submitFunc,
        groupName,
        groupIcon,
    } = props
    useEffect(() => {
        methods.reset()
    },[])
    const methods = useForm();
    const onSubmit = (data) => submitFunc(data) 

    return (
        <FormProvider { ...methods }>
            <form onSubmit={ methods.handleSubmit(onSubmit) }>
                <ul>
                    <li className={ styles.element }>
                        <EditText
                            name="groupName"
                            title="グループ名"
                            value={ groupName }
                            required={ true }
                            maxLength="25"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditImage
                            name="groupIcon"
                            title="グループアイコン"
                            image={ groupIcon }
                            width="50"
                            height="50"
                            noImage="/images/group_icon.png"
                            style="icon"
                        />
                    </li>
                </ul>
                <div className={`${ styles.button } ${ "button" }`}>
                    <OnClick type="submit">
                        <Font style="button">
                            { submitText }    
                        </Font>    
                    </OnClick>             
                </div>
            </form>
        </FormProvider>
    )
}

export default GroupForm