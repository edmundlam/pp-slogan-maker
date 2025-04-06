const BACKGROUND_IMAGE = "images/pp3.webp";

// Replace the single BACKGROUND_IMAGE constant with this configuration
const BACKGROUND_IMAGES = {
    "pp3": {
      path: "images/pp3.webp",
      name: "Pierre Classic",
      textSettings: {
        yPositionRatio: 0.87,      // Position from top (as percentage of height)
        enYOffset: -30,            // English text offset from base position
        frYOffset: 30,             // French text offset from base position
        fontSizeRatio: 0.029,      // Base font size relative to image width
        maxFontSize: {en: 50, fr: 40},
        minFontSize: {en: 14, fr: 12}
      }
    },
    "pp4": {
      path: "images/pp4.webp",
      name: "Pierre at Rally",
      textSettings: {
        yPositionRatio: 0.85,      // Position from top (as percentage of height)
        enYOffset: -30,            // English text offset from base position
        frYOffset: 20,             // French text offset from base position
        fontSizeRatio: 0.029,      // Base font size relative to image width
        maxFontSize: {en: 50, fr: 40},
        minFontSize: {en: 14, fr: 12}
      }
    }
  };
  
  // Default image key
  let currentImageKey = "pp4";


const IMAGE_QUALITY = 0.9; // For WebP/PNG exports

const verbs = [
    { en: "AXE", fr: "HACHER" },
    { en: "CUT", fr: "COUPER" },
    { en: "NIX", fr: "RÉDUIRE" },
    { en: "SCRAP", fr: "SCRAPPER" },
    { en: "DUMP", fr: "JETTER" },
    { en: "SLASH", fr: "SLASHER" },
    { en: "FIX", fr: "RÉPARER" },
    { en: "STOP", fr: "STOPPER" },
    { en: "BUILD", fr: "CONSTRUIRE" },
    { en: "BOOST", fr: "BOOSTER" },
    { en: "CRUSH", fr: "ÉCRASER" },
    { en: "END", fr: "METTRE FIN À" },
    { en: "CONTROL", fr: "MAÎTRISER" },
    { en: "DEFUND", fr: "REMBOURSER" },
    { en: "REIN IN", fr: "FREINER" },
    { en: "FREEZE", fr: "GELER" },
    { en: "DRAIN", fr: "ASSÉCHER" },
    { en: "TACKLE", fr: "TACKLER" },
    { en: "UNLEASH", fr: "LIBÉRER" },
    { en: "UNLOCK", fr: "DÉBLOQUER" },
    { en: "DEFEND", fr: "DÉFENDRE" },
    { en: "REBUILD", fr: "RECONSTRUIRE" },
    { en: "IGNITE", fr: "ALLUMER" },
    { en: "EMPOWER", fr: "AUTONOMISER" },
    { en: "CHAMPION", fr: "CHAMPIONER" },
    { en: "EXPLOIT", fr: "EXPLOITER" },
    { en: "RESTORE", fr: "RESTAURER" },
    { en: "DISRUPT", fr: "PERTURBER" },
    { en: "YEET", fr: "YEETER" },
];

