import { keywords, loading, perPage, searchImg, seeMoreFunction, errorMessage, errorSeeMore } from './js/pixabay-api';
import { gallery, markUp } from "./js/render-functions";

const formSearch = document.querySelector('.form-search');
const showMoreBtn = document.querySelector('.btn-more');

let page = 1;
let keyForSearch;

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();

    gallery.innerHTML = '';
    
    if (keywords.value) {
        loading.classList.remove('visually-hidden');
        keyForSearch = encodeURIComponent(keywords.value);
        localStorage.setItem("KEY_FOR_SEARCH", keyForSearch);

        searchImg()
            .then(data => {
                if (data.totalHits > 0) {
                    if (data.totalHits > (page * perPage)) {
                        showMoreBtn.classList.remove('visually-hidden');
                    }; 
                    return data.hits;
                };
            })
            .then((images) => {
                markUp(images);
            })
            .catch(() => {
                localStorage.removeItem('KEY_FOR_SEARCH');
                errorMessage();
            })
            .finally(() => {
                formSearch.reset();
            });
    };
});

showMoreBtn.addEventListener('click', (event) => {
    event.preventDefault();

    seeMoreFunction()
        .then((images) => {
            markUp(images);
        })
        .catch(() => {
            showMoreBtn.classList.add('visually-hidden');
            loading.classList.add('visually-hidden');
            errorSeeMore();
            page = 1;
            localStorage.removeItem('KEY_FOR_SEARCH');
        });
});