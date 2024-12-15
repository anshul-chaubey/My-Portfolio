let butt = document.querySelector("button")
let myhead = document.querySelector("h1")


function setusername(){
 
  const myname = prompt("what is your name");

  localStorage.setItem("name",myname);

  myhead.textContent = `Javascript is cool right ${myname}`;

}

if(!localStorage.getItem("name")){
  setusername
}else{
  const storedname = localStorage.getItem("name")
  myhead.textContent = `Javascript is cool right ${storedname}`;
}


butt.onclick= function(){setusername();}


