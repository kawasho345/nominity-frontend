"use client"
import React from 'react';
import styles from "./UserMenu.module.css";
import { ExpandMore } from "@mui/icons-material";
import Image from "next/image";

const Usersetting = (props) => {
    const {
        userId,
        username,
        userIcon,
    } = props
    let shouldDisplayUserMenu = false;

    const switchDisplayUserMenu = () => {
        shouldDisplayUserMenu = !shouldDisplayUserMenu;
    }

    return (
        <button onClick={() => switchDisplayUserMenu()} className="button">
            <div className = { styles.content }>
                <Image 
                    src = { userIcon || "/images/group_icon.png"} 
                    width = "50" 
                    height = "50" 
                    alt = ""
                    className = { styles.profile_picture }
                />
                <div className = { styles.user_text }>
                    <span className = { styles.heading }>ユーザー</span>
                    <div className = { styles.detail }>
                        <span className = { styles.username }>{ username }</span>
                        <span className = { styles.ExpandMore_icon }><ExpandMore /></span>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default Usersetting