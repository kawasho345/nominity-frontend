import React from 'react'
import styles from "./styles/page.module.css"
import Header from '@/components/Header/Header';
import Leftbar from '@/components/Leftbar/Leftbar';
import Rightbar from '@/components/Rightbar/Rightbar';
import { setup } from '@/lib/setup';
import NoGroup from '@/components/NoGroup/NoGroup';
import BodyFrame from '@/components/BodyFrame/BodyFrame';
import Heading from '@/components/Heading/Heading';
import RegisterQuestionnaire from './RegisterQuestionnaire';
import Questionnaire from './Questionnaire';
import { getQuestionnaires } from '@/lib/questionnaire';

//日程調整ページ
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
    //登録された日程調整の取得
    const questionnaires = await getQuestionnaires(groupId);
    
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
            <main>
                <Leftbar query={ query } />
                <BodyFrame>
                    <Heading>日程調整</Heading>
                    {questionnaires.map((questionnaire, index) => (
                        <div className={ styles.questionnaire } key={ index }>
                            <Questionnaire
                                userId={ userId }
                                groupId={ groupId }
                                questionnaireId={ questionnaire.questionnaireId }
                                questionnaireName={ questionnaire.questionnaireName }
                                questionnaireOverview={ questionnaire.questionnaireOverview }
                                questionnaireDates={ questionnaire.questionnaireDates }
                                membersSchedule={ questionnaire.membersSchedule }
                            />
                        </div>
                    ))}
                    <RegisterQuestionnaire
                        userId={ userId }
                        groupId={ groupId }
                    />
                </BodyFrame>
                <Rightbar members = { members }/>
            </main>
        </>   
    )
}

export default page