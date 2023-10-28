import React from 'react';
import styles from "./GroupSelect.module.css";
import Link from 'next/link';
import Image from 'next/image';

const GroupSelect = (props) => {
    const {
        groupId,
        joinGroups,
    } = props;

    return (
        <div className={ styles.frame }>
            <div className={ styles.create_group }>
                <Link href = { "/createGroup/?groupId=" + groupId } className="link">
                    <p className={ styles.create_group_text }>新しいグループを作る</p>
                </Link>
            </div>
            <div className={ styles.body }>
                {joinGroups !== "undefind"?
                    joinGroups.map((group) => (
                        <div key={ group[0] } className={ styles.select_group }>
                            <Link href = { "/?groupId=" + group[0] } className="link">
                                <div className={ styles.group }>
                                    <div className={ styles.icon}>
                                        <Image 
                                            src={ group[2] || "/images/group_icon.png" } 
                                            width="30"
                                            height="30"
                                            alt=""
                                            className="icon"
                                        />     
                                    </div>
                                    <p className={ styles.name }>{ group[1] }</p>
                                </div>
                            </Link>
                        </div>
                    ))
                :""}
            </div>
        </div>
    )
}

export default GroupSelect