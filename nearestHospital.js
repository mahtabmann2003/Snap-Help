let realAddress = "123 Sesame St."
let realCity = "Kings Park"
let realState = "NY"
let realZip = "11754"

let address = realAddress.split(' ').join('+');
let city = realCity.split(' ').join('+');
let state = realState.split(' ').join('+');
let zip =   realZip.split(' ').join('+');

let location1;
let location2;
let location3;
let location4;
let location5;

var hospitalsAPI = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.mapquestapi.com/search/v2/radius?origin=" +
        address + "," + city + "," + state + "+" + zip +
        "&radius=&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois%7Cgroup_sic_code=?%7C806202&outFormat=json&key=Ad2Dr15l7s5XXGiA5SkKWBalNAPXyeHB",
    "method": "GET",
    "headers": {
    }
}

$.ajax(hospitalsAPI).done(function (response) {
    console.log(response);
    console.log(response.searchResults[0].name);
    console.log(response.searchResults[1].name);
    console.log(response.searchResults[2].name);
    console.log(response.searchResults[3].name);
    console.log(response.searchResults[4].name);
    location1 = response.searchResults[0].name;
    location2 = response.searchResults[1].name;
    location3 = response.searchResults[2].name;
    location4 = response.searchResults[3].name;
    location5 = response.searchResults[4].name;
});