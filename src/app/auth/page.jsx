"use client";
import React from 'react';
import styles from './styles/page.module.css';
import { signIn } from 'next-auth/react';
import Image from "next/image";
import Font from '@/components/Font/Font';
import OnClick from '@/components/OnClick/OnClick';

//サインイン
const Login = ({ searchParams }) => {
    const callbackUrl = searchParams.callbackUrl;

    return (
        <div className={ styles.frame }>
            <div className={ styles.header }>
                <Image src="/images/nominity_icon2.png" width="300" height="150" alt="" />
            </div>
            <Font style="force">飲み会幹事サポートアプリ、ノミニティへようこそ</Font>
            <Font style="minimum">Googleアカウントですぐにログインできます</Font>
            <div className={ styles.signin }>
                <button onClick={() => signIn("google", { callbackUrl: callbackUrl })}>
                    <Image src="/images/google_button.png" width="382" height="92" alt="" / >
                </button>
            </div>
            <div className={`${ styles.signin_guest } ${ "button" }`}>
                <OnClick func={() => signIn("credentials", { callbackUrl: callbackUrl })}>
                    <Font style="button">ゲストでログイン</Font>
                </OnClick>
            </div>
        </div>
    )
}

export default Login