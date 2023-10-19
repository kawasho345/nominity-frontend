"use client"
import React, { useRef } from 'react';
import styles from "./Form.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Form = (props) => {
    const { userId } = props;
    const textRef = useRef(null);
    const router = useRouter();

    const sha256 = async(text) => {
        const uint8  = new TextEncoder().encode(text);
        const digest = await crypto.subtle.digest('SHA-256', uint8);
        return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('');
    }

    const creategroup = async(groupname, group_picture) => {
        const invitation_code = await sha256(groupname + Date.now());
        const responseGroupId = await fetch(process.env.NEXT_PUBLIC_HOST_URL+"/api/group/register", {
            method: "POST",
            body: JSON.stringify({
                groupName: groupname,
                invitationCode: invitation_code,
                icon: group_picture,
                userId: userId,
            }),
            cache: "no-cache",
        })
        const jsonGroupId = await responseGroupId.json()
        const { groupId } = jsonGroupId.body; 

        router.push("/Home?groupid=" + groupId);
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
                        onClick = { () => creategroup(textRef.current.value, null) } 
                    >作成</button>
                </div>
            </div>
        </div>
    )
}

export default Form