$(document).ready(function(){
    // $('.container div').click(function() {
    //     $(this).toggleClass('active');
    //     $(this).siblings().not(this).toggleClass('hide');
    // });

var modWidth = 1000;
$( ".expandGray" ).one( "click", function() {
  $( this ).width( modWidth ).addClass( "mod" );
  modWidth -= 8;
  $(this).siblings().not(this).toggleClass('hide');
});



		// Set up Sliders
		// **************
		




    // var rowHeight = $(".row").height();
    // console.log(rowHeight);
    // $(".column").height(rowHeight);
    // $(".v_align").height(rowHeight);





});
