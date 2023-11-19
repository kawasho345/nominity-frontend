import React from 'react';
import styles from "./styles/GroupList.module.css";
import Link from 'next/link';
import Image from 'next/image';

//所属グループの表示
//ToDo　OnClick化
const GroupList = (props) => {
    const {
        joinGroups,
        query,
    } = props;

    return(
        <>
            <ul className={ styles.frame }>
                <li key="createGroup">
                    <Link href = { "/management/register" + query }>
                        <div className={ styles.list }>
                            <p className={ styles.text }>新しいグループを作る</p>
                        </div>
                    </Link>
                </li>
                {joinGroups?
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
    )

}

export default GroupList