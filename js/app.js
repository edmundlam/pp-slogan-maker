// Array of verbs for slogan generation with translations
const verbs = [
    { english: "AXE", french: "SUPPRIMER" },
    { english: "SCRAP", french: "ABANDONNER" },
    { english: "DUMP", french: "JETTER" },
    { english: "SLASH", french: "RÉDUIRE" },
    { english: "FIX", french: "RÉPARER" },
    { english: "STOP", french: "ARRÊTER" },
    { english: "BUILD", french: "CONSTRUIRE" },
    { english: "BOOST", french: "STIMULER" },
    { english: "CRUSH", french: "ÉCRASER" },
    { english: "END", french: "METTRE FIN À" },
    { english: "CONTROL", french: "MAÎTRISER" },
    { english: "RECLAIM", french: "RÉCUPÉRER" },
    { english: "REIN IN", french: "FREINER" },
    { english: "FREEZE", french: "GELER" },
    { english: "DRAIN", french: "ASSÉCHER" },
    { english: "REVOLUTIONIZE", french: "RÉVOLUTIONNER" },
    { english: "TACKLE", french: "AFFRONTER" },
    { english: "UNLEASH", french: "LIBÉRER" },
    { english: "SUPERCHARGE", french: "SURVOLTER" },
    { english: "MODERNIZE", french: "MODERNISER" },
    { english: "STREAMLINE", french: "SIMPLIFIER" },
    { english: "TRANSFORM", french: "TRANSFORMER" },
    { english: "UNLOCK", french: "DÉBLOQUER" },
    { english: "DEFEND", french: "DÉFENDRE" },
    { english: "REBUILD", french: "RECONSTRUIRE" },
    { english: "IGNITE", french: "ALLUMER" },
    { english: "EMPOWER", french: "AUTONOMISER" },
    { english: "CHAMPION", french: "DÉFENDRE" },
    { english: "HARNESS", french: "EXPLOITER" },
    { english: "RESTORE", french: "RESTAURER" },
    { english: "DISRUPT", french: "PERTURBER" },
    { english: "REVITALIZE", french: "REVITALISER" },
    { english: "SAFEGUARD", french: "SAUVEGARDER" }
];

