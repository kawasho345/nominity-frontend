"use client"
import React from 'react'
import styles from "./styles/MemberManagement.module.css";
import Heading from '@/components/Heading/Heading';
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';
import { withdrawal } from '@/lib/management';
import { useRouter } from 'next/navigation';

const MemberManagement = (props) => {
    const {
        userId,
        groupId,
    } = props;
    const router = useRouter()
    const deleteFunc = async() => {
        const response = await withdrawal(groupId, userId);
        router.refresh();
    }
    
    return (
        <div className={ styles.frame }>
            <Heading>メンバー管理</Heading>
            <div className={ styles.red_button }>
                <OnClick func={ () => deleteFunc() }>
                    <Font style="default_button">グループを退会する</Font>
                </OnClick>
            </div>
        </div>
    )
}

export default MemberManagement