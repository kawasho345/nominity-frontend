"use client"
import React from 'react';
import styles from "./User.module.css";
import UserMenu from './UserMenu';
import { ExpandMore } from "@mui/icons-material";
import Image from "next/image";
import { useToggle } from "react-use";

const User = (props) => {
    const {
        userId,
        username,
        userIcon,
    } = props
    const [hasUserMenu, setHasUserMenu] = useToggle(false);

    return (
        <div className={ styles.outside }>
            <div  className={ styles.frame }>
                <button onClick={ () => setHasUserMenu() } className='button'>
                    <div className={ styles.header }>
                        <Image 
                            src={ userIcon || "/images/group_icon.png"} 
                            width="50" 
                            height="50" 
                            alt=""
                            className={ styles.icon }
                        />
                    </div>
                    <div className={ styles.body }>
                        <p className={ styles.heading }>ユーザー</p>
                        <div className={ styles.detail }>
                            <span className={ styles.name }>{ username }</span>
                            <span className={ styles.ExpandMore_icon }><ExpandMore /></span>
                        </div>
                    </div>
                </button>
            </div>
            { hasUserMenu?
                <>
                    <div className={ styles.shadow }></div>    
                    <div className={ styles.background } onClick={ () => setHasUserMenu()}></div>
                    <UserMenu />
                </> 
                : ""
            }
        </div>
    )
}

export default User