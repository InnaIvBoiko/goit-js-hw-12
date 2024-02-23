import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import ErrorIcon from '../img/error.svg';

const keywords = document.querySelector('.keywords');

const API_KEY = '42438077-634a4b32cfcaa96ebaa8c4719';
const API_URL = 'https://pixabay.com/api/';

async function searchImg() {
    const loading = document.querySelector('.loading');
    const QUERY = encodeURIComponent(keywords.value);
    const URL = `${API_URL}?key=${API_KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`;
    
    const response = await axios.get(URL);
    loading.classList.add('visually-hidden'); 

    return response.data;
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

export { keywords, searchImg, errorMessage };