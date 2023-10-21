import React from "react";
import styles from "./Header.module.css";
import Groupselect from "./GroupSelect"; 
import Usermenu from "./UserMenu";
import Image from "next/image";
import { fetchRequest } from "@/lib/fetch";

const header = async(props) => {
    const {
        userId,
        username,
        userIcon,
        groupId
    } = props

    //グループデータ取得
    let currentGroup = { body: { groupName: "", groupIcon: "" } };
    if(groupId){
        currentGroup = await fetchRequest({
            url: "/api/group/" + groupId + "/get",
            method: "GET",
        })
    }
    const {
        groupName,
        groupIcon,
    } = currentGroup

    return (
        <div className = { styles.content }>
            <Image src = "/images/nominity_icon2.png" priority width = "150" height = "75" alt = "" />
            <div className = { styles.menu }>
                <Groupselect
                    userId = { userId }
                    groupName = { groupName }
                    groupIcon = { groupIcon }
                />
                <Usermenu 
                    userId = { userId }
                    username = { username }
                    userIcon = { userIcon }
                />
            </div>
        </div>
    )
}

export default header