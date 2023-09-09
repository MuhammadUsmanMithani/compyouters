let randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let string = "A Computer for You...";
let array = string.split("");
let motto = document.getElementsByClassName("caption")[0];
let audio = document.getElementsByClassName("audio")
Array.from(audio).forEach((element) => {
    element.volume = 0.3;
});
let load = async () => {
    for (let i=0;i<array.length;i++) {
        let audioIndex = randomInt(0,3);
        if (audio[audioIndex].paused) {
            audio[audioIndex].play().catch(() => {
                console.info("Audio not played due to no user interaction with DOM!")
            });
        }
        await sleep(randomInt(250,300));
        motto.innerHTML += array[i];
    }
    motto.innerHTML = "A Computer for <span class='colored white'>You</span>...";
    sleep(50).then(() => {
        document.getElementsByClassName("colored")[0].classList.remove("white");
    });
}
load()