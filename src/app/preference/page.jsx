import React from 'react';
import styles from "./styles/page.module.css";
import Header from "@/components/Header/Header";
import Leftbar from "@/components/Leftbar/Leftbar";
import NoGroup from "@/components/NoGroup/NoGroup";
import Rightbar from '@/components/Rightbar/Rightbar';
import { setup } from '@/lib/setup';
import BodyFrame from '@/components/BodyFrame/BodyFrame';
import Preference from './Preference';
import Heading from '@/components/Heading/Heading';

//好き嫌いアレルギーリストページ
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
        joinGroups,
        query,
    } = await setup(searchParamsGroupId);

    //その他アレルギーをユーザーごとに改行するよう編集
    const allergyText = () => {
        let list = [];
        groupAllergyText.map((text) => {
            list.push(<>{ text }<br/></>)
        })
        return <>{ list }</>
    }
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
                                style="allergy"/>
                        </li>
                        <li className={ styles.element }>
                            <Preference
                                heading="メンバーの持つその他アレルギー"
                                content={ allergyText() || "特になし" }
                                style="allergy"/>
                        </li>
                    </ul>
                </BodyFrame>
                <Rightbar members = { members }/> 
            </main>
        </>   
    )
}

export default page