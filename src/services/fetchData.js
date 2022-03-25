const base_url = process.env.REACT_APP_BASE_URL;
const fetchData = async (url) => {

    const data = await fetch(`${base_url + url}`, {
        method: "GET",
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
 
export default fetchData;