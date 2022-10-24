import { refs } from './refs';
import { page, fetchImg } from './API';
import { onEmptySearchValueAlert } from './notifix';

export let searchQuery = '';

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick);

function onFormSubmit(event) {
  event.preventDefault();

  refs.loadMoreBtn.classList.add('is-hidden');
  clearMarkup();
  searchQuery = event.target.elements.searchQuery.value;
  if (!searchQuery) {
    onEmptySearchValueAlert();
    clearMarkup();
    return;
  }
  resetPage();
  fetchImg(searchQuery);
}

function onLoadMoreClick() {
  page += 1;
  fetchImg(searchQuery);
}

function resetPage() {
  page = 1;
}

function clearMarkup() {
  refs.gallery.innerHTML = '';
}
