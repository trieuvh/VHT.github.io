var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myHTML = document.querySelector('html')
myHTML.onclick = function() {
    /*alert('Ouch! Stop poking me!');*/
	/*alert(callsth(myHeading,5,6));*/
}

let myImage = document.querySelectorAll('img');

myImage[0].onclick = function(){
	let mySrc =myImage[0].getAttribute('src')
	if (mySrc == 'images/firefox-icon.png'){
		myImage[0].setAttribute('src','images/HN5.jpg');
	}
		else{
		myImage[0].setAttribute('src','images/firefox-icon.png');
	}
}

myImage[1].onclick = function(){
	let mySrc =myImage[1].getAttribute('src')
	if (mySrc == 'images/firefox-icon.png'){
		myImage[1].setAttribute('src','images/HN5.jpg');
	}
		else{
		myImage[1].setAttribute('src','images/firefox-icon.png');
	}
	
}

function callsth(a,b,c){
if (a.textContent == 'Hello world!'){
	alert ('Warning!!')
}else{
	alert ('Silly')
}
	result = b + c;
	return result;
}

let myButton = document.querySelector('button');


myButton.onclick = function() {
  setUserName();
}
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = storedName;
}

