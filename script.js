"use strict";

const tips = document.querySelectorAll(".btn-tips");
const customTips = document.querySelector(".custom");
const bills = document.querySelector(".bill_input");
const numberOfPeople = document.querySelector(".person_count");
const tipPerPerson = document.querySelector(".tip-per-person");
const totalPerPerson = document.querySelector(".total-per-person");
const reset = document.querySelector(".reset");
const error = document.getElementsByClassName("error-message")



const resetInterface = function () {
  numberOfPeople.value = bills.value = "";
  tipPerPerson.innerHTML = "$0.00";
  totalPerPerson.innerHTML = "$0.00";
  bills.classList.remove("hidden");
  customTips.value= ""
  numberOfPeople.classList.remove("hidden");
  bills.classList.remove("hidden2");
  numberOfPeople.classList.remove("hidden2");
  error[0].style.opacity = 0
      error[1].style.opacity =0
};

const calculate = function(acc){
  const tipAmount =
      ((acc / 100) * Number(bills.value)) /
      Number(numberOfPeople.value);
    bills.className = "hidden";
    numberOfPeople.className = "hidden";
    error[0].style.opacity = 0
      error[1].style.opacity =0

    tipPerPerson.innerHTML = `$${tipAmount.toFixed(2)}`;

    const totalAmount = Number(bills.value) / Number(numberOfPeople.value);
    totalPerPerson.innerHTML = `$${totalAmount.toFixed(2)}`;
    
}



//Loop thro
for (let i = 0; i < tips.length; i++) {
  tips[i].addEventListener("click", function (e) {
    let tipPercent = Number(tips[i].innerHTML.replace("%", ""));
    if (numberOfPeople.value != "" && bills.value != "") {
     calculate(tipPercent)

    }else if (numberOfPeople.value === "" && bills.value === ""){
      bills.className ='hidden2'
      numberOfPeople.className ='hidden2'
      error[0].style.opacity = 100
      error[1].style.opacity =100

    }


      // Reset the User Interface
      reset.addEventListener("click", function () {
        resetInterface();
      });
    
  });
}

// Custom input
customTips.addEventListener("input", function () {
  if (numberOfPeople.value != "" && bills.value != "") {

    const tip = Number(customTips.value)

   calculate(tip)

  
    reset.addEventListener("click", function () {
      resetInterface();

      
    });
  }else if (numberOfPeople.value === "" && bills.value === ""){
    bills.className ='hidden2'
    numberOfPeople.className ='hidden2'
    error[0].style.opacity = 100
    error[1].style.opacity =100

    reset.addEventListener("click", function () {
      resetInterface();

    });

  }
});
