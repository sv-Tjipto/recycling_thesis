const stimuliPairs = [
    { item: "Cardboard_Boxes", correctBin: "yellow" },
    { item: "Waxed_Cardboard_boxes", correctBin: "red" },
    { item: "Pizza_boxes", correctBin: "yellow" },
    { item: "Pizza_boxes_with_food_scraps", correctBin: "red" },
    { item: "Magazines", correctBin: "yellow" },
    { item: "Books", correctBin: "red" },
    { item: "Soap_Bottle", correctBin: "yellow" },
    { item: "Cosmetic_Bottle", correctBin: "red" },
    { item: "Film_packaging", correctBin: "yellow" },
    { item: "Cling_wrap", correctBin: "red" },
    { item: "Paper", correctBin: "yellow" },
    { item: "Tissues", correctBin: "red" },
    { item: "Gift_wrapping_paper", correctBin: "yellow" },
    { item: "Baking_paper", correctBin: "red" },
    { item: "Cleaning_product_(Domestic)", correctBin: "yellow" },
    { item: "Cleaning_product_(International)", correctBin: "red" },
    { item: "Wine_Bottles", correctBin: "yellow" },
    { item: "Drinking_glasses", correctBin: "red" },
    { item: "Aluminium_foil", correctBin: "yellow" },
    { item: "Foiled_Line_Bag", correctBin: "red" },
    { item: "Aluminium_cans", correctBin: "yellow" },
    { item: "Helium_tanks", correctBin: "red" },
    { item: "Freezer_bags", correctBin: "yellow" },
    { item: "Beef_jerky_bag", correctBin: "red" },
    { item: "Boarding_pass", correctBin: "yellow" },
    { item: "Thermal_receipts", correctBin: "red" },
    { item: "Pasta_jar_(empty)", correctBin: "yellow" },
    { item: "Ceramic_jar", correctBin: "red" },
    { item: "Plastic_document_sleeves", correctBin: "yellow" },
    { item: "Laminated_document_sleeves", correctBin: "red" },
    { item: "Biodegradeable_cups", correctBin: "yellow" },
    { item: "Disposable_paper_cups", correctBin: "red" },
    { item: "Takeaway_container_(plastic)", correctBin: "yellow" },
    { item: "Tupperware_container_(plastic)", correctBin: "red" },
    { item: "Milk_jugs", correctBin: "yellow" },
    { item: "Long-life_cartons", correctBin: "red" },
    { item: "Paper_bags", correctBin: "yellow" },
    { item: "Plastic_bags", correctBin: "red" },
    { item: "Plastic_water_bottle", correctBin: "yellow" },
    { item: "Metal_water_bottle", correctBin: "red" },
    { item: "Reusable_hard_plastic_cups", correctBin: "yellow" },
    { item: "Glass_cups", correctBin: "red" },
    { item: "Sushi_trays", correctBin: "yellow" },
    { item: "Polystyrene_trays", correctBin: "red" },
    { item: "Ice_cream_tub", correctBin: "yellow" },
    { item: "Polystyrene_ice_cream_tub", correctBin: "red" },
    { item: "Paper_padded_mailers", correctBin: "yellow" },
    { item: "Bubble_wrap", correctBin: "red" },
    { item: "Coffee_cup_lids", correctBin: "yellow" },
    { item: "Fast_food_drink_lids", correctBin: "red" },
    { item: "Blue_ray_disk_case_(Polypropylene)", correctBin: "yellow" },
    { item: "CD_cases_(Polystyrene_plastic)", correctBin: "red" },
    { item: "Cardboard_card_sleeves", correctBin: "yellow" },
    { item: "Plastic_cup_sleeves", correctBin: "red" },
    { item: "Metal_jar_lid", correctBin: "yellow" },
    { item: "Cork_lid", correctBin: "red" },
    { item: "Plastic_chair_leg", correctBin: "yellow" },
    { item: "Metal_chair_leg", correctBin: "red" },
    { item: "Plastic_fruit_punnett", correctBin: "yellow" },
    { item: "Styrofoam_fruit_punnett", correctBin: "red" },
    { item: "Aluminium_baking_tray", correctBin: "yellow" },
    { item: "Non-stick_baking_trays", correctBin: "red" },
    { item: "Metal_bread_ties", correctBin: "yellow" },
    { item: "Bread_clips", correctBin: "red" },
    { item: "Plastic_medicine_bottles", correctBin: "yellow" },
    { item: "Medicinal_blister_packs", correctBin: "red" },
    { item: "Paper_straw_(clean)", correctBin: "yellow" },
    { item: "Plastic_straw_(clean)", correctBin: "red" },
    { item: "Empty_sauce_bottle", correctBin: "yellow" },
    { item: "Sauce_sachet", correctBin: "red" },
    { item: "Non-heat_proof_cookware_lids", correctBin: "yellow" },
    { item: "Ceramic_pot_lids", correctBin: "red" },
    { item: "Plastic_ice_cube_tray", correctBin: "yellow" },
    { item: "Silicone_ice_cube_tray", correctBin: "red" },
    { item: "Plastic_plant_pot_(clean)", correctBin: "yellow" },
    { item: "Clay_plant_pot_(clean)", correctBin: "red" },
    { item: "Cardboard_soda_carton", correctBin: "yellow" },
    { item: "Shrink_wrap", correctBin: "red" },
    { item: "Cardboard_shoe_box", correctBin: "yellow" },
    { item: "Fabric_shoe_bag", correctBin: "red" },
    { item: "Paper_wrap_bouquet_of_flowers", correctBin: "yellow" },
    { item: "Plastic_cellophane", correctBin: "red" },
    { item: "Spray_Cleaner_Bottle", correctBin: "yellow" },
    { item: "Spray_CLeaner_Bottle's_Lid", correctBin: "red" },
    { item: "Aerosal_can", correctBin: "yellow" },
    { item: "Aerosol_can_cap", correctBin: "red" },
    { item: "Steel_can", correctBin: "yellow" },
    { item: "Food_can_lids_with_plastic_lining", correctBin: "red" },
    { item: "Sticky_notes", correctBin: "yellow" },
    { item: "Sticky_tape", correctBin: "red" },
    { item: "Glass_candle_jar", correctBin: "yellow" },
    { item: "Wax and wick ", correctBin: "red" },
    { item: "Aluminium_toothpaste_tube_(empty)", correctBin: "yellow" },
    { item: "Plastic_cap", correctBin: "red" },
    { item: "Glass_soy_sauce_bottle", correctBin: "yellow" },
    { item: "Plastic_stopper", correctBin: "red" },
    { item: "Plastic_peanut_butter_container_(empty)", correctBin: "yellow" },
    { item: "Inner_plastic_container", correctBin: "red" },
    { item: "Plastic_packaging_of_batteries", correctBin: "yellow" },
    { item: "Batteries", correctBin: "red" }
];
// function startTask() {
//     totalParticipants++;
//     document.getElementById("survey-section").style.display = "none";
//     document.getElementById("task-section").style.display = "block";
//     loadStimulus();
// }

