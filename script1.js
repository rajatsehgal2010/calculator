
	function myfunc(){
    var theInput = document.getElementById("display").value;
    
    theInput = theInput.substr(0, theInput.length - 1);
    document.getElementById("display").value=theInput;
}