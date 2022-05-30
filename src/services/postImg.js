const base_url = process.env.REACT_APP_BASE_URL;
const postImg = async (url, imgData) => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    const data = await fetch(`${base_url + url}`, {
        method: "PUT",
        headers: {
            'Authorization': `Bearer ${access_token}`
        },
        body: imgData
    })
    .then(res => {
        if (res.status === 406) {
            const status = fetch(`${base_url}/auth/refreshToken`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    refresh_token
                })
            })
            .then(res => res.json())
            .then(result => {
                localStorage.setItem("access_token", `${result.data.access_token}`);
                localStorage.setItem("refresh_token", `${result.data.refresh_token}`);
            })
            .then(() => {
                return 'token_expired'
            })
            return status
        } else {
            return res.json()
        }
    })
    .then(result => {
        return result
    })

    if (data === 'token_expired') {
        return postImg(url, imgData)
    } else {
        return data;
    }
}
 
export default postImg;