import React from 'react'
import styles from "./styles/page.module.css";
import Header from '@/components/header/Header';
import Leftbar from '@/components/Leftbar/Leftbar';
import Rightbar from '@/components/Rightbar/Rightbar';
import { getServerSession } from 'next-auth';
import { handler } from '../../api/auth/[...nextauth]/route';
import { setup } from '@/lib/setup';
import BodyFrame from '@/components/BodyFrame/BodyFrame';
import RegisterScheduleBody from './RegisterScheduleBody';
import { fetchRequest } from '@/lib/fetch';
import NoGroup from '@/components/NoGroup/NoGroup';

const page = async({ searchParams }) => {
    const searchParamsGroupId = searchParams.groupId;
    const {
        userId,
        username,
        userIcon,
        groupName,
        groupIcon,
        members,
        groupId,
        hasGroupId,
    } = await setup(searchParamsGroupId)
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