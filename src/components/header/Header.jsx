import React from "react";
import styles from "./Header.module.css";
import Groupselect from "./Groupselect"; 
import Usermenu from "./Usermenu";
import Image from "next/image";

const header = async(props) => {
    const {
        userid,
        username,
        userIcon,
        groupId
    } = props

    //グループデータ取得
    let currentgroup_json = ""
    if(groupId){
        const currentgroup_response = await fetch (process.env.NEXT_PUBLIC_HOST_URL
                                                    + "/api/group/"
                                                    + groupId
                                                    + "/get", {
            method: "GET",
            cache: "no-cache",
        })
        currentgroup_json = await currentgroup_response.json();
        // console.log(currentgroup_json)
        var {
            groupName,
            groupIcon,
        } = currentgroup_json.body
    }

    return (
        <div className = { styles.content }>
            <Image src = "/images/nominity_icon2.png" priority width = "150" height = "75" alt = "" />
            <div className = { styles.menu }>
                <Groupselect
                    userid = { userid }
                    groupname = { groupName }
                    groupIcon = { groupIcon }
                />
                <Usermenu 
                    userid = { userid }
                    username = { username }
                    userIcon = { userIcon }
                />
            </div>
        </div>
    )
}

export default header