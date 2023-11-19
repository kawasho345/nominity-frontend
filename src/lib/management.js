import { fetchRequest } from '@/lib/fetch';
import storage from '@/providers/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const registerGroup = async(data, userId) => {
    let fileUrl;
    if(data.groupIcon.length){
        const file = data.groupIcon[0]
        const storageRef = ref(storage, "image/groupIcon/" + file.name)
        fileUrl = await uploadBytes(storageRef, file).then((snapshot) => {
            return ref(storage, process.env.NEXT_PUBLIC_FIREBASE_URL + snapshot.metadata.fullPath);
        }).then((gsReference) => getDownloadURL(gsReference))
    }
    const groupId = await fetchRequest({
        url: "/api/group/register",
        method: "POST",
        body: {
            userId: userId,
            groupName: data.groupName,
            groupIcon: fileUrl,
        },
        element: "groupId",
    })

    return groupId;
}

const updateGroup = async(data, userId, groupId) => {
    let fileUrl;
    if(data.groupIcon.length){
        const file = data.groupIcon[0]
        const storageRef = ref(storage, "image/groupIcon/" + file.name)
        fileUrl = await uploadBytes(storageRef, file).then((snapshot) => {
            return ref(storage, process.env.NEXT_PUBLIC_FIREBASE_URL + snapshot.metadata.fullPath);
        }).then((gsReference) => getDownloadURL(gsReference))
    }
    const response = await fetchRequest({
        url: "/api/group/" + groupId + "/put",
        method: "PUT",
        body: {
            userId,
            groupName: data.groupName,
            groupIcon: fileUrl,
        }
    })

    return response;
}

const updateUser = async(data, userId) => {
    let fileUrl;
    if(data.userIcon.length){
        const file = data.userIcon[0]
        const storageRef = ref(storage, "image/userIcon/" + file.name)
        fileUrl = await uploadBytes(storageRef, file).then((snapshot) => {
            return ref(storage, process.env.NEXT_PUBLIC_FIREBASE_URL + snapshot.metadata.fullPath);
        }).then((gsReference) => getDownloadURL(gsReference))
    }
    const response = await fetchRequest({
        url: "/api/user/" + userId + "/put",
        method: "PUT",
        body: {
            username: data.username,
            userIcon: fileUrl,
            favoriteFoodText: data.favoriteFood,
            hatedFoodText: data.hatedFood,
            favoriteAlcoholText: data.favoriteAlcohol,
            hatedAlcoholText: data.hatedAlcohol,
            allergy: data.allergy,
            allergyText: data.allergyText, 
        }
    })

    return response;
}

const withdrawal = async(groupId, userId) => {
    const response = await fetchRequest({
        url: "/api/group/" + groupId + "/withdrawal",
        method: "PUT",
        body: { userIds: [userId] }
    })
    console.log(response);
    return response;
}

const joinGroup = async(invitationCode, userId) => {
    const joinGroupId = await fetchRequest({
        url: "/api/group/" + invitationCode + "/joinGroup",
        method: "PUT",
        body: { userId: userId },
        element: "joinGroupId",
    });

    return joinGroupId;
}

export { 
    registerGroup, 
    updateGroup, 
    updateUser,
    withdrawal,
    joinGroup,
}