// Participants Details
function startTask() {
    // let name = document.getElementById("participant-name").value;
    let knowledge = document.getElementById("recycling-knowledge").value;
    let frequency = document.getElementById("frequency").value;

    // Check if all fields are filled
    if (!knowledge || !frequency) {
        alert("Please fill in all fields before proceeding.");
        return;
    }


    let formData = { name,knowledge,frequency};

    fetch("http://localhost:3000/submit-form", {
        method: "POST",
        body: JSON.stringify({
            // name: document.getElementById("participant-name").value,
            knowledge: document.getElementById("recycling-knowledge").value,
            frequency: document.getElementById("frequency").value
        }),
        headers: {
            "Content-Type": "application/json",  // Ensure JSON format
            "Accept": "application/json"  // Expect JSON response
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.redirectUrl) {
            window.location.href = data.redirectUrl; // Redirect based on backend response
        } else {
            alert(data.message || "Data submitted successfully!");
        }
    })
    .catch(error => console.error("Error:", error));
}


function downloadCSV() {
    window.location.href = "http://localhost:3000/download-csv";
}


function displayStimuli() {
    const container = document.getElementById("stimuli-container");
    container.innerHTML = ""; // Clear previous items

    stimuliPairs.forEach(stimulus => {
        const div = document.createElement("div");
        div.classList.add("stimulus-item");

        // Generate image filename based on item name
        const imageName = stimulus.item + ".png"; // Assuming all images are .png
        const imagePath = `/assets/stimuli/${imageName}`; // Path to image in /assets/stimuli/

        const img = document.createElement("img");
        img.src = imagePath;
        img.alt = stimulus.item;
        img.onerror = function() { this.src = "/assets/stimuli/default.png"; }; // Fallback if image is missing

        const label = document.createElement("p");
        label.textContent = stimulus.item.replace(/_/g, " "); // Replace underscores with spaces

        div.appendChild(img);
        div.appendChild(label);
        container.appendChild(div);
    });
}

// Shuffle function using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Random index
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
}

// Shuffle stimuli pairs before starting the task
shuffleArray(stimuliPairs);

