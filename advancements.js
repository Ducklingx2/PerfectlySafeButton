/* =========================================================
   PERFECTLY SAFE BUTTON
   ADVANCEMENTS SYSTEM
   ========================================================= */

const ADVANCEMENT_SAVE_KEY = "perfectly-safe-button-advancements";

/* ---------------------------------------------------------
   ADVANCEMENT DEFINITIONS
   --------------------------------------------------------- */

const AdvancementData = [

    /* =========================
       CLICKS
       ========================= */

    {
        id: "first_press",
        name: "First Press",
        description: "Press the button once.",
        category: "Clicks",
        icon: "👆",
        condition: () => game.clicks >= 1
    },

    {
        id: "getting_started",
        name: "Getting Started",
        description: "Press the button 10 times.",
        category: "Clicks",
        icon: "🔘",
        condition: () => game.clicks >= 10
    },

    {
        id: "button_enthusiast",
        name: "Button Enthusiast",
        description: "Press the button 50 times.",
        category: "Clicks",
        icon: "🟢",
        condition: () => game.clicks >= 50
    },

    {
        id: "button_addict",
        name: "Button Addict",
        description: "Press the button 100 times.",
        category: "Clicks",
        icon: "☢",
        condition: () => game.clicks >= 100
    },

    {
        id: "five_hundred",
        name: "Why Are You Still Here?",
        description: "Press the button 500 times.",
        category: "Clicks",
        icon: "💀",
        condition: () => game.clicks >= 500
    },

    {
        id: "thousand_clicks",
        name: "There Is No Button",
        description: "Press the button 1,000 times.",
        category: "Clicks",
        icon: "🫠",
        condition: () => game.clicks >= 1000
    },


    /* =========================
       NATURE
       ========================= */

    {
        id: "duck_friend",
        name: "Duck Friend",
        description: "Encounter a duck.",
        category: "Nature",
        icon: "🦆",
        condition: () => game.ducks >= 1
    },

    {
        id: "duck_collector",
        name: "Duck Collector",
        description: "Encounter 5 ducks.",
        category: "Nature",
        icon: "🦆",
        condition: () => game.ducks >= 5
    },

    {
        id: "duck_army",
        name: "Duck Army",
        description: "Encounter 10 ducks.",
        category: "Nature",
        icon: "🐤",
        condition: () => game.ducks >= 10
    },

    {
        id: "bamboo",
        name: "Bamboo!",
        description: "Cause bamboo to grow.",
        category: "Nature",
        icon: "🎋",
        condition: () => game.bamboo >= 1
    },


    /* =========================
       OCEAN
       ========================= */

    {
        id: "jellyfish",
        name: "Jellyfish",
        description: "Encounter a jellyfish.",
        category: "Ocean",
        icon: "🪼",
        condition: () => game.jellyfish >= 1
    },

    {
        id: "jelly_collection",
        name: "Aquatic Research",
        description: "Encounter 10 jellyfish.",
        category: "Ocean",
        icon: "🌊",
        condition: () => game.jellyfish >= 10
    },

    {
        id: "giant_jellyfish",
        name: "BEEG",
        description: "Encounter a BEEG jellyfish.",
        category: "Ocean",
        icon: "🪼",
        condition: () => game.giantJellyfish >= 1
    },

    {
        id: "poseidon",
        name: "Poseidon",
        description: "Encounter 100 BEEG jellyfish.",
        category: "Ocean",
        icon: "🔱",
        condition: () => game.giantJellyfish >= 100
    },

    {
       id: "paleontologist",
       title: "PALEONTOLOGIST",
       description: "Find a bone.",
       icon: "🦴",
       category: "Nature",
       condition: () =>
           game.bonesFound >= 1
   },
   
   {
       id: "skeleton_constructor",
       title: "SKELETON CONSTRUCTOR",
       description: "Find 206 bones.",
       icon: "🦴",
       category: "Nature",
       condition: () =>
           game.bonesFound >= 206
   },

   {
       id: "patience",
       title: "PATIENCE",
       description: "Wait for the snail.",
       icon: "🐌",
       category: "Nature",
       condition: () =>
           game.snailsSeen >= 1
   },

   
    /* =========================
       STRANGE
       ========================= */

    {
        id: "smiley",
        name: "Something Is Smiling",
        description: "Encounter something that smiles.",
        category: "Strange",
        icon: "🙂",
        condition: () => game.smileys >= 1
    },

    {
        id: "insanity",
        name: "Insanity",
        description: "Experience a severe reality disturbance.",
        category: "Strange",
        icon: "🌀",
        condition: () => game.insanity >= 1
    },

    {
        id: "spin",
        name: "Orientation Privileges Revoked",
        description: "Make the world spin.",
        category: "Strange",
        icon: "🔄",
        condition: () => game.spins >= 1
    },

    {
        id: "nice_spin",
        name: "Nice Spin",
        description: "Experience a suspiciously nice spin.",
        category: "Strange",
        icon: "✨",
        condition: () => game.spins >= 5
    },

    {
       id: "right_for_once",
       title: "RIGHT FOR ONCE",
       description: "Get the weather forecast exactly right.",
       icon: "🌦️",
       category: "Strange",
       condition: () =>
           game.rightForOnce === true
   },

   {
       id: "ghosted",
       title: "GHOSTED",
       description: "Answer the unknown caller.",
       icon: "📞",
       category: "Strange",
       condition: () =>
           game.callsAnswered >= 1
   },

   {
       id: "where_is_my_wallet",
       title: "WHERE IS MY WALLET",
       description: "Find a coin.",
       icon: "🪙",
       category: "Strange",
       condition: () =>
           game.coinsFound >= 1
   },

    /* =========================
       WARNINGS
       ========================= */

    {
        id: "warning",
        name: "Warning",
        description: "Trigger a warning.",
        category: "Warnings",
        icon: "⚠️",
        condition: () => game.warnings >= 1
    },

    {
        id: "warning_collection",
        name: "Ignored The Warnings",
        description: "Trigger 10 warnings.",
        category: "Warnings",
        icon: "🚨",
        condition: () => game.warnings >= 10
    },


    /* =========================
       REALITY
       ========================= */

    {
        id: "glitch",
        name: "Reality Glitch",
        description: "Experience a reality glitch.",
        category: "Reality",
        icon: "⚡",
        condition: () => game.glitches >= 1
    },

    {
        id: "glitch_researcher",
        name: "Reality Researcher",
        description: "Experience 10 reality glitches.",
        category: "Reality",
        icon: "👁️",
        condition: () => game.glitches >= 10
    },

    {
        id: "fake_crash",
        name: "Critical Failure",
        description: "Experience a completely legitimate system crash.",
        category: "Reality",
        icon: "💻",
        condition: () => game.fakeCrashes >= 1
    },

    {
        id: "dino",
        name: "Connection Lost",
        description: "Lose your connection.",
        category: "Reality",
        icon: "🦖",
        condition: () => game.dinoEvents >= 1
    },


    /* =========================
       WEATHER
       ========================= */

    {
        id: "rain",
        name: "Rainfall",
        description: "Make it rain.",
        category: "Weather",
        icon: "🌧️",
        condition: () => game.rainDrops >= 1
    },

    {
        id: "snow",
        name: "Snow Day",
        description: "Make it snow.",
        category: "Weather",
        icon: "❄️",
        condition: () => game.snowflakes >= 1
    },

    {
        id: "weather_master",
        name: "Weather Master",
        description: "Experience both rain and snow.",
        category: "Weather",
        icon: "🌦️",
        condition: () =>
            game.rainDrops >= 1 &&
            game.snowflakes >= 1
    },


    /* =========================
       CHAOS
       ========================= */

    {
        id: "explosion",
        name: "Explosive Personality",
        description: "Cause an explosion.",
        category: "Chaos",
        icon: "💥",
        condition: () => game.explosions >= 1
    },

    {
        id: "explosive",
        name: "Controlled Demolition",
        description: "Cause 10 explosions.",
        category: "Chaos",
        icon: "💣",
        condition: () => game.explosions >= 10
    },

    {
        id: "event_streak",
        name: "Can't Stop",
        description: "Trigger 10 events in a row.",
        category: "Chaos",
        icon: "🔥",
        condition: () => game.maxEventStreak >= 10
    },

    {
        id: "unique_events",
        name: "I've Seen Things",
        description: "Experience 10 different events.",
        category: "Chaos",
        icon: "👀",
        condition: () => game.uniqueEvents.length >= 10
    },

    {
        id: "event_master",
        name: "Event Master",
        description: "Experience 25 different events.",
        category: "Chaos",
        icon: "🧠",
        condition: () => game.uniqueEvents.length >= 25
    },


    /* =========================
       SYSTEM
       ========================= */

    {
        id: "cleanup",
        name: "Containment Protocol",
        description: "Trigger containment.",
        category: "System",
        icon: "🛡️",
        condition: () => game.events >= 1
    },

    {
        id: "leave",
        name: "ĿɆȺVɆ",
        description: "Attempt to leave.",
        category: "System",
        icon: "🚪",
        condition: () => game.leave >= 1
    },

    {
       id: "responsible_citizen",
       title: "RESPONSIBLE CITIZEN",
       description: "Pay the button tax.",
       icon: "💸",
       category: "System",
       condition: () =>
           game.taxesPaid >= 1
   },


    /* =========================
       SECRETS
       ========================= */

    {
        id: "secret_666",
        name: "The Number",
        description: "You found something you were not supposed to find.",
        category: "Secrets",
        icon: "666",
        secret: true,
        condition: () => game.clicks >= 666
    },

    {
        id: "secret_streak",
        name: "Don't Stop",
        description: "Something noticed your persistence.",
        category: "Secrets",
        icon: "👁",
        secret: true,
        condition: () => game.maxEventStreak >= 20
    },

    {
        id: "secret_everything",
        name: "Everything Is Fine",
        description: "There is absolutely nothing wrong.",
        category: "Secrets",
        icon: "🙂",
        secret: true,
        condition: () =>
            game.glitches >= 5 &&
            game.explosions >= 5 &&
            game.ducks >= 5
    },

    {
        id: "secret_lapis",
        name: "Lapis Lazuli",
        description: "You found the blue thing.",
        category: "Secrets",
        icon: "🔷",
        secret: true,
        condition: () => game.lapis >= 1
    },

    {
        id: "secret_chinese",
        name: "Questionable Translation",
        description: "You probably should not translate that.",
        category: "Secrets",
        icon: "字",
        secret: true,
        condition: () => game.chineseCharacters >= 10
    },

    {
        id: "secret_leave",
        name: "You Really Left",
        description: "You actually managed to leave.",
        category: "Secrets",
        icon: "🚪",
        secret: true,
        condition: () => game.leave >= 5
    },

    {
       id: "nooo_my_taxes",
       title: "NOOO MY TAXES",
       description: "Evade the button tax.",
       icon: "💸",
       category: "Secrets",
       secret: true,
       condition: () =>
           game.taxesEvaded >= 1
   },

   {
       id: "sock_pair",
       title: "PAIR COMPLETE",
       description: "Find both the left and right sock.",
       icon: "🧦",
       category: "Secrets",
       secret: true,
       condition: () =>
           game.rightSock >= 1 &&
           game.leftSock >= 1
   },

   {
       id: "left_sock",
       title: "THE OTHER ONE",
       description: "Find the incredibly rare left sock.",
       icon: "🧦",
       category: "Secrets",
       secret: true,
       condition: () =>
           game.leftSock >= 1
   },


    /* =========================
       COMPLETION
       ========================= */

   {
       id: "language_barrier",
       title: "OVERCOME LANGUAGE BARRIER",
       description: "Experience every language incident.",
       icon: "🌍",
       category: "Completion",
       condition: () =>
           game.languagesSeen.length >= 8
   }

    {
        id: "everything",
        name: "Everything",
        description: "Unlock every non-secret advancement.",
        category: "Completion",
        icon: "☢",
        condition: () => {
            const nonSecret = AdvancementData.filter(a =>
                !a.secret && a.id !== "everything"
            );

            return nonSecret.every(a =>
                game.unlocked.includes(a.id)
            );
        }
    }
];


