import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import ErrorIcon from '../img/error.svg';

const keywords = document.querySelector('.keywords');
const loading = document.querySelector('.loading');

const API_KEY = '42438077-634a4b32cfcaa96ebaa8c4719';
const API_URL = 'https://pixabay.com/api/';
const perPage = 15;
let page = 1;



async function searchImg() {
    page = 1;

    const QUERY = encodeURIComponent(keywords.value);
    const URL = `${API_URL}?key=${API_KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
    
    const response = await axios.get(URL);
    loading.classList.add('visually-hidden'); 

    return response.data;
};

async function seeMoreFunction() {
    loading.classList.remove('visually-hidden');
   
        
    if (page <= (500 / perPage)) {
        page++;
        
        const query = localStorage.getItem('KEY_FOR_SEARCH');

        const URL = `${API_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
    
        const more = await axios.get(URL);
        loading.classList.add('visually-hidden'); 

        return more.data.hits;
    };
};
        

const errorMessage = () =>
    iziToast.show({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fff',
        messageSize: '16',
        backgroundColor: '#EF4040',
        iconUrl: ErrorIcon,
        position: 'topRight',
        close: true,
        layout: 2,
        timeout: 2000
    });


const errorSeeMore = () =>
    iziToast.show({
        message: `We're sorry, but you've reached the end of search results.`,
        messageColor: '#fff',
        messageSize: '16',
        backgroundColor: '#EF4040',
        iconUrl: ErrorIcon,
        position: 'topRight',
        close: true,
        layout: 2,
        timeout: 2000
    });

export { keywords, loading, perPage, searchImg, seeMoreFunction, errorMessage, errorSeeMore };