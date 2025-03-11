//Event handling by setting property value to a function
let like_btn = document.querySelector("#like");
function click()
{
    alert("Button was clicked");
}
like_btn.onclick = click;

//Event handling by using addEventListener function
function sayHello()
{
    alert("Hello");
}
function sayName()
{
    alert("My name is Priti");
}
let btns = document.querySelectorAll(".register");
for(let btn of btns)
{
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
}

//Events for HTML elements paragraph and div
let p = document.querySelector("p");
p.addEventListener("click",function(){
    console.log("para was clicked...");
    console.dir(this);
});

let div = document.querySelector("div");
div.addEventListener("mouseenter",function(event){
    console.log("Mouse inside the div...");
    console.log(event);
});

//'this' keyword in event handling
function changeColor()
{
    console.dir(this);// value of this is calling object of event listener
    this.style.backgroundColor = "green";
}
p.addEventListener("click",changeColor);
div.addEventListener("click",changeColor);

//keyboard event 
let input = document.querySelector("input");
input.addEventListener("keydown",function(event){
    console.log("Key was pressed");
    console.log(event);
    console.log(event.key);
    console.log(event.code);
});

//form event 'submit'
let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();// this will prevent from getting redirected to action url
    console.dir(this);

    let inp = document.querySelector("#username");
    let pass = this.elements[1];//HTML COLLECTION INSIDE FORM 
    
    console.dir(inp);
    console.dir(pass);
    
    // console.log(inp.innerText);// this will not work for input as data is entered by user.
    console.log(inp.value);
    console.log(pass.value);
    
    alert(`Hi ${inp.value} , Your password is ${pass.value}.`);
});

//change event , input event 
let firstName = document.querySelector("#first_name");
firstName.addEventListener("change",function()
{
    console.log("change event");
    console.log("final value of change event is :",this.value);
});
firstName.addEventListener("input",function(){
    console.log("input event");
    console.log("final value of input event is : " ,this.value);
});





