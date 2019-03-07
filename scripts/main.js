var myImage = document.querySelector('img');


myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	
	if (mySrc === 'images/mozilla.jpeg'){
		myImage.setAttribute ('src', 'images/opera.jpeg')
	}else {
		myImage.setAttribute ('src', 'images/mozilla.jpeg')
	}
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName(){
	var myName = prompt('Please enter your name:');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool !!! ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
	}else {
		var storedName = localStorage.getItem('name');
		myHeading.innerHTML = 'Mozilla is Cool,  ' + storedName;
	}
myButton.onclick = function(){
	setUserName();
}