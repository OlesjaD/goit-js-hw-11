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

    clearValueSearch();
    newsApiService.valueSearchQuery = e.currentTarget.elements.searchQuery.value;
    if(newsApiService.query === '') {
        Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.");
        return;
    }
    newsApiService.resetPage();
    newsApiService.fetchSearchQuery().then(renderQueryList);
}

function onLoadSearch() {
    newsApiService.fetchSearchQuery().then(renderQueryList);
}

function renderQueryList(hits) {
    const markupList = hits
        .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
            return `
                <div class="photo-card">
                    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                    <div class="info">
                        <p class="info-item">
                        <b>Likes: ${likes}</b>
                        </p>
                        <p class="info-item">
                        <b>Views: ${views}</b>
                        </p>
                        <p class="info-item">
                        <b>Comments: ${comments}</b>
                        </p>
                        <p class="info-item">
                        <b>Downloads: ${downloads}</b>
                        </p>
                    </div>
                </div>
            `;
        }).join("");
    refs.gallery.insertAdjacentHTML('beforeend', markupList);

    // refs.gallery.addEventListener('click', onGalleryClick);

    // function onGalleryClick (e) {
    // if (e.target.nodeName !== 'IMG') {
    //     return;
    // }
    // var lightbox = new SimpleLightbox('.gallery a', {captionsData: '${largeImageURL}', captionDelay: 250,});
    // }
}

function clearValueSearch() {
    refs.gallery.innerHTML = "";
}
