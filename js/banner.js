let randomTimer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let string = "A Computer for You...";
let spanInOut = [15,18]
let array = string.split("");
let motto = document.getElementsByClassName("motto")[0];
let load = async () => {
    for (let i=0;i<array.length;i++) {
        if (i==spanInOut[0]) {
            motto.innerHTML += "\<span\>";
        }
        if (i==spanInOut[1]) {
            motto.innerHTML += "\<\/span\>";
        }
        await sleep(randomTimer(150,200))
        motto.innerHTML += array[i];
        console.log(i);
    }
}
load()