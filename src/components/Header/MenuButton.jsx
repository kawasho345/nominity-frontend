"use client";
import React from 'react';
import styles from "./styles/MenuButton.module.css";
import { ExpandMore } from '@mui/icons-material';
import Image from 'next/image';
import { useToggle } from 'react-use';
import GroupList from './GroupList';
import UserMenu from "./UserMenu"
import Shadow from '../Shadow/Shadow';

//グループ、ユーザーの表示
const MenuButton = (props) => {
    const {
        type,
        name,
        icon,
        groupId = null,
        joinGroups,
        query,
    } = props;
    const [hasMenu, setHasMenu] = useToggle(false);

    return (
        <div className={ styles.frame }>
            <button 
                className={(type === "user")? styles.user_frame : styles.group_frame } 
                onClick={ () => setHasMenu() }>      
                <div className={ styles.icon }>
                    <Image 
                        src={ icon || "/images/group_icon.png" } 
                        width="50" 
                        height="50" 
                        alt=""
                        className="icon"
                    /> 
                </div>
                <div className={(type === "user")? styles.user : styles.group }>
                    <p className={ styles.heading }>
                        { (type === "user")? "ユーザー" : "グループ" }
                    </p>
                    <div className={ styles.detail }>
                        <span className={ styles.name }>{ name || "グループがありません" }</span>
                        <span className={ styles.ExpandMore_icon }><ExpandMore /></span>
                    </div>
                </div>        
            </button>
            {hasMenu?
                <>
                    <Shadow func={ () => setHasMenu(false) } style="header"/>
                    {(type === "group")?
                        <GroupList
                            groupId={ groupId }
                            joinGroups={ joinGroups }
                        />
                        :
                        <UserMenu 
                            query={ query }
                        />
                    }
                </>
            :""}
        </div>
    )
}

export default MenuButton