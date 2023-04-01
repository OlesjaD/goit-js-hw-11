import Notiflix from 'notiflix';
import NewsApiService from './searchQuery'
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import './css/styles.css';

const refs = {
    form: document.querySelector('.search-form'),
    input: document.querySelector('.country-field'),
    btnSubmit: document.querySelector('.country-btn'),
    gallery: document.querySelector('.gallery'),
    btnLoadMore: document.querySelector('.load-more'),
};

const newsApiService = new NewsApiService();

refs.form.addEventListener('submit', onSearchQuery);
refs.btnLoadMore.addEventListener('click', onLoadSearch);

function onSearchQuery(e) {
    e.preventDefault();
    newsApiService.valueSearchQuery = e.currentTarget.elements.searchQuery.value;
    newsApiService.resetPage();
    newsApiService.fetchSearchQuery().then(hits => console.log(hits));



    // valueSearchQuery = refs.input.value.trim();
    // console.log(valueSearchQuery);
    // API.fetchSearchQuery(valueSearchQuery)
    // .then(countries => {
    //     console.log(countries)
        // if (this.valueSearchQuery === 0) {
    //         clearValueCountries(); 
            // Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.");}


//         else if (countries.length >= 2 && countries.length <= 10) { clearValueCountries(); renderCountriesList(countries);}
//         else if (countries.length === 1) {
//             clearValueCountries();
//             renderCountryInfo(countries);
//         }     
//         else {clearValueCountries();  onFetchError();}
    // })
    // .catch(error =>console.log(error));
}

function onLoadSearch() {
    newsApiService.fetchSearchQuery().then(hits => console.log(hits));
}

// function renderCountriesList(countries) {
//     const markupList = countries
//         .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
//             return `
//                 <div class="photo-card">
//                 <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//                 <div class="info">
//                     <p class="info-item">
//                     <b>Likes: ${likes}</b>
//                     </p>
//                     <p class="info-item">
//                     <b>Views: ${views}</b>
//                     </p>
//                     <p class="info-item">
//                     <b>Comments: ${comments}</b>
//                     </p>
//                     <p class="info-item">
//                     <b>Downloads: ${downloads}</b>
//                     </p>
//                 </div>
//                 </div>
//             `;
//         }).join("");
//     refs.list.insertAdjacentHTML('beforeend', markupList);
// }



// function onFetchError() {
//     Notiflix.Notify.failure("Oops, there is no country with that name");
// }
// function clearValueCountries() {
//     refs.list.innerHTML = "";
//     refs.info.innerHTML = "";
// }