// Sorting task
let currentStimulusIndex = 0;
let startTime;  // Variable to store when the user starts dragging

let round = 1; // Differentate between swap bin and normal
let roundIndex = 0; // Should replace currentStimulus Index
const totalRounds = 2; // How many total rounds

function swapBinPositions() {
    const container = document.querySelector(".bin-container");
    const yellowBin = document.getElementById("yellow-bin");
    const redBin = document.getElementById("red-bin");

    container.insertBefore(redBin, yellowBin); // Moves red before yellow
}



// Here you put next page from the sorting
function loadNextStimulus() {
    if (currentStimulusIndex >= 10) {
        // // Old code
        // alert("Experiment complete! Data saved.");
        // return;

        if (round < totalRounds) {
            round++;
            currentStimulusIndex = 0;
            swapBinPositions();
            alert("Testing, Bins are swap. Delete this alert after testing");
            loadNextStimulus(); // Starts next round
        } else {
            alert("Experiment complete! Data saved.");
            return;
        }
    }

    const stimulus = stimuliPairs[currentStimulusIndex];
    document.getElementById("stimulus").src = `/assets/stimuli/${stimulus.item}.png`;
    document.getElementById("stimulus").alt = stimulus.item.replace(/_/g, " ");

    startTime = null;  // Reset the timer
}

function startDrag(event) {
    startTime = new Date().getTime();  // Start timing
    event.dataTransfer.setData("text", currentStimulusIndex);  // Pass index
}

// Call function when page loads
// window.onload = displayStimuli;

function allowDrop(event) {
    event.preventDefault();  // Allow drop event
}

// function dropItem(event, binColor) {
//     event.preventDefault();
    
//     let endTime = new Date().getTime();
//     let timeTaken = (endTime - startTime) / 1000;
//     const participantID = getCookie("participantID"); // Get stored participant ID

//     const stimulus = stimuliPairs[currentStimulusIndex];
//     let correct = (binColor === stimulus.correctBin) ? "Correct" : "Incorrect";

//     // Send data to backend
//     fetch("http://localhost:3000/save-sorting", {
//         method: "POST",
//         body: JSON.stringify({
//             participantID: participantID,
//             item: stimulus.item,
//             selectedBin: binColor,
//             correct: correct,
//             timeTaken: timeTaken
//         }),
//         headers: { "Content-Type": "application/json" }
//     })
//     .then(response => response.json())
//     .then(data => console.log("Saved:", data.message))
//     .catch(error => console.error("Error:", error));

//     console.log(`Item: ${stimulus.item} | Bin: ${binColor} | ${correct} | Time: ${timeTaken}s`);

//     currentStimulusIndex++;
//     loadNextStimulus();
// }

function dropItem(event, binColor) {
    event.preventDefault();
    
    let endTime = new Date().getTime();
    let timeTaken = (endTime - startTime) / 1000;
    const participantID = getCookie("participantID");

    const stimulus = stimuliPairs[currentStimulusIndex];
    let correct = (binColor === stimulus.correctBin) ? "Correct" : "Incorrect";

    // 🔹 Fix: Ensure correct JSON format with `JSON.stringify()`
    fetch("http://localhost:3000/save-sorting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            participantID: participantID,
            // item: stimulus.item,
            item: `${stimulus.item}_${round}`,
            selectedBin: binColor,
            correct: correct,
            timeTaken: timeTaken
        })
    })
    .then(response => response.json())
    .then(data => console.log("Saved:", data.message))
    .catch(error => console.error("Error:", error));

    console.log(`Item: ${stimulus.item} | Bin: ${binColor} | ${correct} | Time: ${timeTaken}s`);

    currentStimulusIndex++;
    loadNextStimulus();
}


// Load the first stimulus
window.onload = loadNextStimulus;

// Cookies

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


// // Generate or retrieve participant ID
// if (!getCookie("participantID")) {
//     setCookie("participantID", "P" + Math.floor(Math.random() * 100000), 7);
// }
// const participantID = getCookie("participantID");



// Survey Submission
function submitSurvey() {
    let formData = {
        // name: document.getElementById("participant-name").value, //No longer needed
        knowledge: document.getElementById("recycling-knowledge").value,
        frequency: document.getElementById("frequency").value
    };

    fetch("http://localhost:3000/submit-form", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        setCookie("participantID", data.participantID, 7); // Save ID for later
        window.location.href = data.redirectUrl; // Redirect to sorting page
    })
    .catch(error => console.error("Error:", error));
}


function stopTimer(event) {
    let endTime = new Date().getTime();
    let timeTaken = (endTime - startTime) / 1000;
    console.log(`Time taken: ${timeTaken} seconds`);
}
