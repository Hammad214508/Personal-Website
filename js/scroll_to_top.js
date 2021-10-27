window.onscroll = function(){
  scrollFunction();
};

function scrollFunction(){
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("scroll_top").style.display = "block";
  } else {
    document.getElementById("scroll_top").style.display = "none";
  }
}

function topFunction() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
}
