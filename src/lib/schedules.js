import { fetchRequest } from "./fetch";
import storage from '@/providers/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

//お知らせ登録
const registerSchedule = async(data, userId, groupId) => {
    let fileUrl
    if(data.imageUrl){
        fileUrl = data.imageUrl
    }
    if(data.restaurantImage.length){
        const file = data.restaurantImage[0]
        const storageRef = ref(storage, "image/restaurantImage/" + file.name)
        fileUrl = await uploadBytes(storageRef, file).then((snapshot) => {
            return ref(storage, process.env.NEXT_PUBLIC_FIREBASE_URL + snapshot.metadata.fullPath);
        }).then((gsReference) => getDownloadURL(gsReference))
    }
    const response = await fetchRequest({
        url: "/api/schedule/register",
        method: "POST",
        body:{
            scheduleName: data.scheduleName,
            scheduleDate: data.scheduleDate,
            restaurantName: data.restaurantName,
            restaurantAddress: data.restaurantAddress,
            restaurantUrl: data.restaurantUrl,
            restaurantImage: fileUrl,
            schedulePrice: data.schedulePrice,
            scheduleRemarks: data.scheduleRemarks,
            scheduleNumberPeople: data.scheduleNumberPeople,
            groupId,
            userId,
        }
    })

    return response;
}

//お知らせ取得
const getSchedules = async(groupId) => {
    const schedules = await fetchRequest({
        url: "/api/schedule/" + groupId + "/getSchedules",
        method: "GET",
        element: "schedules"
    })

    return schedules;
}

//お知らせ削除
const deleteSchedule = async(userId, scheduleId) => {
    const response = await fetchRequest({
        url: "/api/schedule/" + scheduleId + "/delete",
        method: "DELETE",
        body: { userId, }
    })

    return response;
}

//お知らせ更新
const updateSchedule = async(data, userId, scheduleId) => {
    let fileUrl
    if(data.imageUrl){
        fileUrl = data.imageUrl
    }
    if(data.restaurantImage.length){
        const file = data.restaurantImage[0]
        const storageRef = ref(storage, "image/restaurantImage/" + file.name)
        fileUrl = await uploadBytes(storageRef, file).then((snapshot) => {
            return ref(storage, process.env.NEXT_PUBLIC_FIREBASE_URL + snapshot.metadata.fullPath);
        }).then((gsReference) => getDownloadURL(gsReference))
    }
    const response = await fetchRequest({
        url: "/api/schedule/" + scheduleId + "/put",
        method: "PUT",
        body:{
            scheduleName: data.scheduleName,
            scheduleDate: data.scheduleDate,
            restaurantName: data.restaurantName,
            restaurantAddress: data.restaurantAddress,
            restaurantUrl: data.restaurantUrl,
            restaurantImage: fileUrl,
            schedulePrice: data.schedulePrice,
            scheduleRemarks: data.scheduleRemarks,
            scheduleNumberPeople: data.scheduleNumberPeople,
            userId,
        }
    })

    return response;
}

export { 
    registerSchedule, 
    getSchedules, 
    deleteSchedule, 
    updateSchedule, 
}