const nouns = [
    { en: "THE TAX", fr: "LES IMPÔTS" },
    { en: "THE BUDGET", fr: "LE BUDGET" },
    { en: "MY MISERY", fr: "MA MISÈRE" },
    { en: "MY AGONY", fr: "MA SOUFFRANCE" },
    { en: "MY PAIN", fr: "MA DOULEUR" },
    { en: "MY ANGUISH", fr: "MON ANGOISSE" },
    { en: "MY DESPAIR", fr: "MON DÉSESPOIR" },
    { en: "MY SUFFERING", fr: "MA SOUFFRANCE" },
    { en: "MY ANXIETY", fr: "MON ANXIÉTÉ" },
    { en: "MY STRESS", fr: "MON STRESS" },
    { en: "THE CRIME", fr: "LE CRIME" },
    { en: "THE JOBS", fr: "LES JOBS" },
    { en: "THE HOUSES", fr: "LES MAISONS" },
    { en: "THE BORDERS", fr: "LES FRONTIÈRES" },
    { en: "THE COST OF LIVING", fr: "LE COÛT DE LA VIE" },
    { en: "THE HEALTH", fr: "LES SOINS DE SANTÉ" },
    { en: "THE EDUCATION", fr: "L'ÉDUCATION" },
    { en: "THE SCHOOLS", fr: "LES ECOLES" },
    { en: "THE CBC", fr: "RADIO CANADA" },
    { en: "THE QUEBEC", fr: "LE QUEBEC" },
    { en: "THE CITY MAYORS", fr: "LES MAIRES DES VILLES" },
    { en: "THE PUBLIC SECTOR", fr: "LE SECTEUR PUBLIC" },
    { en: "JUSTIN TRUDEAU", fr: "JUSTIN TRUDEAU" },
    { en: "THE LIBERALS", fr: "LES LIBÉRAUX" },
    { en: "THE BLOC", fr: "LE BLOC" },
    { en: "THE INFLATION", fr: "L'INFLATION" },
    { en: "THE SWAMP", fr: "LE MARÉCAGE" },
    { en: "THE RED TAPE", fr: "LA BUREAUCRATIE" },
    { en: "THE GAS PRICES", fr: "LES PRIX DU CARBURANT" },
    { en: "THE DEFICIT", fr: "LE DÉFICIT" },
    { en: "MY LEADERSHIP", fr: "MON LEADERSHIP" },
    { en: "MY SEAT", fr: "MON SIÈGE" },
    { en: "MY SECURITY CLEARANCE", fr: "HABILITATION DE SÉCURITÉ" },
    { en: "MY PARTY", fr: "MON PARTI" },
    { en: "MY LEADERSHIP", fr: "MON LEADERSHIP" },
    { en: "MY SEAT", fr: "MON SIÈGE" },
    { en: "MY RIDING", fr: "MA CIRCONSCRIPTION" },
    { en: "MY SECURITY CLEARANCE", fr: "HABILITATION DE SÉCURITÉ" },
    { en: "MY PARTY", fr: "MON PARTI" },
    { en: "THE WASTE", fr: "LE GASPILLAGE" },
    { en: "THE SUITS", fr: "LES COSTUMES" },
    { en: "THE SYSTEM", fr: "LE SYSTÈME" },
    { en: "THE ECONOMY", fr: "L'ÉCONOMIE" },
    { en: "THE ESTABLISHMENT", fr: "L'ESTABLISHMENT" },
    { en: "THE STATUS QUO", fr: "LE STATU QUO" },
    { en: "THE MIDDLE CLASS", fr: "LA CLASSE MOYENNE" },
    { en: "THE SMALL BUSINESSES", fr: "LES PETITES ENTREPRISES" },
    { en: "THE FUTURE GENERATIONS", fr: "LES GÉNÉRATIONS FUTURES" },
    { en: "THE BUREAUCRACY", fr: "LA BUREAUCRATIE" },
    { en: "THE BIG GOVERNMENT", fr: "LE GOUVERNEMENT TENTACULAIRE" },
    { en: "THE FAMILY VALUES", fr: "LES VALEURS FAMILIALES" },
    { en: "THE CANADIAN DREAM", fr: "LE RÊVE CANADIEN" },
    { en: "THE BLOC MAJORITY", fr: "LE BLOC MAJORITAIRE" },
    { en: "THE DEMOCRACY", fr: "LA DÉMOCRATIE" },
    { en: "THE REGULATIONS", fr: "LES RÈGLEMENTS" },
    { en: "THE DEEP STATE", fr: "L'ÉTAT PROFOND" },
    { en: "THE POLITICAL CORRECTNESS", fr: "LE POLITIQUEMENT CORRECT" },
    { en: "THE WORKING CLASS", fr: "LA CLASSE OUVRIÈRE" },
    { en: "THE ENVIRONMENT", fr: "L'ENVIRONNEMENT" },
    { en: "THE TREES", fr: "LES ARBRES" },
    { en: "THE SALES TAX", fr: "LA TAXE DE VENTE" },
    { en: "SNEAKY CARNEY", fr: "CARNEY SOURDIN" },
    { en: "THE POLICE", fr: "LA POLICE" },
    { en: "THE MEDIA", fr: "LES MÉDIAS" },
    { en: "THE ELITE", fr: "L'ÉLITE" },
    { en: "THE NATION", fr: "LA NATION" },
    { en: "THE PEOPLE", fr: "LE PEUPLE" },
    { en: "THE FUTURE", fr: "L'AVENIR" },
    { en: "THE COUNTRY", fr: "LE PAYS" },
    { en: "THE WORLD", fr: "LE MONDE" },
    { en: "THE PLANET", fr: "LA PLANÈTE" },
    { en: "THE UNIVERSE", fr: "L'UNIVERS" },
    { en: "THE GALAXY", fr: "LA GALAXIE" },
    { en: "THE COSMOS", fr: "LE COSMOS" },
    { en: "THE MULTIVERSE", fr: "LE MULTIVERS" },
    { en: "THE 51ST STATE", fr: "LE 51e ÉTAT" }
];

