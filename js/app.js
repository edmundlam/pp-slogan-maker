const BACKGROUND_IMAGE = "images/pp3.webp";
const IMAGE_QUALITY = 0.9; // For WebP/PNG exports

// Array of verbs for slogan generation with translations
const verbs = [
    { english: "AXE", french: "SUPPRIMER" },
    { english: "CUT", french: "COUPER" },
    { english: "NIX", french: "RÉDUIRE" },
    { english: "SCRAP", french: "ABANDONNER" },
    { english: "DUMP", french: "JETTER" },
    { english: "SLASH", french: "SABRER" },
    { english: "FIX", french: "RÉPARER" },
    { english: "STOP", french: "ARRÊTER" },
    { english: "BUILD", french: "CONSTRUIRE" },
    { english: "BOOST", french: "STIMULER" },
    { english: "CRUSH", french: "ÉCRASER" },
    { english: "END", french: "METTRE FIN À" },
    { english: "CONTROL", french: "MAÎTRISER" },
    { english: "DEFUND", french: "REMBOURSER" },
    { english: "REIN IN", french: "FREINER" },
    { english: "FREEZE", french: "GELER" },
    { english: "DRAIN", french: "ASSÉCHER" },
    { english: "TACKLE", french: "AFFRONTER" },
    { english: "UNLEASH", french: "LIBÉRER" },
    { english: "UNLOCK", french: "DÉBLOQUER" },
    { english: "DEFEND", french: "DÉFENDRE" },
    { english: "REBUILD", french: "RECONSTRUIRE" },
    { english: "IGNITE", french: "ALLUMER" },
    { english: "EMPOWER", french: "AUTONOMISER" },
    { english: "CHAMPION", french: "DÉFENDRE" },
    { english: "EXPLOIT", french: "EXPLOITER" },
    { english: "RESTORE", french: "RESTAURER" },
    { english: "DISRUPT", french: "PERTURBER" },
];

