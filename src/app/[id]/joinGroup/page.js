import React from 'react';
import { redirect } from 'next/navigation';
import { joinGroup } from '@/lib/management';
import { setup } from '@/lib/setup';

//招待コード受理ページ
const page = async({ params }) => {
    const invitationCode = params.id;
    const { userId } = await setup();

    const joinGroupId = await joinGroup(invitationCode, userId);
    if(joinGroupId.error){
        redirect("/schedules");
    }
    redirect("/schedules?groupId=" + joinGroupId);

    return (
        <div>page</div>
    )
}

export default page