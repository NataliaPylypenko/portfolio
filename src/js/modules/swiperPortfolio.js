function swiperPortfolio() {

    const showSlider = new Swiper('.portfolio-carousel', {
        loop: true,
        slidesPerView: 5,
        slidesPerGroup: 1,
        // slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1800,
        centeredSlides: true,

        // watchOverflow: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            waitForTransition: false,
        },

        // navigation: {
        //     nextEl: '.showcase-navigation__next',
        //     prevEl: '.showcase-navigation__prev'
        // }
    })

}

export default swiperPortfolio;