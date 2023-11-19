import React from 'react';
import styles from "./styles/page.module.css";
import Header from '@/components/Header/Header';
import Leftbar from '@/components/Leftbar/Leftbar';
import Rightbar from '@/components/Rightbar/Rightbar';
import { setup } from '@/lib/setup';
import NoGroup from '@/components/NoGroup/NoGroup';
import RestaurantList from './RestaurantList';
import AddToList from './AddToList';
import BodyFrame from '@/components/BodyFrame/BodyFrame';

//お店リストページ
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
                <Leftbar query={ query } />
                <BodyFrame>
                    <AddToList 
                        groupId={ groupId }
                        userId={ userId }
                    />
                    <RestaurantList
                        groupId={ groupId }
                        userId={ userId }
                    />
                </BodyFrame>
                <Rightbar members = { members }/>
            </main>
        </>   
    )
}

export default page