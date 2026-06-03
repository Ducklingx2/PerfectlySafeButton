const button = document.getElementById("button");
const message = document.getElementById("message");

let clicks = 0;
let narratorGone = false;

const randomMessages = [ "Everything remains under control.", 
                        "The button appreciates your cooperation.", 
                        "Reality has been slightly adjusted.", 
                        "This is still perfectly safe.", 
                        "The button is thinking.", 
                        "Nothing concerning detected.", 
                        "Containment remains mostly intact.",
                        "ĿɆȺVɆ",
                        "HAuahUAeaUHAaeAAEUHuehuHEUEHHauheEHAUHEUa"
                       ];

const events = [

    // Messages

  function () {

    message.textContent =
    randomMessages[
        Math.floor(Math.random() * randomMessages.length)
    ];

},
  
    // Background color change
    function () {

        document.body.style.background =
        `hsl(${Math.random()*360},70%,25%)`;

    },

    // Screen flip
    function () {

        document.body.style.transform =
        `rotate(${Math.random() > 0.5 ? 180 : 0}deg)`;

    },

    // Random emoji

  function () {

    const emoji = document.createElement("div");
    emoji.className = "floating";

    const emojis = [
        "🗿","🕳️","🪼","🧍","⚠️","🍄","🧪","🫥",
        "🧬","🆘","🛸","🎃","☃️","🪨"
    ];

    const chosenEmoji =
        emojis[Math.floor(Math.random() * emojis.length)];

    emoji.textContent = chosenEmoji;

    emoji.style.fontSize = "4rem";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(emoji);

    if (chosenEmoji === "🧬") {
        message.textContent = "it isn't just a bot";
    }

    if (chosenEmoji === "⚠️") {
        message.textContent = "the button has warned you";

        document.body.style.filter = "saturate(0.5) contrast(1.2)";

        setTimeout(() => {
            document.body.style.filter = "";
        }, 1500);
    }

},
    // Button teleport
    function () {

        button.style.position = "absolute";

        button.style.left =
        Math.random() * (window.innerWidth - 200) + "px";

        button.style.top =
        Math.random() * (window.innerHeight - 100) + "px";

    },

    //Duckies :D

    function () {

    const duck = document.createElement("div");

    duck.className = "floating";
    duck.textContent = "🦆";

    duck.style.left =
    Math.random() * window.innerWidth + "px";

    duck.style.top =
    Math.random() * window.innerHeight + "px";

    document.body.appendChild(duck);

    message.textContent = "duckie :D";

},
    //Jellyfish

    function () {

    const jelly = document.createElement("div");

    jelly.className = "floating";
    jelly.textContent = "🪼";

    jelly.style.left =
    Math.random()*window.innerWidth + "px";

    jelly.style.top =
    Math.random()*window.innerHeight + "px";

    document.body.appendChild(jelly);

},

  // BEEEEEG JELLYFISH

function () {

    if (Math.random() < 0.01) {

        const giantJelly = document.createElement("div");

        giantJelly.textContent = "🪼";

        giantJelly.style.position = "absolute";
        giantJelly.style.fontSize = "25rem";

        giantJelly.style.left =
        Math.random() * (window.innerWidth - 400) + "px";

        giantJelly.style.top =
        Math.random() * (window.innerHeight - 400) + "px";

        giantJelly.style.zIndex = "999";

        document.body.appendChild(giantJelly);
    }

},

    //Shakey Shakey

    function () {

    document.body.classList.add("shake");

    setTimeout(() => {

        document.body.classList.remove("shake");

    }, 200);

},

//Evil Spin >:)
  
  function () {

    document.body.style.transition =
    "transform 2s";

    document.body.style.transform =
    `rotate(${Math.random()*360}deg)`;

    message.textContent =
    "Orientation privileges revoked.";

},

  //nice spin :)

  function () {

    document.body.style.transition =
    "transform 2s";

    document.body.style.transform =
    "rotate(360deg)";

    setTimeout(() => {

        document.body.style.transform =
        "rotate(0deg)";

    }, 2000);

},

  //Smiley
  
  function () {

    const smile = document.createElement("div");

    smile.textContent = "🙂";

    smile.className = "floating";

    smile.style.fontSize = "6rem";
    smile.style.left = Math.random() * window.innerWidth + "px";
    smile.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(smile);

    message.textContent = "something is smiling back.";

    // make it unsettling
    document.body.style.filter = "contrast(1.2) brightness(0.9)";

    setTimeout(() => {
        document.body.style.filter = "";
    }, 1200);
  
    //epilepsy 2.0

    function () {

    if (Math.random() < 0.02) {

        let flashes = 0;

        const flash = setInterval(() => {

            const colors = [
                "black",
                "white",
                "red",
                "blue",
                "#00ff66",
                "#ff00ff",
                "#ffff00"
            ];

            document.body.style.background =
                colors[Math.floor(Math.random() * colors.length)];

            document.body.style.color =
                colors[Math.floor(Math.random() * colors.length)];

            document.title =
                (Math.random() < 0.5) ? "🧿" : "⚠ SYSTEM";

            flashes++;

            if (flashes > 30 && Math.random() < 0.4) {
                clearInterval(flash);
            }

        }, 70);

        setTimeout(() => {

            clearInterval(flash);

            document.body.style.background = "#111";
            document.body.style.color = "white";
            document.title = "Perfectly Safe Button";

        }, 4500);
    }

},

  //insanity

  function () {

    if (Math.random() < 0.01) {

        message.textContent = "🫠 it is melting";

        let t = 0;

        const melt = setInterval(() => {

            document.body.style.transform =
                `scale(${1 + Math.sin(t) * 0.02})`;

            document.body.style.filter =
                `hue-rotate(${t * 10}deg) blur(0.5px)`;

            t++;

            if (t > 20) clearInterval(melt);

        }, 100);

    }

},
    
    // Title corruption
    function () {

        const titles = [
            "Perfectly Safe Button",
            "Button.exe",
            "WHY",
            "The Button Knows",
            "Error 404: Safety Missing",
            "Press Again"
        ];

        document.title =
        titles[Math.floor(Math.random()*titles.length)];

    }

];

button.addEventListener("click", () => {

    clicks++;

    // Random event
    const randomEvent =
    events[Math.floor(Math.random() * events.length)];

    randomEvent();

    // Extra chaos after 250 clicks
    if (clicks > 250 && Math.random() < 0.15) {

        const clone =
        button.cloneNode(true);

        clone.style.position = "absolute";

        clone.style.left =
        Math.random()*window.innerWidth + "px";

        clone.style.top =
        Math.random()*window.innerHeight + "px";

        document.body.appendChild(clone);
    }

    // Rare event
    if (Math.random() < 0.05) {

        document.body.style.filter =
        "invert(1)";

        setTimeout(() => {

            document.body.style.filter =
            "invert(0)";

        }, 1500);
    }

    console.log("Clicks:", clicks);

});