/* =========================================================
   SAVE SYSTEM
   ========================================================= */

function loadAdvancements() {
    try {
        const saved = JSON.parse(
            localStorage.getItem(ADVANCEMENT_SAVE_KEY)
        );

        if (!Array.isArray(saved)) return;

        game.unlocked = saved.filter(id =>
            AdvancementData.some(a => a.id === id)
        );

    } catch (error) {
        console.warn("Could not load advancement data.", error);
    }
}


function saveAdvancements() {
    try {
        localStorage.setItem(
            ADVANCEMENT_SAVE_KEY,
            JSON.stringify(game.unlocked)
        );
    } catch (error) {
        console.warn("Could not save advancement data.", error);
    }
}


/* =========================================================
   HELPERS
   ========================================================= */

function getAdvancement(id) {
    return AdvancementData.find(a => a.id === id);
}


function isUnlocked(id) {
    return game.unlocked.includes(id);
}


/* =========================================================
   UNLOCK
   ========================================================= */

function unlockAdvancement(advancement) {

    if (isUnlocked(advancement.id)) {
        return;
    }

    game.unlocked.push(advancement.id);

    game.advancements = game.unlocked.length;

    saveAdvancements();
    updateAdvancementUI();

    if (advancement.secret) {
        showSecretToast(advancement);
    } else {
        showAdvancementToast(advancement);
    }
}


