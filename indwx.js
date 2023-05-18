

let num =prompt("input in yor number")

if (num>=80 && num<=100) {
  document.write("<h1>you got A+</h1>")
}

else if (num>=70 && num<80) {
  document.write("<h1>you got A</h1>")
}


 else if (num>=60 && num<70) {
  document.write("you got a-")
}
else if (num>=50 && num<60) {
  document.write("<h1>you got B</h1>")
}

else if (num>=40 && num<50) {
  document.write("<h1>you got C+</h1>")
}

else if (num>100 || num<0 ) {
  document.write("<h1>THATS INVALIAD</h1>")
}

else {
  document.write("<h1>you got fail</h1>")
}



// document.write("<br>")

if (num%2 ==0) {
  document.write("<br>" +"<h1>EVENNUMBER</h1>")
}

else if (num%2 !=0) {
  document.write("<br>"+"<h1>ODD NUMBER</h1>")
}




// its sidbar part
let button=  document.querySelector("button");
let sidebar= document.querySelector(".sidebar");

function side() {
 sidebar.classList.toggle("active")


if(sidebar.classList.contains("active") ==true){
button.innerHTML='<i class="fa-solid fa-xmark"></i>'
}else{
button.innerHTML='<i class="fa-solid fa-bars"></i>'
}




}

button.addEventListener("click",side)














































