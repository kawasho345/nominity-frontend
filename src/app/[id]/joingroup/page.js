import React from 'react'
import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";

const page = async({ params }) => {
    const invitationCode = params.id;
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
    }).then((request) => request.json())
    const {
        userId, 
    } = responseUser.body;

    

    return (
        <div>page</div>
    )
}

export default page