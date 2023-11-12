import React from 'react'
import styles from "./GroupList.module.css";
import Link from 'next/link';
import Image from 'next/image';

const GroupList = (props) => {
    const {
        hasMenu,
        setHasMenu,
        groupId,
        joinGroups,
    } = props;

    return(
        <>
            { hasMenu?
                <>
                    <div className={ styles.shadow }>
                        <button 
                            onClick={ () => setHasMenu(false) } 
                            className={ styles.background } 
                        />
                    </div>
                    <ul className={ styles.frame }>
                        <li key="createGroup">
                            <Link href = { "/management/register/?groupId=" + groupId }>
                                <div className={ styles.list }>
                                    <p className={ styles.text }>新しいグループを作る</p>
                                </div>
                            </Link>
                        </li>
                        {joinGroups !== "undefind"?
                            joinGroups.map((group) => (
                                <li key={ group[0] }>
                                    <Link href = { "/schedules?groupId=" + group[0] }>
                                        <div className={ styles.list }>
                                            <div className={ styles.icon }>
                                                <Image 
                                                    src={ group[2] || "/images/group_icon.png" } 
                                                    width="30"
                                                    height="30"
                                                    alt=""
                                                    className="icon"
                                                />     
                                            </div>
                                            <p className={ styles.text }>{ group[1] }</p>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        :""}
                    </ul>
                </>
            : "" }
        </>
    )

}

export default GroupList