"use client"
import EmphasisFrame from '@/components/EmphasisFrame/EmphasisFrame'
import PutDelete from '@/components/PutDelete/PutDelete'
import { deleteQuestionnaire, updateQuestionnaire } from '@/lib/questionnaire'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useToggle } from 'react-use'
import QuestionnaireForm from './QuestionnaireForm'
import styles from "./styles/EditQuestionnaire.module.css";
import Heading from '@/components/Heading/Heading'
import Cancel from '@/components/Cancel/Cancel'
import Dialog from '@/components/Dialog/Dialog'
import Font from '@/components/Font/Font'

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
    const [hasDialog, setHasDialog] = useToggle(false);

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
                deleteFunc={ () => setHasDialog(true) }
            />
            {hasForm?
                <EmphasisFrame>
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
                </EmphasisFrame>
            :""}
            {hasDialog?
                <EmphasisFrame>
                    <Dialog
                        yesFunc={ () => deleteFunc() }
                        noFunc={ () => setHasDialog(false) }>
                        <Font style="large" tag="div">
                            <p>日程調整：{ questionnaireName }</p>
                            <p>を削除します。本当によろしいですか</p>
                        </Font>
                    </Dialog>
                </EmphasisFrame>  
            :""}
        </>
    )
}

export default EditQuestionnaire