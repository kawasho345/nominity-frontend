import React from 'react'
import styles from "./styles/page.module.css";
import Header from '@/components/header/Header';
import Leftbar from '@/components/Leftbar/Leftbar';
import Rightbar from '@/components/Rightbar/Rightbar';
import { setup } from '@/lib/setup';
import BodyFrame from '@/components/BodyFrame/BodyFrame';
import NoGroup from '@/components/NoGroup/NoGroup';
import Invitation from './Invitation';
import UpdateGroup from './UpdateGroup';
import MemberManagement from './MemberManagement';

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
        invitationCode,
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
            <main className = { styles.group_content }>
                <Leftbar groupId={ groupId } />
                <BodyFrame>
                    <div className={ styles.element }> 
                        <Invitation invitationCode={ invitationCode }/>
                    </div>
                    <div className={ styles.element }>
                        <UpdateGroup
                            userId={ userId }
                            groupId={ groupId }
                            groupName={ groupName }
                            groupIcon={ groupIcon }
                        />
                    </div>
                    <div className={ styles.element }>
                        <MemberManagement
                            userId={ userId }
                            groupId={ groupId }
                        />
                    </div>
                </BodyFrame>
                <Rightbar members = { members }/>
            </main>
        </>   
    )
}

export default page