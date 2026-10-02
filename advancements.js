// ============================================================
// PERFECTLY SAFE BUTTON - ADVANCEMENT SYSTEM
// ============================================================

const ADVANCEMENT_SAVE_KEY = "perfectly-safe-button-advancements";

const AdvancementData = [
    // =========================
    // CLICKS
    // =========================

    {
        id: "first_mistake",
        title: "First Mistake",
        description: "Press the button once.",
        icon: "☢",
        category: "Clicks",
        secret: false,
        condition: () => game.clicks >= 1
    },

    {
        id: "just_one_more",
        title: "Just One More",
        description: "Press the button 10 times.",
        icon: "10",
        category: "Clicks",
        secret: false,
        condition: () => game.clicks >= 10
    },

    {
        id: "getting_concerning",
        title: "This Is Getting Concerning",
        description: "Press the button 50 times.",
        icon: "!",
        category: "Clicks",
        secret: false,
        condition: () => game.clicks >= 50
    },

    {
        id: "no_turning_back",
        title: "No Turning Back",
        description: "Press the button 100 times.",
        icon: "100",
        category: "Clicks",
        secret: false,
        condition: () => game.clicks >= 100
    },

    {
        id: "why_here",
        title: "Why Are You Still Here?",
        description: "Press the button 500 times.",
        icon: "?",
        category: "Clicks",
        secret: false,
        condition: () => game.clicks >= 500
    },

    {
        id: "button_veteran",
        title: "Button Veteran",
        description: "Press the button 1,000 times.",
        icon: "★",
        category: "Clicks",
        secret: false,
        condition: () => game.clicks >= 1000
    },

    {
        id: "professional_button_presser",
        title: "Professional Button Presser",
        description: "Press the button 2,500 times.",
        icon: "◆",
        category: "Clicks",
        secret: false,
        condition: () => game.clicks >= 2500
    },

    // =========================
    // DUCKS
    // =========================

    {
        id: "duckling",
        title: "Duckling",
        description: "Encounter your first duck.",
        icon: "🦆",
        category: "Nature",
        secret: false,
        condition: () => game.ducks >= 1
    },

    {
        id: "duck_flock",
        title: "Duck Flock",
        description: "Collect 25 ducks.",
        icon: "🦆",
        category: "Nature",
        secret: false,
        condition: () => game.ducks >= 25
    },

    {
        id: "one_with_ducks",
        title: "One With The Ducks",
        description: "Collect 100 ducks.",
        icon: "🦆",
        category: "Nature",
        secret: false,
        condition: () => game.ducks >= 100
    },

    // =========================
    // JELLYFISH
    // =========================

    {
        id: "aquatic_incident",
        title: "Aquatic Incident",
        description: "Encounter a jellyfish.",
        icon: "🪼",
        category: "Ocean",
        secret: false,
        condition: () => game.jellyfish >= 1
    },

    {
        id: "deep_water",
        title: "Deep Water",
        description: "Encounter 25 jellyfish.",
        icon: "🪼",
        category: "Ocean",
        secret: false,
        condition: () => game.jellyfish >= 25
    },

    {
        id: "poseidon",
        title: "Poseidon",
        description: "Encounter 100 BEEG jellyfish.",
        icon: "◉",
        category: "Ocean",
        secret: false,
        condition: () => game.giantJellyfish >= 100
    },

    // =========================
    // BAMBOO
    // =========================

    {
        id: "bamboo_farmer",
        title: "Bamboo Farmer",
        description: "Grow 10 bamboo.",
        icon: "竹",
        category: "Nature",
        secret: false,
        condition: () => game.bamboo >= 10
    },

    {
        id: "forest_of_regret",
        title: "Forest of Regret",
        description: "Grow 50 bamboo.",
        icon: "🌿",
        category: "Nature",
        secret: false,
        condition: () => game.bamboo >= 50
    },

    // =========================
    // SMILEYS
    // =========================

    {
        id: "something_smiling",
        title: "Something Is Smiling Back",
        description: "Encounter a smiley.",
        icon: "☻",
        category: "Strange",
        secret: false,
        condition: () => game.smileys >= 1
    },

    {
        id: "it_saw_you",
        title: "It Saw You",
        description: "Encounter 10 smileys.",
        icon: "◉",
        category: "Strange",
        secret: false,
        condition: () => game.smileys >= 10
    },

    // =========================
    // WARNINGS
    // =========================

    {
        id: "you_were_warned",
        title: "You Were Warned",
        description: "Ignore the warning.",
        icon: "⚠",
        category: "Warnings",
        secret: false,
        condition: () => game.warnings >= 1
    },

    {
        id: "ignored_warning",
        title: "Ignored The Warning",
        description: "Ignore 10 warnings.",
        icon: "⚠",
        category: "Warnings",
        secret: false,
        condition: () => game.warnings >= 10
    },

    // =========================
    // SPIN
    // =========================

    {
        id: "orientation_revoked",
        title: "Orientation Privileges Revoked",
        description: "Experience an evil spin.",
        icon: "↻",
        category: "Reality",
        secret: false,
        condition: () => game.spins >= 1
    },

    {
        id: "dizzy",
        title: "Dizzy",
        description: "Spin 10 times.",
        icon: "⟳",
        category: "Reality",
        secret: false,
        condition: () => game.spins >= 10
    },

    // =========================
    // INSANITY
    // =========================

    {
        id: "its_melting",
        title: "It's Melting",
        description: "Experience the insanity event.",
        icon: "∿",
        category: "Reality",
        secret: false,
        condition: () => game.insanity >= 1
    },

    {
        id: "reality_optional",
        title: "Reality Is Optional",
        description: "Reach 10 insanity events.",
        icon: "∞",
        category: "Reality",
        secret: false,
        condition: () => game.insanity >= 10
    },

    // =========================
    // UNDERWATER
    // =========================

    {
        id: "underwater_incident",
        title: "Underwater Incident",
        description: "Go underwater.",
        icon: "≈",
        category: "Ocean",
        secret: false,
        condition: () => game.bubbles >= 1
    },

    {
        id: "deep_sea",
        title: "Deep Sea",
        description: "Generate 50 bubbles.",
        icon: "○",
        category: "Ocean",
        secret: false,
        condition: () => game.bubbles >= 50
    },

    {
        id: "aquatic_ecosystem",
        title: "Aquatic Ecosystem",
        description: "Generate 250 bubbles.",
        icon: "◌",
        category: "Ocean",
        secret: false,
        condition: () => game.bubbles >= 250
    },

    // =========================
    // CHINESE EVENT
    // =========================

    {
        id: "questionable_translation",
        title: "Questionable Translation",
        description: "Trigger the mysterious characters.",
        icon: "字",
        category: "Strange",
        secret: false,
        condition: () => game.chineseCharacters >= 1
    },

    {
        id: "language_barrier",
        title: "Language Barrier",
        description: "Generate 100 questionable characters.",
        icon: "文",
        category: "Strange",
        secret: false,
        condition: () => game.chineseCharacters >= 100
    },

    // =========================
    // LAPIS
    // =========================

    {
        id: "la_peace",
        title: "LA PEACE",
        description: "Discover the blue stuff.",
        icon: "◆",
        category: "Strange",
        secret: false,
        condition: () => game.lapis >= 1
    },

    {
        id: "lapis_lazuli",
        title: "Lapis Lazuli",
        description: "Collect 50 lapis.",
        icon: "◆",
        category: "Strange",
        secret: false,
        condition: () => game.lapis >= 50
    },

    // =========================
    // WEATHER
    // =========================

    {
        id: "rainmaker",
        title: "Rainmaker",
        description: "Make it rain.",
        icon: "☔",
        category: "Weather",
        secret: false,
        condition: () => game.rainDrops >= 1
    },

    {
        id: "weather_report",
        title: "Weather Report",
        description: "Generate 100 raindrops.",
        icon: "☁",
        category: "Weather",
        secret: false,
        condition: () => game.rainDrops >= 100
    },

    {
        id: "frozen_assets",
        title: "Frozen Assets",
        description: "Survive a snowfall.",
        icon: "❄",
        category: "Weather",
        secret: false,
        condition: () => game.snowflakes >= 1
    },

    // =========================
    // EXPLOSIONS
    // =========================

    {
        id: "demolition",
        title: "Demolition",
        description: "Trigger an explosion.",
        icon: "✹",
        category: "Chaos",
        secret: false,
        condition: () => game.explosions >= 1
    },

    {
        id: "demolition_expert",
        title: "Demolition Expert",
        description: "Trigger 25 explosions.",
        icon: "✹",
        category: "Chaos",
        secret: false,
        condition: () => game.explosions >= 25
    },

    // =========================
    // GLITCHES
    // =========================

    {
        id: "reality_glitch",
        title: "Reality Glitch",
        description: "Break reality.",
        icon: "▧",
        category: "Reality",
        secret: false,
        condition: () => game.glitches >= 1
    },

    {
        id: "corrupted",
        title: "Corrupted",
        description: "Experience 25 glitches.",
        icon: "█",
        category: "Reality",
        secret: false,
        condition: () => game.glitches >= 25
    },

    // =========================
    // FAKE CRASH
    // =========================

    {
        id: "button_exe",
        title: "Button.exe Has Stopped",
        description: "Experience the fake crash.",
        icon: ":(",
        category: "System",
        secret: false,
        condition: () => game.fakeCrashes >= 1
    },

    {
        id: "definitely_not_a_crash",
        title: "Definitely Not A Crash",
        description: "Experience 10 fake crashes.",
        icon: "☠",
        category: "System",
        secret: false,
        condition: () => game.fakeCrashes >= 10
    },

    // =========================
    // DINO
    // =========================

    {
        id: "connection_lost",
        title: "Connection Lost",
        description: "Lose your connection.",
        icon: "🦖",
        category: "System",
        secret: false,
        condition: () => game.dinoEvents >= 1
    },

    // =========================
    // LEAVE
    // =========================

    {
        id: "ragebaiter",
        title: "Ragebaiter",
        description: "Trigger ĿɆȺVɆ.",
        icon: "↪",
        category: "Strange",
        secret: false,
        condition: () => game.leave >= 1
    },

    {
        id: "you_didnt_leave",
        title: "You Didn't Leave",
        description: "Trigger ĿɆȺVɆ 10 times.",
        icon: "↩",
        category: "Strange",
        secret: false,
        condition: () => game.leave >= 10
    },

    // ========================================================
    // SECRET ADVANCEMENTS
    // ========================================================

    {
        id: "ecosystem_collapse",
        title: "Ecosystem Collapse",
        description: "Have ducks, bamboo, and jellyfish all present.",
        icon: "☣",
        category: "Secrets",
        secret: true,
        condition: () =>
            game.ducks >= 1 &&
            game.bamboo >= 1 &&
            game.jellyfish >= 1
    },

    {
        id: "questionable_science",
        title: "Questionable Science",
        description: "Combine questionable characters with explosions.",
        icon: "⚗",
        category: "Secrets",
        secret: true,
        condition: () =>
            game.chineseCharacters >= 1 &&
            game.explosions >= 1
    },

    {
        id: "something_lives_down_here",
        title: "Something Lives Down Here",
        description: "Encounter bubbles and a BEEG jellyfish.",
        icon: "◉",
        category: "Secrets",
        secret: true,
        condition: () =>
            game.bubbles >= 1 &&
            game.giantJellyfish >= 1
    },

    {
        id: "nature_taking_over",
        title: "Nature Is Taking Over",
        description: "Combine ducks, bamboo, and rain.",
        icon: "🌿",
        category: "Secrets",
        secret: true,
        condition: () =>
            game.ducks >= 1 &&
            game.bamboo >= 1 &&
            game.rainDrops >= 1
    },

    {
        id: "blue_screen",
        title: "Blue Screen",
        description: "Trigger both system failures.",
        icon: "▣",
        category: "Secrets",
        secret: true,
        condition: () =>
            game.fakeCrashes >= 1 &&
            game.dinoEvents >= 1
    },

    {
        id: "chaos_engine",
        title: "Chaos Engine",
        description: "Trigger 250 events.",
        icon: "☢",
        category: "Secrets",
        secret: true,
        condition: () => game.events >= 250
    },

    {
        id: "containment_failure",
        title: "Containment Failure",
        description: "Trigger 500 events.",
        icon: "☠",
        category: "Secrets",
        secret: true,
        condition: () => game.events >= 500
    },

    {
        id: "statistical_anomaly",
        title: "Statistical Anomaly",
        description: "Trigger 25 different event types.",
        icon: "∑",
        category: "Secrets",
        secret: true,
        condition: () => game.uniqueEvents.length >= 25
    },

    // ========================================================
    // FINAL
    // ========================================================

    {
        id: "everything",
        title: "ALL ADVANCEMENTS",
        description: "Unlock every other advancement.",
        icon: "★",
        category: "Completion",
        secret: false,
        condition: () => {
            return AdvancementData
                .filter(a => a.id !== "everything")
                .every(a => game.unlocked.includes(a.id));
        }
    }
];


