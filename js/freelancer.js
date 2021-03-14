/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

 $(document).ready(function() {

     $('.inputAnimate').each(function() {

         var self = $(this);
         var input = self.children('input');
         var span = $('<span />').prependTo(self);
         var div = $('<div />').appendTo(self);
         var em = $('<em />').appendTo(self);

         input.keypress(function (e) {
             if(e.which && e.charCode) {
                 resizeForText(self, span, $(this).val() + String.fromCharCode(e.keyCode | e.charCode));
             }
         });

         input.keyup(function(e) {
             if(e.keyCode === 8 || e.keyCode === 46) {
                 resizeForText(self, span, $(this).val());
             }
         });

         resizeForText(self, span, input.val());

     });

 });

 function resizeForText(self, span, text) {
     text = (!text) ? ' ' : text;
     span.text(text);
     self.css('--offsetLeft', span.width() + 3);
     self.css('--offsetLeftScale', span.width() + 19);
 }


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
