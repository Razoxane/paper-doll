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

    $('.save').on('click', function() {
        html2canvas($("#doll"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
<<<<<<< HEAD

                var theDialog = $('<div id="theDialog" title="Save your Combo!"><p>To save, right-click on the image, and choose <strong>"Save Image As..."</strong> from the context menu.</p><p>After that you can share your combo in <a href="https://www.facebook.com/gwyllemclothing/posts/1520700024772010" target="_blank">this thread on the Gwyllem Facebook page</a>!</p></div>')
                .append(canvas);

=======
                var theDialog = $('<div id="theDialog" title="Save your Combo!"><p>To save, right-click on the image, and choose <strong>"Save Image As..."</strong> from the context menu.</p><p>After that you can share your combo in <a href="https://www.facebook.com/gwyllemclothing/posts/1520700024772010" target="_blank">this thread on the Gwyllem Facebook page</a>!</p></div>')
                .append(canvas);
>>>>>>> 0ca58bf35129171006495dc468b2ca4ee00dcb9d
                theDialog.dialog({
                    modal: true,
                    width: 550,
                    height: 800
                });

            }
        });
    })
});
