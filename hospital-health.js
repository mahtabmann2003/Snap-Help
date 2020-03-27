
var travel;
var fever;
var tiredness;
var cough;
var pressure;
var heart;
var diabetes;
var country;
var age;

function checkup() {
  travel = document.getElementById("travel").checked;
  fever = document.getElementById("fever").checked;
  tiredness = document.getElementById("tiredness").checked;
  cough = document.getElementById("cough").checked;
  pressure = document.getElementById("pressure").checked;
  heart = document.getElementById("heart").checked;
  diabetes = document.getElementById("diabetes").checked;
  country = localStorage.getItem('Country');
  age = localStorage.getItem('Age');
  if(travel === true){
    document.getElementById("checkUPres").innerHTML = "Call your nearest testing center to schedule a check up.";}
  else if(age >= 65 && pressure === true || heart === true || diabetes === true){
    document.getElementById("checkUPres").innerHTML = "Call your nearest testing center to schedule a check up.";}
  else if(tiredness === true && fever === true && cough === true){
    document.getElementById("checkUPres").innerHTML = "Wait for a week, if conditions worsen, schedule a check up.";}
  else{
    document.getElementById("checkUPres").innerHTML = "You seem to be fine, however you should stay indoors as much as you can to avoid contracting the virus.";}
  }