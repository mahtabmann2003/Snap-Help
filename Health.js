var docName, docNum, hospName, hospCity;
function submission(){
    docName = document.getElementById("docName").value;
    docNum = document.getElementById("docNum").value;
    hospName = document.getElementById("hospName").value;
    hospCity = document.getElementById("hospCity").value;
    localStorage.setItem(docName, docName);
    localStorage.setItem(docNum, docNum);
    localStorage.setItem(hospName, hospName);
    localStorage.setItem(hospCity, hospCity);
    alert("Thank you for the submission, it will be reviewed and you will hear from us shortly");
}