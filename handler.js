var changeLocation = function(x){
	window.location.href = x;
}

var messageSubmit = function(){
	var firstname = document.getElementById("firstname").value;
	document.getElementById("article1").innerHTML = "Thank you, " + firstname +".<br> Your message has been recieved.<br> Please give us 1-3 business days to respond.";
	
}

var images = ["cap.jpg","pic2.jpg", "pic3.jpg"];

var next = function(name){
	var temp = "";
	var num =0;
	for(var i =0; i < images.lenght;i++){
		if(images[i] == name){
			temp = images[i];
			num = i;
			break;
		}
	}
	
	if(temp == images[images.length-1]){
		temp = images[0];
	}
	else{
		temp = images[num+1];
	}
	console.log("pic3.jpg"===temp);
	document.getElementById("galleryframe").style.backgroundImage = "url(temp)"; 
}

var prev = function(name){
	
}