import React from 'react'
import styles from "./styles/Post.module.css"
import Image from 'next/image'
import Font from '@/components/Font/Font'
import EditPost from './EditPost'

const Post = (props) => {
    const {
        userId,
        postId,
        postUserId,
        postUsername,
        postUserIcon,
        postContent,
        postUpdatedAt,
    } = props
    const updateDate = new Date(postUpdatedAt);

    return (
        <div className={ styles.frame }>
            <Image 
                src={ postUserIcon || "/images/group_icon.png" } 
                width="50"
                height="50"
                alt=""
                className={`${ styles.image } ${ "icon" }`}
            />
            <div className={ styles.content }>
                <Font style="middle_text" tag="div">
                    <div className={ styles.heading }>
                        <p className={ styles.name }>{ postUsername }</p>
                        {(userId === postUserId)? 
                            <EditPost
                                userId={ userId }
                                postId={ postId }
                                postContent={ postContent }
                            /> 
                            :""}
                    </div>
                    <p>{ postContent }</p>
                </Font>
                <div className={ styles.date }>
                    <Font style="weak_text">最終更新日：{ updateDate.toLocaleString() }</Font>
                </div>
            </div>
        </div>
    )
}

export default Post