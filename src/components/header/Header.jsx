import React from "react";
import styles from "./Header.module.css";
import MenuButton from "./menuButton/MenuButton";
import Image from "next/image";
import { fetchRequest } from "@/lib/fetch";
import Link from "next/link";

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
    let query = "";
    if(groupId){
        query = "?groupId=" + groupId;
    }

    return (
        <div className={ styles.frame }>
            <div>
                <Link href={ "/schedules" + query }>
                    <Image src="/images/nominity_icon2.png" priority width="150" height="75" alt="" />
                </Link>
            </div>
            <div className={ styles.body }>
                <MenuButton
                    type="group" 
                    name={ groupName }
                    icon={ groupIcon }
                    groupId={ groupId }
                    joinGroups={ joinGroups }
                />
                <MenuButton
                    type="user"
                    groupId={ groupId } 
                    name={ username }
                    icon={ userIcon }
                />
            </div>
        </div>
    )
}

export default header