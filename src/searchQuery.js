const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '34940882-efdc958859e9672f0dbeb2fd7';
const options = {
image_type: "photo",
orientation: "horizontal",
safesearch: "true"
}

function fetchSearchQuery(valueSearchQuery) {
   return fetch(`${BASE_URL}/?key="+API_KEY+"&q="+${valueSearchQuery}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then(response => { if(!response.ok) {
        return []}
    return response.json()}).catch(error => console.log("ERROR!"))
}

export default {fetchSearchQuery};

// fetch('https://pixabay.com/api/?key=34940882-efdc958859e9672f0dbeb2fd7&q=yellow+flowers&image_type=photo')
//     .then(res => res.json())
//     .then(console.log)