let lastVerbIndex, lastNounIndex;
let isFirstGeneration = true; 

// Function to generate a random slogan in both languages
function generateSlogan() {
    // If in customize mode and we have custom text, use that instead of random
    if (isCustomizing && (customSloganEn || customSloganFr)) {
        return {
            en: customSloganEn || "",
            fr: customSloganFr || ""
        };
    }

    // Original random generation logic
    let randomVerbIndex, randomNounIndex;
    let iterations = 0;
    const MAX_ITERATIONS = 10; // Prevent infinite loop
    
    if (isFirstGeneration) {
        randomVerbIndex = Math.floor(Math.random() * verbs.length);
        randomNounIndex = nouns.findIndex(noun => noun.en === "MY MISERY");
        if (randomNounIndex === -1) randomNounIndex = 2;
        
        isFirstGeneration = false; // Set flag to false after first generation
    } else {
        // Keep generating until we get different indices or reach max iterations
        do {
            randomVerbIndex = Math.floor(Math.random() * verbs.length);
            randomNounIndex = Math.floor(Math.random() * nouns.length);
            iterations++;
            
            // If we've tried too many times, just accept what we have
            if (iterations >= MAX_ITERATIONS) {
                break;
            }
        // Change this line to prevent either component from repeating
        } while (randomVerbIndex === lastVerbIndex || randomNounIndex === lastNounIndex);
    }
    
    lastVerbIndex = randomVerbIndex;
    lastNounIndex = randomNounIndex;
    
    const verb = verbs[randomVerbIndex];
    const noun = nouns[randomNounIndex];
    
    return {
        en: `${verb.en} ${noun.en}`,
        fr: `${verb.fr} ${noun.fr}`
    };
}


function createSharingImage(enText, frText) {
    return new Promise((resolve) => {
        const img = new Image();
        const currentImagePath = BACKGROUND_IMAGES[currentImageKey].path;
        
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
            const textSettings = calculateTextSettings(enText, frText, imageWidth, imageHeight);
            
            // Create the SVG with these settings
            const svgContent = createSVGContent(imageDataUrl, textSettings, imageWidth, imageHeight, enText, frText);
            
            // Create blob from SVG content
            const svgBlob = new Blob([svgContent], {type: 'image/svg+xml'});
            const url = URL.createObjectURL(svgBlob);
            
            resolve({
                url: url,
                svgContent: svgContent
            });
        };
        
        img.onerror = function() {
            console.error("Failed to load image:", currentImagePath);
            resolve({ error: true, message: "Failed to load background image" });
        };
        
        // Load the current image
        img.src = currentImagePath;
    });
}

