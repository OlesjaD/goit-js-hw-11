export default class NewsApiService {
    constructor() {
        this.valueSearchQuery = '';
        this.page = 1;
    }

    fetchSearchQuery() {
        // console.log(this);
        const API_KEY = '34940882-efdc958859e9672f0dbeb2fd7';
        const URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent;

    
       return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${this.valueSearchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`)
            .then(response => response.json())
            .then(data => {
                this.page +=1;

                return data.hits;
            })
    }

    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.valueSearchQuery;
    }
    set query(newQuery) {
        this.valueSearchQuery = newQuery;
    }
}


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



// fetch('https://pixabay.com/api/?key=34940882-efdc958859e9672f0dbeb2fd7&q=yellow+flowers&image_type=photo')
//     .then(res => res.json())
//     .then(console.log)