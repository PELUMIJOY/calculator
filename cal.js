const operator = prompt(please enter the operator you want to perform: such as +, -, *,/");
const num1 = parseFloat(prompt("enter your first number"));
const num2 = parseFloat(prompt("enter your second number"));

if(operator == "+"){
    alert(num1 + num2);
}
else if (operator  == "-") {
    alert(num1 - num2);
}
else if (operator  == "*") {
    alert(num1 * num2);
}
else if (operator  == "/") {
    alert(num1 / num2);
}
else{
    alert("please fill the fields accordingly to prescribed specification");
}
