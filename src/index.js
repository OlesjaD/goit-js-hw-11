import Notiflix from 'notiflix';
import NewsApiService from './searchQuery';
import './css/styles.css';

const refs = {
    form: document.querySelector('.search-form'),
    input: document.querySelector('.country-field'),
    btnSubmit: document.querySelector('.country-btn'),
    gallery: document.querySelector('.gallery'),
    btnLoadMore: document.querySelector('.load-more'),
};

hideLoadBtn();
const newsApiService = new NewsApiService();

refs.form.addEventListener('submit', onSearchQuery);
refs.btnLoadMore.addEventListener('click', onLoadSearch);

async function onSearchQuery(e) {
    e.preventDefault();
    
    clearValueSearch();
    newsApiService.valueSearchQuery = e.currentTarget.elements.searchQuery.value.trim();
    if(newsApiService.query === '') {
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        return;
    }
    newsApiService.resetPage();
    newsApiService.query !== '';
    hideLoadBtn();
    const {hits, total} = await newsApiService.fetchSearchQuery();

    renderQueryList(hits);
    showLoadBtn();
    
      if (hits.length >= total) {
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
        hideLoadBtn();
      }
}

function onLoadSearch() {
     newsApiService.fetchSearchQuery()
        .then(({hits}) => {
            renderQueryList(hits);
            showLoadBtn();
            if (hits.length === 0) {
                Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
                hideLoadBtn();
            }
        })
        .catch(error => {
            console.error(error);
        });
}

function renderQueryList(hits) {
    const markupList = hits
        .map(({webformatURL, tags, likes, views, comments, downloads}) => {
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
        }).join('');
    refs.gallery.insertAdjacentHTML('beforeend', markupList);
}

function clearValueSearch() {
    refs.gallery.innerHTML = "";
}

function hideLoadBtn() {
    refs.btnLoadMore.classList.add('is-hidden');
}

function showLoadBtn() {
    refs.btnLoadMore.classList.remove('is-hidden');
}
