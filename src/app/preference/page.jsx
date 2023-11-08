import React from 'react';
import styles from "./styles/page.module.css";
import Header from "@/components/header/Header";
import Leftbar from "@/components/Leftbar/Leftbar";
import NoGroup from "@/components/NoGroup/NoGroup";
import Rightbar from '@/components/Rightbar/Rightbar';
import { setup } from '@/lib/setup';
import BodyFrame from '@/components/BodyFrame/BodyFrame';
import Preference from './Preference';
import Heading from '@/components/Heading/Heading';

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
                    <Heading>好き/嫌い・アレルギーリスト</Heading>
                    <ul>
                        <li className={ styles.element }>
                            <Preference
                                heading="メンバーの好きな料理・食材"
                                content="納豆・きゅうり・まぐろ・イタリアン"
                                style="favorite"/>
                        </li>
                        <li className={ styles.element }>
                            <Preference
                                heading="メンバーの苦手な料理・食材"
                                content="中華調理・かぼちゃ・里芋"
                                style="hated"/>
                        </li>
                        <li className={ styles.element }>
                            <Preference
                                heading="メンバーの好きなお酒"
                                content="ビール・芋焼酎"
                                style="favorite"/>
                        </li>
                        <li className={ styles.element }>
                            <Preference
                                heading="メンバーの苦手なお酒"
                                content="麦焼酎・マッコリ"
                                style="hated"/>
                        </li>
                    </ul>
                </BodyFrame>
                <Rightbar members = { members }/> 
            </main>
        </>   
    )
}

export default page