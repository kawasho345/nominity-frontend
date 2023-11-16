import { getServerSession } from 'next-auth';
import { handler } from '../app/api/auth/[...nextauth]/route';
import { fetchRequest } from "./fetch"

const setup = async(searchParamsGroupId) => {
    //表示グループ選定関数
    const selectGroup = (searchParamsGroupId, joinGroupIds) => {
        let groupId = null;
        let hasGroupId = true;
        console.log(joinGroupIds)
        if(!joinGroupIds.length){
            hasGroupId = false;
            return(groupId, hasGroupId);
        }
        if(joinGroupIds.includes(searchParamsGroupId)){
            groupId = searchParamsGroupId;
            return{ groupId, hasGroupId }
        }
        groupId = joinGroupIds[0];
        return{ groupId, hasGroupId }
    }

    //セッション確認
    const session =  await getServerSession(handler);

    //ユーザー情報取得
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
        userFavoriteFood,
        userHatedFood,
        userFavoriteAlcohol,
        userHatedAlcohol,
        userAllergy,
        userAllergyText,
    } = user

    //表示グループ選定 
    const { groupId, hasGroupId } = selectGroup(searchParamsGroupId, joinGroupIds)
    if(groupId === null){
        return(userId, username, userIcon, hasGroupId)
    }

    //グループデータ取得
    const group = await fetchRequest({
        url: "/api/group/" + groupId + "/get",
        method: "GET",
    })
    const {
        groupName,
        groupIcon,
        invitationCode,
        groupFavoriteFood,
        groupHatedFood,
        groupFavoriteAlcohol,
        groupHatedAlcohol,
        groupAllergy,
        groupAllergyText,
    } = group

    //グループメンバー取得
    const members = await fetchRequest({
        url: "/api/group/" + groupId + "/getMembers",
        method: "GET",
        element: "members"
    }); 
    
    return {
        userId,
        username,
        userIcon,
        groupName,
        groupIcon,
        members,
        groupId,
        hasGroupId,
        invitationCode,
        userFavoriteFood,
        userHatedFood,
        userFavoriteAlcohol,
        userHatedAlcohol,
        userAllergy,
        userAllergyText,
        groupFavoriteFood,
        groupHatedFood,
        groupFavoriteAlcohol,
        groupHatedAlcohol,
        groupAllergy,
        groupAllergyText,
    }
}

export { setup }