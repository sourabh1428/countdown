const getHour = document.getElementById("inpHour");
const getMinute = document.getElementById("inpMinute");
const getSecond = document.getElementById("inpSec");
const music = document.getElementById("music");

let buzz = false;

function buzzer() {
    buzz = !buzz; // Toggle the buzz variable
    if (buzz) {
        music.play();
    } else {
        music.pause();
    }
}

function handleClick() {
    let a = getHour.value;
    let b = getMinute.value;
    let c = getSecond.value;
    createCard(a, b, c);
}

function createCard(a, b, c) {
    const slots = document.getElementById("slotS");
    const newr = document.createElement("div");
    newr.setAttribute("id", "jue");
    slots.appendChild(newr);

    let myFun = setInterval(function () {
        if (a < 1 && c < 1 && b < 1) {
            play1();
            if(newr){
                newr.innerHTML = `<div class="completed"><h1>Time Over!</h1><button onclick="buzzer()">Stop</button></div>`;
                newr.removeChild();
             
            }
            clearInterval(myFun);
        }
        if (a >= 1 && c < 1 && b < 1) {
            b = 60;
            a -= 1;
        }
        if (c < 1 && b >= 1) {
            c = 60;
            b--;
        } else {
            c--;
            newr.innerHTML = `<div class="addCart"><p>Time Left :</p><h1>${a}</h1><h1>:</h1><h1>${b}</h1><h1>:</h1><h1>${c}</h1><button onclick="handleDelete()">Delete</button></div>`;
        }
    }, 1000);
}
function buzzer(){
    const newr = document.getElementById("jue");
    if (newr) {
        newr.remove();
    }
}
function handleDelete() {
    const newr = document.getElementById("jue");
    if (newr) {
        newr.remove();
    }
}

function play1() {
    console.log("audio played");
    /* Audio link for notification */
    var mp3 = '<source src="mixkit-classic-alarm-995.wav" type="audio/mpeg">';
    document.getElementById("sound").innerHTML =
        '<audio autoplay="autoplay" id="music">' + mp3 + "</audio>";
}
