import React from "react";
import styles from "./Header.module.css";
import Group from "./Group"; 
import User from "./User";
import Image from "next/image";
import { fetchRequest } from "@/lib/fetch";

const header = async(props) => {
    const {
        userId,
        username,
        userIcon,
        groupId,
        groupName,
        groupIcon,
    } = props

    //所属グループリストを取得
    let joinGroups = await fetchRequest({
        url: "/api/group/" + userId + "/getJoinGroups",
        method: "GET",
        element: "joinGroups",
    })

    return (
        <div className={ styles.frame }>
            <div className={ styles.header }>
                <Image src="/images/nominity_icon2.png" priority width="150" height="75" alt="" />
            </div>
            <div className={ styles.body }>
                <Group
                    joinGroups={ joinGroups }
                    groupId = { groupId }
                    groupName={ groupName }
                    groupIcon={ groupIcon }
                />
                <User
                    userId={ userId }
                    username={ username }
                    userIcon={ userIcon }
                />
            </div>
        </div>
    )
}

export default header