/* =========================================================
   CHECK ADVANCEMENTS
   ========================================================= */

function checkAdvancements() {

    for (const advancement of AdvancementData) {

        if (isUnlocked(advancement.id)) {
            continue;
        }

        let unlocked = false;

        try {
            unlocked = Boolean(
                advancement.condition()
            );
        } catch (error) {
            console.warn(
                `Advancement "${advancement.id}" failed.`,
                error
            );
        }

        if (unlocked) {
            unlockAdvancement(advancement);
        }
    }

    game.advancements = game.unlocked.length;

    updateAdvancementUI();
    saveAdvancements();
}


/* =========================================================
   NORMAL TOAST
   ========================================================= */

function showAdvancementToast(advancement) {

    const container =
        document.getElementById("advancement-container");

    if (!container) return;

    const toast = document.createElement("div");

    toast.className = "advancement-toast";

    toast.innerHTML = `
        <div class="advancement-toast-icon">
            ${advancement.icon}
        </div>

        <div class="advancement-toast-content">
            <div class="advancement-toast-kicker">
                ADVANCEMENT UNLOCKED
            </div>

            <div class="advancement-toast-title">
                ${advancement.name}
            </div>

            <div class="advancement-toast-description">
                ${advancement.description}
            </div>
        </div>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 500);

    }, 4500);
}


/* =========================================================
   SECRET TOAST
   ========================================================= */

function showSecretToast(advancement) {

    const container =
        document.getElementById("advancement-container");

    if (!container) return;

    const toast = document.createElement("div");

    toast.className =
        "advancement-toast secret-toast";

    toast.innerHTML = `
        <div class="secret-toast-glitch"></div>

        <div class="advancement-toast-icon secret-icon">
            ${advancement.icon}
        </div>

        <div class="advancement-toast-content">
            <div class="advancement-toast-kicker secret-kicker">
                ⚠ SECRET DISCOVERED
            </div>

            <div class="advancement-toast-title">
                ${advancement.name}
            </div>

            <div class="advancement-toast-description">
                ${advancement.description}
            </div>
        </div>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 600);

    }, 6000);
}


