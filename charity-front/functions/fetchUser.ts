const fetchUser =async (cookie: string) =>{
    const result = await fetch('http://localhost:8000/getuserdetails', {
        headers:{
            'cookie': cookie,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({cookie: cookie})
    })
    const json = await result.json();
    return json;
}
export default fetchUser;