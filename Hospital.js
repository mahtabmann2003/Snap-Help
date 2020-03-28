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
const countryCode = localStorage.getItem('country');
var cases;
var recovered;
var death;
var address = localStorage.getItem('autocomplete').split(' ').join('+');
var city = localStorage.getItem('inputCity').split(' ').join('+');
var state = localStorage.getItem('inputState').split(' ').join('+');
var zip = localStorage.getItem('inputZip').split(' ').join('+');
var location1;
var location2;
var location3;
var loaction4;
var location5;

var settingsRONA = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-data.p.rapidapi.com/country/code?format=undefined&code=" + countryCode,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "c6ec7d9f25msh0283764d9ae1e21p142776jsn1298bb50990e"
	}
}

$.ajax(settingsRONA).done(function (response) {
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
    age = localStorage.getItem('inputage');
    if(travel === true || breath === true || resp === true){
        document.getElementById("checkUPres").innerHTML = "Call your nearest testing center to schedule a check up.";}
    else if(age >= 65 && pressure === true || heart === true || diabetes === true){
        document.getElementById("checkUPres").innerHTML = "Call your nearest testing center to schedule a check up.";}
    else if(tiredness === true && fever === true && cough === true){
        document.getElementById("checkUPres").innerHTML = "Wait for a week, if conditions worsen, schedule a check up.";}
    else{
        document.getElementById("checkUPres").innerHTML = "You seem to be fine, however you should stay indoors as much as you can to avoid contracting the virus.";}
}

var settingsHOSP = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.mapquestapi.com/search/v2/radius?origin=" +
        address + "," + city + "," + state + "+" + zip +
        "&radius=&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C806202&outFormat=json&key=Ad2Dr15l7s5XXGiA5SkKWBalNAPXyeHB",
    "method": "GET",
    "headers": {
    }
}

$.ajax(settingsHOSP).done(function (response) {
    console.log(response);
    location1 = response[0].searchResults[0].name;
    location2 = response[0].searchResults[1].name;
    location3 = response[0].searchResults[2].name;
    location4 = response[0].searchResults[3].name;
    location5 = response[0].searchResults[4].name;
    printStuffHosp();
});

function printStuffHosp() {
    document.getElementById("location1").innerHTML = location1;
    document.getElementById("location2").innerHTML = location2;
    document.getElementById("location3").innerHTML = location3;
    document.getElementById("location4").innerHTML = loaction4;
    document.getElementById("location5").innerHTML = location5;    
}