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


function createSharingImage(englishText, frenchText) {
    return new Promise((resolve) => {
        const placeholderImage = "images/pp3.webp";
        const img = new Image();
        
        img.onload = function() {
            const imageWidth = img.naturalWidth;
            const imageHeight = img.naturalHeight;
            
            // Convert image to data URL
            const canvas = document.createElement('canvas');
            canvas.width = imageWidth;
            canvas.height = imageHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            
            // Get data URL (this will embed the image directly in the SVG)
            const imageDataUrl = canvas.toDataURL('image/webp');
            
            // Position text near the bottom of the image
            const textY = Math.round(imageHeight * 0.87);
            
            // Calculate font sizes - adaptive to text length
            const englishLength = englishText.length;
            const frenchLength = frenchText.length;
            
            // Base font size that scales with image width
            const baseFontSize = imageWidth * 0.029;
            
            // Adjust based on text length - longer text gets smaller font
            const englishSize = Math.min(
                Math.max(baseFontSize * (25 / Math.max(englishLength, 10)), 14), // Changed 30 to 25 and 16 to 14
                50 // Reduced max font size from 60 to 50
            );
            const frenchSize = Math.min(
                Math.max(baseFontSize * (25 / Math.max(frenchLength, 10)), 12), // Changed 30 to 25 and 14 to 12
                40 // Reduced max font size from 48 to 40
            );
            
            // Create the SVG with embedded image data URL
            const svgContent = `
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="100%" 
                height="auto" 
                viewBox="0 0 ${imageWidth} ${imageHeight}"
                preserveAspectRatio="xMidYMid meet">
                <defs>
                    <style>
                        .slogan-text {
                            font-family: Arial, sans-serif;
                            font-weight: bold;
                            fill: white;
                            text-anchor: middle;
                            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
                        }
                    </style>
                </defs>
                
                <!-- Background image with embedded data URL -->
                <image href="${imageDataUrl}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
                
                <!-- English slogan -->
                <text class="slogan-text" x="${imageWidth/2}" y="${textY - 30}" font-size="${englishSize}">
                    ${englishText}
                </text>
                
                <!-- French slogan -->
                <text class="slogan-text" x="${imageWidth/2}" y="${textY + 30}" font-size="${frenchSize}">
                    ${frenchText}
                </text>
            </svg>`;
            
            // Create blob from final SVG content
            const svgBlob = new Blob([svgContent], {type: 'image/svg+xml'});
            const url = URL.createObjectURL(svgBlob);
            
            resolve({
                url: url,
                svgContent: svgContent
            });
        };
        
        img.onerror = function() {
            console.error("Failed to load image:", placeholderImage);
            // Handle error case
        };
        
        // Set the src to trigger loading of the image
        img.src = placeholderImage;
    });
}


// Function to update the slogan on the page
function updateSlogan() {
    // Generate new slogan text
    const slogans = generateSlogan();
    
    // Get the container
    const container = document.getElementById('podium-container');
    
    // Show loading state
    container.innerHTML = '<div class="loading">Generating slogan...</div>';
    
    // Generate the shareable image with the slogan
    createSharingImage(slogans.english, slogans.french)
        .then(result => {
            // Create an image with the SVG data URI
            const img = document.createElement('img');
            img.src = result.url;
            img.alt = `Campaign slogan: ${slogans.english} / ${slogans.french}`;
            img.className = 'fade-in';
            
            // Store SVG content for sharing
            img.dataset.svgContent = result.svgContent;
            
            // Clear container and add the new image
            container.innerHTML = '';
            container.appendChild(img);
        })
        .catch(error => {
            console.error("Error creating slogan image:", error);
            container.innerHTML = `
                <div class="error-message">
                    <p>Error generating image</p>
                    <p>English: ${slogans.english}</p>
                    <p>French: ${slogans.french}</p>
                </div>`;
        });
}

// Function to download the shareable image

