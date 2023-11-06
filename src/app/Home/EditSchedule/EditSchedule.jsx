"use client"
import React from 'react'
import styles from "./EditSchedule.module.css";
import ScheduleForm from '../ScheduleForm/ScheduleForm';
import { useToggle } from 'react-use';
import { deleteSchedule, updateSchedule } from '@/lib/schedule';
import { useRouter } from 'next/navigation';
import PutDelete from '@/components/PutDelete/PutDelete';
import PopUp from '@/components/popUp/PopUp';

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
    } = props
    const[hasForm, setHasForm] = useToggle(false);
    const router = useRouter()
    const deleteFunc = async() => {
        await deleteSchedule(userId, scheduleId);
        router.refresh();
    }
    const updateFunc = async(data) => {
        const response = await updateSchedule(data, userId, scheduleId);
        setHasForm(false)
        router.refresh();
    } 

    return (
        <>
            <PutDelete
                putFunc={ () => setHasForm(true) }
                deleteFunc={ () => deleteFunc() }
            />
            {hasForm?
                <PopUp>
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
                </PopUp>
            :""}
        </>
    )
}

export default EditSchedule