function swiperPortfolio() {

    const showSlider = new Swiper('.portfolio-carousel', {
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
        speed: 1800,
        centeredSlides: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
            waitForTransition: false,
        },
        breakpoints: {
            1199: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    })

}

export default swiperPortfolio;