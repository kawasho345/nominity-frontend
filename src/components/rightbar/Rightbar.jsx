import React from 'react'
import styles from "./Rightbar.module.css"
import { fetchRequest } from '@/lib/fetch'
import Image from 'next/image'

const Rightbar = async(props) => {
    const { groupId } = props;
    const members = await fetchRequest({
        url: "/api/group/" + groupId + "/getMembers",
        method: "GET",
        element: "members"
    }); 

    return (
        <div className = { styles.frame }>
            <h2 className={ styles.title }>メンバー</h2>
            <ul>
                {members.map((member) => (
                    <li key={ member[0] } className={ styles.member }>
                        <div className={ styles.icon }>
                            <Image 
                                src={ member[2] } 
                                width="25" 
                                height="25" 
                                alt="" 
                                className="icon"
                            />
                        </div>
                        <span className={ styles.name }>{ member[1] }</span>
                    </li>
                ))}
            </ul>            
        </div>
    )
}

export default Rightbar