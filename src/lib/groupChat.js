import { fetchRequest} from "./fetch";

const registerPost = async(data, userId, groupId) => {
    const response = await fetchRequest({
        url: "/api/post/register",
        method: "POST",
        body: {
            userId,
            groupId,
            postContent: data.postContent,
        }
    })

    return response;
}

const getTimeline = async(groupId) => {
    const posts = await fetchRequest({
        url: "/api/post/" + groupId + "/getTimeline",
        method: "GET",
        element: "posts",
    })

    return posts;
}

const deletePost = async(userId, postId) => {
    const response = await fetchRequest({
        url: "/api/post/" + postId + "/delete",
        method: "DELETE",
        body: { userId },
    })

    return response;
}

const updatePost = async(data, userId, postId) => {
    const response = await fetchRequest({
        url: "/api/post/" + postId + "/put",
        method: "PUT",
        body: {
            userId,
            postContent: data.postContent,
        }
    })

    return response;
}

export {
    registerPost,
    getTimeline,
    deletePost,
    updatePost,
}