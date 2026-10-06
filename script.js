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

    taxesPaid: 0,
    taxesEvaded: 0,

    snailsSeen: 0,

    callsAnswered: 0,
    
    bonesFound: 0,

    coinsFound: 0,

    rightSock: 0,
    leftSock: 0,

    languagesSeen: [],

    weatherForecast: null,

    rightForOnce: false,

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
        name: "DINO RUN",

        run() {
            startDinoGame();
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

     },


button_moved: {
    name: "BUTTON HAS MOVED",

    run() {
        setMessage("THE BUTTON HAS EXERCISED ITS RIGHT TO MOVE.");

        const original = {
            left: button.style.left,
            top: button.style.top,
            transform: button.style.transform
        };

        button.style.position = "relative";
        button.style.transition = "transform 0.8s cubic-bezier(.2,.8,.2,1)";

        const x = (Math.random() - 0.5) * 500;
        const y = (Math.random() - 0.5) * 300;

        button.style.transform = `translate(${x}px, ${y}px)`;

        setTimeout(() => {
            button.style.transform = "translate(0, 0)";

            setTimeout(() => {
                button.style.transition = "";
            }, 800);
        }, 4500);
    }
},

button_shrink: {
    name: "BUTTON SHRINK",

    run() {
        setMessage("THE BUTTON IS BECOMING LESS OF A BUTTON.");

        button.style.transition =
            "transform 0.8s cubic-bezier(.2,.8,.2,1)";

        button.style.transform =
            "scale(0.08) rotate(-8deg)";

        setTimeout(() => {
            button.style.transform =
                "scale(1) rotate(0deg)";
        }, 5000);
    }
},

button_grow: {
    name: "BUTTON GROW",

    run() {
        setMessage("WE MAY HAVE OVERENGINEERED THE BUTTON.");

        button.style.transition =
            "transform 0.8s cubic-bezier(.2,.8,.2,1)";

        button.style.transform =
            "scale(2.4)";

        setTimeout(() => {
            button.style.transform =
                "scale(1)";
        }, 5000);
    }
},

button_lying: {
    name: "THE BUTTON IS LYING",

    run() {
        const lies = [
            "PRESS ME",
            "TOTALLY SAFE",
            "TRUST ME",
            "NOTHING WILL HAPPEN",
            "SERIOUSLY",
            "THIS IS FINE",
            "CLICK HERE",
            "ABSOLUTELY HARMLESS"
        ];

        const original =
            button.querySelector("span:last-child");

        if (!original) return;

        const oldText = original.textContent;

        original.textContent =
            lies[Math.floor(Math.random() * lies.length)];

        setMessage("THE BUTTON IS LYING.");

        setTimeout(() => {
            original.textContent = oldText;
        }, 5000);
    }
},

reverse_controls: {
    name: "REVERSE CONTROLS",

    run() {
        setMessage("INPUT CALIBRATION: QUESTIONABLE");

        document.body.classList.add("reverse-controls");

        const handler = (event) => {
            event.preventDefault();
        };

        // Make the pointer feel wrong by moving the button
        // whenever the pointer approaches it.
        const move = (event) => {
            const rect = button.getBoundingClientRect();

            const dx =
                event.clientX -
                (rect.left + rect.width / 2);

            const dy =
                event.clientY -
                (rect.top + rect.height / 2);

            button.style.transform =
                `translate(${-dx * 0.12}px, ${-dy * 0.12}px)`;
        };

        document.addEventListener("mousemove", move);

        setTimeout(() => {
            document.removeEventListener("mousemove", move);

            button.style.transform = "";
            document.body.classList.remove("reverse-controls");
        }, 8000);
    }
},

reality_404: {
    name: "404 REALITY",

    run() {
        setMessage("REALITY NOT FOUND.");

        const overlay =
            document.createElement("div");

        overlay.className = "reality-404";

        overlay.innerHTML = `
            <div class="reality-404-box">
                <div class="reality-404-code">404</div>
                <div class="reality-404-title">
                    REALITY NOT FOUND
                </div>
                <div class="reality-404-text">
                    The requested reality could not be located.
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        setTimeout(() => {
            overlay.remove();
        }, 4500);
    }
},

system_update: {
    name: "SYSTEM UPDATE",

    run() {
        setMessage("UPDATING BUTTON...");

        const overlay =
            document.createElement("div");

        overlay.className = "system-update";

        overlay.innerHTML = `
            <div class="system-update-box">
                <div class="system-update-title">
                    BUTTON SYSTEM UPDATE
                </div>

                <div class="system-update-bar">
                    <div class="system-update-fill"></div>
                </div>

                <div class="system-update-percent">
                    0%
                </div>

                <div class="system-update-status">
                    INITIALIZING...
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        const fill =
            overlay.querySelector(".system-update-fill");

        const percent =
            overlay.querySelector(".system-update-percent");

        const status =
            overlay.querySelector(".system-update-status");

        let progress = 0;

        const statuses = [
            "INITIALIZING...",
            "CALIBRATING BUTTON...",
            "UPDATING REALITY...",
            "INSTALLING QUESTIONABLE FEATURES...",
            "REMOVING SAFETY...",
            "ALMOST DONE..."
        ];

        const interval = setInterval(() => {

            progress +=
                Math.random() * 13;

            if (progress > 100)
                progress = 100;

            fill.style.width =
                `${progress}%`;

            percent.textContent =
                `${Math.floor(progress)}%`;

            status.textContent =
                statuses[
                    Math.min(
                        statuses.length - 1,
                        Math.floor(progress / 18)
                    )
                ];

            if (progress >= 100) {

                clearInterval(interval);

                status.textContent =
                    "UPDATE FAILED SUCCESSFULLY";

                setTimeout(() => {
                    overlay.remove();
                }, 1800);
            }

        }, 350);
    }
},

