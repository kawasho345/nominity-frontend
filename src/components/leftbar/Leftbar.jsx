import React from 'react';
import styles from "./Leftbar.module.css";
import Link from "next/link";
import { Chat, EditCalendar, Home, People, Restaurant, ThumbsUpDown } from "@mui/icons-material";

const Leftbar = () => {
  return (
    <div className = { styles.content }>
        <ul className = { styles.list }>
            <li className = { styles.leftbar }>
                <Link href = "/" className = "link">
                    <span className = { styles.icon }>
                        <Home />
                    </span>
                    <span className = { styles.text }>お知らせ</span>
                </Link>
            </li>
            <li className = { styles.leftbar }>
                <Link href = "/groupchat" className = "link">
                    <span className = { styles.icon }>
                        <Chat />
                    </span>
                    <span className = { styles.text }>掲示板</span>
                </Link>
            </li>
            <li className = { styles.leftbar }>
                <Link href = "/adjustment" className = "link">
                    <span className = { styles.icon }>
                        <EditCalendar />
                    </span>
                    <span className = { styles.text }>日程調整</span>
                </Link>
            </li>
            <li className = { styles.leftbar }>
                <Link href = "/restaurants" className = "link">
                    <span className = { styles.icon }>
                        <Restaurant />
                    </span>
                    <span className = { styles.text }>お店リスト</span>
                </Link>
            </li>
            <li className = { styles.leftbar }>
                <Link href = "/preference" className = "link">
                    <span className = { styles.preference_icon }>
                        <ThumbsUpDown />
                    </span>
                    <span className = { styles.text }>
                            好き/嫌い<br />アレルギーリスト
                    </span>    
                </Link>
            </li>
            <li className = { styles.leftbar }>
                <Link href = "/management" className = "link">
                    <span className = { styles.icon }>
                        <People />
                    </span>
                    <span className = { styles.text }>グループ管理</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Leftbar