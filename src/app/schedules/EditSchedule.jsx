"use client"
import React from 'react'
import ScheduleForm from './ScheduleForm';
import { useToggle } from 'react-use';
import { deleteSchedule, updateSchedule } from '@/lib/schedules';
import { useRouter } from 'next/navigation';
import PutDelete from '@/components/PutDelete/PutDelete';
import EmphasisFrame from '@/components/EmphasisFrame/EmphasisFrame';
import styles from "./styles/EditSchedule.module.css";
import Heading from '@/components/Heading/Heading';
import Cancel from '@/components/Cancel/Cancel';
import Dialog from '@/components/Dialog/Dialog';
import Font from '@/components/Font/Font';

//お知らせ更新
const EditSchedule = (props) => {
    const {
        scheduleId,
        scheduleName,
        scheduleDate,
        restaurantName,
        restaurantAddress,
        restaurantUrl,
        restaurantImage,
        schedulePrice,
        scheduleNumberPeople,
        scheduleRemarks,
        userId,
    } = props;
    const [hasForm, setHasForm] = useToggle(false);
    const [hasDialog, setHasDialog] = useToggle(false);
    const router = useRouter();
    //お知らせ削除
    const deleteFunc = async() => {
        await deleteSchedule(userId, scheduleId);
        router.refresh();
        setHasDialog(false);
    }
    //お知らせ更新
    const updateFunc = async(data) => {
        const response = await updateSchedule(data, userId, scheduleId);
        setHasForm(false)
        router.refresh();
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
                        <Heading>お知らせ編集</Heading>
                        <Cancel cancelFunc={ () => setHasForm(false) } />
                    </div>
                    <ScheduleForm
                        submitFunc={ (data) => updateFunc(data) }
                        cancelFunc={ () => setHasForm(false) }
                        scheduleName={ scheduleName }
                        scheduleDate={ scheduleDate }
                        restaurantName={ restaurantName }
                        restaurantAddress={ restaurantAddress }
                        restaurantImage={ restaurantImage }
                        restaurantUrl={ restaurantUrl }
                        scheduleRemarks={ scheduleRemarks }
                        schedulePrice={ schedulePrice }
                        scheduleNumberPeople={ scheduleNumberPeople }                   
                    />
                </EmphasisFrame>
            :""}
            {hasDialog?
                <EmphasisFrame>
                    <Dialog 
                        yesFunc={ () => deleteFunc() }
                        noFunc={ () => setHasDialog(false) }>
                        <Font style="large" tag="div">
                            <p>お知らせ：{ scheduleName }</p>
                            <p>を削除します。本当によろしいですか</p>
                        </Font>
                    </Dialog>
                </EmphasisFrame>
            :""}
        </>
    )
}

export default EditSchedule