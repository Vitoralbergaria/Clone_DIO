$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:false
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:7,
            nav:false,
            loop:true
        }
    }
})

