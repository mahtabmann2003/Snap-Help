function searchgrocery(){
	var inputsearch = document.getElementById("search").value;
	var possibilities = [];
	for (i = 0; i <25; i++){
		x = i.toString()
		possibilities[i] = document.getElementById(x).innerHTML;
		if (inputsearch == possibilities[i]){
			location.href = "grocery.html#" + x
		} 
	}
}

function addtocart(){
	
}