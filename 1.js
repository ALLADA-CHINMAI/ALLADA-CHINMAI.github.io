let myImage=document.querySelector('img');

myImage.onclick=function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc==='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png')
    {
        myImage.setAttribute('src','1.png');
    }
    else
    {
        myImage.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png')
    }
}

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
function setUserName(){
    let myName=prompt('Please enter your name');
    if(!myName)
    {
        setUserName();
    }
    else{
        localStorage.setItem('name',myName);
        myHeading.textContent='Welcome to My Website, '+myName;  
    }
   
}

myButton.onclick=function(){setUserName();}