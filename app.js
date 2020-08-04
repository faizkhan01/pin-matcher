if(document.getElementById("randomNum").innerText ==""){
    document.getElementById("submit").disabled = true;
    document.getElementById("leftAction").innerText = "";
    document.getElementById("calculatorText").innerText = "";
}

//Pin Generate Function............

var calcTextCount = 0;
const randomNumGenerator = document.getElementById("randomNumGenerator");
randomNumGenerator.addEventListener("click",function(){
let randomValue = Math.floor(Math.random() * 9000) + 1000;
document.getElementById("randomNum").value = randomValue;
document.getElementById("submit").disabled = false;
document.getElementById("calculatorText").value = "";
document.getElementById("leftAction").innerText = "3 try left";
document.getElementById("successMessage").style.display = "none";
document.getElementById("errorMessage").style.display = "none";
document.getElementById("pinGeneratorText").style.display = "none";
calcTextCount =  0;

});

// Calculator Function...........

var number = document.getElementsByClassName("number");
for(var i = 0; i<number.length ;i++){
number[i].addEventListener('click',function(){
    var calculatorText = document.getElementById("calculatorText").innerText;
    
    if(document.getElementById("randomNum").value == ""){
        calculatorText == "";
    }
    else if(calculatorText != NaN && calcTextCount <= 3){
        var newCalculatorText = calculatorText + this.id;
        document.getElementById("calculatorText").value = document.getElementById("calculatorText").value + newCalculatorText;
        calcTextCount++;
    }

});
}

// Backspace Button Working Function.......

const backspace = document.getElementById("backspace");
backspace.addEventListener("click",function(){
var output = document.getElementById("calculatorText").value.toString();
if(output){ //if output has a value
    output = output.substr(0,output.length-1);
    document.getElementById("calculatorText").value = output;
    calcTextCount = calcTextCount - 1;
}
})

// Clear Button Working Function..........

const clear = document.getElementById("clear");
clear.addEventListener("click",function(){
document.getElementById("calculatorText").value = "";
calcTextCount = 0;
})

// Pin Matching Function..........

var wrongTryCount = 0;
const submit = document.getElementById("submit");
submit.addEventListener("click",function(){
if(document.getElementById("calculatorText").value == ""){
    alert("Please Enter Your Valid Pin First then Press The Submit Button !! ");
}
else if(document.getElementById("randomNum").value == document.getElementById("calculatorText").value){
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("submit").disabled = true;
    document.getElementById("randomNum").value ="";
    document.getElementById("calculatorText").value = "";
    document.getElementById("leftAction").innerText = "";
    calcTextCount = 0;
}
else if(document.getElementById("randomNum").value != document.getElementById("calculatorText").value){
    document.getElementById("errorMessage").style.display = "block";
    wrongTryCount = wrongTryCount + 1;
    if(wrongTryCount == 1){
        document.getElementById("leftAction").innerText = "2 try left";
        document.getElementById("calculatorText").value = "";
        calcTextCount = 0;
    }
    else if(wrongTryCount == 2){
        document.getElementById("leftAction").innerText = "1 try left";
        document.getElementById("calculatorText").value = "";
        calcTextCount = 0;
    }
    else if(wrongTryCount == 3){
        document.getElementById("leftAction").innerText = "0 try left";
        document.getElementById("calculatorText").value = "";
        document.getElementById("submit").disabled = true;
        alert("Please Reload The Page and Try Again ");
        wrongTryCount = 0;
        calcTextCount = 0;
       
    }
    
}
})