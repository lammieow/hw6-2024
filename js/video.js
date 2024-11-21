var video;
let vid = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	vid.autoplay = false;
	// vid.load()
	document.querySelector("#volume").innerHTML = slider.value + "%"; 
});


document.querySelector("#play").addEventListener("click", function() {
	vid.play();
	vid.volume = 0.1;
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	vid.pause();
	console.log("Pause Video");
});

vid.defaultPlaybackRate = 1;
document.querySelector("#slower").addEventListener("click", function() {
	vid.playbackRate -= 0.1;
	console.log("Speed is", vid.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	vid.playbackRate += 0.1;
	console.log("Speed is", vid.playbackRate);
});


document.querySelector("#skip").addEventListener("click", function() {
	vid.currentTime += 10;
	console.log("The current time is", vid.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	let muteButton = document.querySelector("#mute");
	if (muteButton.innerHTML === "Mute") {
		muteButton.innerHTML = "UnMute";
		vid.muted = true;
		console.log("Video is muted");
	} else {
		muteButton.innerHTML = "Mute";
		vid.muted = false;
		console.log("Video is unmuted");
	}
});

let slider = document.querySelector("#slider")

slider.addEventListener("input", function() {
	vid.volume = slider.value/100;
	document.querySelector("#volume").innerHTML =  slider.value + "%";
	console.log("The current value is", slider.value/100);
});

document.querySelector("#vintage").addEventListener("click", function(){
	vid.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	vid.classList.remove("oldSchool");
});
