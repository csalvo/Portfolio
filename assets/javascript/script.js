var parallaxElements = [];
var windowHeight = 0;

$(document).ready(function() {

    windowHeight = $(window).height();
    $('html,body').scrollTop(1); // auto scroll to top

    // touch event check stolen from Modernizr
    var touchSupported = (('ontouchstart' in window) ||
        window.DocumentTouch && document instanceof DocumentTouch);

    // if touch events are supported, tie our animation to the position to these events as well
    if (touchSupported) {

        $(window)
            .bind('touchmove', function(e) {
                var val = e.currentTarget.scrollY;
                parallax(val);
            });
    }

    $(window)
        .bind('scroll', function(e) {
            var val = $(this).scrollTop();
            parallax(val);
        });

    // update vars used in parallax calculations on window resize
    $(window).resize(function() {
        windowHeight = $(this).height();

        for (var id in parallaxElements) {
            parallaxElements[id].initialOffsetY = $(parallaxElements[id].elm).offset().top;
            parallaxElements[id].height = $(parallaxElements[id].elm).height();
        }
    });


    // get parallax elements straight away as they wont change
    // this will minimise DOM interactions on scroll events
    $('.parallax').each(function() {

        $elm = $(this);
        var id = $elm.data('id');

        // use data-id as key
        parallaxElements[id] = {
            id: $elm.data('id'),
            start: $elm.data('start'),
            stop: $elm.data('stop'),
            speed: $elm.data('speed'),
            elm: $elm[0],
            initialOffsetY: $elm.offset().top,
            height: $elm.height(),
            width: $elm.outerWidth()
        };

    });

    $("#friends_btn").click(function() {
        techDetailsModal(this.id);
    });
    $("#fonts_btn").click(function() {
        techDetailsModal(this.id);
    });
    $("#lab_btn").click(function() {
        techDetailsModal(this.id);
    });

    var techDetailsModal = function(buttonID) {
        switch (buttonID) {
            case "lab_btn":
                $('.modal').html('<div class="modal-content"><span class="close">&times;</span><p>JS HTML etc</p></div>');
                break;
            case "friends_btn":
                $('.modal').html('<div class="modal-content"><span class="close">&times;</span><p>JS HTML NODE etc</p></div>');
                break;
            case "fonts_btn":
                $('.modal').html('<div class="modal-content"><span class="close">&times;</span><p>JS HTML API etc</p></div>');
                break;
        }
        $('.modal').css("display", "block");
    }

    $("#friends_btn").click(function() {
        techDetailsModal(this.id);
    });


    // When the user clicks on <span> (x), close the modal
    $("body").on("click", ".close", function() {
        $('.modal').css("display", "none");
    });


});