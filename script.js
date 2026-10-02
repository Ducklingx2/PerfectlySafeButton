// ==========================================================
// PERFECTLY SAFE BUTTON
// CORE ENGINE
// ==========================================================


// ==========================================================
// DOM
// ==========================================================

const button = document.getElementById("button");
const message = document.getElementById("message");

const world = document.getElementById("world");
const effects = document.getElementById("effects");

const status = document.getElementById("status");

const clickCount = document.getElementById("click-count");
const eventCount = document.getElementById("event-count");
const advancementCount = document.getElementById("advancement-count");
const uniqueCount = document.getElementById("unique-count");

const buttonStatus = document.getElementById("button-status");
const lastEventDisplay = document.getElementById("last-event");
const eventStreakDisplay = document.getElementById("event-streak");

const flash = document.getElementById("flash");
const specialOverlay = document.getElementById("special-overlay");


// ==========================================================
// GAME STATE
// ==========================================================

const SAVE_KEY = "perfectly-safe-button-v2";

const game = {

    clicks: 0,

    events: 0,

    advancements: 0,

    ducks: 0,

    jellyfish: 0,

    giantJellyfish: 0,

    bamboo: 0,

    smileys: 0,

    warnings: 0,

    spins: 0,

    insanity: 0,

    leave: 0,

    bubbles: 0,

    chineseCharacters: 0,

    lapis: 0,

    rainDrops: 0,

    snowflakes: 0,

    explosions: 0,

    glitches: 0,

    fakeCrashes: 0,

    dinoEvents: 0,

    uniqueEvents: [],

    eventCounts: {},

    lastEvent: null,

    eventStreak: 0,

    maxEventStreak: 0,

    unlocked: [],

    firstClickTime: null,

    totalPlayTime: 0
};


// ==========================================================
// LOAD SAVE
// ==========================================================

function loadGame() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(SAVE_KEY)
            );

        if (!saved) {
            return;
        }

        Object.assign(game, saved);

    } catch {

        console.warn(
            "Save data could not be loaded."
        );

    }

}


// ==========================================================
// SAVE
// ==========================================================

function saveGame() {

    try {

        localStorage.setItem(
            SAVE_KEY,
            JSON.stringify(game)
        );

    } catch {

        console.warn(
            "Save data could not be stored."
        );

    }

}


// ==========================================================
// UI
// ==========================================================

function updateUI() {

    clickCount.textContent =
        game.clicks.toLocaleString();

    eventCount.textContent =
        game.events.toLocaleString();

    advancementCount.textContent =
        game.unlocked.length.toLocaleString();

    uniqueCount.textContent =
        game.uniqueEvents.length.toLocaleString();

    buttonStatus.textContent =
        game.events === 0
            ? "WAITING"
            : "ACTIVE";

    lastEventDisplay.textContent =
        game.lastEvent
            ? game.lastEvent.name
            : "NONE";

    eventStreakDisplay.textContent =
        game.eventStreak;

    document.title =
        game.clicks > 0
            ? `(${game.clicks}) Perfectly Safe Button`
            : "Perfectly Safe Button";

}


// ==========================================================
// MESSAGE
// ==========================================================

function setMessage(text) {

    message.textContent = text;

}


// ==========================================================
// STATUS
// ==========================================================

function setDangerState(danger = true) {

    status.classList.toggle(
        "status-danger",
        danger
    );

    status.classList.toggle(
        "status-safe",
        !danger
    );

    status.innerHTML = danger
        ? `<span class="status-dot"></span> CONTAINMENT UNSTABLE`
        : `<span class="status-dot"></span> CONTAINMENT STABLE`;

}


// ==========================================================
// FLASH
// ==========================================================

function screenFlash() {

    flash.classList.remove("active");

    void flash.offsetWidth;

    flash.classList.add("active");

}


// ==========================================================
// RANDOM POSITION
// ==========================================================

function randomPosition() {

    return {

        x:
            Math.random() * 100,

        y:
            Math.random() * 100

    };

}


// ==========================================================
// SPAWN EFFECT
// ==========================================================

