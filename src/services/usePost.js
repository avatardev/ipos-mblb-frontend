const usePost = async (url, body) => {

    const data = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': null
        },
        body: JSON.stringify({...body})
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('post data failed')
        }
        return res.json()
    })
    .then(result => {
        return result
    })

    return data;
}
 
export default usePost;