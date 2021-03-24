    var a= 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e= 0;
    var f = 0;
    var g = 0;
    var k=0;
    var result=0;
    
    $(document).ready(function(e) {
    
      $('.btn1').click(function(e) {
            
			$('#myOutput').val($('#myOutput').val()+"Water :  "+$(this).val()+" ");
			 
			a =parseInt($(this).val(),10);
			
			result=sum(a);

        }) ;
        $('.btn2').click(function(e) {
            
			$('#myOutput2').val($('#myOutput2').val() +"Hot Wings : "+$(this).val());
			
			b = parseInt($(this).val(),10);
			result=sum(b);
			

        }) ;
        
        
         $('.btn3').click(function(e) {
            
			$('#myOutput3').val($('#myOutput3').val() +"Pizza : "+$(this).val());
			 
			c =parseInt($(this).val(),10);
			result=sum(c);

        }) ;
        
        
           $('.btn4').click(function(e) {
            
			$('#myOutput4').val($('#myOutput4').val() +"Sprite : "+$(this).val());
			 
			d = parseInt($(this).val(),10);
			result=sum(d);

        }) ;
        $('.btn5').click(function(e) {
            
			$('#myOutput5').val($('#myOutput5').val() +"Steaks : "+$(this).val());
			
			e = parseInt($(this).val(),10);
			result=sum(e);
        }) ;
        
        
         $('.btn6').click(function(e) {
            
			$('#myOutput6').val($('#myOutput6').val() +"Burgers : "+$(this).val());
			 
			f = parseInt($(this).val(),10);
			result=sum(f);
        }) ;
        
         $('.btn7').click(function(e) {
            
			$('#myOutput7').val($('#myOutput7').val() +"Coca Cola : "+$(this).val());
			 
			g= parseInt($(this).val(),10);
			result=sum(g);

        }) ;
        
        
        
        function sum(v){
        
        k=k+v;
        return k;

        
        }
        
        
        
        
        

		$("#clear").click(function() {
			
			result=parseInt(0,10);
			$('#myOutput').val('');
			$('#myOutput1').val('');
			$('#myOutput2').val('');
			$('#myOutput3').val('');
			$('#myOutput4').val('');
			$('#myOutput5').val('');
			$('#myOutput6').val('');
			$('#myOutput7').val('');
			
			
			
			
			
		});
		
		
		
       
    
      
    
    
    
    
    $("#bil").on("click", function(){
       
		 
		 
		alert("Your Total Bill is : "+result);
		 
    });

		


		
		
    } );
   
