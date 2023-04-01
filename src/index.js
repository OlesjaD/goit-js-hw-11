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

let valueCountry = "";
refs.form.addEventListener('submit', onSearchQuery);

function onSearchQuery(valueCountry) {
    valueCountry = refs.input.value.trim();
    console.log(valueCountry);
    API.fetchCountries(valueCountry)
    .then(countries => {
        console.log(countries)
        if (valueCountry === 0) {
            clearValueCountries(); 
            Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.");}


        else if (countries.length >= 2 && countries.length <= 10) { clearValueCountries(); renderCountriesList(countries);}
        else if (countries.length === 1) {
            clearValueCountries();
            renderCountryInfo(countries);
        }     
        else {clearValueCountries();  onFetchError();}
    })
    .catch(error =>console.log(error));
}

function renderCountriesList(countries) {
    const markupList = countries
        .map(({name, flags}) => {
            return `
                <div class="photo-card">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                <div class="info">
                    <p class="info-item">
                    <b>Likes</b>
                    </p>
                    <p class="info-item">
                    <b>Views</b>
                    </p>
                    <p class="info-item">
                    <b>Comments</b>
                    </p>
                    <p class="info-item">
                    <b>Downloads</b>
                    </p>
                </div>
                </div>
            `;
        }).join("");
    refs.list.insertAdjacentHTML('beforeend', markupList);
}

function renderCountryInfo(countries) {
    const markupInfo = countries 
        .map(({name, capital, population, flags, languages}) => {
            return `
                <div class="country-info__details">
                <img src="${flags.svg}" alt="flags counrty" width=240px height=140px/>
                <h2>${name.official}</h2>
                
                <p>Capital: ${capital}</p>
                <p>Population: ${population}</p>
                <p>Languages: ${Object.values(languages)}</p>
                </div>
            `;
        }).join("");
    
        refs.info.insertAdjacentHTML('beforeend', markupInfo);
}

function onFetchError() {
    Notiflix.Notify.failure("Oops, there is no country with that name");
}
function clearValueCountries() {
    refs.list.innerHTML = "";
    refs.info.innerHTML = "";
}
