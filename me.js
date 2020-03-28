var name, age, gender, country, state, city, zip, street;


function savelocal () {
    name = document.getElementById("fname").value;
    age = document.getElementById("inputage").value;
    gender = document.getElementById("gender").value;
    country = document.getElementById("country").value;
    city = document.getElementById("inputCity").value;
    state = document.getElementById("inputState").value;
    zip = document.getElementById("inputZip").value;
    street = document.getElementById("autocomplete").value;

    localStorage.setItem('fname', JSON.stringify(name));
    localStorage.setItem('inputage', JSON.stringify(age));
    localStorage.setItem('gender', JSON.stringify(gender));
    localStorage.setItem('country', JSON.stringify(country));
    localStorage.setItem('inputCity', JSON.stringify(city));
    localStorage.setItem('inputState', JSON.stringify(state));
    localStorage.setItem('inputZip', JSON.stringify(zip));
    localStorage.setItem('autocomplete', JSON.stringify(street));

}

function validateForm () {
    name = document.getElementById("fname").value;
    if (name == "" ) {
        alert ("Name Must be filled out");
        return false;
    }
    age = document.getElementById("inputage").value;
    if (inputage == "" )  {
        alert ("Age Must be filled out");
        return false;
    }
    gender = document.getElementById("gender").value;
    if (gender == "" ) {
        alert ("Gender Must be filled out");
        return false;
    }
    country = document.getElementById("country").value;
    if (country == "" ) {
        alert ("Country Must be filled out");
        return false;
    }
    city = document.getElementById("inputCity").value;
    if (city == "" ) {
        alert ("City Must be filled out");
        return false;
    }
    state = document.getElementById("inputState").value;
    if (state == "" ) {
        alert ("State/Province/Region Must be filled out");
        return false;
    }
    zip = document.getElementById("inputZip").value;
    if (zip == "" ) {
        alert ("Zip Must be filled out");
        return false;
    }
    street = document.getElementById("autocomplete").value;
    if (street == "" ) {
        alert ("Street Must be filled out");
        return false;
    }

}