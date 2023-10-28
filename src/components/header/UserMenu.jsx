import React from 'react';
import styles from "./UserMenu.module.css";
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react'

const UserMenu = (props) => {
    const {
        userId,
    } = props;

    return (
        <div className= { styles.frame }>
            <ul className={ styles.menubar }>
                <li className={ styles.menu }>
                    <Link href={ "/" + userId + "/setting" } className="link">
                        <p className={ styles.menu_text }>プロフィール変更</p>
                    </Link>
                </li>
                <li className={ styles.signout }>
                    <button onClick={ () => signOut()} className='button'>
                        <p className={ styles.signout_text }>サインアウト</p>    
                    </button> 
                </li>
            </ul>
        </div>
    )
}

export default UserMenu