import React from 'react'
import styles from "./styles/page.module.css";
import Header from '@/components/Header/Header';
import Leftbar from '@/components/Leftbar/Leftbar';
import Rightbar from '@/components/Rightbar/Rightbar';
import { setup } from '@/lib/setup';
import BodyFrame from '@/components/BodyFrame/BodyFrame';
import NoGroup from '@/components/NoGroup/NoGroup';
import Heading from '@/components/Heading/Heading';
import RegisterPost from './RegisterPost';
import Post from './Post';
import { getTimeline } from '@/lib/groupChat';
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

    const posts = await getTimeline(groupId);

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
                    <Heading>掲示板</Heading>
                    <RegisterPost 
                        userId={ userId }
                        groupId={ groupId } 
                    />
                    {posts.length?
                        <ul className={ styles.frame }>
                            {posts.map((post, index) => (
                                <li className={ styles.element } key={ index }>
                                    {!post.isBot?
                                        <Post
                                            userId={ userId }
                                            postId={ post.postId }
                                            postUserId={ post.postUserId }
                                            postUsername={ post.postUsername }
                                            postUserIcon={ post.postUserIcon }
                                            postContent={ post.postContent }
                                            postUpdatedAt={ post.postUpdatedAt }
                                        />
                                    :""}
                                </li>
                            ))}
                        </ul>
                    :
                    <Font style="default_text">投稿はありません</Font>
                    }
                </BodyFrame>
                <Rightbar members = { members }/>
            </main>
        </>   
    )
}

export default page