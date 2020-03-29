function background(){
	var cart = []
	localStorage.setItem("cart",JSON.stringify(cart))
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

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
	var inputamount = document.getElementById("input0").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Potatoes",
		price: 0.5,
		quantity: inputamount,
		total: 0.5 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input0").value = ""
		alert("Please enter a number only")
	}
}
function addtocart1(){
	var inputamount = document.getElementById("input1").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Onions",
		price: 0.6,
		quantity: inputamount,
		total: 0.6 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
	document.getElementById("input1").value = ""
	alert("Please enter a number only")
}
}
function addtocart2(){
	var inputamount = document.getElementById("input2").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Cucumbers",
		price: 3,
		quantity: inputamount,
		total: 3 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input2").value = ""
		alert("Please enter a number only")
	}
}
function addtocart3(){
	var inputamount = document.getElementById("input3").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push({
		name:"Lettuce",
		price: 2,
		quantity: inputamount,
		total: 2 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input3").value = ""
		alert("Please enter a number only")
	}
}
function addtocart4(){
	var inputamount = document.getElementById("input4").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Garlic",
		price: 2,
		quantity: inputamount,
		total: 2 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input4").value = ""
		alert("Please enter a number only")
	}
}
function addtocart5(){
	var inputamount = document.getElementById("input5").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Saladmix",
		price: 4,
		quantity: inputamount,
		total: 4 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input5").value = ""
		alert("Please enter a number only")
	}
}
function addtocart6(){
	var inputamount = document.getElementById("input6").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Apples",
		price: 1.2,
		quantity: inputamount,
		total: 1.2 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input6").value = ""
		alert("Please enter a number only")
	}
}

function addtocart7(){
	var inputamount = document.getElementById("input7").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Oranges",
		price: 1.5,
		quantity: inputamount,
		total: 1.5 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input7").value = ""
		alert("Please enter a number only")
	}
}
function addtocart8(){
	var inputamount = document.getElementById("input8").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Bananas",
		price: 0.55,
		quantity: inputamount,
		total: 0.55 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input8").value = ""
		alert("Please enter a number only")
	}
}
function addtocart9(){
	var inputamount = document.getElementById("input9").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Lemons",
		price: 2,
		quantity: inputamount,
		total: 2 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input9").value = ""
		alert("Please enter a number only")
	}
}


function addtocart10(){
	var inputamount = document.getElementById("input10").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Milk",
		price: 4.5,
		quantity: inputamount,
		total: 4.5 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input10").value = ""
		alert("Please enter a number only")
	}
}
function addtocart11(){
	var inputamount = document.getElementById("input11").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Cheese",
		price: 5,
		quantity: inputamount,
		total: 5 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input11").value = ""
		alert("Please enter a number only")
	}
}
function addtocart12(){
	var inputamount = document.getElementById("input12").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Beans",
		price: 3,
		quantity: inputamount,
		total: 3 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input12").value = ""
		alert("Please enter a number only")
	}
}

function addtocart13(){
	var inputamount = document.getElementById("input13").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Mac N' Cheese",
		price: 2,
		quantity: inputamount,
		total: 2 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input13").value = ""
		alert("Please enter a number only")
	}
}

function addtocart14(){
	var inputamount = document.getElementById("input14").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Noodles",
		price: 0.4,
		quantity: inputamount,
		total: 0.4 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input14").value = ""
		alert("Please enter a number only")
	}
}
function addtocart15(){
	var inputamount = document.getElementById("input15").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Pasta",
		price: 2,
		quantity: inputamount,
		total: 2 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input15").value = ""
		alert("Please enter a number only")
	}
}
function addtocart16(){
	var inputamount = document.getElementById("input16").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Rice",
		price: 5,
		quantity: inputamount,
		total: 5 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input16").value = ""
		alert("Please enter a number only")
	}
}
function addtocart17(){
	var inputamount = document.getElementById("input17").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Toiletpaper",
		price: 12,
		quantity: inputamount,
		total: 12 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input17").value = ""
		alert("Please enter a number only")
	}
}
function addtocart18(){
	var inputamount = document.getElementById("input18").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Handsoap",
		price: 3,
		quantity: inputamount,
		total: 3 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input18").value = ""
		alert("Please enter a number only")
	}
}

function addtocart19(){
	var inputamount = document.getElementById("input19").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Sanitizer",
		price: 10,
		quantity: inputamount,
		total: 10 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input19").value = ""
		alert("Please enter a number only")
	}
}
function addtocart20(){
	var inputamount = document.getElementById("input20").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Toothpaste",
		price: 1.5,
		quantity: inputamount,
		total: 1.5 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input20").value = ""
		alert("Please enter a number only")
	}
}
function addtocart21(){
	var inputamount = document.getElementById("input21").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Bodysoap",
		price: 4,
		quantity: inputamount,
		total: 4 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input21").value = ""
		alert("Please enter a number only")
	}

}
function addtocart22(){
	var inputamount = document.getElementById("input22").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Spoons and Forks",
		price: 3,
		quantity: inputamount,
		total: 3 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input22").value = ""
		alert("Please enter a number only")
	}
}

function addtocart23(){
	var inputamount = document.getElementById("input23").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Paperplates",
		price: 3,
		quantity: inputamount,
		total: 3 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input23").value = ""
		alert("Please enter a number only")
	}
}

function addtocart24(){
	var inputamount = document.getElementById("input24").value
	if (parseInt(Number.isInteger(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Water Bottle Pack",
		price: 3,
		quantity: inputamount,
		total: 3 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input24").value = ""
		alert("Please enter a number only")
	}
}

function checkout(){
	document.getElementById("myForm").style.display = "block"
	var cart = JSON.parse(localStorage.getItem("cart"))
	var total = 0
	for (i = 0; i<cart.length;i++){
		var name = cart[i].name
		var quantity = cart[i].quantity
		var price = cart[i].price
		var textholder = name + " x " + parseFloat(quantity) + " x $" + parseFloat(price).toFixed(2)
		var p = document.createElement("p");
		var node = document.createTextNode(textholder);
		p.appendChild(node);
		var div = document.getElementById("listing");
		div.appendChild(p);
		total += cart[i].total
	}
	var subtotal = "Subtotal: $" + parseFloat(total).toFixed(2)
	var taxes = "Taxes (13%): $" + (parseFloat(total)*0.13).toFixed(2)
	var total = "Total: $" + (parseFloat(total)*1.13).toFixed(2)
	var p = document.createElement("p");
	var node = document.createTextNode(subtotal);
	p.appendChild(node);
	var div = document.getElementById("listing");
	div.appendChild(p);
	var p = document.createElement("p");
	var node = document.createTextNode(taxes);
	p.appendChild(node);
	var div = document.getElementById("listing");
	div.appendChild(p);
	var p = document.createElement("p");
	var node = document.createTextNode(total);
	p.appendChild(node);
	var div = document.getElementById("listing");
	div.appendChild(p);
}

function formValidationTwo () {
	if ((document.getElementById("checkname").value == null) || (document.getElementById("checkemail").value ==null)||(document.getElementById("checkaddress").value == null) || (document.getElementById("checkcity").value ==null)||(document.getElementById("checkstate").value == null) || (document.getElementById("checkzip").value ==null)||(document.getElementById("checkcardname").value == null) || (document.getElementById("checkcardnum").value ==null)||(document.getElementById("checkexpmonth").value == null) || (document.getElementById("checkexyear").value ==null) || (document.getElementById("checkcvv").value ==null)){
		alert("All Information Must Be Filled Out");
		return false;
	}else {
		alert("Payment was successful");
	}
}