function spawnEffect(
    content,
    {
        size = "3rem",
        x = Math.random() * 100,
        y = Math.random() * 100,
        className = "",
        duration = 0
    } = {}
) {

    const element =
        document.createElement("div");

    element.className =
        `effect ${className}`;

    /*
     * If content is an image filename,
     * render an actual image.
     */
    if (
        typeof content === "string" &&
        /\.(png|jpg|jpeg|webp|gif)$/i.test(content)
    ) {

        const img =
            document.createElement("img");

        img.src = content;
        img.alt = "";

        img.style.width = size;
        img.style.height = size;
        img.style.objectFit = "contain";

        element.appendChild(img);

    } else {

        /*
         * Otherwise treat it as normal
         * text / emoji content.
         */
        element.textContent =
            content;
    }

    element.style.left =
        `${x}vw`;

    element.style.top =
        `${y}vh`;

    element.style.fontSize =
        size;

    effects.appendChild(element);

    if (duration > 0) {

        setTimeout(() => {
            element.remove();
        }, duration);

    }

    return element;
}


// ==========================================================
// REMOVE EFFECTS
// ==========================================================

function clearEffects() {

    effects.innerHTML = "";

    specialOverlay.innerHTML = "";

    world.style.filter = "";

    world.style.transform = "";

    document
        .querySelectorAll(".frost")
        .forEach(el => el.remove());

    document
        .querySelectorAll(".fake-crash")
        .forEach(el => el.remove());

    document
        .querySelectorAll(".dino-screen")
        .forEach(el => el.remove());

}


// ==========================================================
// RANDOM MESSAGES
// ==========================================================

const randomMessages = [

    "Everything remains under control.",

    "The button appreciates your cooperation.",

    "Reality has been slightly adjusted.",

    "This is still perfectly safe.",

    "The button is thinking.",

    "Nothing concerning detected.",

    "Containment remains mostly intact.",

    "The button has no comment.",

    "Please remain calm.",

    "Your actions have been recorded.",

    "That was unnecessary.",

    "Interesting choice.",

    "The researchers are taking notes.",

    "Nothing happened.",

    "Probably.",

    "Continue normally.",

    "Do not investigate further."

];


// ==========================================================
// EVENTS
// ==========================================================

