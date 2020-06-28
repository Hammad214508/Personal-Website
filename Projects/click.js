$('.white-box').on('click',function() {
  window.location.href = $(this).attr('href');
})

$('.white-box').hover(function(){
  $(this).css("background-color", "#DCDCDC");
  }, function(){
  $(this).css("background-color", "#FFFFFF");
});
