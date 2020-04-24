const startBackground = "#3cdd1b";
const stopBackground = "#5dbcd2";
const resetBackground = "#a442f5";
let timerValue = 0;
const StopwatchAudioDataKey_Start = "Stopwatch_StartSound";
const StopwatchAudioDataKey_Stop = "Stopwatch_ResetSound";
const secondsHand = document.querySelector(".second-hand");
const audio_timerChange = document.querySelector(
	`audio[data-key=${StopwatchAudioDataKey_Start}]`
);
const audio_timerReset = document.querySelector(
	`audio[data-key=${StopwatchAudioDataKey_Stop}]`
);
let timingState = 0; // 0: Ready to run, 1: running, 2: stop
console.log("Hello!");

function TimerInteraction() {
	timingState++;

	if (timingState > 2) {
		timingState = 0;
	}

	if (timingState == 0) {
		timerReset();
	}

	if (timingState == 1) {
		timerStart();
	}

	if (timingState == 2) {
		timerStop();
	}
}

function timerReset() {
	timerValue = 0;
	updateTimer();
	playAudio(true);
	document.documentElement.style.setProperty("--base", resetBackground);
}

let timerID = 0;
function timerStart() {
	playAudio(false);
	updateTimer();
	timerID = setInterval(updateTimer, 1000);
	document.documentElement.style.setProperty("--base", startBackground);
}

function timerStop() {
	playAudio(false);
	clearInterval(timerID);
	document.documentElement.style.setProperty("--base", stopBackground);
}

function updateTimer() {
	let secondsDegrees = (timerValue / 60) * 360 + 90;
	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

	timerValue++;
}

function playAudio(isReset) {
	let audio = isReset ? audio_timerReset : audio_timerChange;
	if (!audio) {
		return;
	}
	audio.currentTime = 0;
	audio.play();
}

document.documentElement.style.setProperty("--base", resetBackground);
window.addEventListener("click", TimerInteraction);


