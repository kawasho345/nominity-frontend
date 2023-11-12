"use client"
import React from 'react'
import styles from "./styles/RegisterQuestionnaire.module.css";
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';
import { useToggle } from 'react-use';
import QuestionnaireForm from './QuestionnaireForm';
import PopUp from '@/components/PopUp/PopUp';
import Heading from '@/components/Heading/Heading';
import { registerQuestionnaire } from '@/lib/questionnaire';

const RegisterQuestionnaire = (props) => {
    const {
        userId,
        groupId,
    } = props;
    const [hasForm, setHasForm] = useToggle(false);
    const onSubmit = async(data, dates) => {
        const response = await registerQuestionnaire(data, dates, userId, groupId);
    } 

    return (
        <>
            <div className={`${ styles.button } ${ "green_button" }`}>
                <OnClick func={ () => setHasForm(true)}>
                    <Font style="default_button">新しい日程調整を作る</Font>
                </OnClick>
            </div>
            {hasForm?
                <PopUp>
                    <Heading>日程調整作成</Heading>
                    <QuestionnaireForm 
                        submitFunc={ (data, dates) => onSubmit(data, dates)}
                        submitText="登録"
                    />
                </PopUp>
            :""}
        </>
    )
}

export default RegisterQuestionnaire