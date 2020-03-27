var travel;
var fever;
var tiredness;
var cough;
var pressure;
var heart;
var breath;
var resp;
var diabetes;
var country;
var age;
const countryCode = localStorage.getItem('Country');
var cases;
var recovered;
var death;

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-data.p.rapidapi.com/country/code?format=undefined&code=" + countryCode,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "c6ec7d9f25msh0283764d9ae1e21p142776jsn1298bb50990e"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    country = response[0].country;
    cases = response[0].confirmed;
    recovered = response[0].recovered;
    death = response[0].deaths;
    printStuff();
});

function printStuff() {
    document.getElementById("Country").innerHTML = country;
    document.getElementById("Active").innerHTML = cases;
    document.getElementById("Recovered").innerHTML = recovered;
    document.getElementById("Deaths").innerHTML = death;
}

function checkup() {
  travel = document.getElementById("travel").checked;
  breath = document.getElementById("breath").checked;
  resp = document.getElementById("resp").checked;
  fever = document.getElementById("fever").checked;
  tiredness = document.getElementById("tiredness").checked;
  cough = document.getElementById("cough").checked;
  pressure = document.getElementById("pressure").checked;
  heart = document.getElementById("heart").checked;
  diabetes = document.getElementById("diabetes").checked;
  age = localStorage.getItem('Age');
  if(travel === true || breath === true || resp === true){
    document.getElementById("checkUPres").innerHTML = "Call your nearest testing center to schedule a check up.";}
  else if(age >= 65 && pressure === true || heart === true || diabetes === true){
    document.getElementById("checkUPres").innerHTML = "Call your nearest testing center to schedule a check up.";}
  else if(tiredness === true && fever === true && cough === true){
    document.getElementById("checkUPres").innerHTML = "Wait for a week, if conditions worsen, schedule a check up.";}
  else{
    document.getElementById("checkUPres").innerHTML = "You seem to be fine, however you should stay indoors as much as you can to avoid contracting the virus.";}
  }