import React from 'react'
import styles from "./styles/page.module.css";
import Header from '@/components/header/Header';
import Leftbar from '@/components/Leftbar/Leftbar';
import Rightbar from '@/components/Rightbar/Rightbar';
import { getServerSession } from 'next-auth';
import { handler } from '../api/auth/[...nextauth]/route';
import { setup } from '@/lib/setup';
import NoGroup from '@/components/NoGroup/NoGroup';
import RestaurantList from './RestaurantList';
import AddToList from './AddToList';
import BodyFrame from '@/components/BodyFrame/BodyFrame';

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