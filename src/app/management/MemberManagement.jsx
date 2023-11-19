"use client"
import React, { useState } from 'react'
import styles from "./styles/MemberManagement.module.css";
import Heading from '@/components/Heading/Heading';
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';
import { withdrawal } from '@/lib/management';
import { useRouter } from 'next/navigation';
import { useToggle } from 'react-use';
import EmphasisFrame from '@/components/EmphasisFrame/EmphasisFrame';
import Dialog from '@/components/Dialog/Dialog';
import PopUp from '@/components/PopUp/PopUp';

const MemberManagement = (props) => {
    const {
        userId,
        groupId,
    } = props;
    const [popUp, setPopUp] = useState([]);
    const [hasDialog, setHasDialog] = useToggle(false);
    const router = useRouter();
    const deleteFunc = async() => {
        const response = await withdrawal(groupId, userId);
        router.refresh();
        if(response.status === 200){
            setPopUp([true, "success", "退会完了"]);
            setTimeout(() => {
                setPopUp([false,,]);
            }, 3000)
        }else{
            setPopUp([true, "failed", "退会失敗"]);
            setTimeout(() => {
                setPopUp([false,,]);
            }, 3000)
        }
        setHasDialog(false);
    }
    
    return (
        <div className={ styles.frame }>
            <Heading>メンバー管理</Heading>
            <div className={ styles.red_button }>
                <OnClick func={ () => setHasDialog(true) }>
                    <Font style="button">グループを退会する</Font>
                </OnClick>
            </div>
            {hasDialog?
                <EmphasisFrame>
                    <Dialog
                        yesFunc={ () => deleteFunc() }
                        noFunc={ () => setHasDialog(false) }>
                        <Font style="large">本当にグループを退会しますか</Font>
                    </Dialog>
                </EmphasisFrame>  
            :""}
            {(popUp[0] === true)?
                <PopUp style={ popUp[1] }>{ popUp[2] }</PopUp>
            :""}
        </div>
    )
}

export default MemberManagement