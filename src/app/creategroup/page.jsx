import React from 'react';
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import { setup } from '@/lib/setup';
import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";
import CreateGroupForm from './createGroupForm/CreateGroupForm';

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
                    <h1 className={ styles.title }>グループ作成</h1>
                    <CreateGroupForm userId={ userId } />
                </div>
            </main>
        </>
    )
}

export default page