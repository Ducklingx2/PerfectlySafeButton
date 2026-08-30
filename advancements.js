// ==========================================
// PERFECTLY SAFE BUTTON
// ADVANCEMENT SYSTEM
// ==========================================


// ==========================================
// STATS
// ==========================================

const stats = {

    clicks: 0,

    ducksSpawned: 0,

    jellyfishSpawned: 0,

    giantJellyfishSpawned: 0,

    bambooGrown: 0,

    smileysSpawned: 0,

    warningsTriggered: 0,

    spinsTriggered: 0,

    insanityTriggered: 0,

    leaveTriggered: 0,

    eventsTriggered: 0

};


// ==========================================
// UNLOCKED ADVANCEMENTS
// ==========================================

const unlockedAdvancements = new Set();


// ==========================================
// ADVANCEMENT DEFINITIONS
// ==========================================

const advancements = {

    // --------------------------------------
    // CLICK ADVANCEMENTS
    // --------------------------------------

    first_mistake: {

        title: "First Mistake",

        description:
            "Press the button for the first time.",

        icon: "🟩",

        condition: () =>
            stats.clicks >= 1

    },


    just_one_more: {

        title: "Just One More",

        description:
            "Press the button 10 times.",

        icon: "🖱️",

        condition: () =>
            stats.clicks >= 10

    },


    this_is_getting_concerning: {

        title: "This Is Getting Concerning",

        description:
            "Press the button 50 times.",

        icon: "🧠",

        condition: () =>
            stats.clicks >= 50

    },


    why_are_you_still_here: {

        title: "Why Are You Still Here?",

        description:
            "Press the button 500 times.",

        icon: "🏆",

        condition: () =>
            stats.clicks >= 500

    },


    // --------------------------------------
    // DUCK ADVANCEMENTS
    // --------------------------------------

    duckling: {

        title: "Duckling",

        description:
            "Spawn your first duck.",

        icon: "🦆",

        condition: () =>
            stats.ducksSpawned >= 1

    },


    one_with_the_ducks: {

        title: "One with the Ducks",

        description:
            "Spawn 100 ducks.",

        icon: "🦆",

        condition: () =>
            stats.ducksSpawned >= 100

    },


    // --------------------------------------
    // JELLYFISH ADVANCEMENTS
    // --------------------------------------

    aquatic_incident: {

        title: "Aquatic Incident",

        description:
            "Spawn your first jellyfish.",

        icon: "🪼",

        condition: () =>
            stats.jellyfishSpawned >= 1

    },


    poseidon: {

        title: "Poseidon",

        description:
            "Spawn 100 BEEG jellyfish.",

        icon: "🌊",

        condition: () =>
            stats.giantJellyfishSpawned >= 100

    },


    jellyfish_apocalypse: {

        title: "Jellyfish Apocalypse",

        description:
            "Have 25 jellyfish on screen at once.",

        icon: "🪼",

        condition: () =>
            document.querySelectorAll(".floating").length >= 25

    },


    // --------------------------------------
    // BAMBOO
    // --------------------------------------

    bamboo_farmer: {

        title: "Bamboo Farmer",

        description:
            "Grow bamboo for the first time.",

        icon: "🎋",

        condition: () =>
            stats.bambooGrown >= 1

    },


    forest_of_regret: {

        title: "Forest of Regret",

        description:
            "Grow bamboo 25 times.",

        icon: "🌿",

        condition: () =>
            stats.bambooGrown >= 25

    },


    // --------------------------------------
    // SMILEY
    // --------------------------------------

    something_is_smiling: {

        title: "Something Is Smiling Back",

        description:
            "Spawn the smiley.",

        icon: "🙂",

        condition: () =>
            stats.smileysSpawned >= 1

    },


    it_saw_you: {

        title: "It Saw You",

        description:
            "Spawn the smiley 5 times.",

        icon: "👁️",

        condition: () =>
            stats.smileysSpawned >= 5

    },


    // --------------------------------------
    // WARNING
    // --------------------------------------

    you_were_warned: {

        title: "You Were Warned",

        description:
            "Trigger the warning.",

        icon: "⚠️",

        condition: () =>
            stats.warningsTriggered >= 1

    },


    // --------------------------------------
    // SPIN
    // --------------------------------------

    orientation_privileges_revoked: {

        title: "Orientation Privileges Revoked",

        description:
            "Trigger Evil Spin.",

        icon: "🌀",

        condition: () =>
            stats.spinsTriggered >= 1

    },


    // --------------------------------------
    // INSANITY
    // --------------------------------------

    its_melting: {

        title: "It's Melting",

        description:
            "Trigger the insanity event.",

        icon: "🫠",

        condition: () =>
            stats.insanityTriggered >= 1

    },


    // --------------------------------------
    // RAGEBAITER
    // --------------------------------------

    ragebaiter: {

        title: "Ragebaiter",

        description:
            "Make the button say ĿɆȺVɆ.",

        icon: "🔴",

        condition: () =>
            stats.leaveTriggered >= 1

    }

};


// ==========================================
// UNLOCK ADVANCEMENT
// ==========================================

function unlockAdvancement(id) {

    if (unlockedAdvancements.has(id)) {
        return;
    }

    const advancement =
        advancements[id];

    if (!advancement) {
        return;
    }

    unlockedAdvancements.add(id);

    showAdvancementToast(advancement);

}


// ==========================================
// CHECK ADVANCEMENTS
// ==========================================

function checkAdvancements() {

    for (const id in advancements) {

        const advancement =
            advancements[id];

        if (
            !unlockedAdvancements.has(id) &&
            advancement.condition()
        ) {

            unlockAdvancement(id);

        }

    }

}


// ==========================================
// ADVANCEMENT TOAST
// ==========================================

function showAdvancementToast(advancement) {

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

    document.body.appendChild(toast);


    // Start animation

    setTimeout(() => {

        toast.classList.add("show");

    }, 10);


    // Hide

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);


    // Remove

    setTimeout(() => {

        toast.remove();

    }, 4000);

}
