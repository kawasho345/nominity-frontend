"use client";
import React from 'react';
import styles from "./styles/AddSchedulesButton.module.css";
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';
import { useToggle } from 'react-use';
import EmphasisFrame from '@/components/EmphasisFrame/EmphasisFrame';
import EditDateSchedules from './EditDateSchedules';
import { updateDateSchedules } from '@/lib/questionnaire';
import { useRouter } from 'next/navigation';
import Heading from '@/components/Heading/Heading';
import Cancel from '@/components/Cancel/Cancel';

//予定記入
const AddSchedulesButton = (props) => {
    const {
        userId,
        questionnaireId,
        questionnaireDates,
        membersSchedule,
    } = props;
    const [hasForm, setHasForm] = useToggle(false);
    const router = useRouter();
    //予定の更新
    const updateFunc = async(data) =>  {
        const response = await updateDateSchedules(data, userId, questionnaireDates, questionnaireId);
        router.refresh();
        setHasForm(false);
    } 
    //すでに登録された予定情報からユーザーのものを検索
    const userSchedule = (() => {
        for(let i=0; i<membersSchedule.length; i++){
            if(membersSchedule[i][0] === userId){
                return membersSchedule[i];
            }
        }
    })()

    return (
        <div className={`${ styles.button } ${ "button" }`}>
            <OnClick func={ () => setHasForm(true) }>
                <Font style="button">予定を記入する</Font>
            </OnClick>
            {hasForm?
                <EmphasisFrame>
                    <div className={ styles.header }>
                        <Heading>予定を記入</Heading>
                        <Cancel cancelFunc={ () => setHasForm(false)} />
                    </div>
                    <EditDateSchedules
                        questionnaireDates={ questionnaireDates }
                        submitFunc={ (data) => updateFunc(data) }
                        userSchedule={ userSchedule }
                    />
                </EmphasisFrame>
            :""}
        </div>
    )
}

export default AddSchedulesButton