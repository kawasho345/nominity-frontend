import React from 'react';
import styles from "./styles/page.module.css";
import Header from '@/components/Header/Header';
import Leftbar from '@/components/Leftbar/Leftbar';
import Rightbar from '@/components/Rightbar/Rightbar';
import { setup } from '@/lib/setup';
import BodyFrame from '@/components/BodyFrame/BodyFrame';
import RegisterScheduleBody from './RegisterScheduleBody';
import { fetchRequest } from '@/lib/fetch';
import NoGroup from '@/components/NoGroup/NoGroup';
import { getRestaurants } from '@/lib/restaurants';

//お知らせ登録ページ
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
        joinGroups,
        query,
    } = await setup(searchParamsGroupId);
    //お店リスト取得
    const restaurants = await getRestaurants(groupId);

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
                    joinGroups={ joinGroups }
                    query={ query }
                />
            </header>
            <main className = {styles.group_content}>
                <Leftbar query={ query }/>
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