function calculateTextSettings(enText, frText, imageWidth, imageHeight) {
    // Get the current image configuration
    const imageConfig = BACKGROUND_IMAGES[currentImageKey];
    
    // Calculate the base Y position using the ratio from config
    const baseY = Math.round(imageHeight * imageConfig.textSettings.yPositionRatio);
    
    // Calculate font sizes based on text length
    const enLength = enText.length;
    const frLength = frText.length;
    
    // Base font size that scales with image width (from config)
    const baseFontSize = imageWidth * imageConfig.textSettings.fontSizeRatio;
    
    // Adjust based on text length - longer text gets smaller font
    const enSize = Math.min(
        Math.max(baseFontSize * (25 / Math.max(enLength, 10)), 
                imageConfig.textSettings.minFontSize.en),
        imageConfig.textSettings.maxFontSize.en
    );
    
    const frSize = Math.min(
        Math.max(baseFontSize * (25 / Math.max(frLength, 10)), 
                imageConfig.textSettings.minFontSize.fr),
        imageConfig.textSettings.maxFontSize.fr
    );
    
    return {
        enY: baseY + imageConfig.textSettings.enYOffset,
        frY: baseY + imageConfig.textSettings.frYOffset,
        enSize,
        frSize
    };
}

function createSVGContent(imageDataUrl, textSettings, imageWidth, imageHeight, enText, frText) {
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
                .watermark {
                    font-family: Arial, sans-serif;
                    font-size: 12px;
                    fill: rgba(255, 255, 255, 0.5);
                    text-anchor: end;
                }
            </style>
        </defs>
        
        <!-- Background image with embedded data URL -->
        <image href="${imageDataUrl}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
        
        <!-- English slogan -->
        <text class="slogan-text" x="${imageWidth/2}" y="${textSettings.enY}" font-size="${textSettings.enSize}">
            ${enText}
        </text>
        
        <!-- French slogan -->
        <text class="slogan-text" x="${imageWidth/2}" y="${textSettings.frY}" font-size="${textSettings.frSize}">
            ${frText}
        </text>
        
        <!-- Watermark -->
        <text class="watermark" x="${imageWidth - 15}" y="${imageHeight - 10}">
            pp-slogan-maker
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
    createSharingImage(slogans.en, slogans.fr)
        .then(result => {
            // Create an image with the SVG data URI
            const img = document.createElement('img');
            img.src = result.url;
            img.alt = `Campaign slogan: ${slogans.en} / ${slogans.fr}`;
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
                    <p>English: ${slogans.en}</p>
                    <p>French: ${slogans.fr}</p>
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
    
    // Load the current background image
    const originalImg = new Image();
    const currentImagePath = BACKGROUND_IMAGES[currentImageKey].path;
    
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
        renderTextOnCanvas(ctx, canvas.width, canvas.height, textInfo);
        
        // Execute callback with canvas and SVG content
        callback(canvas, svgContent);
    };
    
    originalImg.onerror = function() {
        console.error("Failed to load original image:", currentImagePath);
        callback(null, svgContent, true);
    };
    
    // Load the original image
    originalImg.src = currentImagePath;
}

function extractTextFromSVG(svgContent) {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
    const texts = svgDoc.querySelectorAll('text');
    
    let result = {
        en: { text: "", y: 0, fontSize: 0 },
        fr: { text: "", y: 0, fontSize: 0 }
    };
    
    texts.forEach((text, index) => {
        const content = text.textContent.trim();
        const y = parseFloat(text.getAttribute('y'));
        const fontSize = parseFloat(text.getAttribute('font-size'));
        
        if (index === 0) {  // First text element (English)
            result.en = { text: content, y: y, fontSize: fontSize };
        } else if (index === 1) {  // Second text element (French)
            result.fr = { text: content, y: y, fontSize: fontSize };
        }
    });
    
    return result;
}

function renderTextOnCanvas(ctx, canvasWidth, canvasHeight, textInfo) {
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
    ctx.font = `bold ${textInfo.en.fontSize}px Arial, sans-serif`;
    ctx.fillText(textInfo.en.text, canvasWidth / 2, textInfo.en.y - 10);
    
    // Draw French text
    ctx.font = `bold ${textInfo.fr.fontSize}px Arial, sans-serif`;
    ctx.fillText(textInfo.fr.text, canvasWidth / 2, textInfo.fr.y);
    
    // Draw watermark
    ctx.font = '12px Arial, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.textAlign = 'right';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.fillText('pp-slogan-maker', canvasWidth - 15, canvasHeight - 10);
}


// Function to download the shareable image
function exportCanvas(canvas, svgContent, options) {
    const { asDownload = false, filename = 'pp-slogan' } = options || {};
    
    // Try jpeg first
    try {
        // exportCanvasAs(canvas, 'webp', `${filename}.webp`, asDownload);
        // exportCanvasAs(canvas, 'png', `${filename}.png`, asDownload);
        exportCanvasAs(canvas, 'jpeg', `${filename}.jpg`, asDownload);
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



// New variables for customization
let isCustomizing = false;
let customSloganEn = "";
let customSloganFr = "";

// Function to toggle the customization form
function toggleCustomizeForm() {
    const form = document.getElementById('customize-form');
    isCustomizing = !isCustomizing;
    
    if (isCustomizing) {
        form.classList.remove('hidden');
        // Focus on the first input field
        document.getElementById('customSloganEn').focus();
    } else {
        form.classList.add('hidden');
        // Reset custom values if the form is being closed
        customSloganEn = "";
        customSloganFr = "";
        document.getElementById('customSloganEn').value = "";
        document.getElementById('customSloganFr').value = "";
    }
}

// Function to explicitly close the form (not toggle)
function closeCustomizeForm() {
    const form = document.getElementById('customize-form');
    if (isCustomizing) {
        isCustomizing = false;
        form.classList.add('hidden');
        // Reset custom values
        customSloganEn = "";
        customSloganFr = "";
        document.getElementById('customSloganEn').value = "";
        document.getElementById('customSloganFr').value = "";
    }
}

// Function to reset custom inputs
function resetCustomInputs() {
    document.getElementById('customSloganEn').value = "";
    document.getElementById('customSloganFr').value = "";
    customSloganEn = "";
    customSloganFr = "";
    
    // Update the slogan immediately after reset
    updateCustomSlogan();
}

// Function to update the slogan based on custom input
function updateCustomSlogan() {
    // Get current values from inputs
    customSloganEn = document.getElementById('customSloganEn').value.trim().toUpperCase();
    customSloganFr = document.getElementById('customSloganFr').value.trim().toUpperCase();
    
    // Only update if at least one field has content
    if (customSloganEn || customSloganFr) {
        // Don't show loading state for faster updates
        // Just keep the current image until the new one is ready
        
        // Generate the image with custom text
        createSharingImage(customSloganEn, customSloganFr)
            .then(result => {
                // Create an image with the SVG data URI
                const img = document.createElement('img');
                img.src = result.url;
                img.alt = `Campaign slogan: ${customSloganEn} / ${customSloganFr}`;
                // Remove the fade-in class to avoid animation
                img.className = 'fade-in';
                
                // Store SVG content for sharing
                img.dataset.svgContent = result.svgContent;
                
                // Clear container and add the new image
                const container = document.getElementById('podium-container');
                container.innerHTML = '';
                container.appendChild(img);
            })
            .catch(error => {
                console.error("Error creating custom slogan image:", error);
                const container = document.getElementById('podium-container');
                container.innerHTML = `
                    <div class="error-message">
                        <p>Error generating image</p>
                        <p>English: ${customSloganEn}</p>
                        <p>French: ${customSloganFr}</p>
                    </div>`;
            });
    } else {
        // If both fields are empty, generate a random slogan
        updateSlogan();
    }
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
    document.getElementById('generateButton').addEventListener('click', () => {
        // If customization form is open, close it first
        if (isCustomizing) {
            // Close the form (don't toggle)
            closeCustomizeForm();
        }
        // Generate a new random slogan
        updateSlogan();
    });
    document.getElementById('downloadButton').addEventListener('click', downloadShareableImage);
    document.getElementById('shareButton').addEventListener('click', shareInNewTab);
    
    // New event listeners for customization
    document.getElementById('customizeButton').addEventListener('click', toggleCustomizeForm);
    
    // Add input event listeners for live updates
    document.getElementById('customSloganEn').addEventListener('input', () => {
        // Debounce the input to avoid too many updates
        clearTimeout(window.customSloganTimer);
        window.customSloganTimer = setTimeout(updateCustomSlogan, 300);
    });
    document.getElementById('customSloganFr').addEventListener('input', () => {
        // Debounce the input to avoid too many updates
        clearTimeout(window.customSloganTimer);
        window.customSloganTimer = setTimeout(updateCustomSlogan, 300);
    });
});