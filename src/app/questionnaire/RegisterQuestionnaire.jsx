"use client";
import React from 'react';
import styles from "./styles/RegisterQuestionnaire.module.css";
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';
import { useToggle } from 'react-use';
import QuestionnaireForm from './QuestionnaireForm';
import EmphasisFrame from '@/components/EmphasisFrame/EmphasisFrame';
import Heading from '@/components/Heading/Heading';
import { registerQuestionnaire } from '@/lib/questionnaire';
import Cancel from '@/components/Cancel/Cancel';
import { useRouter } from 'next/navigation';

//日程調整登録
const RegisterQuestionnaire = (props) => {
    const {
        userId,
        groupId,
    } = props;
    const [hasForm, setHasForm] = useToggle(false);
    const router = useRouter();
    //日程調整登録関数
    const onSubmit = async(data, dates) => {
        const response = await registerQuestionnaire(data, dates, userId, groupId);
        router.refresh();
        setHasForm(false);
    } 

    return (
        <>
            <div className={`${ styles.button } ${ "button" }`}>
                <OnClick func={ () => setHasForm(true)}>
                    <Font style="button">新しい日程調整を作る</Font>
                </OnClick>
            </div>
            {hasForm?
                <EmphasisFrame>
                    <div className={ styles.header }>
                        <Heading>日程調整作成</Heading>
                        <Cancel cancelFunc={ () => setHasForm(false)} />
                    </div>
                    <QuestionnaireForm 
                        submitFunc={ (data, dates) => onSubmit(data, dates)}
                        submitText="登録"
                    />
                </EmphasisFrame>
            :""}
        </>
    )
}

export default RegisterQuestionnaire