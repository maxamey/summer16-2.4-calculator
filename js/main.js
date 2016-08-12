

document.addEventListener("DOMContentLoaded", function(){
  var display = document.querySelector(".display");
  var operators = document.querySelectorAll(".operators");
  var keys = document.querySelectorAll(".keys");
  var clear = document.querySelector(".clear");
  var expression = "";

  // var length = keys.length;
  // for (var i = 0; i < length.length; i++) {
  //   keys[i].addEventListener("click", function(){
  //     num = this.value;
  //     output = display += num;
  //     limit = output.length;
  //     if(limit > 13){
  //       output = "";
  //     }
  //
  //   })
  // }



  keys.forEach(function(key){
    key.addEventListener("click", function(e){
      console.log("clicked:" + key.textContent);
      var numberAdd = e.target.textContent;
      display.textContent += numberAdd;
      expression += numberAdd;
    });
  });

  clear.addEventListener("click", function(e){
    display.textContent = "";
    expression = "";
  });

  operators.forEach(function(operator){
    operator.addEventListener("click", function(e){
      console.log("clicked:" + operator.textContent);
      var operateDisplay = e.target.textContent;
      if(e.target.textContent === "="){
        display.textContent = eval(expression);
      }else{
        display.textContent = operateDisplay;
        expression += operateDisplay;

      };
    });
  });


});
