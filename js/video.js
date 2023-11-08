var video = document.querySelector('#player1');


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.pause();
	video.loop = false;
	

}); 
document.querySelector("#play").addEventListener("click", function (){
		video.play();
		document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
		
	
});
document.querySelector("#pause").addEventListener("click", function (){
		video.pause();
});
document.querySelector('#slower').addEventListener("click", function() {
	slowerRate = video.playbackRate/10;
	video.playbackRate = video.playbackRate - slowerRate;
	console.log(video.playbackRate);
});
document.querySelector('#faster').addEventListener("click", function() {
	slowerRate = video.playbackRate/10;
	video.playbackRate = video.playbackRate + slowerRate;
	console.log(video.playbackRate);
});
document.querySelector('#skip').addEventListener("click", function() {
	var newTime = video.currentTime + 10
	if(newTime >= video.duration) {
		video.currentTime = 0;
	}
	else{
		video.currentTime = newTime;
	}
	console.log(video.currentTime);
});
document.querySelector('#mute').addEventListener("click", function (){
	if(video.muted==false){
		video.muted=true;
		document.querySelector('#mute').innerHTML = "Unmute"
	}
	else{
		document.querySelector('#mute').innerHTML = "Mute"
		video.muted = false;
	}
	
});
document.querySelector('#slider').addEventListener("click", function (){
	video.volume = document.querySelector('#slider').value/100;
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
});
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
});





// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

