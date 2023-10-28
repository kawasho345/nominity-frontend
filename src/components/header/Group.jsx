"use client"
import GroupSelect from './GroupSelect';
import styles from "./Group.module.css";
import { ExpandMore } from "@mui/icons-material";
import Image from "next/image";
import { useToggle } from 'react-use';
import { useRef } from 'react';

const Groupselect = (props) => {
    const {
        joinGroups,
        groupId,
        groupName,
        groupIcon,
    } = props
    const [hasGroups, setHasGroups] = useToggle(false);
    const elm = useRef(null)

    return (
        <div ref={ elm } className={ styles.outside }>
            <div className={ styles.frame }>
                <button onClick={() => setHasGroups()} className='button'>
                    <div className={ styles.header }>
                        <Image
                            src={ groupIcon || "/images/group_icon.png" }
                            width="50"
                            height="50"
                            alt=""
                            className={ styles.icon }
                        />
                    </div>
                    <div className={ styles.body }>
                        <p className={ styles.heading }>グループ</p>
                        <div className={ styles.detail }>
                            <span className={ styles.name }>{ groupName||"グループがありません" }</span>
                            <span className={ styles.ExpandMore_icon }><ExpandMore /></span>
                        </div>
                    </div>
                </button>
            </div>
            { hasGroups?
                <>
                    <div className={ styles.shadow }></div>
                    <div className={ styles.background } onClick={ () => setHasGroups()}></div>
    
                    <GroupSelect groupId={ groupId } joinGroups={ joinGroups } />
                </>
                : ""
            }
        </div>
    )
}

export default Groupselect