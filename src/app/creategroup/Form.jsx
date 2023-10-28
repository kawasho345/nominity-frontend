"use client"
import React, { useRef } from 'react';
import styles from "./Form.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fetchRequest } from '@/lib/fetch';

const Form = (props) => {
    const { userId } = props;
    const textRef = useRef(null);
    const router = useRouter();

    const createGroup = async(groupName, groupIcon) => {
        const groupId = await fetchRequest({
            url: "/api/group/register",
            method: "POST",
            body: {
                groupName: groupName,
                groupIcon: groupIcon,
                userId: userId,
            },
            element: "groupId"
        })

        router.push("/?groupId=" + groupId);
    }

    return (
        <div className={ styles.frame }>
            <h1 className={ styles.header}>新しいグループを作る</h1> 
            <h4 className={ styles.text }>グループ名</h4>
            <input
                ref={ textRef } 
                type="text" 
                className={ styles.fill } 
                placeholder="※必須" 
                required 
            />
            <h4 className={ styles.text }>グループアイコン</h4>
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
                    onClick = { () => createGroup(textRef.current.value, null) } 
                >
                    <span className={ styles.submit_text }>作成</span>
                </button>
            </div>
        </div>
    )
}

export default Form