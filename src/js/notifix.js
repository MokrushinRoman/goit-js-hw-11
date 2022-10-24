import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function onSearchSuccessAlert(quantity) {
  Notify.info(`Hooray! We found ${quantity} images.`);
}

export function onSearchFailureAlert() {
  Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

export function onSearchListEndingAlert() {
  Notify.info(`We're sorry, but you've reached the end of search results.`);
}

export function onEmptySearchValueAlert() {
  Notify.failure('Enter some value please.');
}
