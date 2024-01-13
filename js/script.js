$(document).ready(function(){

    var wh = $(window).height();
    var ww = $(window).width();
    
    $(window).scroll(function(){
        let sct = $(window).scrollTop();

        if(sct >= 300){
            $('.top-btn').fadeIn();
        }else if(sct < 300){
            $('.top-btn').fadeOut();
        }

        if(wh >= 0 && sct < wh){
            $('.menu').eq(0).addClass('on');
            $('.menu').eq(0).siblings().removeClass('on');
        }else if(sct >= wh && sct < wh*2){
            $('.menu').removeClass('on');
            $('.menu').eq(1).addClass('on');
        }else if(sct >= wh*2 && sct < wh*3){
            $('.menu').removeClass('on');
            $('.menu').eq(2).addClass('on');
        }else if(sct >= wh*6 && sct < wh*7){
            $('.menu').removeClass('on');
            $('.menu').eq(3).addClass('on');
        }
    });


    $('.welcome-window .window').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings('.window-line').children('span').addClass('active');
    });

    $('.welcome-window .window').mouseleave(function(){
        $(this).removeClass('active');
        $(this).siblings('.window-line').children('span').removeClass('active');
    });


    $('.home-img').click(function(){
        $('.window').removeClass('active');
        $('.window-line').children('span').removeClass('active');
    });


    $('.header .main-menu .menu-wrap li').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.header .main-menu .menu-wrap li').mouseleave(function(){
        $(this).removeClass('active');
    });

    $('.profile .right .picture .name').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings('.mypicture').addClass('active');
    });

    $('.profile .right .picture .name').mouseleave(function(){
        $(this).removeClass('active');
        $(this).siblings('.mypicture').removeClass('active');
    });

    $('.profile .right .picture').mouseenter(function(){
        $(this).children('.name').addClass('active');
        $(this).children('.mypicture').addClass('active');
    });

    $('.profile .right .picture').mouseleave(function(){
        $(this).children('.name').removeClass('active');
        $(this).children('.mypicture').removeClass('active');
    });

    $('.portfolio .bottom .renewal-list li').click(function(){
        $('.portfolio .modal').addClass('active');

        const tab = $(this).attr('data-tab');

        $('.portfolio .modal .top li').removeClass('active');
        $(`#${tab}`).addClass('active');
    });

    $('.etc .etc-list .etc-txt .view').click(function(){
        $(this).parent('.etc-txt').siblings('.modal').addClass('active');
    });

    $('.etc .modal .close').click(function(){
        $(this).parent('.etc .modal .black-bg').parent('.etc .modal').removeClass('active');
    });

    $('.etc .modal .black-bg').click(function(){
        $(this).parent('.etc .modal').removeClass('active');
    });

    $('.portfolio .modal .close').click(function(){
        $(this).parent('.portfolio .modal').removeClass('active');
    });

    $('.portfolio .modal .black-bg').click(function(){
        $(this).parent('.portfolio .modal').removeClass('active');
    });


    $('.portfolio .bottom .renewal-list li').mouseleave(function(){
        $(this).siblings().removeClass('on');
    });

    $('.hamburger').click(function(){
        $(this).toggleClass('active');
        $('.mobile-menu').slideToggle();
    });


    
    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
    });

    AOS.init({
        disable: window.innerWidth < 780
    }); 

    // $(".menu").each(function(event){
    //    event.preventDefault();
    //    x = $(this).attr("href");
    // });

});