import React from 'react';
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Leftbar from "@/components/leftbar/Leftbar";
import No_group from "@/components/no_group/No_group";
import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async({ searchParams }) => {
    const groupid = searchParams.groupid;

    //セッション確認
    const session =  await getServerSession(handler);

    //ユーザー照合
    const user_response = await fetch(process.env.NEXT_PUBLIC_HOST_URL+"/api/user/verification", {
        method: "POST",
        body: JSON.stringify({
            username: session.user.name,
            email: session.user.email,
            icon: session.user.image,
        }),
        cache: "no-cache",
    })
    const user_json = await user_response.json();
    const {
        userId, 
        username,
        icon,
        joinGroups, 
        lastGroup,
    } = user_json.body;
    
    console.log(joinGroups)
    //表示グループ選定    
    if(!joinGroups.length){
        return(
                <>
                    <Header
                        userid = { userId }
                        username = { username }
                        userIcon = { icon } 
                    />
                    <No_group />
                </>
        )
    }
    let id = joinGroups[0];
    if(joinGroups.includes(lastGroup)){
        id = lastGroup;
    }
    if(groupid){
        if(joinGroups.includes(groupid)){
            id = groupid;
        }else{
            console.log("指定されたグループが存在しません");
        }
    }

    return (
        <>
            <Header
                userid = { userId }
                username = { username }
                userIcon = { icon } 
                groupId = { id } 
            />
            <div className = {styles.group_content}>
                <Leftbar />
            </div>
        </>   
    )
}

export default page