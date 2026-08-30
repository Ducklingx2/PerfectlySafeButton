const button = document.getElementById("button");
const message = document.getElementById("message");

let clicks = 0;
let runningEvent = false;


// ==================================================
// MESSAGES
// ==================================================

const randomMessages = [
    "Everything remains under control.",
    "The button appreciates your cooperation.",
    "Reality has been slightly adjusted.",
    "This is still perfectly safe.",
    "The button is thinking.",
    "Nothing concerning detected.",
    "Containment remains mostly intact.",
    "ĿɆȺVɆ"
];


// ==================================================
// BUTTON ALWAYS ON TOP
// ==================================================

button.style.position = "fixed";
button.style.zIndex = "1000000";


// ==================================================
// HELPER
// ==================================================

function makeFloating(text, size = "4rem") {

    const element = document.createElement("div");

    element.className = "floating";
    element.textContent = text;

    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    element.style.fontSize = size;

    element.style.left =
        Math.random() * window.innerWidth + "px";

    element.style.top =
        Math.random() * window.innerHeight + "px";

    element.style.zIndex = "10";

    document.body.appendChild(element);

    return element;
}


// ==================================================
// EVENTS
// ==================================================

const events = [

    // ------------------------------------------------
    // RANDOM MESSAGE
    // ------------------------------------------------

    function () {

        const randomMessage =
            randomMessages[
                Math.floor(Math.random() * randomMessages.length)
            ];

        message.textContent = randomMessage;

        // ĿɆȺVɆ event
        if (randomMessage === "ĿɆȺVɆ") {

            document.body.style.filter = "invert(1)";

            message.textContent = "ĿɆȺVɆ";

            setTimeout(() => {
                document.body.style.filter = "";
            }, 1000);
        }
    },


    // ------------------------------------------------
    // BACKGROUND CHANGE
    // ------------------------------------------------

    function () {

        document.body.style.background =
            `hsl(${Math.random() * 360}, 70%, 25%)`;

    },


    // ------------------------------------------------
    // SCREEN FLIP
    // ------------------------------------------------

    function () {

        document.body.style.transition =
            "transform 1s";

        document.body.style.transform =
            `rotate(${Math.random() > 0.5 ? 180 : 0}deg)`;

    },


    // ------------------------------------------------
    // RANDOM EMOJI
    // ------------------------------------------------

    function () {

        const emojis = [
            "🗿",
            "🕳️",
            "🪼",
            "🧍",
            "⚠️",
            "🍄",
            "🧪",
            "🫥",
            "🧬",
            "🆘",
            "🛸",
            "🎃",
            "☃️",
            "🪨",
            "🧀",
            "🏌️",
            "🥐",
            "🌭"
        ];

        const chosenEmoji =
            emojis[Math.floor(Math.random() * emojis.length)];

        makeFloating(chosenEmoji);

        if (chosenEmoji === "🧬") {
            message.textContent = "it isn't just a bot";
        }

        if (chosenEmoji === "⚠️") {

            message.textContent =
                "the button has warned you";

            document.body.style.filter =
                "saturate(0.5) contrast(1.2)";

            setTimeout(() => {
                document.body.style.filter = "";
            }, 1000);
        }

    },


    // ------------------------------------------------
    // DUCKIE
    // ------------------------------------------------

    function () {

        makeFloating("🦆");

        message.textContent = "duckie :D";

    },


    // ------------------------------------------------
    // JELLYFISH
    // ------------------------------------------------

    function () {

        makeFloating("🪼");

    },


    // ------------------------------------------------
    // BEEEEEG JELLYFISH
    // ------------------------------------------------

    function () {

        if (Math.random() < 0.15) {

            const jelly =
                makeFloating("🪼", "25rem");

            jelly.style.zIndex = "20";

        } else {

            makeFloating("🪼");

        }

    },


    // ------------------------------------------------
    // SHAKEY SHAKEY
    // ------------------------------------------------

    function () {

        if (Math.random() < 0.25) {

            document.body.classList.add("shake");

            setTimeout(() => {

                document.body.classList.remove("shake");

            }, 200);

        }

    },


    // ------------------------------------------------
    // EVIL SPIN
    // ------------------------------------------------

    function () {

        document.body.style.transition =
            "transform 1s";

        document.body.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        message.textContent =
            "Orientation privileges revoked.";

    },


    // ------------------------------------------------
    // NICE SPIN
    // ------------------------------------------------

    function () {

        document.body.style.transition =
            "transform 1s";

        document.body.style.transform =
            "rotate(360deg)";

        setTimeout(() => {

            document.body.style.transform =
                "rotate(0deg)";

        }, 1000);

    },


    // ------------------------------------------------
    // SMILEY
    // ------------------------------------------------

    function () {

        makeFloating("🙂", "6rem");

        message.textContent =
            "something is smiling back.";

        document.body.style.filter =
            "contrast(1.2) brightness(0.9)";

        setTimeout(() => {

            document.body.style.filter = "";

        }, 1000);

    },


    // ------------------------------------------------
    // MELTING / INSANITY
    // ------------------------------------------------

    function () {

        if (Math.random() < 0.1) {

            message.textContent =
                "🫠 it is melting";

            let t = 0;

            const melt = setInterval(() => {

                document.body.style.transform =
                    `scale(${1 + Math.sin(t) * 0.02})`;

                document.body.style.filter =
                    `hue-rotate(${t * 10}deg) blur(0.5px)`;

                t++;

                if (t > 20) {

                    clearInterval(melt);

                    document.body.style.transform =
                        "scale(1)";

                    document.body.style.filter =
                        "";

                }

            }, 100);

        }

    },


    // ------------------------------------------------
    // TITLE CORRUPTION
    // ------------------------------------------------

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
            titles[Math.floor(Math.random() * titles.length)];

    },


    // ------------------------------------------------
    // BAMBOO
    // ------------------------------------------------

    function () {

        const bamboo =
            document.createElement("div");

        bamboo.style.position = "fixed";
        bamboo.style.left =
            Math.random() * (window.innerWidth - 100) + "px";

        bamboo.style.bottom = "0";

        bamboo.style.fontSize = "4rem";
        bamboo.style.lineHeight = "1";
        bamboo.style.padding = "0";
        bamboo.style.margin = "0";

        bamboo.style.pointerEvents = "none";
        bamboo.style.zIndex = "10";

        document.body.appendChild(bamboo);

        let height = 1;

        const grow = setInterval(() => {

            bamboo.textContent =
                "🎋".repeat(height);

            height++;

            if (height > 8) {
                clearInterval(grow);
            }

        }, 150);

    },


    // ------------------------------------------------
    // CLEAN UP FLOATING OBJECTS
    // ------------------------------------------------

    function () {

        const floating =
            document.querySelectorAll(".floating");

        floating.forEach(element => {
            element.remove();
        });

        message.textContent =
            "The containment team has arrived.";

    }

];


// ==================================================
// RUN ONE RANDOM EVENT
// ==================================================

function runEvent() {

    if (runningEvent) {
        return;
    }

    runningEvent = true;

    const eventIndex =
        Math.floor(Math.random() * events.length);

    try {

        events[eventIndex]();

    } catch (error) {

        message.textContent =
            "EVENT ERROR";

    }

    setTimeout(() => {

        runningEvent = false;

    }, 100);

}


// ==================================================
// CLICK HANDLER
// ==================================================

button.addEventListener("click", () => {

    clicks++;

    stats.clicks = clicks;

    console.log("Clicks:", clicks);
    console.log("Stats clicks:", stats.clicks);

    runEvent();

    checkAdvancements();

});


// ==================================================
// INITIAL STATE
// ==================================================

message.textContent =
    "Everything remains under control.";
