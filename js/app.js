window.addEventListener("load", function() {
document.getElementById("count").innerHTML = "140";
   var button = document.getElementById("calcular");
   button.addEventListener("click", function(e) { 
       e.preventDefault(); 


	function myFunction() {
	     var textArea= document.getElementById("textArea").value;
         var newItem = document.createElement("div");
         var textnode = document.createTextNode("Tweet: "+ textArea );
         newItem.appendChild(textnode);
         var resultado = document.getElementById("resultado");
         resultado.insertBefore(newItem,resultado.childNodes[0]);
         
         var fecha = new Date();
         var hora = fecha.getHours();
         var min = fecha.getMinutes();
         	if(min<10){
         		min = "0" + min;
         	}
         var contenedorHora = document.createElement("span");
         contenedorHora.innerText = hora + ":" + min + " ";
         newItem.insertBefore(contenedorHora,newItem.childNodes[0]);
        }
      	 myFunction();
         textArea.value="";
	});    

	textArea.addEventListener("keyup",function(e){
		button.disabled = false;
		var tecla = e.keyCode;
		expandirTextArea (tecla);
		validarContenedor(textArea);
		var limite = 140;
		var longitud = document.getElementById("textArea").value.length;
		var contador =  document.getElementById("count")
        contador.innerText = limite-longitud;
	        if( longitud == 0 ){
	        	 button.disabled = true;
	        }else if(longitud>limite){
	        	 button.disabled = true;
	        }else if(longitud>120){
	             contador.classList.add("turquesa");
	        }else{
	        	 contador.classList.remove("turquesa");
	        
	        }if(longitud>130){
	             contador.classList.add("rojo");
	        }
	        else{
	        	 contador.classList.remove("rojo");
	        }
		});
	
    function expandirTextArea(tecla) {
	     var textArea= document.getElementById("textArea");
         if (tecla == 13) { 	
       	     textArea.rows += 1;     
         }else if(tecla == 8){
         	 textArea.rows -= 1; 
         }if(textArea.rows < 5){
         	 textArea.rows = 4;
         }
    }

    function validarContenedor(textArea){
         var textArea= document.getElementById("textArea");
         if ( textArea.value.length > textArea.rows * textArea.cols){
      		 textArea.rows += 1; 
         }
    }
});