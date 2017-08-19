$(document).ready(function(){

  // toggle and delete
  $('.course').on('click', function(){
    $(this).find('.detail').slideToggle();
  });

  $('.course .delete').on('click', function(e){
    alert("about to delete");
    e.stopPropagation();

  });

  //stop propagation
  // $('.course').on('click', function(){
  //   $(this).find('.detail').slideToggle();
  // });

  // $('.course .delete').on('click', function(event){
  //   alert("about to delete");
  // event.stopPropagation();

  // });
});