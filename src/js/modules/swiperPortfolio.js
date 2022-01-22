function swiperPortfolio() {

    let numberOfSlides = document.querySelectorAll('#swiper-portfolio .swiper-slide').length;
    const swiperPortfolio = new Swiper('#swiper-portfolio .swiper-container', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchOverflow: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            waitForTransition: false,
        },
        pagination: numberOfSlides <= 1 ? false : {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                pagination: numberOfSlides <= 4 ? false : {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            },
            992: {
                slidesPerView: 3,
                pagination: numberOfSlides <= 3 ? false : {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                pagination: numberOfSlides <= 2 ? false : {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            }
        },
    });

}

export default swiperPortfolio;