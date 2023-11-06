"use client"
import React from 'react'
import styles from "./RegisterSchedule.module.css";
import OnClick from '@/components/onClick/OnClick';
import { useToggle } from 'react-use';
import Text from '@/components/text/Text';
import ScheduleForm from '../ScheduleForm/ScheduleForm';

const RegisterSchedule = (props) => {
    const [hasForm, setHasForm] = useToggle(false);

    return (
        <div className={ styles.frame }>
            <div className={`${ "green_button" } ${ styles.button }`}>
                <OnClick link="/Home/RegisterSchedule">
                    <Text style="default_button">
                        お知らせ作成
                    </Text>
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