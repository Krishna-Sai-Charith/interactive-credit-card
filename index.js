document.addEventListener("DOMContentLoaded", function () {
    let numberError = false;
    let cvcError = false;
    let yearError = false;
    let monthError = false;// New variable for month validation
    let userNameError=false;
    
    const detailsDiv=document.getElementById("details");
    const cardNumberOncard=document.getElementById("card-number-oncard");
    const cardHoldernameOncard=document.getElementById("card-holder-name-oncard");
    const monthOncard=document.getElementById("month-oncard");
    const yearOncard=document.getElementById("year-oncard");
    const cvcOncard=document.getElementById("cvc-oncard");
    const userNameInput=document.getElementById("card-holder-name"); 
    const cardNumInput = document.getElementById("card-number");
    const userNumber = document.getElementById("userNumber");
    const cvcInput = document.getElementById("cvc");
    const cvcNum = document.getElementById("cvc-num");
    const cardYearInput = document.getElementById("card-year");
    const cardMonthInput = document.getElementById("card-month");
    const yearErrorLabel = document.getElementById("date-mm-yy");
    const confirmButton = document.getElementById("confirm");
    const thankYou = document.getElementById("thankyou");
    const userNameErrorLabel=document.getElementById("UserNameErrorLabel");
    const continuebtn=document.getElementById("continue");

    cardNumInput.addEventListener("input", validateNumber);
    userNameInput.addEventListener("input",validateUsername);
    cvcInput.addEventListener("input", validateCVC);
    cardYearInput.addEventListener("input", validateYear);
    cardMonthInput.addEventListener("input", validateMonth); // Add input event listener for month

    function validateNumber() {
        let userNumberValue = cardNumInput.value.replace(/\D/g, "");
        if (userNumberValue === "") {
            userNumber.style.display = "block";
            numberError = false;
        } else if (userNumberValue.length !== 16) {
            userNumber.style.display = "block";
            numberError = false;
        } else {
            userNumber.style.display = "none";
            numberError = true;
        }

        cardNumInput.value = formatCardNumber(userNumberValue);
    }

    function validateUsername(){
      let userNameValue=userNameInput.value;
      if(userNameValue ===""){
        userNameError=false;
        userNameErrorLabel.style.display="block";
      }
      else if (/[^a-zA-Z]/.test(userNameValue)) {
        userNameError=false;
        userNameErrorLabel.style.display="block";
    }
    else{
        userNameError=true;
        userNameErrorLabel.style.display="none";
    }

    }

    function formatCardNumber(number) {
        return number.replace(/(\d{4})/g, "$1 ").trim();
    }

    function validateCVC() {
        let cvcValue = cvcInput.value;
        if (cvcValue === "") {
            cvcNum.style.display = "block";
            cvcError = false;
        } else if (!/^\d{3}$/.test(cvcValue)) {
            cvcNum.style.display = "block";
            cvcError = false;
        } else {
            cvcNum.style.display = "none";
            cvcError = true;
        }
    }

    function validateYear() {
        let yearValue = cardYearInput.value;
        if (yearValue === "") {
            yearErrorLabel.style.display = "block";
            yearError = false;
        } 
        else if(yearValue>75 || yearValue<23){
            yearErrorLabel.style.display="block";
           yearError=false;
        }else {
            yearErrorLabel.style.display = "none";
            yearError = true;
        }
    }

    function validateMonth() {
        let monthValue = cardMonthInput.value;
        if (monthValue === "") {
            yearErrorLabel.style.display = "block";
            monthError = false;
        } else if(monthValue>12 || monthValue<1){
            yearErrorLabel.style.display="block"
           monthError=false;
        }
        else {
            yearErrorLabel.style.display = "none";
            monthError = true;
        }
    }

    userNameInput.addEventListener("input",()=>{
        cardHoldernameOncard.textContent=userNameInput.value;
    })
    cardNumInput.addEventListener("input",()=>{
       cardNumberOncard.textContent=cardNumInput.value;
    })
    cardMonthInput.addEventListener("input",()=>{
        monthOncard.textContent=cardMonthInput.value;
    })
    cardYearInput.addEventListener("input",()=>{
        yearOncard.textContent=cardYearInput.value;
    })
    cvcInput.addEventListener("input",()=>{
        cvcOncard.textContent=cvcInput.value;
    })
    
    continuebtn.addEventListener("click",function(){
        location.reload(true);
    })
    

    confirmButton.addEventListener("click", function () {
        if (numberError && cvcError && yearError && monthError && userNameError) {
            thankYou.style.display = "block";
            detailsDiv.style.display="none";
        }
        else{
            yearErrorLabel.style.display="block";
            userNumber.style.display = "block";
            userNameErrorLabel.style.display="block";
            cvcNum.style.display = "block";
        }
    });
});