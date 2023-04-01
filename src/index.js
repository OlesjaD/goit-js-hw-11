import Notiflix from 'notiflix';
import API from './searchQuery'
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import './css/styles.css';

const refs = {
    form: document.querySelector('.search-form'),
    input: document.querySelector('.country-field'),
    btn: document.querySelector('.country-btn'),
    gallery: document.querySelector('.gallery'),
};

// let valueSearchQuery = "";
refs.form.addEventListener('submit', onSearchQuery);

function onSearchQuery(e) {
    e.preventDefault();
    let valueSearchQuery = e.currentTarget.elements.searchQuery.value;

    const API_KEY = '34940882-efdc958859e9672f0dbeb2fd7';
    const URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent;

    
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${valueSearchQuery}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then(response => response.json())
    .then(console.log)





    // valueSearchQuery = refs.input.value.trim();
    // console.log(valueSearchQuery);
    // API.fetchSearchQuery(valueSearchQuery)
    // .then(countries => {
    //     console.log(countries)
    //     if (valueSearchQuery === 0) {
    //         clearValueCountries(); 
    //         Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.");}


//         else if (countries.length >= 2 && countries.length <= 10) { clearValueCountries(); renderCountriesList(countries);}
//         else if (countries.length === 1) {
//             clearValueCountries();
//             renderCountryInfo(countries);
//         }     
//         else {clearValueCountries();  onFetchError();}
    // })
    // .catch(error =>console.log(error));
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
