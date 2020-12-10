$(document).ready(function(){

  //Main function for clicking the nav-toggle
  $(".nav-toggle").click(function(){
    if ($(".nav").css("display")=="none") //IF the nav toggle is clicked and the menu is hidden
      { // OPEN MENU
        $(".nav-toggle").toggleClass("clicked");
        $(".nav").css("display", "inherit");
        $(".notnav").css("display", "inherit");
        $(".nav").css("box-shadow", "-19px 0 76px rgba(0,0,0,0.30), -15px 0 24px rgba(0,0,0,0.22)");
        $(".nav-toggle").removeClass("lnr lnr-menu");
        $(".nav-toggle").addClass("lnr lnr-cross");
        $("html").css("overflow","hidden"); //Don't allow scrolling! This prevents issues with toggle colors changing
      }
    else // Otherwise, the menu is visible and the user wishes to close it.
      { //CLOSE MENUE
        $(".nav-toggle").toggleClass("clicked");
        $(".nav").css("display", "none");
        $(".notnav").css("display", "none");
        $(".nav-toggle").removeClass("lnr lnr-cross");
        $(".nav-toggle").addClass("lnr lnr-menu");
        $("html").css("overflow","scroll"); //Allow scrolling again
      }
  });

  $(".nav>a").click(function(){ //If you click a link, close and reset the menu
    $(".nav").css("display", "none");
    $(".nav-toggle").removeClass("lnr lnr-cross");
    $(".nav-toggle").addClass("lnr lnr-menu");
  });

  $(".notnav").click(function(){
    $(".nav-toggle").toggleClass("clicked");
    $(".nav").css("display", "none");
    $(".notnav").css("display", "none");
    $(".nav-toggle").removeClass("lnr lnr-cross");
    $(".nav-toggle").addClass("lnr lnr-menu");
    $("html").css("overflow","scroll"); //Allow scrolling again
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".nav-toggle");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

})
