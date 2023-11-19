"use client";
import React from 'react';
import { registerPost } from '@/lib/groupChat';
import { useRouter } from 'next/navigation';
import PostForm from './PostForm';

//投稿登録
const RegisterPost = (props) => {
    const { userId, groupId } = props;
    const router = useRouter();
    //登録関数
    const onSubmit = async(data) => {
        if(!data.postContent){
            return;
        }
        const response = await registerPost(data, userId, groupId);
        router.refresh();
    }

    return (
        <PostForm
            submitFunc={ (data) => onSubmit(data) }
            submitText="投稿"
        />
    )
}

export default RegisterPost