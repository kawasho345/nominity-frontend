"use client"
import React from 'react'
import styles from "./GroupSelect.module.css";
import { ExpandMore } from "@mui/icons-material";
import Image from "next/image";

const Groupselect = (props) => {
    const {
        userId,
        groupName,
        groupIcon,
    } = props
    let shouldDisplayGroups = false;

    const switchDisplayGroups = () => {
        shouldDisplayGroups = !shouldDisplayGroups
    }

    return (
        <button onClick={() => switchDisplayGroups()} className="button">
            <div className = { styles.content }>
                <Image 
                    src = { groupIcon || "/images/group_icon.png"} 
                    width = "50"
                    height = "50"
                    alt = ""
                    className = { styles.group_picture }
                />
                <div className = { styles.group_text }>
                    <p className = { styles.heading }>グループ</p>
                    <div className = { styles.detail }>
                        <span className = { styles.groupname }>{ groupName||"グループがありません" }</span>
                        <span className = { styles.ExpandMore_icon }><ExpandMore /></span>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default Groupselect