
"use strict";


document.addEventListener('DOMContentLoaded', () => {

    function swipeSlider() {
        const hidroParkingRewiewsSlider = document.querySelector('.hidro-parking-rewiews__slider');
        const swiper = new Swiper(hidroParkingRewiewsSlider, {
            slidesPerView: 3,
            pagination: {
                el: '.swiper-pagination',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return '<span class="hidro-parking-rewiews__navigation-span">' + contentText(current) + '</span>' +
                        '<span class="hidro-parking-rewiews__navigation-span">' + contentText(total) + '</span>';
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                }
            }
        });
    }
    swipeSlider();

    function contentText(n) {
        if (n < 10) {
            return `${n}`;
        } else {
            return n;
        }
    }

    function clickImgSlider() {
        const imgs = document.querySelectorAll('.hidro-parking-rewiews__slide img');
        const modal = document.querySelector('.hidro-parking-modal');
        const modalContent = document.querySelector('.hidro-parking-modal__content');
        const modalClose = document.querySelector('.hidro-parking-modal__close');
        const body = document.body;

        if (imgs.length > 0) {
            for (let index = 0; index < imgs.length; index++) {
                const img = imgs[index];
                const imgCre = document.createElement('img');

                img.addEventListener('click', () => {
                    modal.classList.add('_active');
                    body.classList.add('_active');

                    modalContent.append(imgCre);
                    const src = img.getAttribute('src');
                    imgCre.setAttribute('src', src);
                });
                modalClose.addEventListener('click', () => {
                    modal.classList.remove('_active');
                    body.classList.remove('_active');
                    imgCre.remove();
                });
            }
        }
    }
    clickImgSlider();












});