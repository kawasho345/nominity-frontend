import React from "react";
import styles from "./Header.module.css";
import Groupselect from "./GroupSelect"; 
import Usermenu from "./UserMenu";
import Image from "next/image";

const header = async(props) => {
    const {
        userId,
        username,
        userIcon,
        groupId
    } = props

    //グループデータ取得
    let responseCurrentGroup = { body: { groupName: "", groupIcon: "" } };
    if(groupId){
        responseCurrentGroup = await fetch (process.env.NEXT_PUBLIC_HOST_URL
                                                    + "/api/group/"
                                                    + groupId
                                                    + "/get", {
            method: "GET",
            cache: "no-cache",
        }).then((response) => response.json())
    }
    const {
        groupName,
        groupIcon,
    } = responseCurrentGroup.body

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