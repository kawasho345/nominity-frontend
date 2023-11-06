"use client"
import React from 'react'
import styles from "./MenuButton.module.css";
import { ExpandMore } from '@mui/icons-material';
import Image from 'next/image';
import { useToggle } from 'react-use';
import GroupList from './groupList/GroupList';
import UserMenu from "./userMenu/UserMenu"

const menuButton = (props) => {
    const {
        name,
        icon,
        groupId = null,
        joinGroups,
    } = props
    const [hasMenu, setHasMenu] = useToggle(false);

    return (
        <div className={ styles.frame }>
            <button 
                className={ !groupId? styles.user_frame : styles.group_frame } 
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
                <div className={ !groupId? styles.user : styles.group }>
                    <p className={ styles.heading }>
                        { !groupId? "ユーザー" : "グループ" }
                    </p>
                    <div className={ styles.detail }>
                        <span className={ styles.name }>{ name || "グループがありません" }</span>
                        <span className={ styles.ExpandMore_icon }><ExpandMore /></span>
                    </div>
                </div>        
            </button>
            { groupId?
                <GroupList
                    hasMenu={ hasMenu }
                    setHasMenu={ setHasMenu }
                    groupId={ groupId }
                    joinGroups={ joinGroups }
                />
            :
                <UserMenu 
                hasMenu={ hasMenu }
                setHasMenu={ setHasMenu }
                />
            }
        </div>
    )
}

export default menuButton