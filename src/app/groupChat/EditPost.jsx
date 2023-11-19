"use client";
import EmphasisFrame from '@/components/EmphasisFrame/EmphasisFrame';
import PutDelete from '@/components/PutDelete/PutDelete';
import { deletePost, updatePost } from '@/lib/groupChat';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useToggle } from 'react-use';
import PostForm from './PostForm';
import Dialog from '@/components/Dialog/Dialog';
import Font from '@/components/Font/Font';

//投稿編集
const EditPost = (props) => {
    const {
        userId,
        postId,
        postContent,
    } = props;
    const router = useRouter()
    const [hasForm, setHasForm] = useToggle(false);
    const [hasDialog, setHasDialog] = useToggle(false);
    //投稿更新
    const putFunc = async(data) => {
        const response = await updatePost(data, userId, postId);
        setHasForm(false);
        router.refresh();
    }
    //投稿削除  
    const deleteFunc = async() => {
        const response = await deletePost(userId, postId);
        router.refresh();
        setHasDialog(false);
    }

    return (
        <>
            <PutDelete
                putFunc={ () => setHasForm(true) }
                deleteFunc={ () => setHasDialog(true) }
            />
            {hasForm?
                <EmphasisFrame func={ () => setHasForm(false) }>
                    <PostForm
                        postContent={ postContent }
                        submitFunc={ (data) => putFunc(data) }
                        submitText="更新"
                    />
                </EmphasisFrame>
            :""}
            {hasDialog?
                <EmphasisFrame>
                    <Dialog
                        yesFunc={ () => deleteFunc() }
                        noFunc={ () => setHasDialog(false) }>
                        <Font style="large">投稿を削除します。よろしいですか</Font>
                    </Dialog>
                </EmphasisFrame>  
            :""}
        </>
    )
}

export default EditPost