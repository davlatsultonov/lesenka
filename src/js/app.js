import '../scss/app.scss';

import $ from 'jquery';
import 'jquery-mask-plugin';
import 'slick-slider';
import 'simplelightbox';

$(document).ready(function() {
  $('[type="tel"]').mask('+7 (000) 000-0000');

  $('.menu-toggle-btn').on('click', function () {
    $('.mobile-menu').toggleClass('active');
  });

  $('.look-book--js-slider').slick({
    infinite: false,
    slidesToShow: 3,
    vertical: true,
    slidesToScroll: 1,
    prevArrow: "<img alt='arrow icon' class='slick-prev' src='/local/media/images/icons/arrow-left.svg'>",
    nextArrow: "<img alt='arrow icon' class='slick-next' src='/local/media/images/icons/arrow-right.svg'>",
  });
  $('.banner--js-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
  $('.gallery--js-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.gallery-hash-navigation',
  });
  $('.gallery-hash-navigation').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.gallery--js-slider',
    prevArrow: "<img alt='arrow icon' class='slick-prev' src='/local/media/images/icons/arrow-left.svg'>",
    nextArrow: "<img alt='arrow icon' class='slick-next' src='/local/media/images/icons/arrow-right.svg'>",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  // Custom dropdown
  const selectDefaultItem = $('.select-block__default');
  const selectDropdownList = $('.select-block__list');
  const selectDropdownItems = $('.select-block__list li');

  selectDefaultItem.click(function () {
    $(this).parent().toggleClass('active');
  });

  selectDropdownList.css('width', selectDropdownList.parent().outerWidth() + 'px');

  selectDropdownItems.click(function () {
    const current = $(this).html();
    selectDefaultItem.find('li').html(current);
    $(this).parents('.select-block').removeClass('active');
  });

  // Division tab
  const $divisionTab = $('.tab_js');
  const $stepItems = $('.steps__item');

  $divisionTab.find('.list__item').on('click', function () {
    $(this).parent().find('.list__item').each((index, item) => $(item).removeClass('active'));
    $(this).addClass('active');
  });

  $stepItems.each((i, item) => {
    const stepHeight = $(item).find('.text-with-icon').height() + 40;
    $(item).css('max-height', stepHeight);

    $(item).on('click', function () {
      const $stepDescr = $(this).find('.steps__desc');
      $(this).toggleClass('active');
      $(this).css('max-height', $(this).hasClass('active') ? $stepDescr.height() + stepHeight + 20 : stepHeight);
    });
  });

  // Columns view toggle
  $('.columns-wrapper__btn_js').on('click', function () {
    $(this).closest('.columns-wrapper').find('.columns-wrapper__inner').toggleClass('active');
  });

  // Timetable tab
  if (window.innerWidth <= 1024) {
    const shortHeight = 120;
    const timeTableDays = $('.timetable-day');

    timeTableDays.on('click', function () {
      const height = Array.from(this.children).reduce((acc, curr) => acc + curr.clientHeight + 10, 0);

      timeTableDays.each((index, item) => {
        $(item).removeClass('active').css('max-height', shortHeight);
      });

      if (this.clientHeight > shortHeight) {
        $(this).removeClass('active').css('max-height', shortHeight);
      } else {
        $(this).addClass('active').css('max-height', height);
      }
    });
  }

  new SimpleLightbox('.look-book-lightbox a');
  new SimpleLightbox('.look-book-lightbox-2 a');
});
