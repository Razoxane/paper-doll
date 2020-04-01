
$(function() {
    $('.top_switch').on('click', function(){
        $('.top_switch').removeAttr('selected');
        $(this).attr('selected', 'selected');
        let bg = $($(this).find('img')[0]).attr('src');
        $('.top_container').css('background-image','url(' + bg + ')');
    });

    $('.skirt_switch').on('click', function(){
        $('.skirt_switch').removeAttr('selected');
        $(this).attr('selected', 'selected');
        let bg = $($(this).find('img')[0]).attr('src');
        $('.skirt_container').css('background-image','url(' + bg + ')');
    });

});
