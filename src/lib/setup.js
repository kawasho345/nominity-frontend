import { fetchRequest } from "./fetch"

const setup = async(session, searchParamsGroupId) => {
    const selectGroup = (searchParamsGroupId, joinGroupIds) => {
        let groupId = null;
        let hasGroupId = true;
        if(searchParamsGroupId){
            if(joinGroupIds.includes(searchParamsGroupId)){
                groupId = searchParamsGroupId;
                return{ groupId, hasGroupId }
            }
            hasGroupId = false;
        }
        if(!joinGroupIds.length){
            return(groupId, hasGroupId)
        }
        groupId = joinGroupIds[0];
        return{ groupId, hasGroupId }
    }

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
    } = group
    console.log(group)
    //グループメンバー取得
    const members = await fetchRequest({
        url: "/api/group/" + groupId + "/getMembers",
        method: "GET",
        element: "members"
    }); 

    console.log(members)
    
    return {
        userId,
        username,
        userIcon,
        groupName,
        groupIcon,
        members,
        groupId,
        hasGroupId,
    }
}

export { setup }