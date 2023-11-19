import { fetchRequest} from "./fetch";

//投稿登録
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

//投稿取得
const getTimeline = async(groupId) => {
    const posts = await fetchRequest({
        url: "/api/post/" + groupId + "/getTimeline",
        method: "GET",
        element: "posts",
    })

    return posts;
}

//投稿削除
const deletePost = async(userId, postId) => {
    const response = await fetchRequest({
        url: "/api/post/" + postId + "/delete",
        method: "DELETE",
        body: { userId },
    })

    return response;
}

//投稿更新
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