const events = {

    random_message: {

        name: "Random Message",

        run() {

            const text =
                randomMessages[
                    Math.floor(
                        Math.random() *
                        randomMessages.length
                    )
                ];

            setMessage(text);

        }

    },


    background_change: {

        name: "Background Shift",

        run() {

            world.style.background =
                `hsl(
                    ${Math.random() * 360},
                    45%,
                    8%
                )`;

            setMessage(
                "The environment has been slightly adjusted."
            );

        }

    },


    screen_flip: {

        name: "Screen Flip",

        run() {

            world.style.transform =
                `rotate(
                    ${Math.random() > 0.5 ? 180 : 0}deg
                )`;

            setMessage(
                "Gravity has been reconsidered."
            );

        }

    },


    random_emoji: {

        name: "Emoji Contamination",

        run() {

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
                "🛸",
                "🎃",
                "☃️",
                "🪨",
                "🧀",
                "🥐",
                "🌭"

            ];

            const emoji =
                emojis[
                    Math.floor(
                        Math.random() *
                        emojis.length
                    )
                ];

            spawnEffect(
                emoji,
                {
                    size: "4rem",
                    duration: 6000
                }
            );

            if (emoji === "🧬") {

                setMessage(
                    "it isn't just a bot"
                );

            } else if (emoji === "⚠️") {

                game.warnings++;

                setDangerState(true);

                setMessage(
                    "The button has warned you."
                );

                setTimeout(
                    () => setDangerState(false),
                    1200
                );

            }

        }

    },


    duckie: {

        name: "Duckie",

        run() {

            const position =
                randomPosition();

            spawnEffect(
                "🦆",
                {
                    size: "4rem",
                    x: position.x,
                    y: position.y,
                    duration: 7000
                }
            );

            game.ducks++;

            setMessage(
                "duckie :D"
            );

        }

    },


    jellyfish: {

        name: "Jellyfish",

        run() {

            const position =
                randomPosition();

            spawnEffect(
                "🪼",
                {
                    size: "4rem",
                    x: position.x,
                    y: position.y,
                    duration: 7000
                }
            );

            game.jellyfish++;

            setMessage(
                "something is swimming here."
            );

        }

    },


    giant_jellyfish: {

        name: "BEEG Jellyfish",

        run() {

            const giant =
                Math.random() < 0.15;

            if (giant) {

                const position =
                    randomPosition();

                const jelly =
                    spawnEffect(
                        "🪼",
                        {
                            size: "20rem",
                            x: position.x,
                            y: position.y,
                            duration: 9000
                        }
                    );

                jelly.style.zIndex = "1";

                game.giantJellyfish++;

                setMessage(
                    "BEEG jellyfish."
                );

            } else {

                events.jellyfish.run();

            }

        }

    },


    shake: {

        name: "Structural Instability",

        run() {

            world.classList.remove("shake");

            void world.offsetWidth;

            world.classList.add("shake");

            setMessage(
                "Structural integrity has become theoretical."
            );

        }

    },


    evil_spin: {

        name: "Orientation Privileges Revoked",

        run() {

            world.style.transform =
                `rotate(
                    ${Math.random() * 360}deg
                )`;

            game.spins++;

            setMessage(
                "Orientation privileges revoked."
            );

        }

    },


    nice_spin: {

        name: "Nice Spin",

        run() {

            world.style.transform =
                "rotate(360deg)";

            setTimeout(() => {

                world.style.transform =
                    "rotate(0deg)";

            }, 900);

            setMessage(
                "Everything is rotating politely."
            );

        }

    },


    smiley: {

        name: "Something Is Smiling",

        run() {

            spawnEffect(
                "🙂",
                {
                    size: "6rem",
                    duration: 7000
                }
            );

            game.smileys++;

            world.style.filter =
                "contrast(1.2) brightness(0.9)";

            setMessage(
                "something is smiling back."
            );

            setTimeout(() => {

                world.style.filter = "";

            }, 1200);

        }

    },


    melting: {

        name: "Insanity",

        run() {

            game.insanity++;

            setMessage(
                "🫠 it is melting"
            );

            let tick = 0;

            const interval =
                setInterval(() => {

                    world.style.transform =
                        `scale(
                            ${1 + Math.sin(tick) * 0.02}
                        )
                        rotate(
                            ${Math.sin(tick / 2) * 2}deg
                        )`;

                    world.style.filter =
                        `hue-rotate(
                            ${tick * 10}deg
                        )
                        blur(0.4px)`;

                    tick++;

                    if (tick > 20) {

                        clearInterval(interval);

                        world.style.transform =
                            "";

                        world.style.filter =
                            "";

                    }

                }, 90);

        }

    },


    title_corruption: {

        name: "Title Corruption",

        run() {

            const titles = [

                "Perfectly Safe Button",

                "Button.exe",

                "WHY",

                "The Button Knows",

                "Error 404: Safety Missing",

                "Press Again",

                "CONTAINMENT FAILED",

                "DO NOT LOOK BEHIND YOU"

            ];

            document.title =
                titles[
                    Math.floor(
                        Math.random() *
                        titles.length
                    )
                ];

            setMessage(
                "The title has been compromised."
            );

        }

    },


    bamboo: {

        name: "Bamboo Growth",

        run() {

            const bamboo =
                document.createElement("div");

            bamboo.className =
                "effect bamboo-effect";

            bamboo.style.left =
                `${Math.random() * 85}vw`;

            bamboo.style.bottom =
                "0";

            bamboo.style.fontSize =
                "3rem";

            bamboo.style.lineHeight =
                "0.72";

            bamboo.style.zIndex =
                "2";

            effects.appendChild(bamboo);

            let height = 0;

            const grow =
                setInterval(() => {

                    height++;

                    bamboo.innerHTML =
                        "🎋<br>".repeat(height);

                    if (height >= 7) {

                        clearInterval(grow);

                    }

                }, 140);

            game.bamboo++;

            setMessage(
                "The bamboo is advancing."
            );

        }

    },


    cleanup: {

        name: "Containment Protocol",

        run() {

            clearEffects();

            setMessage(
                "The containment team has arrived."
            );

            setDangerState(false);

        }

    },


    underwater: {

        name: "Underwater Incident",

        run() {

            setMessage(
                "why is everything underwater"
            );

            setDangerState(true);

            for (let i = 0; i < 25; i++) {

                const bubble =
                    spawnEffect(
                        "🫧",
                        {
                            size:
                                `${1 + Math.random() * 2}rem`,
                            x:
                                Math.random() * 100,
                            y: 105
                        }
                    );

                game.bubbles++;

                const distance =
                    window.innerHeight + 250;

                bubble.animate(

                    [
                        {
                            transform:
                                "translateY(0)",
                            opacity: 0
                        },

                        {
                            transform:
                                `translateY(
                                    -${distance}px
                                )`,
                            opacity: 1
                        }

                    ],

                    {
                        duration:
                            3000 +
                            Math.random() * 4000,

                        easing: "linear"
                    }

                );

                setTimeout(
                    () => bubble.remove(),
                    7500
                );

            }

            setTimeout(
                () => setDangerState(false),
                2500
            );

        }

    },


    chinese_gibberish: {

        name: "Questionable Translation",

        run() {

            const characters = [

                "的",
                "是",
                "我",
                "不",
                "你",
                "人",
                "中",
                "大",
                "天",
                "水",
                "国",
                "有",
                "来",
                "这",
                "个",
                "什",
                "么",
                "地",
                "生",
                "学",
                "日",
                "月",
                "山",
                "火",
                "木",
                "风",
                "电",
                "空",
                "门",
                "书"

            ];

            setMessage(
                "translation unavailable"
            );

            for (let i = 0; i < 120; i++) {

                const character =
                    characters[
                        Math.floor(
                            Math.random() *
                            characters.length
                        )
                    ];

                spawnEffect(
                    character,
                    {
                        size:
                            `${1 + Math.random() * 2.2}rem`,
                        x:
                            Math.random() * 100,
                        y:
                            Math.random() * 100,
                        className:
                            "chinese-character",
                        duration: 7000
                    }
                );

                game.chineseCharacters++;

            }

        }

    },


    la_peace: {

        name: "LA PEACE",

        run() {

            setMessage(
                "LA PEACE"
            );

            for (let i = 0; i < 20; i++) {

                const lapis =
                    spawnEffect(
                        "assets/LA PEACE.png",
                        {
                            size:
                                `${1.5 + Math.random() * 2}rem`,
                            x:
                                Math.random() * 100,
                            y:
                                Math.random() * 100,
                            className:
                                "lapis",
                            duration: 7000
                        }
                    );

                lapis.animate(

                    [
                        {
                            transform:
                                "translateY(0)"
                        },

                        {
                            transform:
                                "translateY(-25px)"
                        },

                        {
                            transform:
                                "translateY(0)"
                        }

                    ],

                    {
                        duration:
                            1200 +
                            Math.random() * 1000,

                        iterations: Infinity
                    }

                );

                game.lapis++;

            }

            screenFlash();

        }

    },


    rain: {

        name: "Rainfall",

        run() {

            setMessage(
                "It has started raining."
            );

            for (let i = 0; i < 80; i++) {

                const drop =
                    spawnEffect(
                        "│",
                        {
                            size: "1.2rem",
                            x: Math.random() * 100,
                            y: -10
                        }
                    );

                drop.style.color =
                    "#5e9dff";

                drop.style.opacity =
                    "0.5";

                game.rainDrops++;

                drop.animate(

                    [
                        {
                            transform:
                                "translateY(0)"
                        },

                        {
                            transform:
                                `translateY(
                                    ${window.innerHeight + 100}px
                                )`
                        }

                    ],

                    {
                        duration:
                            700 +
                            Math.random() * 900,

                        easing: "linear"
                    }

                );

                setTimeout(
                    () => drop.remove(),
                    2000
                );

            }

        }

    },


    snowfall: {

        name: "Snowfall",

        run() {

            setMessage(
                "The containment chamber is freezing."
            );

            for (let i = 0; i < 70; i++) {

                const snow =
                    spawnEffect(
                        "❄",
                        {
                            size:
                                `${0.7 + Math.random()}rem`,
                            x:
                                Math.random() * 100,
                            y: -10
                        }
                    );

                snow.style.color =
                    "#dff8ff";

                game.snowflakes++;

                snow.animate(

                    [
                        {
                            transform:
                                "translate(0,0)"
                        },

                        {
                            transform:
                                `translate(
                                    ${Math.random() * 100 - 50}px,
                                    ${window.innerHeight + 100}px
                                )`
                        }

                    ],

                    {
                        duration:
                            2500 +
                            Math.random() * 2500,

                        easing: "linear"
                    }

                );

                setTimeout(
                    () => snow.remove(),
                    5500
                );

            }

            const frost =
                document.createElement("div");

            frost.className =
                "frost";

            specialOverlay.appendChild(frost);

            setTimeout(
                () => frost.remove(),
                5000
            );

        }

    },


    explosions: {

        name: "Explosions",

        run() {

            game.explosions++;

            setMessage(
                "THIS IS FINE."
            );

            setDangerState(true);

            for (let i = 0; i < 12; i++) {

                const position =
                    randomPosition();

                const explosion =
                    spawnEffect(
                        "💥",
                        {
                            size:
                                `${2 + Math.random() * 5}rem`,
                            x:
                                position.x,
                            y:
                                position.y
                        }
                    );

                explosion.animate(

                    [
                        {
                            transform:
                                "scale(0)",
                            opacity: 0
                        },

                        {
                            transform:
                                "scale(1.5)",
                            opacity: 1
                        },

                        {
                            transform:
                                "scale(0.7)",
                            opacity: 0
                        }

                    ],

                    {
                        duration: 900
                    }

                );

                setTimeout(
                    () => explosion.remove(),
                    1000
                );

            }

            screenFlash();

            setTimeout(
                () => setDangerState(false),
                1600
            );

        }

    },


    glitch: {

        name: "Reality Glitch",

        run() {

            game.glitches++;

            setMessage(
                "reality.exe has encountered an issue"
            );

            let i = 0;

            const interval =
                setInterval(() => {

                    world.style.transform =
                        `translate(
                            ${Math.random() * 20 - 10}px,
                            ${Math.random() * 20 - 10}px
                        )
                        skew(
                            ${Math.random() * 8 - 4}deg
                        )`;

                    world.style.filter =
                        `hue-rotate(
                            ${Math.random() * 360}deg
                        )
                        contrast(1.5)`;

                    i++;

                    if (i >= 12) {

                        clearInterval(interval);

                        world.style.transform =
                            "";

                        world.style.filter =
                            "";

                    }

                }, 80);

        }

    },


    fake_crash: {

        name: "Critical Failure",

        run() {

            game.fakeCrashes++;

            setMessage(
                "SYSTEM FAILURE"
            );

            const crash =
                document.createElement("div");

            crash.className =
                "fake-crash";

            crash.innerHTML = `

                <div class="fake-crash-box">

                    <div class="fake-crash-face">
                        :(
                    </div>

                    <div>
                        Your button ran into a problem
                        and needs to restart.
                    </div>

                    <br>

                    <div>
                        Error code:
                        PERFECTLY_SAFE_001
                    </div>

                    <br>

                    <div>
                        Collecting absolutely useless
                        information...
                    </div>

                    <br>

                    <div>
                        0% complete
                    </div>

                </div>

            `;

            specialOverlay.appendChild(crash);

            setTimeout(
                () => crash.remove(),
                3500
            );

        }

    },


    dino: {

        name: "Connection Lost",

        run() {

            game.dinoEvents++;

            setMessage(
                "Check your internet connection."
            );

            const screen =
                document.createElement("div");

            screen.className =
                "dino-screen";

            screen.innerHTML = `

                <div
                    style="
                        font-size:12px;
                        margin-bottom:30px;
                    "
                >
                    NO INTERNET
                </div>

                <div class="dino">
                    🦖
                </div>

                <div
                    style="
                        margin-top:25px;
                        color:#777;
                    "
                >
                    Press the button to reconnect
                </div>

            `;

            specialOverlay.appendChild(screen);

            setTimeout(
                () => screen.remove(),
                4000
            );

        }

    },


    leave: {

        name: "ĿɆȺVɆ",

        run() {

            game.leave++;

            setMessage(
                "ĿɆȺVɆ"
            );

            world.style.filter =
                "invert(1)";

            screenFlash();

            setTimeout(() => {

                world.style.filter =
                    "";

            }, 1000);

        }

    }

};


