var btn = document.getElementById("add");
var result = document.getElementById("contact");
var form = document.querySelector("#contact-form");
var myAccordion = document.getElementById('myAccordion');
var table = document.getElementById("table");

var store = [];
function addFirst(){
var accordionName = document.querySelector(".accordion");
var accordionBody = document.querySelector(".panel");

var detail = [];
detail[0] = document.getElementById("fname").value;
detail[1] = document.getElementById("lname").value;
    detail[2] = document.getElementById("num").value;
    detail[3] = document.getElementById("mail").value;
  //  store.push(detail);
        var myAccordion = document.getElementById('myAccordion');
        if (detail[0] !== "" && detail[1] !== "" && detail[2] !== "" && detail[3] !== "") {
        myAccordion.insertAdjacentHTML("beforeend", `<div>
        <button class="accordion">  ${detail[0].toUpperCase()}</button> 
        <div class="panel">
           <p id="body">${detail[0]} ${detail[1]} <br /> ${detail[2]} <br /> ${detail[3]}</p>
        </div> <button class="delete">DELETE</button></div>`)
  
        }
   
console.log(detail);

var accordion = document.getElementsByClassName('accordion');
for (var i = 0; i < accordion.length; i++){
    
    accordion[i].onclick= function(){
        this.classList.toggle('active');
        var panel= this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null

        }else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}


}

btn.addEventListener('click', function(event) {
event.preventDefault();

addFirst();

   
    form.reset();
});

myAccordion.addEventListener('click', function(event){
    if(event.target.className === "delete"){
    var parent = event.target.parentElement;
    myAccordion.removeChild(parent);   
}

})
/*
function capitalise(string)  
{  
    return string.replace(/\b\w/g, function(l){ return l.toUpperCase() })  
}  
*/