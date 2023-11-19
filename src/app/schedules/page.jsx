import React from 'react';
import styles from "./styles/page.module.css";
import Header from "@/components/Header/Header";
import Leftbar from "@/components/Leftbar/Leftbar";
import NoGroup from "@/components/NoGroup/NoGroup";
import Rightbar from '@/components/Rightbar/Rightbar';
import { setup } from '@/lib/setup';
import BodyFrame from '@/components/BodyFrame/BodyFrame';
import RegisterSchedule from './RegisterSchedule';
import { getSchedules } from '@/lib/schedules';
import Schdule from './Schdule';
import Heading from '@/components/Heading/Heading';
import Font from '@/components/Font/Font';

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
    } = await setup(searchParamsGroupId);
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
                <Leftbar groupId={ groupId } />
                <BodyFrame>
                    <Heading>お知らせ</Heading>
                        {schedules.length?
                            <ul>
                                {schedules.map((schedule, index) => (
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
                                ))}
                            </ul>
                        :
                            <Font style="default_text">お知らせはありません</Font>
                        }
                    <RegisterSchedule/>
                </BodyFrame>
                <Rightbar members = { members }/> 
            </main>
        </>   
    )
}

export default page