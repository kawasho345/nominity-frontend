import React from 'react'
import styles from "./page.module.css";
import Header from '@/components/header/Header';
import Leftbar from '@/components/leftbar/Leftbar';
import Rightbar from '@/components/rightbar/Rightbar';
import { getServerSession } from 'next-auth';
import { handler } from '../../api/auth/[...nextauth]/route';
import { setup } from '@/lib/setup';
import BodyFrame from '@/components/bodyFrame/BodyFrame';
import RegisterScheduleBody from './RegisterScheduleBody';
import { fetchRequest } from '@/lib/fetch';

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
    const restaurants = await fetchRequest({
        url: "/api/restaurant/" + groupId + "/getRestaurants",
        method: "GET",
        element: "restaurants"
    })

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
                    <No_group />
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
                    <RegisterScheduleBody
                        userId={ userId }
                        groupId={ groupId }
                        restaurants={ restaurants }
                    />
                </BodyFrame>
                <Rightbar members = { members }/>
            </main>
        </>   
    )
}

export default page