copy_machine: {
    name: "COPY MACHINE",

    run() {
        setMessage("COPY MACHINE ACTIVATED.");

        const copies = [];

        for (let i = 0; i < 12; i++) {

            const clone =
                button.cloneNode(true);

            clone.removeAttribute("id");

            clone.classList.add("button-copy");

            clone.style.position = "fixed";

            clone.style.left =
                `${10 + Math.random() * 80}vw`;

            clone.style.top =
                `${10 + Math.random() * 80}vh`;

            clone.style.transform =
                `rotate(${Math.random() * 30 - 15}deg) scale(${0.5 + Math.random() * 0.6})`;

            clone.disabled = true;

            document.body.appendChild(clone);
            copies.push(clone);
        }

        setTimeout(() => {
            copies.forEach(copy => copy.remove());
        }, 5000);
    }
},

button_cloning: {
    name: "BUTTON CLONING",

    run() {
        setMessage("BUTTON CLONING IN PROGRESS.");

        const clones = [];
        let count = 2;

        const interval = setInterval(() => {

            for (let i = 0; i < count; i++) {

                const clone =
                    button.cloneNode(true);

                clone.removeAttribute("id");

                clone.classList.add("button-copy");

                clone.style.position = "fixed";

                clone.style.left =
                    `${Math.random() * 90}vw`;

                clone.style.top =
                    `${Math.random() * 90}vh`;

                clone.style.transform =
                    `scale(${Math.max(0.3, 1 / count)})`;

                clone.disabled = true;

                document.body.appendChild(clone);

                clones.push(clone);
            }

            count *= 2;

            if (count > 16) {
                clearInterval(interval);
            }

        }, 500);

        setTimeout(() => {
            clearInterval(interval);

            clones.forEach(clone => {
                clone.remove();
            });
        }, 5500);
    }
},

the_void: {
    name: "THE VOID",

    run() {
        setMessage("THE VOID HAS ARRIVED.");

        const overlay =
            document.createElement("div");

        overlay.className = "void-overlay";

        document.body.appendChild(overlay);

        setTimeout(() => {
            overlay.classList.add("active");
        }, 20);

        setTimeout(() => {
            overlay.classList.remove("active");

            setTimeout(() => {
                overlay.remove();
            }, 1000);

        }, 4500);
    }
},

low_battery: {
    name: "LOW BATTERY",

    run() {
        setMessage("BUTTON BATTERY CRITICALLY LOW.");

        const battery =
            document.createElement("div");

        battery.className = "fake-battery";

        battery.innerHTML = `
            <span>⚠ BUTTON BATTERY</span>
            <strong>3%</strong>
        `;

        document.body.appendChild(battery);

        setTimeout(() => {
            battery.querySelector("strong").textContent = "1%";
        }, 1500);

        setTimeout(() => {
            battery.querySelector("strong").textContent = "0%";
        }, 3000);

        setTimeout(() => {
            battery.querySelector("strong").textContent = "101%";
            setMessage("BUTTON BATTERY: 101%");

        }, 4200);

        setTimeout(() => {
            battery.remove();
        }, 6000);
    }
},

