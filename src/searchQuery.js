const API_KEY = '34940882-efdc958859e9672f0dbeb2fd7';
const BASE_URL = "https://pixabay.com/api"


export default class NewsApiService {
    constructor() {
        this.valueSearchQuery = '';
        this.page = 1;
    }

    fetchSearchQuery() {
       return fetch(`${BASE_URL}/?key=${API_KEY}&q=${this.valueSearchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`)
            .then(response => response.json())
            .then(({hits}) => {
                this.page +=1;

                return hits;
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

//     .then(response => { if(!response.ok) {
//         return []}
//     return response.json()}).catch(error => console.log("ERROR!"))
// }
