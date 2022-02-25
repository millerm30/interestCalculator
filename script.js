function checkdata()
// Function returns false if Amount entered is less than or equal to zero
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number");
        principal.focus();
        return;
    }
    
}
function showrate(x)
// Function updates span with final value from slider
{
    document.getElementById("enteredRate").innerText = x;
}
function compute()
// Function determines interest earned an enters text under id=result
{
    var principal = parseFloat(document.getElementById("principal").value, 10);
    //    var rate = parseFloat(document.getElementById("rate").value,10);
    var rate = parseFloat(document.getElementById("enteredrate").value, 10);
    var years = parseFloat(document.getElementById("years").value, 10);
    var interest = principal * years * rate / 100;
    var currentYear = new Date().getFullYear();
    var finalYear = currentYear + years;
    document.getElementById("result").innerHTML = "<br />If you deposit <mark>" + principal + "</mark>,<br /> at an interest rate of <mark>" + rate + "%</mark>.<br />You will receive an amount of <mark>" + interest + "</mark><br />in the year <mark>" + finalYear + "</mark>";
}