// Array of nouns with their phrases (including appropriate articles)
const nouns = [
    { english: "TAXES", french: "LES IMPÔTS" },
    { english: "THE BUDGET", french: "LE BUDGET" },
    { english: "CRIME", french: "LE CRIME" },
    { english: "JOBS", french: "LES EMPLOIS" },
    { english: "HOUSING", french: "LE LOGEMENT" },
    { english: "BORDERS", french: "LES FRONTIÈRES" },
    { english: "COST OF LIVING", french: "LE COÛT DE LA VIE" },
    { english: "HEALTHCARE", french: "LES SOINS DE SANTÉ" },
    { english: "EDUCATION", french: "L'ÉDUCATION" },
    { english: "INFLATION", french: "L'INFLATION" },
    { english: "THE SWAMP", french: "LE MARÉCAGE" },
    { english: "THE RED TAPE", french: "LA BUREAUCRATIE" },
    { english: "GAS PRICES", french: "LES PRIX DU CARBURANT" },
    { english: "THE DEFICIT", french: "LE DÉFICIT" },
    { english: "WASTE", french: "LE GASPILLAGE" },
    { english: "RED TAPE", french: "LES FORMALITÉS ADMINISTRATIVES" },
    { english: "THE SYSTEM", french: "LE SYSTÈME" },
    { english: "THE ECONOMY", french: "L'ÉCONOMIE" },
    { english: "INNOVATION", french: "L'INNOVATION" },
    { english: "EFFICIENCY", french: "L'EFFICACITÉ" },
    { english: "THE ESTABLISHMENT", french: "L'ESTABLISHMENT" },
    { english: "SPECIAL INTERESTS", french: "LES INTÉRÊTS PARTICULIERS" },
    { english: "THE STATUS QUO", french: "LE STATU QUO" },
    { english: "THE MIDDLE CLASS", french: "LA CLASSE MOYENNE" },
    { english: "SMALL BUSINESSES", french: "LES PETITES ENTREPRISES" },
    { english: "FUTURE GENERATIONS", french: "LES GÉNÉRATIONS FUTURES" },
    { english: "THE BUREAUCRACY", french: "LA BUREAUCRATIE" },
    { english: "BIG GOVERNMENT", french: "LE GOUVERNEMENT TENTACULAIRE" },
    { english: "FAMILY VALUES", french: "LES VALEURS FAMILIALES" },
    { english: "THE CANADIAN DREAM", french: "LE RÊVE AMÉRICAIN" },
    { english: "OUR DEMOCRACY", french: "NOTRE DÉMOCRATIE" },
    { english: "REGULATIONS", french: "LES RÈGLEMENTS" },
    { english: "PROSPERITY", french: "LA PROSPÉRITÉ" },
    { english: "OPPORTUNITY", french: "L'OPPORTUNITÉ" },
    { english: "THE GREEN NEW DEAL", french: "LE NOUVEAU PACTE VERT" },
    { english: "THE DEEP STATE", french: "L'ÉTAT PROFOND" },
    { english: "POLITICAL CORRECTNESS", french: "LE POLITIQUEMENT CORRECT" },
    { english: "THE WORKING CLASS", french: "LA CLASSE OUVRIÈRE" },
    { english: "THE ENVIRONMENT", french: "L'ENVIRONNEMENT" },
    { english: "THE MILITARY", french: "L'ARMÉE" },
    { english: "THE POLICE", french: "LA POLICE" },
    { english: "THE MEDIA", french: "LES MÉDIAS" },
    { english: "THE ELITE", french: "L'ÉLITE" },
    { english: "THE NATION", french: "LA NATION" },
    { english: "THE PEOPLE", french: "LE PEUPLE" },
    { english: "THE FUTURE", french: "L'AVENIR" },
    { english: "THE COUNTRY", french: "LE PAYS" },
    { english: "THE WORLD", french: "LE MONDE" },
    { english: "THE PLANET", french: "LA PLANÈTE" },
    { english: "THE UNIVERSE", french: "L'UNIVERS" },
    { english: "THE GALAXY", french: "LA GALAXIE" },
    { english: "THE COSMOS", french: "LE COSMOS" },
    { english: "THE MULTIVERSE", french: "LE MULTIVERS" },
    { english: "THE 51ST STATE", french: "LE 51e ÉTAT" }
];

let lastVerbIndex, lastNounIndex;

