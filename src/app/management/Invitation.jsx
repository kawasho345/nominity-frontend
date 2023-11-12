"use client"
import React, { useRef } from 'react'
import styles from "./styles/Invitation.module.css";
import Heading from '@/components/Heading/Heading';
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';
import EditText from '@/components/EditText/EditText';
import { useToggle } from 'react-use';

const Invitation = (props) => {
    const {
        invitationCode,
    } = props;
    const urlRef = useRef(null);
    const [hasCliped, setHasCliped] = useToggle(false);

    const invitationUrl = process.env.NEXT_PUBLIC_MY_URL 
                        + "/" 
                        + invitationCode 
                        + "/joinGroup"

    const copyToClipboard = async() => {
        await global.navigator.clipboard.writeText(invitationUrl);
        setHasCliped(true);
        setTimeout(() => {
            setHasCliped(false);
        }, 3000)
    };

    return (
        <>
            <Heading>招待URL</Heading>
            {hasCliped? <Font style="weak_text">コピーしました</Font>:""}
            <div className={ styles.frame }>
                <input
                    className={ styles.url }
                    type="text"
                    size="25"
                    value={ invitationUrl }
                    readOnly
                    ref={ urlRef }
                    onClick={() => urlRef.current.select()}
                />
                <div className={`${ styles.button } ${ "green_button" }`}>
                    <OnClick func={ () => copyToClipboard() }>
                        <Font style="default_button">コピー</Font>
                    </OnClick>
                </div>
            </div>
        </>
    )
}

export default Invitation