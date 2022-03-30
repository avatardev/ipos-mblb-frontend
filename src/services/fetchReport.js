const base_url = process.env.REACT_APP_BASE_URL;
const fetchReport = async (url) => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    fetch(`${base_url + url}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }
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
            return res.blob();
        }
    })
    .then(blob => {
        if (blob === 'token_expired') {
            return fetchReport(url)
        } else {

            const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = "trasaksi.csv";
                    document.body.appendChild(a); 
                    a.click();    
                    a.remove(); 
        }
    })
}
 
export default fetchReport;