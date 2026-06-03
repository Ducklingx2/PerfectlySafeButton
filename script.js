const button = document.getElementById("button");
const message = document.getElementById("message");

let clicks = 0;
let narratorGone = false;

const randomMessages = [ "Everything remains under control.", 
                        "The button appreciates your cooperation.", 
                        "Reality has been slightly adjusted.", 
                        "This is still perfectly safe.", 
                        "Several ducks have taken notice.", 
                        "The button is thinking.", 
                        "Nothing concerning detected.", 
                        "Containment remains mostly intact." 
                       ];

const events = [

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
            "🗿",
            "🍄",
            "👁️",
            "⭐",
            "⚠️",
            "❓",
            "🍑"
        ];

        emoji.textContent =
        emojis[Math.floor(Math.random()*emojis.length)];

        emoji.style.fontSize = "4rem";

        emoji.style.left =
        Math.random()*window.innerWidth + "px";

        emoji.style.top =
        Math.random()*window.innerHeight + "px";

        document.body.appendChild(emoji);

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
    Math.random()*window.innerWidth + "px";

    duck.style.top =
    Math.random()*window.innerHeight + "px";

    document.body.appendChild(duck);

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

    //Shakey Shakey

    function () {

    document.body.classList.add("shake");

    setTimeout(() => {

        document.body.classList.remove("shake");

    }, 200);

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

    // Messages
    if (!narratorGone) {

        if (clicks < 20) {
            message.textContent =
            "Everything is normal.";
        }

        else if (clicks < 50) {
            message.textContent =
            "The button has noticed you.";
        }

        else if (clicks < 100) {
            message.textContent =
            "Something feels slightly wrong.";
        }

        else if (clicks < 150) {
            message.textContent =
            "...";
        }

        else if (clicks === 200) {

            message.textContent =
            "You understand the system now.";

            setTimeout(() => {

                message.remove();
                narratorGone = true;

            }, 2000);
        }
    }

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