/* =========================================================
   MAP CREATION
   ========================================================= */

function createAdvancementMap() {

    const panel =
        document.getElementById("advancement-panel");

    if (!panel) return;

    panel.innerHTML = "";

    const header = document.createElement("div");

    header.className =
        "advancement-panel-header";

    header.innerHTML = `
        <div>
            <div class="advancement-panel-kicker">
                SYSTEM PROGRESSION
            </div>

            <h2>ADVANCEMENTS</h2>

            <div class="advancement-progress-text">
                <span id="advancement-progress-number">0</span>
                /
                <span id="advancement-total-number">0</span>
                UNLOCKED
            </div>
        </div>

        <button
            id="advancement-close"
            class="advancement-close"
            type="button"
            aria-label="Close advancements"
        >
            ×
        </button>
    `;

    panel.appendChild(header);

    const progress = document.createElement("div");

    progress.className =
        "advancement-progress-bar";

    progress.innerHTML = `
        <div id="advancement-progress-fill"></div>
    `;

    panel.appendChild(progress);

    const map = document.createElement("div");

    map.id = "advancement-map";

    panel.appendChild(map);

    const categories = [];

    for (const advancement of AdvancementData) {

        /*
         * SECRET + LOCKED:
         * Do not put it on the map AT ALL.
         */
        if (
            advancement.secret &&
            !isUnlocked(advancement.id)
        ) {
            continue;
        }

        if (!categories.includes(advancement.category)) {
            categories.push(advancement.category);
        }
    }

    for (const category of categories) {

        const categoryAdvancements =
            AdvancementData.filter(a =>
                a.category === category &&
                (
                    !a.secret ||
                    isUnlocked(a.id)
                )
            );

        if (!categoryAdvancements.length) {
            continue;
        }

        const categoryElement =
            document.createElement("section");

        categoryElement.className =
            "advancement-category";

        categoryElement.innerHTML = `
            <div class="category-title">
                <span>${category}</span>
                <span class="category-line"></span>
            </div>

            <div class="advancement-grid"></div>
        `;

        const grid =
            categoryElement.querySelector(
                ".advancement-grid"
            );

        for (const advancement of categoryAdvancements) {

            const card =
                createAdvancementCard(advancement);

            grid.appendChild(card);
        }

        map.appendChild(categoryElement);
    }

    const close =
        document.getElementById("advancement-close");

    if (close) {
        close.addEventListener(
            "click",
            closeAdvancementMap
        );
    }
}


