$(document).ready(function(){
  $.fn.panel_collapse = function(){
    $('.panel-collapse').on('show.bs.collapse', function () {
       $(this).siblings('.panel-heading').addClass('active');
     });

     $('.panel-collapse').on('hide.bs.collapse', function () {
       $(this).siblings('.panel-heading').removeClass('active');
     });
  }



 var pageready = (function(){
     var thispage = {};
     thispage.init = function(){
      $.fn.panel_collapse()
     };
     return thispage;
 })();

 pageready.init();

});
