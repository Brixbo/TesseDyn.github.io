$(document).ready(function(){

  $("#nav-toggle").click(function(){
    if ($(".nav").css("display")=="none"){
      $(".nav").css("display", "inherit");
      $(".nav").css("box-shadow", "-19px 0 76px rgba(0,0,0,0.30), -15px 0 24px rgba(0,0,0,0.22)");
      $("#nav-toggle").removeClass("lnr lnr-menu");
      $("#nav-toggle").addClass("lnr lnr-cross");
    } else {
      $(".nav").css("display", "none");
      $("#nav-toggle").removeClass("lnr lnr-cross");
      $("#nav-toggle").addClass("lnr lnr-menu");
    }
  })

  $(".nav>a").click(function(){
    $(".nav").css("display", "none");
    $("#nav-toggle").removeClass("lnr lnr-cross");
    $("#nav-toggle").addClass("lnr lnr-menu");
  })

  $(window).scroll(function(){
    $(".title").css("top",Math.max(0,250-$(this).scrollTop()));
  });

  $(function () {
  $(document).scroll(function () {
    var $nav = $("#nav-toggle");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

})
