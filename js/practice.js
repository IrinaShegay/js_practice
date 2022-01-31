//ex 1

document.write("Shegay Irina CS-2118");
document.write("<br>");
document.write("<br>");

//ex2
let year =  new Date().getFullYear();
document.write("Year: " + year);

document.write("<br>");

var dateObj = new Date()
var weekdayNumber = dateObj.getDay()
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let dayOfWeek = days[weekdayNumber];
document.write("Today is: " + dayOfWeek);

document.write("<br>");

let day =  new Date().getDate();
document.write("Date: " + day);

document.write("<br>");

let monthsNumber = new Date().getMonth();
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let month = months[monthsNumber ];
document.write("Month: " + month );

document.write("<br>");

var currentTime = new Date(),
hours = currentTime.getHours(),
minutes = currentTime.getMinutes();
seconds = currentTime.getSeconds();

    if (minutes < 10) {
     minutes = "0" + minutes;
  }
    var suffix = "AM";
    if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
    }
    if (hours == 0) {
     hours = 12;
    }
    document.write("Current time is: ")
    document.write(`${hours + suffix}:${minutes}:${seconds}`);

    document.write("<br>");
    document.write("<br>");

    //ex3

    var freedom=new Date(2024, 8, 1);
    if (today.getMonth()==1 && today.getDate()>31) 
    {
    freedom.setFullYear(freedom.getFullYear()+1); 
    }  
    var one_day=1000*60*60*24;
    document.write(Math.ceil((freedom.getTime()-today.getTime())/(one_day))+
    " days left until the freedom!");

    document.write("<br>");
    document.write("<br>");

    //ex4

function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}