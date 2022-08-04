function checkdata()
// Function returns false if Amount entered is less than or equal to zero
{
    const principal = document.getElementById("principal").value;
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
    const principal = parseFloat(document.getElementById("principal").value, 10);
    const rate = parseFloat(document.getElementById("enteredrate").value, 10);
    const years = parseFloat(document.getElementById("years").value, 10);
    const interest = principal * years * rate / 100;
    const currentYear = new Date().getFullYear();
    const finalYear = currentYear + years;
    document.getElementById("result").innerHTML = "<br />If you deposit $<mark>" + principal + ".00" + "</mark>, at an interest rate of <mark>" + rate + "%</mark>.<br />You will receive an amount of $<mark>" + interest + ".00" + "</mark> in the year <mark>" + finalYear + "</mark>";
}