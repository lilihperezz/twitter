
window.addEventListener("load", function() {
   var button = document.getElementById("calcular");
   button.addEventListener("click", function() {
       	  			      
	function myFunction() {
	var textArea= document.getElementById("textArea").value;
    var newItem = document.createElement("p");
    var textnode = document.createTextNode("Tweet "+ textArea );
    newItem.appendChild(textnode);
    var resultado = document.getElementById("resultado");
    resultado.insertBefore(newItem,resultado.childNodes[0]);
   }
     myFunction();
	});    
});