/* =========================================================
   CARD CREATION
   ========================================================= */

function createAdvancementCard(advancement) {

    const unlocked =
        isUnlocked(advancement.id);

    const card =
        document.createElement("article");

    card.className =
        `advancement-card ${
            unlocked
                ? "unlocked"
                : "locked"
        } ${
            advancement.secret
                ? "secret-revealed"
                : ""
        }`;

    /*
     * SECRET THAT HAS BEEN UNLOCKED
     */
    if (advancement.secret && unlocked) {

        card.classList.add(
            "secret-revealed-card"
        );

        card.innerHTML = `
            <div class="map-icon secret-card-icon">
                ${advancement.icon}
            </div>

            <div class="map-info">

                <div class="map-title">
                    ${advancement.name}
                </div>

                <div class="map-description">
                    ${advancement.description}
                </div>

                <div class="secret-label">
                    ⚠ SECRET DISCOVERED
                </div>

            </div>

            <div class="map-check">
                ✓
            </div>
        `;

        return card;
    }

    /*
     * NORMAL UNLOCKED CARD
     */
    if (unlocked) {

        card.innerHTML = `
            <div class="map-icon">
                ${advancement.icon}
            </div>

            <div class="map-info">

                <div class="map-title">
                    ${advancement.name}
                </div>

                <div class="map-description">
                    ${advancement.description}
                </div>

                <div class="map-state unlocked-state">
                    UNLOCKED
                </div>

            </div>

            <div class="map-check">
                ✓
            </div>
        `;

        return card;
    }

    /*
     * NORMAL LOCKED CARD
     *
     * This is intentionally NOT secret.
     * The player gets to see exactly how
     * to unlock it.
     */
    card.innerHTML = `
        <div class="map-icon locked-icon">
            ${advancement.icon}
        </div>

        <div class="map-info">

            <div class="map-title">
                ${advancement.name}
            </div>

            <div class="map-description">
                ${advancement.description}
            </div>

            <div class="map-state locked-state">
                🔒 LOCKED
            </div>

        </div>

        <div class="map-lock">
            🔒
        </div>
    `;

    return card;
}


