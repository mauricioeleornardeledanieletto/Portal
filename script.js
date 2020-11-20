var slideItem = 0;
window.onload = function(){
	setInterval(passarSlide, 7000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(i=0; i<objs.length; i++){
		objs[i].style.width = slidewidth + 'px';
	}
}
function passarSlide(){
	var x = document.getElementById("slideshow").offsetWidth;
	if(slideItem >=3){
		slideItem = 0;
	}else{
		slideItem++;
	}

	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(x  * slideItem)+"px";
	if(slideItem <=0){
		document.getElementsByClassName("bolinha")[0].style.backgroundColor = "red";
	}else{
		document.getElementsByClassName("bolinha")[0].style.backgroundColor = "#CCC";
	}
	if(slideItem ==1){
		document.getElementsByClassName("bolinha")[1].style.backgroundColor = "red";
	}else{
		document.getElementsByClassName("bolinha")[1].style.backgroundColor = "#CCC";
	}
	if(slideItem ==2){
		document.getElementsByClassName("bolinha")[2].style.backgroundColor = "red";	
	}else{
		document.getElementsByClassName("bolinha")[2].style.backgroundColor = "#CCC";
	}
	if(slideItem ==3){
		document.getElementsByClassName("bolinha")[3].style.backgroundColor = "red";	
	}else{
		document.getElementsByClassName("bolinha")[3].style.backgroundColor = "#CCC";
	}
}
function mudarSlide(pos) {
	slideItem = pos;
	var x = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(x  * slideItem)+"px";
	if(slideItem == 0){
	document.getElementsByClassName("bolinha")[0].style.backgroundColor ="red";	
	}else{
		document.getElementsByClassName("bolinha")[0].style.backgroundColor = "#CCC";
	}
	if(slideItem == 1){
		document.getElementsByClassName("bolinha")[1].style.backgroundColor = "red";
	}else{
		document.getElementsByClassName("bolinha")[1].style.backgroundColor = "#CCC";
	}
	if(slideItem == 2){
		document.getElementsByClassName("bolinha")[2].style.backgroundColor = "red";
	}else{
		document.getElementsByClassName("bolinha")[2].style.backgroundColor = "#CCC";
	}
	if(slideItem == 3){
		document.getElementsByClassName("bolinha")[3].style.backgroundColor = "red";
	}else{
		document.getElementsByClassName("bolinha")[3].style.backgroundColor = "#CCC";
	}
}

function toggleMenu() {

	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}

}