function downloadShareableImage() {
    const img = document.querySelector('#podium-container img');
    
    if (!img || !img.dataset.svgContent) {
        console.error("No image or SVG content found");
        return;
    }
    
    // Load the original background image directly
    const originalImageBase = "images/pp3.webp";
    const originalImg = new Image();
    
    originalImg.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set dimensions
        canvas.width = originalImg.naturalWidth;
        canvas.height = originalImg.naturalHeight;
        
        // Draw background image
        ctx.drawImage(originalImg, 0, 0);
        
        // Parse the SVG content to extract text information
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(img.dataset.svgContent, "image/svg+xml");
        const texts = svgDoc.querySelectorAll('text');
        
        // Extract the English and French text content
        let englishText = "";
        let frenchText = "";
        let englishY = 0;
        let frenchY = 0;
        let englishSize = 0;
        let frenchSize = 0;
        
        texts.forEach((text, index) => {
            const content = text.textContent.trim();
            const y = parseFloat(text.getAttribute('y'));
            const fontSize = parseFloat(text.getAttribute('font-size'));
            
            if (index === 0) {  // First text element (English)
                englishText = content;
                englishY = y;
                englishSize = fontSize;
            } else {  // Second text element (French)
                frenchText = content;
                frenchY = y;
                frenchSize = fontSize;
            }
        });
        
        // Set up text styling
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Apply text shadow
        ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        
        // Draw English text
        ctx.font = `bold ${englishSize}px Arial, sans-serif`;
        ctx.fillText(englishText, canvas.width / 2, englishY);
        
        // Draw French text
        ctx.font = `bold ${frenchSize}px Arial, sans-serif`;
        ctx.fillText(frenchText, canvas.width / 2, frenchY);
        
        // Convert to WebP and trigger download
        try {
            // Convert canvas to WebP data URL (with quality parameter - 0.9 = 90% quality)
            const webpUrl = canvas.toDataURL('image/webp', 0.9);
            
            // Create download link
            const downloadLink = document.createElement('a');
            downloadLink.href = webpUrl;
            downloadLink.download = 'campaign-slogan.webp';
            
            // Trigger download
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } catch (e) {
            console.error("Error creating WebP:", e);
            // Try PNG as a fallback
            try {
                const pngUrl = canvas.toDataURL('image/png');
                const downloadLink = document.createElement('a');
                downloadLink.href = pngUrl;
                downloadLink.download = 'campaign-slogan.png';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            } catch (pngError) {
                console.error("Error creating PNG:", pngError);
                alert("Error creating image. Falling back to SVG.");
                // Fall back to SVG download
                downloadAsSVG(img.dataset.svgContent);
            }
        }
    };
    
    originalImg.onerror = function() {
        console.error("Failed to load original image");
        alert("Failed to load background image. Falling back to SVG.");
        // Fall back to SVG download
        downloadAsSVG(img.dataset.svgContent);
    };
    
    // Load the original image
    originalImg.src = originalImageBase;
}

// Helper function to download as SVG (fallback)
function downloadAsSVG(svgContent) {
    const svgBlob = new Blob([svgContent], {type: 'image/svg+xml'});
    const url = URL.createObjectURL(svgBlob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'campaign-slogan.svg';
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    URL.revokeObjectURL(url);
}

function downloadShareableImage2() {
    const img = document.querySelector('#podium-container img');
    
    if (!img || !img.dataset.svgContent) {
        console.error("No image or SVG content found");
        return;
    }
    
    // Create a blob from the stored SVG content
    const svgBlob = new Blob([img.dataset.svgContent], {type: 'image/svg+xml'});
    const url = URL.createObjectURL(svgBlob);
    
    // Create download link
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'campaign-slogan.svg';
    
    // Trigger download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Clean up
    URL.revokeObjectURL(url);
}

// Add animation styles
function addAnimationStyles() {
    if (!document.querySelector('style#slogan-animations')) {
        const style = document.createElement('style');
        style.id = 'slogan-animations';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .fade-in {
                animation: fadeIn 0.5s ease-in-out;
            }
            .loading {
                font-family: Arial, sans-serif;
                text-align: center;
                padding: 20px;
                color: #333;
            }
            .error-message {
                font-family: Arial, sans-serif;
                text-align: center;
                padding: 20px;
                color: #721c24;
                background-color: #f8d7da;
                border: 1px solid #f5c6cb;
                border-radius: 4px;
            }
        `;
        document.head.appendChild(style);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add animation styles
    addAnimationStyles();
    
    // Generate initial slogan
    updateSlogan();
    
    // Set up button handlers
    document.getElementById('generateButton').addEventListener('click', updateSlogan);
    document.getElementById('shareButton').addEventListener('click', downloadShareableImage);
    
    // Add spacebar handler
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            updateSlogan();
            event.preventDefault();
        }
    });
});