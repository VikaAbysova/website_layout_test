const EL_OFFSET_HEIGHT_COEF = 6;
const WINDOW_INNER_HEIGHT_COEF = 2;

document.addEventListener('DOMContentLoaded', () => {
  const headerTitle = document.querySelector('.slider-title');
  const titleSpans = headerTitle.querySelectorAll('span');
  const header = document.querySelector('.header');
  const slider = document.querySelector('.slider');
  const animationItems = document.querySelectorAll('.animation');

  document.querySelector('.slider-image').classList.add('active');
  document.querySelector('.slider').classList.add('active');

  titleSpans.forEach((span) => {
    span.classList.add('active');
  });

  const animOnScroll = () => {
    let windowCenter =
      window.innerHeight / WINDOW_INNER_HEIGHT_COEF + window.scrollY;
    animationItems.forEach((item) => {
      const itemOffset =
        item.offsetTop + item.offsetHeight / EL_OFFSET_HEIGHT_COEF;

      if (windowCenter >= itemOffset) {
        item.classList.add('active');
        return;
      }
      item.classList.remove('active');
    });
  };

  const onScrollHeader = () => {
    const sliderCenter = slider.offsetHeight / EL_OFFSET_HEIGHT_COEF;
    if (scrollY >= sliderCenter) {
      header.classList.add('fixed');
      return;
    }
    header.classList.remove('fixed');
  };

  window.addEventListener('scroll', () => {
    onScrollHeader();
    animOnScroll();
  });
});
