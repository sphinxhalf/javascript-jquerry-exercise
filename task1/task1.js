$(document).ready(function() {
    $('.show-more').on('click', function() {
        var $showMorebutton = $(this);
        var $text = $showMorebutton.prev('.text'); // Get the corresponding paragraph
        $text.toggleClass('expanded');
        if ($text.hasClass('expanded')) {
            $text.css('max-height', 'none');
            $showMorebutton.text('Show Less');
        } else {
            $text.css('max-height', '55px'); // Reset the max height
            $showMorebutton.text('Show More');
            
        }
        console.log("hehe");
    });

});
