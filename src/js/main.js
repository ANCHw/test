$(document).ready( function () {
    $('.reports__more').click( function () {
        let target = $(this).siblings('.reports__inner');
        if ($(this).hasClass('active')) {
            target.css({'height':'0', 'opacity':'0'});
            $(this).removeClass('active');
            $(this).find('span').html('Подробнее');
        } else {
            target.css({'height':'auto', 'opacity':'1'});
            $(this).addClass('active');
            $(this).find('span').html('Скрыть');
        }
    })
})