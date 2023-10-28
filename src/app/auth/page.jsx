"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'
import Image from "next/image";

const Login = ({ searchParams }) => {
    const callbackUrl = searchParams.callbackUrl;

    return (
        <div className={ styles.frame }>
            <div className={ styles.header }>
                <Image src="/images/nominity_icon2.png" width="300" height="150" alt="" />
            </div>
            <h1 className={ styles.greeting }>飲み会幹事サポートアプリ、ノミニティへようこそ</h1>
            <p>Googleアカウントですぐにログインできます</p>
            <div className={ styles.signin }>
                <button onClick={() => signIn("google", { callbackUrl: callbackUrl})} className="button">
                    <Image src="/images/google_button.png" width="382" height="92" alt="" / >
                </button>
            </div>
        </div>
    )
}

export default Login