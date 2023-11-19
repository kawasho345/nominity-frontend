import React from "react";
import styles from "./styles/Header.module.css";
import MenuButton from "./MenuButton";
import Image from "next/image";
import Link from "next/link";

//ヘッダー
const header = async(props) => {
    const {
        username,
        userIcon,
        groupId,
        groupName,
        groupIcon,
        joinGroups,
        query = "",
    } = props;

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
                    query={ query }
                />
            </div>
        </div>
    )
}

export default header