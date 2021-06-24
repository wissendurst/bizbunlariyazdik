const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})



// SIDEBAR ENGELLEME



function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var footer_top = $(".footer").offset().top;
    var div_top = $('header').offset().top;
    var div_height = $(".sidebar").height();
    
    var padding = 20;  
    
    if (window_top + div_height > footer_top - padding)
        $('sidebar').css({top: (window_top + div_height - footer_top + padding) * -1})
    else if (window_top > div_top) {
        $('sidebar').addClass('stick');
        $('sidebar').css({top: 0})
    } else {
        $('sidebar').removeClass('stick');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});