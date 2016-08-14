

document.addEventListener("DOMContentLoaded", function(){
  var display = document.querySelector(".display");
  var operators = document.querySelectorAll(".operators");
  var keys = document.querySelectorAll(".keys");
  var clear = document.querySelector(".clear");
  var expression = "";
  var historyCurrent = "";
  var history = [];



  keys.forEach(function(key){
    key.addEventListener("click", function(e){
      console.log("clicked:" + key.textContent);
      var numberAdd = e.target.textContent;
      display.textContent += numberAdd;
      expression += numberAdd;
      historyCurrent += numberAdd;
    });
  });
  clear.addEventListener("click", function(e){
    display.textContent = "";
    expression = "";
    historyCurrent = "";
  });

  operators.forEach(function(operator){
    operator.addEventListener("click", function(e){
      console.log("clicked:" + operator.textContent);
      var operateDisplay = e.target.textContent;
      if(e.target.textContent === "="){
        display.textContent = eval(expression);
        historyCurrent += "=" + eval(expression);
        history.push(historyCurrent);
        console.log(history);
      }else{
        display.textContent += operateDisplay;
        expression += operateDisplay;
        historyCurrent += operateDisplay;
      };
    });
  });


});
