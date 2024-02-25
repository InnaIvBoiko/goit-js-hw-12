import { keywords, loading, page, perPage, searchImg, seeMoreFunction, errorMessage, errorSeeMore } from './js/pixabay-api';
import { gallery, markUp, scroll } from "./js/render-functions";

const formSearch = document.querySelector('.form-search');
const showMoreBtn = document.querySelector('.btn-more');

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    gallery.innerHTML = '';
    
    if (keywords.value) {
        loading.classList.remove('visually-hidden');

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
                scroll();
            })
            .catch(() => {
                errorMessage();
                localStorage.clear();
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
            scroll();
        })
        .catch(() => {
            showMoreBtn.classList.add('visually-hidden');
            loading.classList.add('visually-hidden');
            errorSeeMore();
            localStorage.clear();
        });
});