import React from 'react';
import styles from "./styles/page.module.css";
import Header from "@/components/header/Header";
import { setup } from '@/lib/setup';
import BodyFrame from '@/components/BodyFrame/BodyFrame';
import Heading from '@/components/Heading/Heading';
import RegisterGroup from './RegisterGroup';

const page = async({ searchParams }) => {
    const searchParamsGroupId = searchParams.groupId;
    const {
        userId,
        username,
        userIcon,
        groupName,
        groupIcon,
        groupId,
    } = await setup(searchParamsGroupId)

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
                <BodyFrame>
                    <Heading>グループ作成</Heading>
                    <RegisterGroup userId={ userId } />
                </BodyFrame>
            </main>
        </>
    )
}

export default page