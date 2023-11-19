"use client";
import React from 'react';
import styles from "./styles/RegisterSchedule.module.css";
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';

//お知らせ作成ボタン
//ToDo　pageに合流させる
const RegisterSchedule = (props) => {
    const { groupId } = props;

    return (
        <div className={ styles.frame }>
            <div className={`${ "button" } ${ styles.button }`}>
                <OnClick link={ "/schedules/register?groupId=" + groupId }>
                    <Font style="button">
                        お知らせ作成
                    </Font>
                </OnClick>
            </div>
        </div>
    )
}

export default RegisterSchedule