"use client"
import React, { useState } from 'react'
import styles from "./styles/CreateGroupForm.module.css";
import EditText from '@/components/EditText/EditText';
import { FormProvider, useForm } from 'react-hook-form';
import CustomDialog from '@/components/customDialog/CustomDialog';
import { useToggle } from 'react-use';
import { useRouter } from 'next/navigation';
import { fetchRequest } from '@/lib/fetch';
import storage from '@/providers/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import EditImage from '@/components/EditImage/EditImage';
import { registerGroup } from '@/lib/management';
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';

const GroupForm = (props) => {
    const { 
        submitText,
        submitFunc,
    } = props
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
                            required={ true }
                            maxLength="25"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditImage
                            name="groupIcon"
                            title="グループアイコン"
                            image=""
                            width="50"
                            height="50"
                            noImage="/images/group_icon.png"
                            style="icon"
                        />
                    </li>
                </ul>
                <div className={`${ styles.button } ${ "green_button" }`}>
                    <OnClick type="submit">
                        <Font style="default_button">
                            { submitText }    
                        </Font>    
                    </OnClick>             
                </div>
            </form>
        </FormProvider>
    )
}

export default GroupForm