/* =========================================================
   MAP UI UPDATE
   ========================================================= */

function updateAdvancementUI() {

    const unlocked =
        game.unlocked.length;

    const total =
        AdvancementData.length;

    const progressNumber =
        document.getElementById(
            "advancement-progress-number"
        );

    const totalNumber =
        document.getElementById(
            "advancement-total-number"
        );

    const progressFill =
        document.getElementById(
            "advancement-progress-fill"
        );

    if (progressNumber) {
        progressNumber.textContent = unlocked;
    }

    if (totalNumber) {
        totalNumber.textContent = total;
    }

    if (progressFill) {
        const percentage =
            total > 0
                ? (unlocked / total) * 100
                : 0;

        progressFill.style.width =
            `${percentage}%`;
    }

    /*
     * Rebuild the map so newly discovered
     * secret advancements appear immediately.
     */
    const panel =
        document.getElementById(
            "advancement-panel"
        );

    if (panel) {

        const overlay =
            document.getElementById(
                "advancement-overlay"
            );

        /*
         * Only rebuild if the map currently
         * exists and isn't being actively closed.
         */
        if (
            overlay &&
            overlay.classList.contains("open")
        ) {
            createAdvancementMap();
        }
    }

    const count =
        document.getElementById(
            "advancement-count"
        );

    if (count) {
        count.textContent = unlocked;
    }
}


/* =========================================================
   OPEN / CLOSE
   ========================================================= */

function openAdvancementMap() {

    const overlay =
        document.getElementById(
            "advancement-overlay"
        );

    if (!overlay) return;

    createAdvancementMap();

    overlay.classList.add("open");

    document.body.classList.add(
        "advancements-open"
    );
}


function closeAdvancementMap() {

    const overlay =
        document.getElementById(
            "advancement-overlay"
        );

    if (!overlay) return;

    overlay.classList.remove("open");

    document.body.classList.remove(
        "advancements-open"
    );
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

function initializeAdvancements() {

    loadAdvancements();

    game.advancements =
        game.unlocked.length;

    window.Advancements = {
        data: AdvancementData,
        check: checkAdvancements,
        unlock: unlockAdvancement,
        open: openAdvancementMap,
        close: closeAdvancementMap,
        isUnlocked
    };

    createAdvancementMap();

    const openButton =
        document.getElementById(
            "open-advancements"
        );

    if (openButton) {

        openButton.addEventListener(
            "click",
            openAdvancementMap
        );
    }

    const overlay =
        document.getElementById(
            "advancement-overlay"
        );

    if (overlay) {

        overlay.addEventListener(
            "click",
            event => {

                if (
                    event.target === overlay
                ) {
                    closeAdvancementMap();
                }
            }
        );
    }

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {
                closeAdvancementMap();
            }
        }
    );

    updateAdvancementUI();

    /*
     * Check once on startup in case
     * something was already unlocked
     * before this script loaded.
     */
    checkAdvancements();
}


if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeAdvancements
    );

} else {

    initializeAdvancements();
}
