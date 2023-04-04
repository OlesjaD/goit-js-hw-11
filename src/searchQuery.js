import axios from 'axios';

export default class NewsApiService {
    constructor() {
        this.valueSearchQuery = '';
        this.page = 1;
    }

    async fetchSearchQuery() {
        const axiosOptions = {
            method: 'get',
            url: 'https://pixabay.com/api/',
            params: {
                key: '34940882-efdc958859e9672f0dbeb2fd7',
                q: `${this.valueSearchQuery}`,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: `${this.page}`,
                per_page: 40,
            },
        };

        try {
            const response = await axios(axiosOptions);
            const data = response.data;
            console.log(data);
            this.page +=1;
            return data;
        } catch (error) {
            console.error(error);
        }
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



// return axios
    //         .get(`${BASE_URL}/?key=${API_KEY}&q=${this.valueSearchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`)
    //         .then(response => {console.log(response);})
    //         .then((hits) => {
    //             this.page +=1;

    //             return hits;
    //         })
    // }
//     .then(response => { if(!response.ok) {
//         return []}
//     return response.json()}).catch(error => console.log("ERROR!"))
// }

// const API_KEY = '34940882-efdc958859e9672f0dbeb2fd7';
// const BASE_URL = "https://pixabay.com/api"
