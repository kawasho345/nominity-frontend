import React from 'react';
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import ProfileForm from './profileForm/ProfileForm';
import { setup } from '@/lib/setup';
import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";

const page = async({ searchParams }) => {
    const searchParamsGroupId = searchParams.groupId;
    const session =  await getServerSession(handler);
    const {
        userId,
        username,
        userIcon,
        groupName,
        groupIcon,
        groupId,
    } = await setup(session, searchParamsGroupId)

    return (
        <>
            <header>
                <Header
                    userId={ userId }
                    username={ username }
                    userIcon={ userIcon } 
                    groupId={ groupId } 
                    groupName={ groupName }
                    groupIcon={ groupIcon }
                />
            </header>
            <main className={ styles.main }>
                <div className={ styles.content }>
                    <h1 className={ styles.title }>プロフィール変更</h1>
                    <ProfileForm
                        username={ username }
                        userIcon={ userIcon }
                    />
                </div>
            </main>
        </>
    )
}

export default page