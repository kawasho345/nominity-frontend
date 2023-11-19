//fetchのラップ関数
const fetchRequest = async(request) => {
    const {
        url,
        method,
        mode,
        cache,
        credentials,
        headers,
        redirect,
        refirrerPolicy,
        body,
        element,
    } = request

    const response = await fetch(process.env.NEXT_PUBLIC_HOST_URL + url, {
        method: method,
        mode: mode || "cors",
        cache: cache || "no-store",
        credentials: credentials || "same-origin", 
        headers: headers,
        redirect: redirect || "follow",
        referrerPolicy: refirrerPolicy || "no-referrer",
        body: JSON.stringify(body),
    }).catch((error) => {
        return { status: 500, error: error };
    })

    const data = await response.json();
    data.status = response.status

    //elementの指定があり、かつステータスが200の時だけ直接値を返す
    if(element && response.ok){
        return data[element]
    }
    return data
}
export { fetchRequest }