"use client"
import PopUp from '@/components/PopUp/PopUp'
import PutDelete from '@/components/PutDelete/PutDelete'
import { deleteQuestionnaire, updateQuestionnaire } from '@/lib/questionnaire'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useToggle } from 'react-use'
import QuestionnaireForm from './QuestionnaireForm'
import styles from "./styles/EditQuestionnaire.module.css";
import Heading from '@/components/Heading/Heading'
import Cancel from '@/components/Cancel/Cancel'

const EditQuestionnaire = (props) => {
    const { 
        questionnaireId,
        questionnaireName,
        questionnaireOverview,
        questionnaireDates,
        userId,
    } = props
    const router = useRouter()
    const [hasForm, setHasForm] = useToggle(false);

    const deleteFunc = async() => {
        await deleteQuestionnaire(userId, questionnaireId);
        router.refresh();
    }
    const updateFunc = async(data, dates) => {
        await updateQuestionnaire(data, dates, userId, questionnaireId);
        router.refresh();
        setHasForm(false);
    }

    return (
        <>
            <PutDelete
                putFunc={ () => setHasForm(true) }
                deleteFunc={ () => deleteFunc() }
            />
            {hasForm?
                <PopUp>
                    <div className={ styles.header }>
                        <Heading>日程調整編集</Heading>
                        <Cancel cancelFunc={ () => setHasForm(false) } />
                    </div>
                    <QuestionnaireForm
                        questionnaireName={ questionnaireName }
                        questionnaireOverview={ questionnaireOverview }
                        questionnaireDates={ questionnaireDates }
                        submitFunc={ (data, dates) => updateFunc(data, dates)}
                        submitText="更新"
                    />
                </PopUp>
            :""}
        </>
    )
}

export default EditQuestionnaire