$(document).ready(function() {
     $('.button-collapse').sideNav();
     $('.scrollspy').scrollSpy();
     $(".left-col-article").css("height", $(".left-col-article").parent().height());
     $(".right-col-article").css("height", $(".right-col-article").parent().height());
     $("#nav-side-single").stick_in_parent({
          offset_top:80
     });
     $("#nav-side-article").stick_in_parent({
          offset_top:80
     });
     $("#social-icons-horizontal").stick_in_parent({
          offset_top:$(window).height() -70,
          spacer: false,
     });
     hljs.initHighlightingOnLoad();
});