import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './refs';
import createCardMarkup from './create-markup';
import scroll from './scroll';
import {
  onSearchFailureAlert,
  onSearchListEndingAlert,
  onSearchSuccessAlert,
} from './notifix';

let gallery = new SimpleLightbox('.gallery a');

axios.defaults.baseURL = 'https://pixabay.com';
const API_KEY = '30517244-e729ceb83709aa7ca3195b0ba';

export let page = 1;
let totalImg = 0;

export async function fetchImg(query) {
  const response = await axios.get(
    `/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  );
  totalImg = response.data.totalHits;
  const data = await response.data.hits;
  if (page === 1 && data.length !== 0) {
    onSearchSuccessAlert(totalImg);
  }
  if (data.length === 0) {
    onSearchFailureAlert();
    return;
  }
  data.forEach(picture => {
    createCardMarkup(picture);
  });
  gallery.refresh();
  if (page > 1) {
    scroll();
  }
  refs.loadMoreBtn.classList.remove('is-hidden');
  if (totalImg <= refs.gallery.children.length) {
    refs.loadMoreBtn.classList.add('is-hidden');
    onSearchListEndingAlert();
  }
}
