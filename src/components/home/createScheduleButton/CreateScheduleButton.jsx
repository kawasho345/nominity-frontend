"use client"
import React from 'react';
import styles from "./CreateScheduleButton.module.css";
import { useToggle } from 'react-use';
import CustomDialog from '@/components/customDialog/CustomDialog';

const CreateScheduleButton = () => {
    const [hasDaialog, setHasDialog] = useToggle(false);
    const createSchedule = () => {
        console.log("新しいスケジュールを作るよ");
        setHasDialog(true)
    }
    const dialogFunction = (bool) => {
        console.log(bool)
    }

    return (
        <div className={ styles.content }>
            <button
                className="button"
                onClick={ () => createSchedule() }
            >
                <p className={ styles.button_text }>新しいお知らせを作る</p>
            </button>
            <CustomDialog
                hasDaialog={ hasDaialog }
                setHasDialog={ () => setHasDialog(false) }
                dialogFunction={ (bool) => dialogFunction(bool) }
                message={<>プログラムをうごかします。< br/ >本当によろしいですか。</>}
                isBool={ true }
            />
        </div>
    )
}

export default CreateScheduleButton