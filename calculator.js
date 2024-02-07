//display
function displayValue(val){
    document.getElementById("display").value=document.getElementById("display").value+val;
}   

//clear
function clearDisplay(){
    document.getElementById('display').value=''
}

//delete
function deleteDisplay(){
    document.getElementById('display').value=document.getElementById('display').value.slice(0,-1);
}

//calculate
function calculate(){
    let userInput=document.getElementById('display').value;
    let result=eval(userInput);

    document.getElementById('display').value=result;
}