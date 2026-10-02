// ==========================================================
// PERFECTLY SAFE BUTTON
// ADVANCEMENT SYSTEM
// ==========================================================


const AdvancementData = {

    // ======================================================
    // CLICKS
    // ======================================================

    first_mistake: {

        title: "First Mistake",

        description:
            "Press the button for the first time.",

        icon: "🟩",

        condition:
            () => game.clicks >= 1

    },

    just_one_more: {

        title: "Just One More",

        description:
            "Press the button 10 times.",

        icon: "🖱️",

        condition:
            () => game.clicks >= 10

    },

    getting_concerning: {

        title: "This Is Getting Concerning",

        description:
            "Press the button 50 times.",

        icon: "🧠",

        condition:
            () => game.clicks >= 50

    },

    no_turning_back: {

        title: "No Turning Back",

        description:
            "Press the button 100 times.",

        icon: "☢️",

        condition:
            () => game.clicks >= 100

    },

    why_still_here: {

        title: "Why Are You Still Here?",

        description:
            "Press the button 500 times.",

        icon: "🏆",

        condition:
            () => game.clicks >= 500

    },

    button_veteran: {

        title: "Button Veteran",

        description:
            "Press the button 1,000 times.",

        icon: "🎖️",

        condition:
            () => game.clicks >= 1000

    },


    // ======================================================
    // DUCKS
    // ======================================================

    duckling: {

        title: "Duckling",

        description:
            "Spawn your first duck.",

        icon: "🦆",

        condition:
            () => game.ducks >= 1

    },

    duck_flock: {

        title: "Duck Flock",

        description:
            "Spawn 25 ducks.",

        icon: "🦆",

        condition:
            () => game.ducks >= 25

    },

    one_with_the_ducks: {

        title: "One With The Ducks",

        description:
            "Spawn 100 ducks.",

        icon: "🦆",

        condition:
            () => game.ducks >= 100

    },


    // ======================================================
    // JELLYFISH
    // ======================================================

    aquatic_incident: {

        title: "Aquatic Incident",

        description:
            "Encounter your first jellyfish.",

        icon: "🪼",

        condition:
            () => game.jellyfish >= 1

    },

    deep_water: {

        title: "Deep Water",

        description:
            "Encounter 25 jellyfish.",

        icon: "🌊",

        condition:
            () => game.jellyfish >= 25

    },

    poseidon: {

        title: "Poseidon",

        description:
            "Encounter 25 BEEG jellyfish.",

        icon: "🪼",

        condition:
            () => game.giantJellyfish >= 25

    },


    // ======================================================
    // BAMBOO
    // ======================================================

    bamboo_farmer: {

        title: "Bamboo Farmer",

        description:
            "Grow bamboo for the first time.",

        icon: "🎋",

        condition:
            () => game.bamboo >= 1

    },

    forest_of_regret: {

        title: "Forest of Regret",

        description:
            "Grow bamboo 25 times.",

        icon: "🌿",

        condition:
            () => game.bamboo >= 25

    },


    // ======================================================
    // SMILEY
    // ======================================================

    something_is_smiling: {

        title: "Something Is Smiling Back",

        description:
            "Spawn the smiley.",

        icon: "🙂",

        condition:
            () => game.smileys >= 1

    },

    it_saw_you: {

        title: "It Saw You",

        description:
            "Spawn the smiley 5 times.",

        icon: "👁️",

        condition:
            () => game.smileys >= 5

    },


    // ======================================================
    // WARNINGS
    // ======================================================

    you_were_warned: {

        title: "You Were Warned",

        description:
            "Trigger a warning.",

        icon: "⚠️",

        condition:
            () => game.warnings >= 1

    },

    ignored_the_warning: {

        title: "Ignored The Warning",

        description:
            "Trigger 10 warnings.",

        icon: "🚨",

        condition:
            () => game.warnings >= 10

    },


    // ======================================================
    // SPIN
    // ======================================================

    orientation_revoked: {

        title: "Orientation Privileges Revoked",

        description:
            "Rotate the world.",

        icon: "🌀",

        condition:
            () => game.spins >= 1

    },

    dizzy: {

        title: "Dizzy",

        description:
            "Rotate the world 10 times.",

        icon: "💫",

        condition:
            () => game.spins >= 10

    },


    // ======================================================
    // INSANITY
    // ======================================================

    its_melting: {

        title: "It's Melting",

        description:
            "Trigger the insanity event.",

        icon: "🫠",

        condition:
            () => game.insanity >= 1

    },

    reality_is_optional: {

        title: "Reality Is Optional",

        description:
            "Trigger insanity 10 times.",

        icon: "🫠",

        condition:
            () => game.insanity >= 10

    },


    // ======================================================
    // UNDERWATER
    // ======================================================

    underwater_incident: {

        title: "Underwater Incident",

        description:
            "Make the button go underwater.",

        icon: "🫧",

        condition:
            () => game.bubbles >= 1

    },

    deep_sea: {

        title: "Deep Sea",

        description:
            "Generate 100 bubbles.",

        icon: "🌊",

        condition:
            () => game.bubbles >= 100

    },

    aquatic_ecosystem: {

        title: "Aquatic Ecosystem",

        description:
            "Encounter jellyfish and bubbles.",

        icon: "🐟",

        condition:
            () =>
                game.bubbles >= 1 &&
                game.jellyfish >= 1

    },


    // ======================================================
    // CHINESE GIBBERISH
    // ======================================================

    questionable_translation: {

        title: "Questionable Translation",

        description:
            "Cover the screen in nonsense.",

        icon: "🀄",

        condition:
            () =>
                game.chineseCharacters >= 20

    },

    language_barrier: {

        title: "Language Barrier",

        description:
            "Generate 100 mysterious characters.",

        icon: "📖",

        condition:
            () =>
                game.chineseCharacters >= 100

    },


    // ======================================================
    // LA PEACE
    // ======================================================

    la_peace: {

        title: "LA PEACE",

        description:
            "Discover the lapis.",

        icon: "🔷",

        condition:
            () => game.lapis >= 1

    },

    lapis_lazuli: {

        title: "Lapis Lazuli",

        description:
            "Find lapis 25 times.",

        icon: "💎",

        condition:
            () => game.lapis >= 25

    },


    // ======================================================
    // WEATHER
    // ======================================================

    rainmaker: {

        title: "Rainmaker",

        description:
            "Make it rain.",

        icon: "🌧️",

        condition:
            () => game.rainDrops >= 1

    },

    weather_report: {

        title: "Weather Report",

        description:
            "Generate 100 rain drops.",

        icon: "☁️",

        condition:
            () => game.rainDrops >= 100

    },

    frozen_assets: {

        title: "Frozen Assets",

        description:
            "Freeze the containment chamber.",

        icon: "❄️",

        condition:
            () => game.snowflakes >= 1

    },


    // ======================================================
    // DESTRUCTION
    // ======================================================

    demolition: {

        title: "Demolition",

        description:
            "Cause an explosion.",

        icon: "💥",

        condition:
            () => game.explosions >= 1

    },

    demolition_expert: {

        title: "Demolition Expert",

        description:
            "Cause 10 explosions.",

        icon: "💥",

        condition:
            () => game.explosions >= 10

    },


    // ======================================================
    // GLITCHES
    // ======================================================

    reality_glitch: {

        title: "Reality Glitch",

        description:
            "Break reality slightly.",

        icon: "👾",

        condition:
            () => game.glitches >= 1

    },

    corrupted: {

        title: "Corrupted",

        description:
            "Glitch the system 10 times.",

        icon: "🟥",

        condition:
            () => game.glitches >= 10

    },


    // ======================================================
    // FAKE CRASH
    // ======================================================

    button_crashed: {

        title: "Button.exe Has Stopped",

        description:
            "Cause a completely fake system crash.",

        icon: "💻",

        condition:
            () => game.fakeCrashes >= 1

    },

    definitely_not_a_crash: {

        title: "Definitely Not A Crash",

        description:
            "Crash the button 5 times.",

        icon: "🖥️",

        condition:
            () => game.fakeCrashes >= 5

    },


    // ======================================================
    // DINO
    // ======================================================

    connection_lost: {

        title: "Connection Lost",

        description:
            "Lose an internet connection that never existed.",

        icon: "🦖",

        condition:
            () => game.dinoEvents >= 1

    },


    // ======================================================
    // LEAVE
    // ======================================================

    ragebaiter: {

        title: "Ragebaiter",

        description:
            "Make the button say ĿɆȺVɆ.",

        icon: "🔴",

        condition:
            () => game.leave >= 1

    },

    still_here: {

        title: "You Didn't Leave",

        description:
            "Trigger ĿɆȺVɆ and keep pressing.",

        icon: "🚪",

        condition:
            () =>
                game.leave >= 1 &&
                game.clicks >= 25

    },


    // ======================================================
    // EVENT COLLECTION
    // ======================================================

    statistical_anomaly: {

        title: "Statistical Anomaly",

        description:
            "Trigger the same event three times consecutively.",

        icon: "📊",

        secret: true,

        condition:
            () => game.maxEventStreak >= 3

    },

    professional_button_presser: {

        title: "Professional Button Presser",

        description:
            "Trigger 100 events.",

        icon: "🧪",

        condition:
            () => game.events >= 100

    },

    containment_failure: {

        title: "Containment Failure",

        description:
            "Experience 15 different events.",

        icon: "☢️",

        secret: true,

        condition:
            () =>
                game.uniqueEvents.length >= 15

    },

    everything_is_happening: {

        title: "Everything Is Happening",

        description:
            "Experience every event.",

        icon: "🌌",

        secret: true,

        condition:
            () =>
                game.uniqueEvents.length >=
                Object.keys(events).length

    },


    // ======================================================
    // SECRET COMBINATIONS
    // ======================================================

    ecosystem_collapse: {

        title: "Ecosystem Collapse",

        description:
            "Encounter ducks, bamboo and jellyfish.",

        icon: "🌎",

        secret: true,

        condition:
            () =>
                game.ducks >= 1 &&
                game.bamboo >= 1 &&
                game.jellyfish >= 1

    },

    questionable_science: {

        title: "Questionable Science",

        description:
            "The experiment has gone somewhere unusual.",

        icon: "🧬",

        secret: true,

        condition:
            () =>
                game.chineseCharacters >= 20 &&
                game.explosions >= 1

    },

    something_lives_down_here: {

        title: "Something Lives Down Here",

        description:
            "Experience bubbles and a giant jellyfish.",

        icon: "🪼",

        secret: true,

        condition:
            () =>
                game.bubbles >= 1 &&
                game.giantJellyfish >= 1

    },

    nature_is_taking_over: {

        title: "Nature Is Taking Over",

        description:
            "Generate ducks, bamboo and rain.",

        icon: "🌿",

        secret: true,

        condition:
            () =>
                game.ducks >= 1 &&
                game.bamboo >= 1 &&
                game.rainDrops >= 1

    },

    blue_screen: {

        title: "Blue Screen",

        description:
            "The system has encountered an unexpected color.",

        icon: "🟦",

        secret: true,

        condition:
            () =>
                game.fakeCrashes >= 1 &&
                game.dinoEvents >= 1

    },

    chaos_engine: {

        title: "Chaos Engine",

        description:
            "Trigger 250 events.",

        icon: "⚙️",

        secret: true,

        condition:
            () =>
                game.events >= 250

    },

    why_did_you_build_this: {

        title: "Why Did You Build This?",

        description:
            "Press the button 2,500 times.",

        icon: "❓",

        secret: true,

        condition:
            () =>
                game.clicks >= 2500

    }

};


