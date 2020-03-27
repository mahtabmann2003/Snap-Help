const countryCode = "ca";

let confirmedCases;
let recoveredCases;
let deathsCases;
let country;

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
    confirmedCases = response[0].confirmed;
    recoveredCases = response[0].recovered;
    deathsCases = response[0].deaths;
    printStuff();
});

function printStuff() {
    document.getElementById("country").innerHTML = country;
    document.getElementById("confirmed").innerHTML = confirmedCases;
    document.getElementById("recovered").innerHTML = recoveredCases;
    document.getElementById("deaths").innerHTML = deathsCases;

    console.log(country);
    console.log(confirmedCases);
    console.log(recoveredCases);
    console.log(deathsCases);
}