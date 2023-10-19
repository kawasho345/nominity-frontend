import React from 'react'
import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async({ params }) => {
    const invitation_code = params.id;
    //セッション確認
    const session =  await getServerSession(handler);
    if(session === null){
        redirect("/auth?page=joingroup&invitation_code="+invitation_code);
    }

    //ユーザー照合
    const user_response = await fetch(process.env.NEXT_PUBLIC_HOST_URL+"/api/user/verification", {
        method: "POST",
        body: JSON.stringify({
            username: session.user.name,
            email: session.user.email,
            userIcon: session.user.image,
        }),
        cache: "no-cache",
    })
    const user_json = await user_response.json();
    const {
        userId, 
    } = user_json.body;

    

    return (
        <div>page</div>
    )
}

export default page