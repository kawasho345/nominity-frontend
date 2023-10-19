"use client"
import React from 'react'
import styles from "./Groupselect.module.css";
import { ExpandMore } from "@mui/icons-material";
import Image from "next/image";

const Groupselect = (props) => {
    const {
        groupname,
        groupIcon,
    } = props
    let groupdisplay_flag = false;


    const groupdisplay_flag_change = () => {
        groupdisplay_flag = !groupdisplay_flag
    }

    return (
        <button onClick={() => groupdisplay_flag_change()} className="button">
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
                        <span className = { styles.groupname }>{ groupname||"グループがありません" }</span>
                        <span className = { styles.ExpandMore_icon }><ExpandMore /></span>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default Groupselect