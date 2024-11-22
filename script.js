document.addEventListener('DOMContentLoaded', function (){

    let userInput = document.getElementById("user-input");
    let checkBtn = document.getElementById("check-btn");
    let clearBtn = document.getElementById("clear-btn");
    let result = document.getElementById("results-div");
    let buttons = document.querySelectorAll(".bot button:not(#check-btn):not(#clear-btn)");



    function clear(){
        userInput.value = "";
        result.innerHTML = "";
    }

    function isEmpty(){
        if(userInput.value.trim() === ""){
            return true;
        }
        else{
            return false;
        }
    }

    function usNumCheck(str){
        const usNum = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

        if(usNum.test(str)){
            return "Valid US number: " + str;
        }else{
        return "Invalid US number: " + str;
        }

        
    }

    function check(){
        if(isEmpty()){
            alert("Please provide a phone number");
        }else{
            result.innerHTML = usNumCheck(userInput.value.trim());
        }
    }
    
    function addNumberToInput(event) {
        const number = event.target.innerText;
        userInput.value += number; 
    }

    checkBtn.addEventListener("click", check)
    clearBtn.addEventListener("click", clear);

    buttons.forEach(button => {
        button.addEventListener("click", addNumberToInput);
    });
});