$('.white-box').on('click',function() {
  window.location.href = $(this).attr('href');
})

$('.white-box').hover(function(){
  $(this).css("background-color", "#DCDCDC");
  }, function(){
  $(this).css("background-color", "#FFFFFF");
});

// $('.panel-default').hover(function(){
//     console.log("Here");
//   $(this).css("background-color", "#FFFFFF");
//   }, function(){
//   $(this).css("background-color", "#DCDCDC");
// });
