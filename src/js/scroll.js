import { refs } from './refs';

export default function scroll() {
  const { height: cardHeight } =
    refs.gallery.firstElementChild.getBoundingClientRect();

  return window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
