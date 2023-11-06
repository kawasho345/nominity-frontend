import React from 'react';
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Leftbar from "@/components/leftbar/Leftbar";
import NoGroup from "@/components/noGroup/NoGroup";
import Rightbar from '@/components/rightbar/Rightbar';
import { getServerSession } from "next-auth";
import { handler } from "./api/auth/[...nextauth]/route";
import Home from '@/components/home/Home';
import { setup } from '@/lib/setup';
import BodyFrame from '@/components/bodyFrame/BodyFrame';
import OnClick from '@/components/onClick/OnClick';
import RegisterSchedule from './Home/RegisterSchedule/RegisterSchedule';
import { getSchedules } from '@/lib/schedule';
import Schdule from './Home/Schedule/Schdule';

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
    } = await setup(session, searchParamsGroupId);
    const schedules = await getSchedules(groupId);

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
                    <ul>
                        {schedules?
                            schedules.map((schedule, index) => (
                                <li key={ index }>
                                    <Schdule
                                    scheduleId={ schedule.scheduleId }
                                    scheduleName={ schedule.scheduleName }
                                    scheduleDate={ schedule.scheduleDate }
                                    restaurantName={ schedule.restaurantName }
                                    restaurantAddress={ schedule.restaurantAddress }
                                    restaurantUrl={ schedule.restaurantUrl }
                                    restaurantImage={ schedule.restaurantImage }
                                    schedulePrice={ schedule.schedulePrice }
                                    scheduleNumberPeople={ schedule.scheduleNumberPeople }
                                    scheduleRemarks={ schedule.scheduleRemarks }
                                    scheduleUpdatedAt={ schedule.scheduleUpdatedAt }
                                    userId={ userId }
                                    />
                                </li>
                            ))
                        :""}
                    </ul>
                    <RegisterSchedule/>
                </BodyFrame>
                <Rightbar members = { members }/> 
            </main>
        </>   
    )
}

export default page