
$(document).ready(function(){
    $(".accordion-item").click(function(){
      // Reset
      $( ".accordion-item" ).removeClass( "border" )
      $( ".accordion-item" ).prev( ".accordion-item" ).children( ).children( ).removeClass( "previous" );
      // Fix lines 
      $( this ).prev( ".accordion-item" ).children( ).children( ).addClass("previous");
      $( this ).addClass( "border" );
    });
});
