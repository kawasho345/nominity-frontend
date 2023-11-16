import { fetchRequest } from "./fetch";
import storage from '@/providers/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const getRestaurants = async(groupId) => {
    const restaurants = await fetchRequest({
        url: "/api/restaurant/" + groupId + "/getRestaurants",
        method: "GET",
        element: "restaurants"
    })

    return restaurants
}

const searchRestaurants = async(keyword, start) => {
    const query = "?keyword=" + keyword + "&start=" + start;
    const results = await fetchRequest({
        url: "/api/others/hotpepper" + query,
        method: "GET",
        element: "restaurants"
    })
    const restaurantsArray = results.map((result) => {
        return {
            name: result.name,
            address: result.address,
            url: result.url.pc,
            image: result.image.mobile.l
        }
    })

    return restaurantsArray
}

const registerRestaurant = async(data, groupId, userId) => {
    let fileUrl
    if(data.hotpepperImage){
        fileUrl = data.hotpepperImage
    }
    if(data.restaurantImage.length){
        const file = data.restaurantImage[0]
        const storageRef = ref(storage, "image/restaurantImage/" + file.name)
        fileUrl = await uploadBytes(storageRef, file).then((snapshot) => {
            return ref(storage, process.env.NEXT_PUBLIC_FIREBASE_URL + snapshot.metadata.fullPath);
        }).then((gsReference) => getDownloadURL(gsReference))
    }
    const response = await fetchRequest({
        url: "/api/restaurant/register",
        method: "POST",
        body:{
            restaurantName: data.restaurantName,
            restaurantAddress: data.restaurantAddress,
            restaurantUrl: data.restaurantUrl,
            restaurantImage: fileUrl,
            restaurantRemarks: data.restaurantRemarks,
            groupId,
            userId,
        }
    })

    return response;
}

const deleteRestaurant = async(restaurantId, userId) => {
    const response = await fetchRequest({
        url: "/api/restaurant/" + restaurantId + "/delete",
        method: "DELETE",
        body: { userId }
    })

    return response;
}

const updateRestaurant = async(data, userId, restaurantId) => {
    let fileUrl
    if(data.hotpepperImage){
        fileUrl = data.hotpepperImage
    }
    if(data.restaurantImage.length){
        const file = data.restaurantImage[0]
        const storageRef = ref(storage, "image/restaurantImage/" + file.name)
        fileUrl = await uploadBytes(storageRef, file).then((snapshot) => {
            return ref(storage, process.env.NEXT_PUBLIC_FIREBASE_URL + snapshot.metadata.fullPath);
        }).then((gsReference) => getDownloadURL(gsReference))
    }
    const response = await fetchRequest({
        url: "/api/restaurant/" + restaurantId + "/put",
        method: "PUT",
        body: {
            userId,
            restaurantName: data.restaurantName,
            restaurantAddress: data.restaurantAddress,
            restaurantUrl: data.restaurantUrl,
            restaurantImage: fileUrl,
            restaurantRemarks: data.restaurantRemarks,
        }
    })

    return response;
}

export {
    getRestaurants,
    searchRestaurants,
    registerRestaurant,
    deleteRestaurant,
    updateRestaurant,
}