// Array of nouns with their phrases (including appropriate articles)
const nouns = [
    { english: "THE TAX", french: "LES IMPÔTS" },
    { english: "THE BUDGET", french: "LE BUDGET" },
    { english: "THE CRIME", french: "LE CRIME" },
    { english: "THE JOBS", french: "LES JOBS" },
    { english: "THE HOUSES", french: "LES MAISONS" },
    { english: "THE BORDERS", french: "LES FRONTIÈRES" },
    { english: "THE COST OF LIVING", french: "LE COÛT DE LA VIE" },
    { english: "THE HEALTH", french: "LES SOINS DE SANTÉ" },
    { english: "THE EDUCATION", french: "L'ÉDUCATION" },
    { english: "THE SCHOOLS", french: "LES ECOLES" },
    { english: "THE CBC", french: "RADIO CANADA" },
    { english: "THE QUEBEC", french: "LE QUEBEC" },
    { english: "THE CITY MAYORS", french: "LES MAIRES DES VILLES" },
    { english: "THE PUBLIC SECTOR", french: "LE SECTEUR PUBLIC" },
    { english: "JUSTIN TRUDEAU", french: "JUSTIN TRUDEAU" },
    { english: "THE LIBERALS", french: "LES LIBÉRAUX" },
    { english: "THE BLOC", french: "LE BLOC" },
    { english: "THE INFLATION", french: "L'INFLATION" },
    { english: "THE SWAMP", french: "LE MARÉCAGE" },
    { english: "THE RED TAPE", french: "LA BUREAUCRATIE" },
    { english: "THE GAS PRICES", french: "LES PRIX DU CARBURANT" },
    { english: "THE DEFICIT", french: "LE DÉFICIT" },
    { english: "MY MISERY", french: "MA MISÈRE" },
    { english: "MY LEADERSHIP", french: "MON LEADERSHIP" },
    { english: "MY SEAT", french: "MON SIÈGE" },
    { english: "MY SECURITY CLEARANCE", french: "HABILITATION DE SÉCURITÉ" },
    { english: "THE WASTE", french: "LE GASPILLAGE" },
    { english: "THE SYSTEM", french: "LE SYSTÈME" },
    { english: "THE ECONOMY", french: "L'ÉCONOMIE" },
    { english: "THE ESTABLISHMENT", french: "L'ESTABLISHMENT" },
    { english: "THE STATUS QUO", french: "LE STATU QUO" },
    { english: "THE MIDDLE CLASS", french: "LA CLASSE MOYENNE" },
    { english: "THE SMALL BUSINESSES", french: "LES PETITES ENTREPRISES" },
    { english: "THE FUTURE GENERATIONS", french: "LES GÉNÉRATIONS FUTURES" },
    { english: "THE BUREAUCRACY", french: "LA BUREAUCRATIE" },
    { english: "THE BIG GOVERNMENT", french: "LE GOUVERNEMENT TENTACULAIRE" },
    { english: "THE FAMILY VALUES", french: "LES VALEURS FAMILIALES" },
    { english: "THE CANADIAN DREAM", french: "LE RÊVE CANADIEN" },
    { english: "THE BLOC MAJORITY", french: "LE BLOC MAJORITAIRE" },
    { english: "THE DEMOCRACY", french: "LA DÉMOCRATIE" },
    { english: "THE REGULATIONS", french: "LES RÈGLEMENTS" },
    { english: "THE DEEP STATE", french: "L'ÉTAT PROFOND" },
    { english: "THE POLITICAL CORRECTNESS", french: "LE POLITIQUEMENT CORRECT" },
    { english: "THE WORKING CLASS", french: "LA CLASSE OUVRIÈRE" },
    { english: "THE ENVIRONMENT", french: "L'ENVIRONNEMENT" },
    { english: "THE TREES", french: "LES ARBRES" },

    { english: "THE SALES TAX", french: "LA TAXE DE VENTE" },
    { english: "SNEAKY CARNEY", french: "CARNEY SOURDIN" },
    { english: "THE POLICE", french: "LA POLICE" },
    { english: "THE MEDIA", french: "LES MÉDIAS" },
    { english: "THE ELITE", french: "L'ÉLITE" },
    { english: "THE NATION", french: "LA NATION" },
    { english: "THE PEOPLE", french: "LE PEUPLE" },
    { english: "THE FUTURE", french: "L'AVENIR" },
    { english: "THE COUNTRY", french: "LE PAYS" },
    { english: "THE REPUBLIC", french: "LA RÉPUBLIQUE" },
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
            
            const imageDataUrl = canvas.toDataURL('image/webp');
            
            // Calculate font sizes and positions
            const textSettings = calculateTextSettings(englishText, frenchText, imageWidth, imageHeight);
            
            // Create the SVG with these settings
            const svgContent = createSVGContent(imageDataUrl, textSettings, imageWidth, imageHeight, englishText, frenchText);
            
            // Create blob from SVG content
            const svgBlob = new Blob([svgContent], {type: 'image/svg+xml'});
            const url = URL.createObjectURL(svgBlob);
            
            resolve({
                url: url,
                svgContent: svgContent
            });
        };
        
        img.onerror = function() {
            console.error("Failed to load image:", BACKGROUND_IMAGE);
            resolve({ error: true, message: "Failed to load background image" });
        };
        
        img.src = BACKGROUND_IMAGE;
    });
}

function calculateTextSettings(englishText, frenchText, imageWidth, imageHeight) {
    // Position text near the bottom of the image
    const textY = Math.round(imageHeight * 0.87);
    
    // Calculate font sizes based on text length
    const englishLength = englishText.length;
    const frenchLength = frenchText.length;
    
    // Base font size that scales with image width
    const baseFontSize = imageWidth * 0.029;
    
    // Adjust based on text length - longer text gets smaller font
    const englishSize = Math.min(
        Math.max(baseFontSize * (25 / Math.max(englishLength, 10)), 14),
        50
    );
    const frenchSize = Math.min(
        Math.max(baseFontSize * (25 / Math.max(frenchLength, 10)), 12),
        40
    );
    
    return {
        englishY: textY - 30,
        frenchY: textY + 30,
        englishSize,
        frenchSize
    };
}

function createSVGContent(imageDataUrl, textSettings, imageWidth, imageHeight, englishText, frenchText) {
    return `
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
        <text class="slogan-text" x="${imageWidth/2}" y="${textSettings.englishY}" font-size="${textSettings.englishSize}">
            ${englishText}
        </text>
        
        <!-- French slogan -->
        <text class="slogan-text" x="${imageWidth/2}" y="${textSettings.frenchY}" font-size="${textSettings.frenchSize}">
            ${frenchText}
        </text>
    </svg>`;
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

// Function to process the image and render text on it
function processImage(svgContent, callback) {
    if (!svgContent) {
        console.error("No SVG content found");
        callback(null, null, true);
        return;
    }
    
    // Load the original background image directly
    const originalImg = new Image();
    
    originalImg.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set dimensions
        canvas.width = originalImg.naturalWidth;
        canvas.height = originalImg.naturalHeight;
        
        // Draw background image
        ctx.drawImage(originalImg, 0, 0);
        
        // Extract text info from SVG
        const textInfo = extractTextFromSVG(svgContent);
        
        // Draw text on canvas
        renderTextOnCanvas(ctx, canvas.width, textInfo);
        
        // Execute callback with canvas and SVG content
        callback(canvas, svgContent);
    };
    
    originalImg.onerror = function() {
        console.error("Failed to load original image");
        callback(null, svgContent, true);
    };
    
    // Load the original image
    originalImg.src = BACKGROUND_IMAGE;
}

