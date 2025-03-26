// Arrays of verbs and nouns for slogan generation
const verbs = [
    "INSPIRE", "BUILD", "LEAD", "CHAMPION", "TRANSFORM",
    "EMPOWER", "ADVANCE", "SECURE", "PROTECT", "STRENGTHEN",
    "UNITE", "REFORM", "RESTORE", "REVITALIZE", "DEFEND"
];

const nouns = [
    "FUTURE", "AMERICA", "COMMUNITY", "LIBERTY", "PROSPERITY",
    "JUSTICE", "FREEDOM", "INNOVATION", "OPPORTUNITY", "DEMOCRACY",
    "SECURITY", "PROGRESS", "CHANGE", "EQUALITY", "EXCELLENCE"
];

// French translations with gender information (m = masculine, f = feminine)
const frenchVerbs = {
    "INSPIRE": "INSPIRER",
    "BUILD": "CONSTRUIRE",
    "LEAD": "DIRIGER",
    "CHAMPION": "DÉFENDRE",
    "TRANSFORM": "TRANSFORMER",
    "EMPOWER": "RENFORCER",
    "ADVANCE": "FAIRE PROGRESSER",
    "SECURE": "SÉCURISER",
    "PROTECT": "PROTÉGER",
    "STRENGTHEN": "CONSOLIDER",
    "UNITE": "UNIR",
    "REFORM": "RÉFORMER",
    "RESTORE": "RESTAURER",
    "REVITALIZE": "REVITALISER",
    "DEFEND": "DÉFENDRE"
};

const frenchNouns = {
    "FUTURE": { word: "AVENIR", gender: "m" },
    "AMERICA": { word: "AMÉRIQUE", gender: "f" },
    "COMMUNITY": { word: "COMMUNAUTÉ", gender: "f" },
    "LIBERTY": { word: "LIBERTÉ", gender: "f" },
    "PROSPERITY": { word: "PROSPÉRITÉ", gender: "f" },
    "JUSTICE": { word: "JUSTICE", gender: "f" },
    "FREEDOM": { word: "LIBERTÉ", gender: "f" },
    "INNOVATION": { word: "INNOVATION", gender: "f" },
    "OPPORTUNITY": { word: "OPPORTUNITÉ", gender: "f" },
    "DEMOCRACY": { word: "DÉMOCRATIE", gender: "f" },
    "SECURITY": { word: "SÉCURITÉ", gender: "f" },
    "PROGRESS": { word: "PROGRÈS", gender: "m" },
    "CHANGE": { word: "CHANGEMENT", gender: "m" },
    "EQUALITY": { word: "ÉGALITÉ", gender: "f" },
    "EXCELLENCE": { word: "EXCELLENCE", gender: "f" }
};

// Function to generate a random slogan in both languages
function generateSlogan() {
    const randomVerbIndex = Math.floor(Math.random() * verbs.length);
    const randomNounIndex = Math.floor(Math.random() * nouns.length);
    
    const englishVerb = verbs[randomVerbIndex];
    const englishNoun = nouns[randomNounIndex];
    
    // Generate the English slogan
    const englishSlogan = `${englishVerb} THE ${englishNoun}`;
    
    // Generate the French slogan with proper article based on gender
    const frenchVerb = frenchVerbs[englishVerb];
    const frenchNoun = frenchNouns[englishNoun];
    
    let article;
    if (frenchNoun.gender === "m") {
        // Check if the noun starts with a vowel
        if (/^[AEIOUÉ]/.test(frenchNoun.word)) {
            article = "L'";
        } else {
            article = "LE ";
        }
    } else {
        // Check if the noun starts with a vowel
        if (/^[AEIOUÉ]/.test(frenchNoun.word)) {
            article = "L'";
        } else {
            article = "LA ";
        }
    }
    
    const frenchSlogan = `${frenchVerb} ${article}${frenchNoun.word}`;
    
    return {
        english: englishSlogan,
        french: frenchSlogan
    };
}

// Function to update the slogan on the page
function updateSlogan() {
    const slogans = generateSlogan();
    const englishSloganElement = document.getElementById('english-slogan');
    const frenchSloganElement = document.getElementById('french-slogan');
    
    englishSloganElement.textContent = slogans.english;
    frenchSloganElement.textContent = slogans.french;
    
    // Add a subtle animation effect to both slogans
    const sloganContainer = document.getElementById('slogan-container');
    sloganContainer.style.animation = 'none';
    sloganContainer.offsetHeight; // Trigger reflow
    sloganContainer.style.animation = 'fadeIn 0.5s ease-in-out';
}

// Event listener for the generate button
document.getElementById('generateButton').addEventListener('click', updateSlogan);

// Generate a slogan when the page loads
document.addEventListener('DOMContentLoaded', updateSlogan);

// Add keypress functionality to generate new slogans with spacebar
document.addEventListener('keydown', function(event) {
    // Check if the spacebar was pressed (key code 32)
    if (event.keyCode === 32 || event.code === 'Space') {
        updateSlogan();
        // Prevent default space behavior (like scrolling)
        event.preventDefault();
    }
});

// Optional: Define the animation in JS for browsers that don't support it in CSS
if (!document.querySelector('style#slogan-animations')) {
    const style = document.createElement('style');
    style.id = 'slogan-animations';
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}