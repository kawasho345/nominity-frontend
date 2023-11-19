import React from 'react'
import styles from "./styles/UserMenu.module.css";
import Link from 'next/link';
import { signOut } from 'next-auth/react'
import OnClick from '@/components/OnClick/OnClick';
import Font from '../Font/Font';

const GroupList = (props) => {
    const {
        groupId,
    } = props;
    let query = "";
    if(groupId){
        query = "?groupId=" + groupId;
    }

    return(
        <>
            <ul className={ styles.frame }>
                <li className={ styles.element }>
                    <OnClick link={ "/profile" + query } style="left">
                        <div className={ styles.text }>
                            <Font>プロフィール変更</Font>
                        </div>
                    </OnClick>
                </li>
                <li className={ styles.sign_out }>
                    <OnClick func={ () => signOut() } style="left">
                        <div className={ styles.text }>
                            <Font>サインアウト</Font>
                        </div>
                    </OnClick>
                </li>
            </ul>
        </>
    )

}

export default GroupList