// ==========================================================
// ADVANCEMENT SYSTEM
// ==========================================================

const unlockedAdvancements =
    new Set(game.unlocked);


// ==========================================================
// UNLOCK
// ==========================================================

function unlockAdvancement(id) {

    if (
        unlockedAdvancements.has(id)
    ) {

        return;

    }

    const advancement =
        AdvancementData[id];

    if (!advancement) {

        return;

    }

    unlockedAdvancements.add(id);

    game.unlocked =
        Array.from(
            unlockedAdvancements
        );

    game.advancements =
        game.unlocked.length;

    showAdvancementToast(
        advancement
    );

    updateUI();

    saveGame();

}


// ==========================================================
// CHECK
// ==========================================================

function checkAdvancements() {

    for (
        const id in AdvancementData
    ) {

        if (
            unlockedAdvancements.has(id)
        ) {

            continue;

        }

        const advancement =
            AdvancementData[id];

        try {

            if (
                advancement.condition()
            ) {

                unlockAdvancement(id);

            }

        } catch (error) {

            console.warn(
                "Advancement check failed:",
                id,
                error
            );

        }

    }

}


// ==========================================================
// TOAST
// ==========================================================

function showAdvancementToast(
    advancement
) {

    const container =
        document.getElementById(
            "advancement-container"
        );

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
                Advancement Made!
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

    }, 4200);

    setTimeout(() => {

        toast.remove();

    }, 4700);

}


// ==========================================================
// PUBLIC API
// ==========================================================

window.Advancements = {

    check: checkAdvancements,

    unlock: unlockAdvancement,

    data: AdvancementData,

    unlocked: unlockedAdvancements

};


// ==========================================================
// INITIAL CHECK
// ==========================================================

checkAdvancements();
