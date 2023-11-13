import React from 'react'
import { getServerSession } from "next-auth";
import { handler } from "../../api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';
import { fetchRequest } from '@/lib/fetch';

const page = async({ params }) => {
    //招待コード受理ページ
    const invitationCode = params.id;
    const session =  await getServerSession(handler);

    const user = await fetchRequest({
        url: "/api/user/verification",
        method: "POST",
        body: {
            username: session.user.name,
            email: session.user.email,
            userIcon: session.user.image,
        }
    });
    const { userId } = user;

    const joinGroupId = await fetchRequest({
        url: "/api/group/" + invitationCode + "/joinGroup",
        method: "PUT",
        body: { userId: userId },
        element: "joinGroupId",
    });

    if(joinGroupId.error){
        redirect("/");
    }

    redirect("/?groupId=" + joinGroupId)

    return (
        <div>page</div>
    )
}

export default page