admin_mode: {
    name: "ADMIN MODE",

    run() {
        setMessage("ADMINISTRATOR ACCESS GRANTED.");

        const overlay =
            document.createElement("div");

        overlay.className = "admin-overlay";

        overlay.innerHTML = `
            <div class="admin-panel">
                <div class="admin-header">
                    ADMINISTRATOR ACCESS GRANTED
                </div>

                <div class="admin-row">
                    <span>USER</span>
                    <strong>UNKNOWN</strong>
                </div>

                <div class="admin-row">
                    <span>CLEARANCE</span>
                    <strong>WHY</strong>
                </div>

                <div class="admin-row">
                    <span>THREAT LEVEL</span>
                    <strong>YES</strong>
                </div>

                <div class="admin-row">
                    <span>BUTTON STATUS</span>
                    <strong>QUESTIONABLE</strong>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        setTimeout(() => {
            overlay.remove();
            setMessage("ADMIN ACCESS REVOKED.");
        }, 5000);
    }
},

duplicate_universe: {
    name: "DUPLICATE UNIVERSE",

    run() {
        setMessage("A SECOND UNIVERSE HAS BEEN DETECTED.");

        const clone =
            document.getElementById("world").cloneNode(true);

        clone.id = "duplicate-universe";

        clone.style.position = "fixed";
        clone.style.inset = "0";
        clone.style.zIndex = "999998";
        clone.style.pointerEvents = "none";
        clone.style.opacity = "0.72";
        clone.style.transform =
            "translate(18px, 18px)";

        document.body.appendChild(clone);

        setTimeout(() => {
            clone.remove();
            setMessage("TIMELINE COLLAPSED.");
        }, 5000);
    }
},

timeout: {
    name: "TIMEOUT",

    run() {
        setMessage("BUTTON IS THINKING...");

        button.disabled = true;

        const original =
            button.querySelector("span:last-child");

        if (!original) return;

        const oldText =
            original.textContent;

        let count = 3;

        original.textContent = count;

        const interval = setInterval(() => {

            count--;

            if (count > 0) {
                original.textContent = count;
            } else {
                clearInterval(interval);

                original.textContent =
                    "DECISION: PRESSING IS PERMITTED";

                setTimeout(() => {
                    original.textContent = oldText;
                    button.disabled = false;
                }, 1800);
            }

        }, 1000);
    }
},

containment_breach: {
    name: "CONTAINMENT BREACH",

    run() {
        game.warnings++;

        setMessage("CONTAINMENT BREACH.");

        document.body.classList.add(
            "containment-breach"
        );

        for (let i = 0; i < 15; i++) {
            spawnEffect(
                "⚠",
                {
                    size: "2rem",
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    className: "warning-effect",
                    duration: 3500
                }
            );
        }

        setTimeout(() => {
            document.body.classList.remove(
                "containment-breach"
            );
        }, 4500);
    }
},

gravity_failure: {
    name: "GRAVITY FAILURE",

    run() {
        setMessage("GRAVITY HAS LEFT THE BUILDING.");

        effects.classList.add(
            "gravity-failure"
        );

        setTimeout(() => {
            effects.classList.remove(
                "gravity-failure"
            );
        }, 6000);
    }
},

anti_click: {
    name: "ANTI-CLICK",

    run() {
        setMessage("INPUT BUFFERING...");

        const queued =
            [];

        const handler = () => {
            queued.push(Date.now());
            setMessage(
                `INPUT BUFFERED: ${queued.length}`
            );
        };

        button.addEventListener(
            "click",
            handler,
            true
        );

        setTimeout(() => {

            button.removeEventListener(
                "click",
                handler,
                true
            );

            setMessage(
                `BUFFER FLUSHED: ${queued.length} INPUTS`
            );

            for (let i = 0; i < queued.length; i++) {
                setTimeout(() => {
                    runEvent();
                }, i * 200);
            }

        }, 7000);
    }
},

button_remembers: {
    name: "THE BUTTON REMEMBERS",

    run() {
        setMessage(
            `YOU HAVE PRESSED ME ${game.clicks} TIMES.`
        );

        spawnEffect(
            `YOU HAVE PRESSED ME ${game.clicks} TIMES.`,
            {
                size: "2rem",
                x: 50,
                y: 30,
                className: "memory-message",
                duration: 4000
            }
        );
    }
},

floor_is_lava: {
    name: "THE FLOOR IS LAVA",

    run() {
        setMessage("THE FLOOR IS LAVA.");

        const lava =
            document.createElement("div");

        lava.className = "lava-floor";

        document.body.appendChild(lava);

        setTimeout(() => {
            lava.classList.add("active");
        }, 20);

        setTimeout(() => {
            lava.classList.remove("active");

            setTimeout(() => {
                lava.remove();
            }, 1000);

        }, 5000);
    }
},

// ============================================================
// SECRET EVENTS
// ============================================================

the_number: {
    name: "THE NUMBER",
    secret: true,

    run() {
        setMessage("13");

        const number =
            spawnEffect(
                "13",
                {
                    size: "8rem",
                    x: 50,
                    y: 45,
                    className: "mysterious-number",
                    duration: 3500
                }
            );

        number.style.transform =
            "translate(-50%, -50%)";
    }
},

question_marks: {
    name: "???",
    secret: true,

    run() {
        setMessage(
            "you weren't supposed to see this"
        );

        spawnEffect(
            "you weren't supposed to see this",
            {
                size: "2rem",
                x: 50,
                y: 50,
                className: "secret-message",
                duration: 4000
            }
        );
    }
},

null_event: {
    name: "NULL",
    secret: true,

    run() {
        setMessage("NULL");

        const elements =
            document.querySelectorAll(
                "#click-count, #event-count, #advancement-count, #unique-count, #button-status, #last-event, #event-streak"
            );

        const originals = [];

        elements.forEach(element => {
            originals.push({
                element,
                value: element.textContent
            });

            element.textContent = "NULL";
        });

        setTimeout(() => {
            originals.forEach(item => {
                item.element.textContent =
                    item.value;
            });
        }, 3500);
    }
},

last_button: {
    name: "THE LAST BUTTON",
    secret: true,

    run() {
        setMessage(
            "THERE IS ANOTHER BUTTON."
        );

        const second =
            button.cloneNode(true);

        second.removeAttribute("id");

        second.classList.add(
            "mysterious-button"
        );

        second.style.position = "fixed";
        second.style.left = "25%";
        second.style.top = "50%";
        second.style.transform =
            "translate(-50%, -50%)";

        const original =
            button.getBoundingClientRect();

        button.style.position = "fixed";
        button.style.left = "75%";
        button.style.top = "50%";
        button.style.transform =
            "translate(-50%, -50%)";

        document.body.appendChild(second);

        const cleanup = () => {
            second.remove();

            button.style.position = "";
            button.style.left = "";
            button.style.top = "";
            button.style.transform = "";
        };

        second.addEventListener(
            "click",
            cleanup,
            { once: true }
        );

        button.addEventListener(
            "click",
            cleanup,
            { once: true }
        );

        setTimeout(cleanup, 7000);
    }
},

button_self_press: {
    name: "THE BUTTON PRESSES ITSELF",
    secret: true,

    run() {
        setMessage("INPUT SOURCE: UNKNOWN.");

        setTimeout(() => {
            button.animate(
                [
                    {
                        transform: "scale(1)"
                    },
                    {
                        transform: "scale(0.9)"
                    },
                    {
                        transform: "scale(1)"
                    }
                ],
                {
                    duration: 300,
                    iterations: 1
                }
            );

            // Trigger the normal click system.
            button.click();

        }, 1200);
    }
},


    traffic_light: {
    name: "TRAFFIC LIGHT",

    run() {
        lockButton();
        setMessage("TRAFFIC CONTROL HAS ARRIVED.");

        const light = document.createElement("div");

        light.className = "traffic-light-event";

        light.innerHTML = `
            <div class="traffic-light-box">
                <div class="traffic-light red"></div>
                <div class="traffic-light yellow"></div>
                <div class="traffic-light green"></div>
            </div>
            <div class="traffic-light-text">WAIT.</div>
        `;

        document.body.appendChild(light);

        const text =
            light.querySelector(".traffic-light-text");

        const red =
            light.querySelector(".red");

        const yellow =
            light.querySelector(".yellow");

        const green =
            light.querySelector(".green");

        setTimeout(() => {
            red.classList.add("active");
            text.textContent = "STOP.";
        }, 200);

        setTimeout(() => {
            red.classList.remove("active");
            yellow.classList.add("active");
            text.textContent = "GET READY.";
        }, 1800);

        setTimeout(() => {
            yellow.classList.remove("active");
            green.classList.add("active");
            text.textContent = "YOU MAY NOW PRESS THE BUTTON.";
        }, 3300);

        setTimeout(() => {
            light.remove();
        }, 6500);

        unlockButton();
    }
},

snail: {
    name: "SNAIL",

    run() {
        game.snailsSeen++;

        lockButton();
        setMessage("A SNAIL HAS ARRIVED.");

        const event = document.createElement("div");
        event.className = "snail-event";

        event.innerHTML = `
            <div class="snail-event-card">
                <div class="snail-event-label">NATURE EVENT</div>

                <div class="snail-event-title">
                    A SNAIL
                </div>

                <div class="snail-stage">
                    <div class="snail">🐌</div>
                    <div class="snail-ground"></div>
                </div>

                <div class="snail-status">
                    IT IS MOVING.
                </div>
            </div>
        `;

        document.body.appendChild(event);

        const snail = event.querySelector(".snail");
        const status = event.querySelector(".snail-status");

        snail.animate(
            [
                { transform: "translateX(-180px)" },
                { transform: "translateX(520px)" }
            ],
            {
                duration: 9000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            status.textContent = "IT HAS ARRIVED.";
        }, 9000);

        setTimeout(() => {
            status.textContent = "PATIENCE.";
        }, 9700);

        setTimeout(() => {
            event.remove();
            unlockButton();

            setMessage("THE SNAIL HAS LEFT.");

            if (typeof window.Advancements !== "undefined") {
                window.Advancements.check();
            }
        }, 10500);
    }
},

    
potato: {
    name: "POTATO",

    run() {
        setMessage("POTATO DETECTED.");

        const potato =
            spawnEffect("🥔", {
                size: "6rem",
                x: 50,
                y: 45,
                className: "potato-event",
                duration: 4500
            });

        potato.style.transform =
            "translate(-50%, -50%)";

        setTimeout(() => {
            setMessage("CLASSIFICATION: POTATO.");
        }, 700);
    }
},

duck_review: {
    name: "DUCK REVIEW",

    run() {

        setMessage("DUCK REVIEW IN PROGRESS.");

        const ratings = [
            {
                stars: "★★★★★",
                text: "Surprisingly good."
            },
            {
                stars: "★★★★☆",
                text: "Acceptable."
            },
            {
                stars: "★★★☆☆",
                text: "Could be better."
            },
            {
                stars: "★★☆☆☆",
                text: "Concerning."
            },
            {
                stars: "★☆☆☆☆",
                text: "Duck is disappointed."
            }
        ];

        const review =
            ratings[Math.floor(Math.random() * ratings.length)];

        const event = document.createElement("div");

        event.className = "duck-review";

        event.innerHTML = `
            <div class="duck-review-window">

                <div class="duck-review-header">
                    <span>DUCK REVIEW</span>
                    <span>● LIVE</span>
                </div>

                <div class="duck-review-body">

                    <div class="duck-review-duck">
                        🦆
                    </div>

                    <div class="duck-review-info">

                        <div class="duck-review-label">
                            OFFICIAL BUTTON EVALUATION
                        </div>

                        <div class="duck-review-score">
                            ${review.stars}
                        </div>

                        <div class="duck-review-text">
                            "${review.text}"
                        </div>

                    </div>

                </div>

                <div class="duck-review-footer">
                    REVIEWER: DUCK
                </div>

            </div>
        `;

        document.body.appendChild(event);

        setTimeout(() => {
            event.classList.add("duck-review-visible");
        }, 20);

        setTimeout(() => {
            event.classList.remove("duck-review-visible");

            setTimeout(() => {
                event.remove();
            }, 300);

        }, 4500);
    }
},

unknown_caller: {
    name: "UNKNOWN CALLER",

    run() {
        lockButton();

        setMessage("INCOMING CALL.");

        const caller = document.createElement("div");
        caller.className = "unknown-caller";

        caller.innerHTML = `
            <div class="phone-call">

                <div class="phone-status">
                    INCOMING CALL
                </div>

                <div class="phone-icon">
                    ☎
                </div>

                <div class="phone-title">
                    UNKNOWN CALLER
                </div>

                <div class="phone-number">
                    +??? ??? ????
                </div>

                <div class="phone-ringing">
                    RINGING...
                </div>

                <div class="phone-actions">

                    <button
                        class="phone-answer"
                        type="button"
                    >
                        <span>☎</span>
                        ANSWER
                    </button>

                    <button
                        class="phone-decline"
                        type="button"
                    >
                        <span>✕</span>
                        DECLINE
                    </button>

                </div>

            </div>
        `;

        document.body.appendChild(caller);

        const phone = caller.querySelector(".phone-call");
        const answer = caller.querySelector(".phone-answer");
        const decline = caller.querySelector(".phone-decline");

        function closeCall() {
            caller.classList.add("call-ending");

            setTimeout(() => {
                caller.remove();
                unlockButton();
            }, 300);
        }

        answer.addEventListener("click", () => {

            game.callsAnswered++;

            phone.innerHTML = `
                <div class="phone-status">
                    CONNECTED
                </div>

                <div class="phone-icon phone-connected">
                    ☎
                </div>

                <div class="phone-title">
                    UNKNOWN CALLER
                </div>

                <div class="phone-number">
                    +??? ??? ????
                </div>

                <div class="phone-ringing">
                    ...
                </div>
            `;

            setMessage("CALL CONNECTED.");

            setTimeout(() => {

                phone.innerHTML = `
                    <div class="phone-status">
                        CALL ENDED
                    </div>

                    <div class="phone-icon">
                        ☎
                    </div>

                    <div class="phone-title">
                        UNKNOWN CALLER
                    </div>

                    <div class="ghosted-message">
                        YOU HAVE BEEN GHOSTED.
                    </div>
                `;

                setMessage("YOU HAVE BEEN GHOSTED.");

                if (typeof window.Advancements !== "undefined") {
                    window.Advancements.check();
                }

                setTimeout(closeCall, 2200);

            }, 1800);
        });

        decline.addEventListener("click", () => {

            setMessage("CALL DECLINED.");

            phone.innerHTML = `
                <div class="phone-status">
                    CALL DECLINED
                </div>

                <div class="phone-icon">
                    ✕
                </div>

                <div class="phone-title">
                    UNKNOWN CALLER
                </div>
            `;

            setTimeout(closeCall, 1000);
        });

        setTimeout(() => {

            if (!document.body.contains(caller)) {
                return;
            }

            phone.innerHTML = `
                <div class="phone-status">
                    NO RESPONSE
                </div>

                <div class="phone-icon">
                    ☎
                </div>

                <div class="phone-title">
                    CALLER LEFT
                </div>
            `;

            setMessage("THE CALLER GAVE UP.");

            setTimeout(closeCall, 1200);

        }, 9000);
    }
},

    
juice_box: {
    name: "JUICE BOX",

    run() {

        setMessage(
            "JUICE HAS BEEN DEPLOYED."
        );

        const juice =
            spawnEffect("🧃", {
                size: "6rem",
                x: 50,
                y: -10,
                className: "juice-event"
            });

        juice.animate(
            [
                {
                    transform:
                        "translate(-50%, -100px) rotate(-15deg)"
                },
                {
                    transform:
                        "translate(-50%, 45vh) rotate(8deg)"
                },
                {
                    transform:
                        "translate(-50%, 38vh) rotate(-4deg)"
                }
            ],
            {
                duration: 1200,
                easing: "cubic-bezier(.2,.8,.2,1)"
            }
        );

        juice.style.transform =
            "translate(-50%, 38vh)";

        setTimeout(() => {
            juice.remove();
        }, 5000);
    }
},

one_drop: {
    name: "ONE DROP",

    run() {

        setMessage("ONE DROP.");

        const drop =
            document.createElement("div");

        drop.className = "single-drop";
        drop.textContent = "💧";

        drop.style.left =
            `${20 + Math.random() * 60}vw`;

        document.body.appendChild(drop);

        drop.animate(
            [
                {
                    transform:
                        "translateY(-100px)",
                    opacity: 0
                },
                {
                    transform:
                        "translateY(0)",
                    opacity: 1
                }
            ],
            {
                duration: 1600,
                easing: "ease-in"
            }
        );

        setTimeout(() => {
            drop.remove();
        }, 1800);
    }
},

brain: {
    name: "BRAIN",

    run() {

        setMessage(
            "PROCESSING... ERROR: THOUGHT NOT FOUND"
        );

        const brain =
            spawnEffect("🧠", {
                size: "7rem",
                x: 50,
                y: 45,
                className: "brain-event",
                duration: 4000
            });

        brain.style.transform =
            "translate(-50%, -50%)";

        setTimeout(() => {

            spawnEffect(
                "ERROR: THOUGHT NOT FOUND",
                {
                    size: "1.5rem",
                    x: 50,
                    y: 60,
                    className: "brain-error",
                    duration: 2500
                }
            );

        }, 1000);
    }
},

egg: {
    name: "EGG",

    run() {

        setMessage("EGG DETECTED.");

        let stage = 0;

        const egg =
            document.createElement("div");

        egg.className = "egg-event";
        egg.textContent = "🥚";

        document.body.appendChild(egg);

        const cycle = () => {

            stage++;

            if (stage === 1) {
                egg.textContent = "🥚";
            }

            if (stage === 2) {
                egg.textContent = "🥚";
                setMessage("CRACK.");
            }

            if (stage === 3) {
                egg.textContent = "🥚";
                setMessage(
                    "THERE IS ANOTHER EGG."
                );
            }

            if (stage === 4) {
                egg.textContent = "🥚";
                setMessage(
                    "THERE IS ANOTHER EGG."
                );
            }

            if (stage >= 5) {

                egg.textContent = "∅";

                setTimeout(() => {
                    egg.remove();
                }, 700);

                return;
            }

            setTimeout(cycle, 900);
        };

        cycle();
    }
},

coin: {
    name: "COIN",

    run() {

        game.coinsFound++;

        setMessage("+1 COIN");

        const coin =
            spawnEffect("🪙", {
                size: "5rem",
                x: 50,
                y: 45,
                className: "coin-event",
                duration: 3500
            });

        coin.style.transform =
            "translate(-50%, -50%)";

        setTimeout(() => {
            setMessage(
                "WHERE IS MY WALLET"
            );
        }, 1200);
    }
},

rock: {
    name: "ROCK",

    run() {

        setMessage("Rock.");

        const rock =
            spawnEffect("🪨", {
                size: "5rem",
                x: 50,
                y: 50,
                className: "rock-event",
                duration: 4500
            });

        rock.style.transform =
            "translate(-50%, -50%)";
    }
},

bone: {
    name: "BONE",

    run() {

        game.bonesFound++;

        setMessage(
            `BONE FOUND. TOTAL: ${game.bonesFound}`
        );

        const bone =
            spawnEffect("🦴", {
                size: "5rem",
                x: 50,
                y: 45,
                className: "bone-event",
                duration: 4000
            });

        bone.style.transform =
            "translate(-50%, -50%)";

        setTimeout(() => {

            setMessage(
                "ARCHAEOLOGICAL FIND."
            );

        }, 900);
    }
},

right_sock: {
    name: "RIGHT SOCK",

    run() {

        game.rightSock++;

        setMessage(
            "RIGHT SOCK ACQUIRED."
        );

        const sock =
            spawnEffect("🧦", {
                size: "5rem",
                x: 50,
                y: 45,
                className: "sock-event",
                duration: 4500
            });

        sock.style.transform =
            "translate(-50%, -50%)";
    }
},

left_sock: {
    name: "LEFT SOCK",

    run() {

        game.leftSock++;

        setMessage(
            "LEFT SOCK ACQUIRED."
        );

        const sock =
            spawnEffect("🧦", {
                size: "6rem",
                x: 50,
                y: 45,
                className: "rare-sock-event",
                duration: 5000
            });

        sock.style.transform =
            "translate(-50%, -50%)";

        for (let i = 0; i < 12; i++) {

            spawnEffect(
                "✦",
                {
                    size: "1rem",
                    x:
                        35 + Math.random() * 30,
                    y:
                        30 + Math.random() * 35,
                    className: "sock-sparkle",
                    duration: 2200
                }
            );
        }
    }
},

hi_bye: {
    name: "HI / BYE",

    run() {

        setMessage("hi.");

        const text =
            spawnEffect("hi.", {
                size: "5rem",
                x: 50,
                y: 45,
                className: "hi-bye-event"
            });

        text.style.transform =
            "translate(-50%, -50%)";

        setTimeout(() => {

            text.textContent = "bye.";

            setMessage("bye.");

        }, 1800);

        setTimeout(() => {
            text.remove();
        }, 3500);
    }
},

windows_95: {
    name: "WINDOWS 95 ERROR",

    run() {

        setMessage(
            "WINDOWS 95 HAS ENCOUNTERED A BUTTON."
        );

        const error =
            document.createElement("div");

        error.className =
            "windows95-error";

        error.innerHTML = `
            <div class="win95-window">

                <div class="win95-titlebar">
                    <span>
                        BUTTON.EXE
                    </span>

                    <button
                        type="button"
                        class="win95-x"
                    >
                        ×
                    </button>
                </div>

                <div class="win95-body">

                    <div class="win95-icon">
                        ⚠
                    </div>

                    <div>
                        <strong>
                            BUTTON.EXE has caused
                            an invalid operation.
                        </strong>

                        <p>
                            The button will now
                            continue existing.
                        </p>
                    </div>

                </div>

                <div class="win95-actions">
                    <button type="button">
                        OK
                    </button>
                </div>

            </div>
        `;

        document.body.appendChild(error);

        const action =
            error.querySelector(
                ".win95-actions button"
            );

        let presses = 0;

        action.addEventListener(
            "click",
            () => {

                presses++;

                if (presses < 4) {

                    const box =
                        document.createElement(
                            "div"
                        );

                    box.className =
                        "win95-mini-error";

                    box.innerHTML = `
                        <strong>
                            ERROR
                        </strong>

                        <span>
                            The previous
                            OK button was
                            insufficient.
                        </span>

                        <button>
                            OK
                        </button>
                    `;

                    document.body.appendChild(box);

                    box.querySelector(
                        "button"
                    ).onclick = () => {
                        box.remove();
                    };

                } else {

                    error.remove();

                    setMessage(
                        "fine."
                    );
                }
            }
        );

        error.querySelector(
            ".win95-x"
        ).onclick = () => {
            error.remove();
        };
    }
},

button_tax: {
    name: "BUTTON TAX",

    run() {

        const tax =
            Math.min(
                100,
                Math.max(
                    1,
                    Math.floor(
                        game.clicks * 0.01
                    )
                )
            );

        setMessage(
            `BUTTON TAX: ${tax} CLICKS`
        );

        const taxBox =
            document.createElement("div");

        taxBox.className =
            "tax-event";

        taxBox.innerHTML = `
            <div class="tax-box">

                <div class="tax-title">
                    BUTTON TAX
                </div>

                <div class="tax-amount">
                    ${tax} CLICKS DUE
                </div>

                <div class="tax-actions">

                    <button
                        class="tax-pay"
                        type="button"
                    >
                        PAY TAX
                    </button>

                    <button
                        class="tax-evade"
                        type="button"
                    >
                        EVADE TAX
                    </button>

                </div>

            </div>
        `;

        document.body.appendChild(taxBox);

        const pay =
            taxBox.querySelector(
                ".tax-pay"
            );

        const evade =
            taxBox.querySelector(
                ".tax-evade"
            );

        let finished = false;

        function close() {
            if (finished) return;
            finished = true;
            taxBox.remove();
        }

        pay.onclick = () => {

            if (finished) return;

            game.clicks =
                Math.max(
                    0,
                    game.clicks - tax
                );

            game.taxesPaid++;

            close();

            setMessage(
                `TAX PAID: ${tax} CLICKS`
            );

            if (
                typeof window.Advancements
                !== "undefined"
            ) {
                window.Advancements.check();
            }
        };

        evade.onclick = () => {

            if (finished) return;

            game.taxesEvaded++;

            close();

            setMessage(
                "TAX EVASION DETECTED."
            );

            if (
                typeof window.Advancements
                !== "undefined"
            ) {
                window.Advancements.check();
            }
        };
    }
},

weather_report: {
    name: "WEATHER REPORT",

    run() {

        const forecasts = [
            {
                event: "rain",
                text: "RAIN",
                temperature: "24°C"
            },
            {
                event: "snowfall",
                text: "SNOW",
                temperature: "-3°C"
            },
            {
                event: "underwater",
                text: "WATER",
                temperature: "19°C"
            }
        ];

        const forecast =
            forecasts[
                Math.floor(
                    Math.random() *
                    forecasts.length
                )
            ];

        game.weatherForecast =
            forecast.event;

        setMessage(
            `FORECAST: ${forecast.text}`
        );

        const confidence =
            Math.floor(
                10 + Math.random() * 81
            );

        const report =
            document.createElement("div");

        report.className =
            "weather-report";

        report.innerHTML = `
            <div class="weather-box">

                <div class="weather-title">
                    WEATHER REPORT
                </div>

                <div class="weather-condition">
                    ${forecast.text}
                </div>

                <div class="weather-temperature">
                    ${forecast.temperature}
                </div>

                <div class="weather-confidence">
                    FORECAST CONFIDENCE:
                    ${confidence}%
                </div>

            </div>
        `;

        document.body.appendChild(report);

        setTimeout(() => {
            report.remove();
        }, 4500);
    }
},

language_incident: {
    name: "LANGUAGE INCIDENT",

    run() {

        const languages = {

            japanese: {
                name: "JAPANESE",
                button: "押さないで",
                title: "完全に安全なボタン",
                subtitle: "すべて順調です。",
                message: "本当に。"
            },

            french: {
                name: "FRENCH",
                button: "NE PAS APPUYER",
                title: "BOUTON PARFAITEMENT SÛR",
                subtitle: "Tout est sous contrôle.",
                message: "Vraiment."
            },

            german: {
                name: "GERMAN",
                button: "NICHT DRÜCKEN",
                title: "VÖLLIG SICHERER KNOPF",
                subtitle: "Alles ist unter Kontrolle.",
                message: "Wirklich."
            },

            spanish: {
                name: "SPANISH",
                button: "NO PULSAR",
                title: "BOTÓN PERFECTAMENTE SEGURO",
                subtitle: "Todo está bajo control.",
                message: "De verdad."
            },

            italian: {
                name: "ITALIAN",
                button: "NON PREMERE",
                title: "PULSANTE PERFETTAMENTE SICURO",
                subtitle: "Tutto è sotto controllo.",
                message: "Davvero."
            },

            korean: {
                name: "KOREAN",
                button: "누르지 마세요",
                title: "완전히 안전한 버튼",
                subtitle: "모든 것이 통제되고 있습니다.",
                message: "정말로."
            },

            russian: {
                name: "RUSSIAN",
                button: "НЕ НАЖИМАТЬ",
                title: "СОВЕРШЕННО БЕЗОПАСНАЯ КНОПКА",
                subtitle: "Все под контролем.",
                message: "Правда."
            },

            portuguese: {
                name: "PORTUGUESE",
                button: "NÃO PRESSIONE",
                title: "BOTÃO PERFEITAMENTE SEGURO",
                subtitle: "Tudo está sob controle.",
                message: "Sério."
            }
        };

        const keys =
            Object.keys(languages);

        const unseen =
            keys.filter(
                key =>
                    !game.languagesSeen.includes(key)
            );

        const pool =
            unseen.length > 0
                ? unseen
                : keys;

        const key =
            pool[
                Math.floor(
                    Math.random() *
                    pool.length
                )
            ];

        const language =
            languages[key];

        if (
            !game.languagesSeen.includes(key)
        ) {
            game.languagesSeen.push(key);
        }

        setMessage(
            `LANGUAGE INCIDENT: ${language.name}`
        );

        const title =
            document.querySelector("#page-title");

        const subtitle =
            document.querySelector(".subtitle");

        const buttonText =
            button.querySelector("span:last-child");

        const original = {
            title: title?.textContent,
            subtitle: subtitle?.textContent,
            button: buttonText?.textContent
        };

        if (title)
            title.textContent =
                language.title;

        if (subtitle)
            subtitle.textContent =
                language.subtitle;

        if (buttonText)
            buttonText.textContent =
                language.button;

        setTimeout(() => {

            if (title)
                title.textContent =
                    original.title;

            if (subtitle)
                subtitle.textContent =
                    original.subtitle;

            if (buttonText)
                buttonText.textContent =
                    original.button;

            setMessage(
                "LANGUAGE RESTORED."
            );

            if (
                typeof window.Advancements
                !== "undefined"
            ) {
                window.Advancements.check();
            }

        }, 6000);
    }
},
    

system_zero: {
    name: "SYSTEM 0",
    secret: true,

    run() {
        const labels =
            document.querySelectorAll(
                ".brand strong, .brand-text span, .panel-heading span:first-child, footer span"
            );

        const originals = [];

        labels.forEach(label => {
            originals.push({
                element: label,
                text: label.textContent
            });

            label.textContent = "SYSTEM 0";
        });

        setMessage("SYSTEM 0");

        setTimeout(() => {

            labels.forEach(label => {
                label.textContent =
                    "SYSTEM 1";
            });

        }, 1000);

        setTimeout(() => {

            labels.forEach(label => {
                label.textContent =
                    "SYSTEM 2";
            });

        }, 2000);

        setTimeout(() => {

            originals.forEach(item => {
                item.element.textContent =
                    item.text;
            });

            setMessage(
                "SYSTEM RESTORED."
            );

        }, 3500);
    }
}

};


// ==========================================================
// EVENT FUNCTIONS
// ==========================================================

if (
    game.weatherForecast &&
    game.weatherForecast === eventId &&
    game.lastEvent === "weather_report"
) {

    game.weatherForecast = null;

    game.rightForOnce = true;

    setMessage(
        "FORECAST CONFIRMED. RIGHT FOR ONCE."
    );

    if (
        typeof window.Advancements
        !== "undefined"
    ) {
        window.Advancements.check();
    }
}


function startDinoGame() {

    if (document.getElementById("dino-game")) return;

    const gameOverlay = document.createElement("div");

    gameOverlay.id = "dino-game";

    gameOverlay.innerHTML = `
        <div class="dino-header">
            <div class="dino-title">DINO RUN</div>

            <div class="dino-score">
                SCORE: <span id="dino-score">00000</span>
            </div>
        </div>

        <div class="dino-world">
            <div id="dino-player">🦖</div>
            <div id="dino-ground"></div>
        </div>

        <div class="dino-message">
            SPACE / CLICK TO JUMP
        </div>
    `;

    document.body.appendChild(gameOverlay);

    const player =
        gameOverlay.querySelector("#dino-player");

    const world =
        gameOverlay.querySelector(".dino-world");

    const scoreElement =
        gameOverlay.querySelector("#dino-score");

    let running = true;
    let playerY = 0;
    let velocityY = 0;

    let score = 0;
    let speed = 7;

    let lastTime = performance.now();
    let obstacleTimer = 60;

    const obstacles = [];

    function jump() {

        if (!running) {
            restart();
            return;
        }

        if (playerY === 0) {
            velocityY = 15;
        }
    }

    function createObstacle() {

        const cactus =
            document.createElement("div");

        cactus.className = "dino-cactus";
        cactus.textContent = "🌵";

        world.appendChild(cactus);

        obstacles.push({
            element: cactus,
            x: world.clientWidth + 80
        });
    }

    function collision(a, b) {

        const r1 =
            a.getBoundingClientRect();

        const r2 =
            b.getBoundingClientRect();

        return !(
            r1.right < r2.left + 10 ||
            r1.left + 10 > r2.right ||
            r1.bottom - 8 < r2.top ||
            r1.top + 8 > r2.bottom
        );
    }

    function endGame() {

        running = false;

        gameOverlay.classList.add(
            "dino-game-over"
        );

        gameOverlay.querySelector(
            ".dino-message"
        ).innerHTML = `
            <strong>GAME OVER</strong><br>
            SCORE: ${Math.floor(score)}<br>
            PRESS SPACE OR CLICK TO RESTART
        `;
    }

    function restart() {

        gameOverlay.remove();

        startDinoGame();
    }

    function loop(now) {

        if (!running) return;

        const delta =
            Math.min(
                (now - lastTime) / 16.67,
                3
            );

        lastTime = now;

        // PHYSICS

        velocityY -= 0.8 * delta;

        playerY += velocityY * delta;

        if (playerY <= 0) {

            playerY = 0;
            velocityY = 0;
        }

        player.style.transform =
            `translateY(${-playerY}px)`;


        // SCORE

        score += 0.15 * delta;

        scoreElement.textContent =
            String(Math.floor(score))
                .padStart(5, "0");


        // SPAWN CACTUS

        obstacleTimer -= delta;

        if (obstacleTimer <= 0) {

            createObstacle();

            obstacleTimer =
                70 + Math.random() * 80;
        }


        // MOVE CACTUSES

        for (
            let i = obstacles.length - 1;
            i >= 0;
            i--
        ) {

            const obstacle =
                obstacles[i];

            obstacle.x -= speed * delta;

            obstacle.element.style.transform =
                `translateX(${
                    obstacle.x -
                    world.clientWidth
                }px)`;


            // COLLISION

            if (
                collision(
                    player,
                    obstacle.element
                )
            ) {

                endGame();
                return;
            }


            // REMOVE OLD CACTUS

            if (obstacle.x < -100) {

                obstacle.element.remove();

                obstacles.splice(i, 1);
            }
        }


        // INCREASE SPEED

        speed += 0.0015 * delta;

        requestAnimationFrame(loop);
    }

    function keyHandler(event) {

        if (
            event.code === "Space" ||
            event.code === "ArrowUp"
        ) {

            event.preventDefault();

            jump();
        }

        if (
            event.code === "Escape"
        ) {

            cleanup();
        }
    }

    function clickHandler(event) {

        // Don't restart/jump if clicking UI elements
        if (
            event.target.closest(
                ".dino-header"
            )
        ) return;

        jump();
    }

    function cleanup() {

        running = false;

        document.removeEventListener(
            "keydown",
            keyHandler
        );

        gameOverlay.remove();
    }

    document.addEventListener(
        "keydown",
        keyHandler
    );

    gameOverlay.addEventListener(
        "click",
        clickHandler
    );

    requestAnimationFrame(loop);
}


// ==========================================================
// EVENT ENGINE
// ==========================================================

function lockButton() {
    button.disabled = true;
    button.classList.add("event-locked");
}

function unlockButton() {
    button.disabled = false;
    button.classList.remove("event-locked");
}

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
