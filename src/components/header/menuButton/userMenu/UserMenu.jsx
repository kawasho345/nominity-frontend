import React from 'react'
import styles from "./UserMenu.module.css";
import Link from 'next/link';
import { signOut } from 'next-auth/react'

const GroupList = (props) => {
    const {
        hasMenu,
        setHasMenu,
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
                            <Link href = { "/profile" } className={ styles.aaa }>
                                <div className={ styles.list }>
                                    <p className={ styles.text }>プロフィール変更</p>
                                </div>
                            </Link>
                        </li>
                        <li key="signOut">
                            <button onClick={ () => signOut() } className="button">
                                <div className={ styles.sign_out }>
                                    <p className={ styles.sign_out_text }>サインアウト</p>
                                </div>
                            </button>
                        </li>
                        
                    </ul>
                </>
            : "" }
        </>
    )

}

export default GroupList