function extractTextFromSVG(svgContent) {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
    const texts = svgDoc.querySelectorAll('text');
    
    let result = {
        english: { text: "", y: 0, fontSize: 0 },
        french: { text: "", y: 0, fontSize: 0 }
    };
    
    texts.forEach((text, index) => {
        const content = text.textContent.trim();
        const y = parseFloat(text.getAttribute('y'));
        const fontSize = parseFloat(text.getAttribute('font-size'));
        
        if (index === 0) {  // First text element (English)
            result.english = { text: content, y: y, fontSize: fontSize };
        } else {  // Second text element (French)
            result.french = { text: content, y: y, fontSize: fontSize };
        }
    });
    
    return result;
}

function renderTextOnCanvas(ctx, canvasWidth, textInfo) {
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
    ctx.font = `bold ${textInfo.english.fontSize}px Arial, sans-serif`;
    ctx.fillText(textInfo.english.text, canvasWidth / 2, textInfo.english.y);
    
    // Draw French text
    ctx.font = `bold ${textInfo.french.fontSize}px Arial, sans-serif`;
    ctx.fillText(textInfo.french.text, canvasWidth / 2, textInfo.french.y);
}


// Function to download the shareable image
function exportCanvas(canvas, svgContent, options) {
    const { asDownload = false, filename = 'campaign-slogan' } = options || {};
    
    // Try WebP first
    try {
        exportCanvasAs(canvas, 'webp', `${filename}.webp`, asDownload);
    } catch (e) {
        console.error("Error creating WebP:", e);
        
        // Try PNG as a fallback
        try {
            exportCanvasAs(canvas, 'png', `${filename}.png`, asDownload);
        } catch (pngError) {
            console.error("Error creating PNG:", pngError);
            
            // Fall back to SVG
            if (svgContent) {
                exportSVG(svgContent, `${filename}.svg`, asDownload);
            }
        }
    }
}

function exportCanvasAs(canvas, format, filename, asDownload) {
    if (asDownload) {
        // For download: create data URL and trigger download
        const dataUrl = canvas.toDataURL(`image/${format}`, IMAGE_QUALITY);
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = filename;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    } else {
        // For sharing: create blob and open in new tab
        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
            setTimeout(() => URL.revokeObjectURL(url), 60000);
        }, `image/${format}`, IMAGE_QUALITY);
    }
}

function exportSVG(svgContent, filename, asDownload) {
    const svgBlob = new Blob([svgContent], {type: 'image/svg+xml'});
    const url = URL.createObjectURL(svgBlob);
    
    if (asDownload) {
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = filename;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
    } else {
        window.open(url, '_blank');
        setTimeout(() => URL.revokeObjectURL(url), 60000);
    }
}

// Then update these functions:

function downloadShareableImage() {
    const img = document.querySelector('#podium-container img');
    
    if (!img || !img.dataset.svgContent) {
        console.error("No image or SVG content found");
        return;
    }
    
    processImage(img.dataset.svgContent, (canvas, svgContent, failed) => {
        if (failed) {
            alert("Failed to load background image. Falling back to SVG.");
            exportSVG(svgContent, 'campaign-slogan.svg', true);
            return;
        }
        
        exportCanvas(canvas, svgContent, { asDownload: true });
    });
}

function shareInNewTab() {
    const img = document.querySelector('#podium-container img');
    
    if (!img || !img.dataset.svgContent) {
        console.error("No image or SVG content found");
        return;
    }
    
    processImage(img.dataset.svgContent, (canvas, svgContent, failed) => {
        if (failed) {
            exportSVG(svgContent, null, false);
            return;
        }
        
        exportCanvas(canvas, svgContent, { asDownload: false });
    });
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
    document.getElementById('downloadButton').addEventListener('click', downloadShareableImage);
    document.getElementById('shareButton').addEventListener('click', shareInNewTab);
    
    // Add spacebar handler
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            updateSlogan();
            event.preventDefault();
        }
    });
});