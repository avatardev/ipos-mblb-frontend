const base_url = process.env.REACT_APP_BASE_URL;
const deleteData = async (url) => {

    const data = await fetch(`${base_url + url}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': null
        }
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
 
export default deleteData;