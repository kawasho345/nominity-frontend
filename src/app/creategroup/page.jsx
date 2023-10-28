import React from 'react';
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Form from "./Form";
import { fetchRequest } from '@/lib/fetch';
import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";

const page = async({ searchParams }) => {
    const searchParamsGroupId = searchParams.groupId;

    //セッション確認
    const session =  await getServerSession(handler);

    //ユーザー照合
    const user = await fetchRequest({
        url: "/api/user/verification",
        method: "POST",
        body: ({
            username: session.user.name,
            email: session.user.email,
            userIcon: session.user.image,
        }),
    })
    const {
        userId, 
        username,
        userIcon,
        joinGroupIds, 
        lastGroup,
    } = user;

    //表示グループ選定
    let groupId = null;
    if(joinGroupIds.length){
        groupId = joinGroupIds[0];
    }
    if(joinGroupIds.includes(lastGroup)){
        groupId = lastGroup;
    }
    if(searchParamsGroupId){
        if(joinGroupIds.includes(searchParamsGroupId)){
            groupId = searchParamsGroupId;
        }else{
            console.log("指定されたグループが存在しません");
        }
    }
    //グループデータ取得
    let currentGroup = { body: { groupName: "", groupIcon: "" } };
    if(groupId){
        currentGroup = await fetchRequest({
            url: "/api/group/" + groupId + "/get",
            method: "GET",
        })
    }
    const {
        groupName,
        groupIcon,
        invitationCode,
    } = currentGroup


    return (
        <>
            <Header
                userId={ userId }
                username={ username }
                userIcon={ userIcon } 
                groupId={ groupId } 
                groupName={ groupName }
                groupIcon={ groupIcon }
            />
            <Form userId = { userId }/>
        </>
    )
}

export default page