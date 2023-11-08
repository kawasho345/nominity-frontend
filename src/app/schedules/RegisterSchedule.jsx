"use client"
import React from 'react'
import styles from "./styles/RegisterSchedule.module.css";
import OnClick from '@/components/OnClick/OnClick';
import { useToggle } from 'react-use';
import Font from '@/components/Font/Font';
import ScheduleForm from './ScheduleForm';

const RegisterSchedule = (props) => {
    const [hasForm, setHasForm] = useToggle(false);

    return (
        <div className={ styles.frame }>
            <div className={`${ "green_button" } ${ styles.button }`}>
                <OnClick link="/schedules/register">
                    <Font style="default_button">
                        お知らせ作成
                    </Font>
                </OnClick>
            </div>
            {hasForm?
                <ScheduleForm
                    submitFunc={ (data) => onsubmit(data) }
                    cancelFunc={ () => setHasForm(false) }
                />  
            :""}
        </div>
    )
}

export default RegisterSchedule