// ============================================================
// PERMANENT ADVANCEMENT SAVE
// ============================================================

const ADVANCEMENT_SAVE_KEY =
    "perfectly-safe-button-advancements";


function loadAdvancements() {
    try {
        const saved = localStorage.getItem(
            ADVANCEMENT_SAVE_KEY
        );

        if (!saved) {
            game.unlocked = [];
            return;
        }

        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
            game.unlocked = parsed.filter(id =>
                AdvancementData.some(
                    advancement => advancement.id === id
                )
            );
        } else {
            game.unlocked = [];
        }

    } catch (error) {
        console.warn(
            "Could not load advancements:",
            error
        );

        game.unlocked = [];
    }
}


function saveAdvancements() {
    localStorage.setItem(
        ADVANCEMENT_SAVE_KEY,
        JSON.stringify(game.unlocked)
    );
}


// ============================================================
// UNLOCK
// ============================================================

function unlockAdvancement(id) {

    if (game.unlocked.includes(id)) {
        return;
    }

    const advancement =
        AdvancementData.find(
            a => a.id === id
        );

    if (!advancement) {
        return;
    }

    game.unlocked.push(id);

    saveAdvancements();

    showAdvancementToast(
        advancement
    );

    updateAdvancementUI();
}


// ============================================================
// CHECK
// ============================================================

