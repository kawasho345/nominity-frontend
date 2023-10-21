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

        router.push("/Home?groupId=" + groupId);
    }

    return (
        <div className = { styles.frame }>
            <div className = { styles.content }>
                <div className = { styles.header }>
                    <h2>新しいグループを作る</h2>
                </div>
                <div className = { styles.body }>
                    <div className = { styles.groupname }>
                        <h4>グループ名</h4>
                        <input
                            ref = { textRef } 
                            type = "text" 
                            className = { styles.fill } 
                            placeholder="※必須" 
                            required 
                        />
                    </div>
                    <div className = { styles.groupicon }>
                        <h4>グループアイコン</h4>
                        <Image 
                            src = {"/images/group_icon.png"} 
                            width = "150"
                            height = "150"
                            alt = ""
                            className = { styles.group_picture }
                        />
                    </div>
                    <button 
                        className = { styles.submit }
                        onClick = { () => createGroup(textRef.current.value, null) } 
                    >作成</button>
                </div>
            </div>
        </div>
    )
}

export default Form