// ==========================================================
// EVENT ENGINE
// ==========================================================

function runEvent() {

    const names =
        Object.keys(events);

    const eventId =
        names[
            Math.floor(
                Math.random() *
                names.length
            )
        ];

    const event =
        events[eventId];

    game.events++;

    if (!game.eventCounts[eventId]) {

        game.eventCounts[eventId] = 0;

    }

    game.eventCounts[eventId]++;

    if (!game.uniqueEvents.includes(eventId)) {

        game.uniqueEvents.push(eventId);

    }

    if (game.lastEvent?.id === eventId) {

        game.eventStreak++;

    } else {

        game.eventStreak = 1;

    }

    game.maxEventStreak =
        Math.max(
            game.maxEventStreak,
            game.eventStreak
        );

    game.lastEvent = {

        id: eventId,

        name: event.name

    };

    try {

        event.run();

    } catch (error) {

        console.error(
            `Event failed: ${eventId}`,
            error
        );

        setMessage(
            "EVENT ERROR"
        );

    }

    updateUI();

    if (
        window.Advancements &&
        typeof window.Advancements.check === "function"
    ) {

        window.Advancements.check();

    }

    saveGame();

}


// ==========================================================
// CLICK
// ==========================================================

button.addEventListener(
    "click",
    () => {

        game.clicks++;

        if (!game.firstClickTime) {

            game.firstClickTime =
                Date.now();

        }

        buttonStatus.textContent =
            "PROCESSING";

        runEvent();

        setTimeout(() => {

            buttonStatus.textContent =
                "ACTIVE";

        }, 120);

    }
);


// ==========================================================
// KEYBOARD
// ==========================================================

button.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            button.click();

        }

    }
);


// ==========================================================
// INITIALIZATION
// ==========================================================

loadGame();

updateUI();

setDangerState(false);