function checkAdvancements() {

    for (const advancement of AdvancementData) {

        if (
            game.unlocked.includes(
                advancement.id
            )
        ) {
            continue;
        }

        try {

            if (
                advancement.condition()
            ) {
                unlockAdvancement(
                    advancement.id
                );
            }

        } catch (error) {

            console.warn(
                "Advancement check failed:",
                advancement.id,
                error
            );

        }
    }

    saveAdvancements();

    updateAdvancementUI();
}


// ============================================================
// TOAST
// ============================================================

function showAdvancementToast(
    advancement
) {

    const container =
        document.getElementById(
            "advancement-container"
        );

    if (!container) {
        return;
    }

    const toast =
        document.createElement("div");

    toast.className =
        "advancement-toast";

    toast.innerHTML = `
        <div class="advancement-icon">
            ${advancement.icon}
        </div>

        <div class="advancement-info">

            <div class="advancement-header">
                ADVANCEMENT MADE!
            </div>

            <div class="advancement-title">
                ${advancement.title}
            </div>

            <div class="advancement-description">
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


// ============================================================
// ADVANCEMENT MAP
// ============================================================

function createAdvancementMap() {

    const panel =
        document.getElementById(
            "advancement-panel"
        );

    if (!panel) {
        return;
    }

    const categories = {};

    for (
        const advancement
        of AdvancementData
    ) {

        if (
            !categories[
                advancement.category
            ]
        ) {
            categories[
                advancement.category
            ] = [];
        }

        categories[
            advancement.category
        ].push(advancement);
    }


    panel.innerHTML = `

        <div class="advancement-panel-header">

            <div>

                <div class="advancement-panel-kicker">
                    CONTAINMENT ARCHIVE
                </div>

                <h2>
                    ADVANCEMENT MAP
                </h2>

                <p id="advancement-progress">
                    0 / ${AdvancementData.length}
                    UNLOCKED
                </p>

            </div>

            <button
                id="close-advancements"
                class="advancement-close"
                type="button"
            >
                ×
            </button>

        </div>


        <div
            id="advancement-progress-bar"
            class="advancement-progress-bar"
        >
            <div></div>
        </div>


        <div id="advancement-map"></div>
    `;


    const map =
        document.getElementById(
            "advancement-map"
        );


    for (
        const [category, advancements]
        of Object.entries(categories)
    ) {

        const section =
            document.createElement("section");

        section.className =
            "advancement-category";


        section.innerHTML = `

            <div class="category-title">
                ${category.toUpperCase()}
            </div>

            <div class="advancement-grid"></div>
        `;


        const grid =
            section.querySelector(
                ".advancement-grid"
            );


        for (
            const advancement
            of advancements
        ) {

            const card =
                document.createElement("article");

            card.className =
                "advancement-card";

            card.dataset.id =
                advancement.id;

            grid.appendChild(card);

            updateAdvancementCard(
                card,
                advancement
            );
        }


        map.appendChild(section);
    }


    document
        .getElementById(
            "close-advancements"
        )
        .addEventListener(
            "click",
            closeAdvancementMap
        );
}


// ============================================================
// CARD
// ============================================================

function updateAdvancementCard(
    card,
    advancement
) {

    const unlocked =
        game.unlocked.includes(
            advancement.id
        );


    if (unlocked) {

        card.className =
            "advancement-card unlocked";

        card.innerHTML = `

            <div class="map-icon">
                ${advancement.icon}
            </div>

            <div class="map-info">

                <strong>
                    ${advancement.title}
                </strong>

                <span>
                    ${advancement.description}
                </span>

            </div>

            <div class="map-check">
                ✓
            </div>
        `;

        return;
    }


    if (advancement.secret) {

        card.className =
            "advancement-card secret";

        card.innerHTML = `

            <div class="map-icon">
                ?
            </div>

            <div class="map-info">

                <strong>
                    ???
                </strong>

                <span>
                    SECRET ADVANCEMENT
                </span>

            </div>

            <div class="map-lock">
                ?
            </div>
        `;

        return;
    }


    card.className =
        "advancement-card locked";

    card.innerHTML = `

        <div class="map-icon">
            🔒
        </div>

        <div class="map-info">

            <strong>
                ${advancement.title}
            </strong>

            <span>
                ${advancement.description}
            </span>

        </div>

        <div class="map-lock">
            LOCKED
        </div>
    `;
}


// ============================================================
// UI
// ============================================================

function updateAdvancementUI() {

    const total =
        AdvancementData.length;

    const unlocked =
        game.unlocked.length;


    const progress =
        document.getElementById(
            "advancement-progress"
        );

    if (progress) {

        progress.textContent =
            `${unlocked} / ${total} UNLOCKED`;
    }


    const bar =
        document.querySelector(
            "#advancement-progress-bar > div"
        );

    if (bar) {

        const percentage =
            total === 0
                ? 0
                : (unlocked / total) * 100;

        bar.style.width =
            `${percentage}%`;
    }


    const stat =
        document.getElementById(
            "advancement-count"
        );

    if (stat) {
        stat.textContent =
            unlocked;
    }


    for (
        const advancement
        of AdvancementData
    ) {

        const card =
            document.querySelector(
                `.advancement-card[data-id="${advancement.id}"]`
            );

        if (card) {

            updateAdvancementCard(
                card,
                advancement
            );
        }
    }
}


// ============================================================
// OPEN / CLOSE
// ============================================================

function openAdvancementMap() {

    const overlay =
        document.getElementById(
            "advancement-overlay"
        );

    if (!overlay) {
        return;
    }

    overlay.classList.add("open");

    updateAdvancementUI();
}


function closeAdvancementMap() {

    const overlay =
        document.getElementById(
            "advancement-overlay"
        );

    if (!overlay) {
        return;
    }

    overlay.classList.remove("open");
}


// ============================================================
// INITIALIZATION
// ============================================================

function initializeAdvancements() {

    loadAdvancements();


    window.Advancements = {

        check:
            checkAdvancements,

        unlock:
            unlockAdvancement,

        data:
            AdvancementData,

        unlocked:
            game.unlocked,

        open:
            openAdvancementMap,

        close:
            closeAdvancementMap
    };


    createAdvancementMap();


    const button =
        document.getElementById(
            "open-advancements"
        );

    if (button) {

        button.addEventListener(
            "click",
            openAdvancementMap
        );
    }


    updateAdvancementUI();

    checkAdvancements();
}


// ============================================================
// START
// ============================================================

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
