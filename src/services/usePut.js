const usePut = (url, body) => {
    const data = await fetch(url, {
        method: "PUT",
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
 
export default usePut;