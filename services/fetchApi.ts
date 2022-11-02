const API = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data"
const TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'


export default function getDataFromAPI() {
    return(fetch(API, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Successfully fetched', data);
    }))
}