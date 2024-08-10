// Reusable functions
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Declaring variables
const string = "A Computer for You...";
const array = string.split("");
const motto = document.querySelector(".caption");
const audio = document.querySelectorAll(".audio");

// Setting volume for audio
audio.forEach(element => {
    element.volume = 0.3;
});

// Iterating over the banner text
const load = async () => {
    let mottoText = '';
    for (let i = 0; i < array.length; i++) {
        const audioIndex = randomInt(0, 3);
        if (audio[audioIndex].paused) {
            audio[audioIndex].play().catch(() => {
                console.info("Audio not played due to no user interaction with DOM!")
            });
        }
        await sleep(randomInt(250, 300));
        mottoText += array[i];
        motto.textContent = mottoText;
    }
    motto.innerHTML = "A Computer for <span class='colored static'>You</span>...";
    await sleep(50);
    document.querySelector(".colored").classList.remove("static");
}

setTimeout(() => {
    let footer = document.getElementsByTagName("footer")[0];
    footer.classList.remove("hide")
}, 1000);

// Calling the entire script
load();