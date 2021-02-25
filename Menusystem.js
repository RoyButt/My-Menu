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
            
			$('#display').val($('#display').val() +$(this).val());
			a = $(this).val();
			parseInt(a ,10);
			
			result=sum(a);

        }) ;
        $('.btn2').click(function(e) {
            
			$('#display').val($('#display').val() +$(this).val());
			b = $(this).val();
			parseInt(b ,10);
			result=sum(b);
			

        }) ;
        
        
         $('.btn3').click(function(e) {
            
			$('#display').val($('#display').val() +$(this).val());
			c = $(this).val();
			parseInt(c ,10);
			result=sum(c);

        }) ;
        
        
           $('.btn4').click(function(e) {
            
			$('#display').val($('#display').val() +$(this).val());
			d = $(this).val();
			parseInt(d ,10);
			result=sum(d);

        }) ;
        $('.btn5').click(function(e) {
            
			$('#display').val($('#display').val() +$(this).val());
			e = $(this).val();
			parseInt(e ,10);
			result=sum(e);
        }) ;
        
        
         $('.btn6').click(function(e) {
            
			$('#display').val($('#display').val() +$(this).val());
			f = $(this).val();
			parseInt(f ,10);
			result=sum(f);
        }) ;
        
         $('.btn7').click(function(e) {
            
			$('#display').val($('#display').val() +$(this).val());
			g= $(this).val();
			parseInt(g ,10);
			result=sum(g);

        }) ;
        
        
        
        function sum(v){
        
        k=k+v;
        return k;

        
        }
        
        
        
        
        

		$("#clear").click(function() {
			$('#display').val('');
		});
		
		
		
       
    
      
    
    
    
    
    $("#bil").on("click", function(){
       
		 
		 
		 $('#display').val("Your Total Bill is : "+result);
		 
    });

		


		
		
    } );
   
