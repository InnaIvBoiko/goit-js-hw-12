import { keywords, searchImg, errorMessage } from './js/pixabay-api';
import { gallery, markUp } from "./js/render-functions";

const formSearch = document.querySelector('.form-search');
const showMoreBtn = document.querySelector('.btn-more');
let page = 1;

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();

    const loading = document.querySelector('.loading');
    gallery.innerHTML = '';
    page = 1;
    
    if (keywords.value) {
        loading.classList.remove('visually-hidden');

        searchImg()
            .then(data => {
                if (parseInt(data.totalHits) > 0) {
                    showMoreBtn.classList.remove('visually-hidden');
                    return data.hits;
                };
            })
            .then((images) => {
                markUp(images);
            })
            .catch(() => {
                errorMessage();
            })
            .finally(() => {
                formSearch.reset();
            });
    };
   
});

showMoreBtn.addEventListener('click', () => {
    page++;
    
});

