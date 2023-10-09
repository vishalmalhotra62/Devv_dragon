$(document).ready(function () {
  $(".qyt").val(0);
  $(".menu_b").click(function () {
    $(".navs").toggle();
  });

  $(".log_B").click(function () {
    $(this).toggleClass("act");
    $(".sign_B").removeClass("act");
    $(".log_").show();
    $(".sign_").hide();
  });
  $(".sign_B").click(function () {
    $(this).toggleClass("act");
    $(".log_B").removeClass("act");
    $(".sign_").show();
    $(".log_").hide();
  });

  $(".for_btn").click(function () {
    $(".forgot").toggle();
    $(".login").toggle();
  });

  $(".back_l").click(function () {
    $(".forgot").toggle();
    $(".login").toggle();
  });

  $("#dropdownMenuButton1").click(function () {
    if ($(this).hasClass("show")) {
      $(this).find("i").addClass("showw");
    } else {
      $(this).find("i").removeClass("showw");
    }
  });

  $("#navbarDropdownMenuLink").click(function () {
    if ($(this).hasClass("show")) {
      $(this).find("i").addClass("showw");
    } else {
      $(this).find("i").removeClass("showw");
    }
  });
  var c = true;

  $(".fBTN").click(function () {
    $(".filters").toggle();
    if (c) {
      $(this).find("i").removeClass("fa-filter");
      $(this).find("i").addClass("fa-xmark");
      $(this).addClass("activeF");
      c = false;
    } else {
      $(this).find("i").addClass("fa-filter");
      $(this).removeClass("activeF");

      $(this).find("i").removeClass("fa-xmark");
      c = true;
    }
  });

  var v = 0;
  function low(e) {
    var el = $(e).next();
    v = parseInt(el.val());
    if (v > 0) {
      el.val(v - 1);
    }
  }

  function high(e) {
    var el = $(e).prev();
    v = parseInt(el.val());
    if (v >= 0) {
      el.val(v + 1);
    }
  }

  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 100) {
      $(".mynav").addClass("pattBKNav");
      $(".mynav").removeClass("pattBK");
    } else {
      $(".mynav").removeClass("pattBKNav");
      $(".mynav").addClass("pattBK1");
    }
  });
});
