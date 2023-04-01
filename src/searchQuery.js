const BASE_URL = 'https://pixabay.com/api';

API_KEY = '34940882-efdc958859e9672f0dbeb2fd7';
q='${valueCountry}'
image_type="photo",
orientation="horizontal",
safesearch="true"

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.

function fetchCountries(valueCountry) {
   return fetch(`${BASE_URL}?key="+${API_KEY}+"&q="${valueCountry}&options`)
    .then(response => { if(!response.ok) {
        return []}
    return response.json()}).catch(error => console.log("ERROR!"))
}

export default {fetchCountries};