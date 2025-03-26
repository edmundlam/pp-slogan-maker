// Array of verbs for slogan generation with translations
const verbs = [
    { english: "INSPIRE", french: "INSPIRER" },
    { english: "BUILD", french: "CONSTRUIRE" },
    { english: "LEAD", french: "DIRIGER" },
    { english: "CHAMPION", french: "DÉFENDRE" },
    { english: "TRANSFORM", french: "TRANSFORMER" },
    { english: "EMPOWER", french: "RENFORCER" },
    { english: "ADVANCE", french: "FAIRE PROGRESSER" },
    { english: "SECURE", french: "SÉCURISER" },
    { english: "PROTECT", french: "PROTÉGER" },
    { english: "STRENGTHEN", french: "CONSOLIDER" },
    { english: "UNITE", french: "UNIR" },
    { english: "REFORM", french: "RÉFORMER" },
    { english: "RESTORE", french: "RESTAURER" },
    { english: "REVITALIZE", french: "REVITALISER" },
    { english: "DEFEND", french: "DÉFENDRE" }
];

// Array of nouns with their phrases (including appropriate articles)
const nouns = [
    { english: "THE FUTURE", french: "L'AVENIR" },
    { english: "AMERICA", french: "L'AMÉRIQUE" },
    { english: "OUR COMMUNITY", french: "LA COMMUNAUTÉ" },
    { english: "LIBERTY", french: "LA LIBERTÉ" },
    { english: "PROSPERITY", french: "LA PROSPÉRITÉ" },
    { english: "JUSTICE", french: "LA JUSTICE" },
    { english: "FREEDOM", french: "LA LIBERTÉ" },
    { english: "INNOVATION", french: "L'INNOVATION" },
    { english: "OPPORTUNITY", french: "L'OPPORTUNITÉ" },
    { english: "DEMOCRACY", french: "LA DÉMOCRATIE" },
    { english: "SECURITY", french: "LA SÉCURITÉ" },
    { english: "PROGRESS", french: "LE PROGRÈS" },
    { english: "CHANGE", french: "LE CHANGEMENT" },
    { english: "EQUALITY", french: "L'ÉGALITÉ" },
    { english: "EXCELLENCE", french: "L'EXCELLENCE" }
];

// Function to generate a random slogan in both languages
function generateSlogan() {
    const randomVerbIndex = Math.floor(Math.random() * verbs.length);
    const randomNounIndex = Math.floor(Math.random() * nouns.length);
    
    const verb = verbs[randomVerbIndex];
    const noun = nouns[randomNounIndex];
    
    // Generate slogans by simple concatenation
    const englishSlogan = `${verb.english} ${noun.english}`;
    const frenchSlogan = `${verb.french} ${noun.french}`;
    
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