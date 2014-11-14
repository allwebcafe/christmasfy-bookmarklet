$(function() {
   
   $('input[placeholder],textarea[placeholder]').each(function(){
	   var p = $(this).attr('placeholder');
	   
	   $(this).val(p);
	   
	   
   });
   
   $('input[placeholder],textarea[placeholder]').focus(function(){
	   var v = $(this).val();
		 var p = $(this).attr('placeholder');
		 
		 if( v == p) {
			 
			 $(this).val('');
		 }

	   
   });
   
   
    $('input[placeholder],textarea[placeholder]').blur(function(){
	   var v = $(this).val();
		 var p = $(this).attr('placeholder');
		 
		 if( v == "" ) {
			 
			 $(this).val(p);
		 }

	   
   });


});