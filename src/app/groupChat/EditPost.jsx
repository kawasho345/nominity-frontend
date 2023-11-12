"use client"
import PopUp from '@/components/PopUp/PopUp';
import PutDelete from '@/components/PutDelete/PutDelete'
import { deletePost, updatePost } from '@/lib/groupChat';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useToggle } from 'react-use';
import PostForm from './PostForm';

const EditPost = (props) => {
    const {
        userId,
        postId,
        postContent,
    } = props;
    const router = useRouter()
    const [hasForm, setHasForm] = useToggle(false);

    const putFunc = async(data) => {
        const response = await updatePost(data, userId, postId);
        setHasForm(false);
        router.refresh();
    }

    const deleteFunc = async() => {
        const response = await deletePost(userId, postId);
        router.refresh();
    }

    return (
        <>
            <PutDelete
                putFunc={ () => setHasForm(true) }
                deleteFunc={ () => deleteFunc() }
            />
            {hasForm?
                <PopUp func={ () => setHasForm(false) }>
                    <PostForm
                        postContent={ postContent }
                        submitFunc={ (data) => putFunc(data) }
                        submitText="更新"
                    />
                </PopUp>
            :""}
        </>
    )
}

export default EditPost