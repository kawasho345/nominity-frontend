"use client";
import React from 'react';
import styles from "./Management.module.css";
import { useRef } from 'react';
import Image from 'next/image';
import { fetchRequest } from '@/lib/fetch';

const Management = (props) => {
    const {
        userId,
        groupId,
        invitationCode,
        groupName,
    } = props;
    const textRef = useRef(null);

    const invitationUrl = process.env.NEXT_PUBLIC_MY_URL 
                    + "/" 
                    + invitationCode 
                    + "/joinGroup"

    const copyToClipboard = async() => {
        await global.navigator.clipboard.writeText(invitationUrl);
    };

    const updateGroup = async(groupName, groupIcon) => {
        const status = await fetchRequest({
            url: "/api/group/" + groupId + "/put",
            method: "PUT",
            body:{
                userId,
                groupName,
                groupIcon,
            },
            // headers: {"Content-Type": "application/json"}
        })

        if(status.status === 200){
            console.log("成功")
        }
    }
    
    return (
        <div className={ styles.frame }>
            <h1 className={ styles.header }>グループ管理</h1>
            <h2 className={ styles.text }>招待URL</h2>
            <input
                type="text"
                size="25"
                value={invitationUrl}
                readOnly
                className={ styles.invitation_url}
            />
            <div className={ styles.copy }>
                <button onClick={ () => copyToClipboard() } className='button'>
                    <span className={ styles.copy_text }>コピーする</span>
                </button>
            </div>
            <h2 className={ styles.text }>グループ名・アイコン変更</h2>
            <input
                ref={ textRef } 
                type="text" 
                className={ styles.fill } 
                defaultValue={ groupName }
                required 
            />
            <div className={ styles.group_icon }>
                <Image 
                    src={"/images/group_icon.png"} 
                    width="150"
                    height="150"
                    alt=""
                    className="icon"
                />
            </div>
            <div className={ styles.submit }>
                <button 
                    className="button" 
                    onClick = { () => updateGroup(textRef.current.value, null) } 
                >
                    <span className={ styles.submit_text }>更新</span>
                </button>
            </div>
            <h2 className={ styles.text }>メンバー管理</h2>
            <div className={ styles.withdrawal }>
                <button 
                    className="button" 
                    onClick = { () => withdrawalGroup() } 
                >
                    <span className={ styles.submit_text }>グループを退会する</span>
                </button>
            </div>
        </div>
    )
}

export default Management