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
        groupFavoriteFood,
        groupHatedFood,
        groupFavoriteAlcohol,
        groupHatedAlcohol,
        groupAllergy,
        groupAllergyText,
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
                <Leftbar groupId={ groupId } />
                <BodyFrame>
                    <Heading>好き/嫌い・アレルギーリスト</Heading>
                    <ul>
                        <li className={ styles.element }>
                            <Preference
                                heading="メンバーの好きな料理・食材"
                                content={ groupFavoriteFood || "特になし" }
                                style="favorite"/>
                        </li>
                        <li className={ styles.element }>
                            <Preference
                                heading="メンバーの苦手な料理・食材"
                                content={ groupHatedFood || "特になし" }
                                style="hated"/>
                        </li>
                        <li className={ styles.element }>
                            <Preference
                                heading="メンバーの好きなお酒"
                                content={ groupFavoriteAlcohol || "特になし" }
                                style="favorite"/>
                        </li>
                        <li className={ styles.element }>
                            <Preference
                                heading="メンバーの苦手なお酒"
                                content={ groupHatedAlcohol || "特になし" }
                                style="hated"/>
                        </li>
                        <li className={ styles.element }>
                            <Preference
                                heading="メンバーの持つアレルギー"
                                content={ groupAllergy || "特になし" }
                                style="hated"/>
                        </li>
                        <li className={ styles.element }>
                            <Preference
                                heading="メンバーの持つその他アレルギー"
                                content={ groupAllergyText || "特になし" }
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