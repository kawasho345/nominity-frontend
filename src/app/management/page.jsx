import React from 'react'
import styles from "./page.module.css";
import Header from '@/components/header/Header';
import Leftbar from '@/components/leftbar/Leftbar';
import Rightbar from '@/components/rightbar/Rightbar';
import { getServerSession } from 'next-auth';
import { handler } from '../api/auth/[...nextauth]/route';
import { setup } from '@/lib/setup';
import BodyFrame from '@/components/bodyFrame/BodyFrame';
import NoGroup from '@/components/noGroup/NoGroup';

const page = async({ searchParams }) => {
    const searchParamsGroupId = searchParams.groupId;
    const session =  await getServerSession(handler);
    const {
        userId,
        username,
        userIcon,
        groupName,
        groupIcon,
        members,
        groupId,
        hasGroupId,
    } = await setup(session, searchParamsGroupId)
    if(!hasGroupId){
        return(
            <>
                <header>
                    <Header
                        userId = { userId }
                        username = { username }
                        userIcon = { userIcon } 
                    />
                </header>
                <main>
                    <NoGroup />
                </main>
            </>
        )
    }

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
            <main className = {styles.group_content}>
                <Leftbar />
                <BodyFrame>

                </BodyFrame>
                <Rightbar members = { members }/>
            </main>
        </>   
    )
}

export default page