// Function to generate a random slogan in both languages
function generateSlogan() {
    let randomVerbIndex, randomNounIndex;
    let iterations = 0;
    const MAX_ITERATIONS = 10; // Prevent infinite loop
    
    // Keep generating until we get different indices or reach max iterations
    do {
        randomVerbIndex = Math.floor(Math.random() * verbs.length);
        randomNounIndex = Math.floor(Math.random() * nouns.length);
        iterations++;
        
        // If we've tried too many times, just accept what we have
        if (iterations >= MAX_ITERATIONS) {
            break;
        }
    } while (randomVerbIndex === lastVerbIndex && randomNounIndex === lastNounIndex);
    
    // Store current indices for next comparison
    lastVerbIndex = randomVerbIndex;
    lastNounIndex = randomNounIndex;
    
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

function generateSlogan2() {
    // Test with varying lengths
    const slogans = [
        { english: "SHORT", french: "COURT" },
        { english: "INSPIRE THE FUTURE", french: "INSPIRER L'AVENIR" },
        { english: "TRANSFORMING OUR COMMUNITY TOGETHER", french: "TRANSFORMER NOTRE COMMUNAUTÉ ENSEMBLE" },
        { english: "INSPIREINSPIREINSPIREINSPIRE THE FUTURE OF DEMOCRACY", french: "INSPIRERINSPIRERINSPIRER L'AVENIR DE LA DÉMOCRATIE" }
    ];
    
    // Cycle through test cases
    const index = Math.floor(Math.random() * slogans.length);
    return slogans[index];
}

// Function to adjust font sizes based on content length
function adjustFontSizes() {
    const sloganContainer = document.getElementById('slogan-container');
    const podiumImage = document.querySelector('.podium-image');
    const englishSlogan = document.getElementById('english-slogan');
    const frenchSlogan = document.getElementById('french-slogan');
    
    // Get the image dimensions
    const imageWidth = podiumImage.clientWidth;
    
    // Calculate desired slogan width (approximately 60% of image width)
    const targetWidth = Math.floor(imageWidth * 0.6);
    
    // Store current content for restoration
    const englishContent = englishSlogan.textContent;
    const frenchContent = frenchSlogan.textContent;
    
    // Reset font sizes completely to base CSS values
    englishSlogan.style.fontSize = '';
    frenchSlogan.style.fontSize = '';
    
    // Get default sizes from CSS
    const defaultEnglishSize = parseFloat(window.getComputedStyle(englishSlogan).fontSize);
    const defaultFrenchSize = parseFloat(window.getComputedStyle(frenchSlogan).fontSize);
    
    // Create temporary measurement elements with the original content
    // This helps us measure the natural width without existing size constraints
    const tempEnglish = document.createElement('div');
    const tempFrench = document.createElement('div');
    
    // Copy the styling but ensure they're not visible
    tempEnglish.style.cssText = `
        position: absolute; 
        visibility: hidden; 
        height: auto; 
        width: auto;
        white-space: nowrap;
        font-family: ${window.getComputedStyle(englishSlogan).fontFamily};
        font-size: ${defaultEnglishSize}px;
        font-weight: ${window.getComputedStyle(englishSlogan).fontWeight};
    `;
    tempFrench.style.cssText = `
        position: absolute; 
        visibility: hidden; 
        height: auto; 
        width: auto;
        white-space: nowrap;
        font-family: ${window.getComputedStyle(frenchSlogan).fontFamily};
        font-size: ${defaultFrenchSize}px;
        font-weight: ${window.getComputedStyle(frenchSlogan).fontWeight};
    `;
    
    // Set the content
    tempEnglish.textContent = englishContent;
    tempFrench.textContent = frenchContent;
    
    // Add to document for measurement
    document.body.appendChild(tempEnglish);
    document.body.appendChild(tempFrench);
    
    // Get the natural width of text at default size
    const englishWidth = tempEnglish.offsetWidth;
    const frenchWidth = tempFrench.offsetWidth;
    
    // Remove the temporary elements
    document.body.removeChild(tempEnglish);
    document.body.removeChild(tempFrench);
    
    // Set minimum and maximum font sizes
    const minEnglishSize = 16;
    const minFrenchSize = 14;
    const maxEnglishSize = 60;
    const maxFrenchSize = 48;
    
    // Scale English slogan to fit target width
    let englishScaleFactor = targetWidth / englishWidth;
    englishScaleFactor = Math.min(englishScaleFactor, 2.5);
    const newEnglishSize = Math.max(
        Math.min(defaultEnglishSize * englishScaleFactor, maxEnglishSize),
        minEnglishSize
    );
    englishSlogan.style.fontSize = `${newEnglishSize}px`;
    
    // Scale French slogan accordingly
    let frenchScaleFactor = targetWidth / frenchWidth;
    frenchScaleFactor = Math.min(frenchScaleFactor, 2.5);
    const newFrenchSize = Math.max(
        Math.min(defaultFrenchSize * frenchScaleFactor, maxFrenchSize),
        minFrenchSize
    );
    frenchSlogan.style.fontSize = `${newFrenchSize}px`;
}

// Function to update the slogan on the page
function updateSlogan() {
    const slogans = generateSlogan();
    const englishSloganElement = document.getElementById('english-slogan');
    const frenchSloganElement = document.getElementById('french-slogan');
    
    englishSloganElement.textContent = slogans.english;
    frenchSloganElement.textContent = slogans.french;
    
    // Adjust font sizes to fit slogan container
    adjustFontSizes();
    
    // Add a subtle animation effect to both slogans
    const sloganContainer = document.getElementById('slogan-container');
    sloganContainer.style.animation = 'none';
    sloganContainer.offsetHeight; // Trigger reflow
    sloganContainer.style.animation = 'fadeIn 0.5s ease-in-out';
}

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

// Event listener for the generate button
document.getElementById('generateButton').addEventListener('click', updateSlogan);

// Generate a slogan when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateSlogan();
    // Also adjust on window resize
    window.addEventListener('resize', adjustFontSizes);
});