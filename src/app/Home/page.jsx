import React from 'react';
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Leftbar from "@/components/leftbar/Leftbar";
import No_group from "@/components/noGroup/NoGroup";
import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";

const page = async({ searchParams }) => {
    const searchParamsGroupId = searchParams.groupId;

    //セッション確認
    const session =  await getServerSession(handler);

    //ユーザー照合
    const responseUser = await fetch(process.env.NEXT_PUBLIC_HOST_URL+"/api/user/verification", {
        method: "POST",
        body: JSON.stringify({
            username: session.user.name,
            email: session.user.email,
            userIcon: session.user.image,
        }),
        cache: "no-cache",
    }).then((response) => response.json())
    const {
        userId, 
        username,
        userIcon,
        joinGroups, 
        lastGroup,
    } = responseUser.body;
    
    console.log(joinGroups)
    //表示グループ選定    
    if(!joinGroups.length){
        return(
                <>
                    <Header
                        userid = { userId }
                        username = { username }
                        userIcon = { userIcon } 
                    />
                    <No_group />
                </>
        )
    }
    let groupId = joinGroups[0];
    if(joinGroups.includes(lastGroup)){
        groupId = lastGroup;
    }
    if(searchParamsGroupId){
        if(joinGroups.includes(searchParamsGroupId)){
            groupId = searchParamsGroupId;
        }else{
            console.log("指定されたグループが存在しません");
        }
    }

    return (
        <>
            <Header
                userId = { userId }
                username = { username }
                userIcon = { userIcon } 
                groupId = { groupId } 
            />
            <div className = {styles.group_content}>
                <Leftbar />
            </div>
        </>   
    )
}

export default page