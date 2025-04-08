const stimuliPairs = [
    { id: 1, item: "Cardboard_Boxes", correctBin: "yellow" },
    { id: 2, item: "Waxed_Cardboard_boxes", correctBin: "red" },
    { id: 3, item: "Pizza_boxes", correctBin: "yellow" },
    { id: 4, item: "Pizza_boxes_with_food_scraps", correctBin: "red" },
    { id: 5, item: "Magazines", correctBin: "yellow" },
    { id: 6, item: "Books", correctBin: "red" },
    { id: 7, item: "Soap_Bottle", correctBin: "yellow" },
    { id: 8, item: "Cosmetic_Bottle", correctBin: "red" },
    { id: 9, item: "Film_packaging", correctBin: "yellow" },
    { id: 10, item: "Cling_wrap", correctBin: "red" },
    { id: 11, item: "Paper", correctBin: "yellow" },
    { id: 12, item: "Tissues", correctBin: "red" },
    { id: 13, item: "Gift_wrapping_paper", correctBin: "yellow" },
    { id: 14, item: "Baking_paper", correctBin: "red" },
    { id: 15, item: "Cleaning_product_(Domestic)", correctBin: "yellow" },
    { id: 16, item: "Cleaning_product_(International)", correctBin: "red" },
    { id: 17, item: "Wine_Bottles", correctBin: "yellow" },
    { id: 18, item: "Drinking_glasses", correctBin: "red" },
    { id: 19, item: "Aluminium_foil", correctBin: "yellow" },
    { id: 20, item: "Foiled_Line_Bag", correctBin: "red" },
    { id: 21, item: "Aluminium_cans", correctBin: "yellow" },
    { id: 22, item: "Helium_tanks", correctBin: "red" },
    { id: 23, item: "Freezer_bags", correctBin: "yellow" },
    { id: 24, item: "Beef_jerky_bag", correctBin: "red" },
    { id: 25, item: "Boarding_pass", correctBin: "yellow" },
    { id: 26, item: "Thermal_receipts", correctBin: "red" },
    { id: 27, item: "Pasta_jar_(empty)", correctBin: "yellow" },
    { id: 28, item: "Ceramic_jar", correctBin: "red" },
    { id: 29, item: "Plastic_document_sleeves", correctBin: "yellow" },
    { id: 30, item: "Laminated_document_sleeves", correctBin: "red" },
    { id: 31, item: "Biodegradeable_cups", correctBin: "yellow" },
    { id: 32, item: "Disposable_paper_cups", correctBin: "red" },
    { id: 33, item: "Takeaway_container_(plastic)", correctBin: "yellow" },
    { id: 34, item: "Tupperware_container_(plastic)", correctBin: "red" },
    { id: 35, item: "Milk_jugs", correctBin: "yellow" },
    { id: 36, item: "Long-life_cartons", correctBin: "red" },
    { id: 37, item: "Paper_bags", correctBin: "yellow" },
    { id: 38, item: "Plastic_bags", correctBin: "red" },
    { id: 39, item: "Plastic_water_bottle", correctBin: "yellow" },
    { id: 40, item: "Metal_water_bottle", correctBin: "red" },
    { id: 41, item: "Reusable_hard_plastic_cups", correctBin: "yellow" },
    { id: 42, item: "Glass_cups", correctBin: "red" },
    { id: 43, item: "Sushi_trays", correctBin: "yellow" },
    { id: 44, item: "Polystyrene_trays", correctBin: "red" },
    { id: 45, item: "Ice_cream_tub", correctBin: "yellow" },
    { id: 46, item: "Polystyrene_ice_cream_tub", correctBin: "red" },
    { id: 47, item: "Paper_padded_mailers", correctBin: "yellow" },
    { id: 48, item: "Bubble_wrap", correctBin: "red" },
    { id: 49, item: "Coffee_cup_lids", correctBin: "yellow" },
    { id: 50, item: "Fast_food_drink_lids", correctBin: "red" },
    { id: 51, item: "Blue_ray_disk_case_(Polypropylene)", correctBin: "yellow" },
    { id: 52, item: "CD_cases_(Polystyrene_plastic)", correctBin: "red" },
    { id: 53, item: "Cardboard_card_sleeves", correctBin: "yellow" },
    { id: 54, item: "Plastic_cup_sleeves", correctBin: "red" },
    { id: 55, item: "Metal_jar_lid", correctBin: "yellow" },
    { id: 56, item: "Cork_lid", correctBin: "red" },
    { id: 57, item: "Plastic_chair_leg", correctBin: "yellow" },
    { id: 58, item: "Metal_chair_leg", correctBin: "red" },
    { id: 59, item: "Plastic_fruit_punnett", correctBin: "yellow" },
    { id: 60, item: "Styrofoam_fruit_punnett", correctBin: "red" },
    { id: 61, item: "Aluminium_baking_tray", correctBin: "yellow" },
    { id: 62, item: "Non-stick_baking_trays", correctBin: "red" },
    { id: 63, item: "Metal_bread_ties", correctBin: "yellow" },
    { id: 64, item: "Bread_clips", correctBin: "red" },
    { id: 65, item: "Plastic_medicine_bottles", correctBin: "yellow" },
    { id: 66, item: "Medicinal_blister_packs", correctBin: "red" },
    { id: 67, item: "Paper_straw_(clean)", correctBin: "yellow" },
    { id: 68, item: "Plastic_straw_(clean)", correctBin: "red" },
    { id: 69, item: "Empty_sauce_bottle", correctBin: "yellow" },
    { id: 70, item: "Sauce_sachet", correctBin: "red" },
    { id: 71, item: "Non-heat_proof_cookware_lids", correctBin: "yellow" },
    { id: 72, item: "Ceramic_pot_lids", correctBin: "red" },
    { id: 73, item: "Plastic_ice_cube_tray", correctBin: "yellow" },
    { id: 74, item: "Silicone_ice_cube_tray", correctBin: "red" },
    { id: 75, item: "Plastic_plant_pot_(clean)", correctBin: "yellow" },
    { id: 76, item: "Clay_plant_pot_(clean)", correctBin: "red" },
    { id: 77, item: "Cardboard_soda_carton", correctBin: "yellow" },
    { id: 78, item: "Shrink_wrap", correctBin: "red" },
    { id: 79, item: "Cardboard_shoe_box", correctBin: "yellow" },
    { id: 80, item: "Fabric_shoe_bag", correctBin: "red" },
    { id: 81, item: "Paper_wrap_bouquet_of_flowers", correctBin: "yellow" },
    { id: 82, item: "Plastic_cellophane", correctBin: "red" },
    { id: 83, item: "Spray_Cleaner_Bottle", correctBin: "yellow" },
    { id: 84, item: "Spray_CLeaner_Bottle's_Lid", correctBin: "red" },
    { id: 85, item: "Aerosal_can", correctBin: "yellow" },
    { id: 86, item: "Aerosol_can_cap", correctBin: "red" },
    { id: 87, item: "Steel_can", correctBin: "yellow" },
    { id: 88, item: "Food_can_lids_with_plastic_lining", correctBin: "red" },
    { id: 89, item: "Sticky_notes", correctBin: "yellow" },
    { id: 90, item: "Sticky_tape", correctBin: "red" },
    { id: 91, item: "Glass_candle_jar", correctBin: "yellow" },
    { id: 92, item: "Wax_and_wick", correctBin: "red" },
    { id: 93, item: "Aluminium_toothpaste_tube_(empty)", correctBin: "yellow" },
    { id: 94, item: "Plastic_cap", correctBin: "red" },
    { id: 95, item: "Glass_soy_sauce_bottle", correctBin: "yellow" },
    { id: 96, item: "Plastic_stopper", correctBin: "red" },
    { id: 97, item: "Plastic_peanut_butter_container_(empty)", correctBin: "yellow" },
    { id: 98, item: "Inner_plastic_container", correctBin: "red" },
    { id: 99, item: "Plastic_packaging_of_batteries", correctBin: "yellow" },
    { id: 100, item: "Batteries", correctBin: "red" }
];
  

// Participants Details
function startTask() {
    

    fetch("http://localhost:3000/submit-form", {
        method: "POST",
        body: JSON.stringify({
            // Redundent
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
            alert(data.message || "Survey started successfully!");
        }
    })
    .catch(error => console.error("Error:", error));
}

function submitConsent() {

    let consent = document.getElementById("agreeConsent")
    // const participantID = getCookie("participantID");

    if (!consent.checked) {
        alert("Please consent before proceeding");
        return;
    }


    fetch("http://localhost:3000/submit-consent", {
        method: "POST",
        body: JSON.stringify({
            // participantID: participantID,
            consent: 1
        }),
        headers: {
            "Content-Type": "application/json",  // Ensure JSON format
            "Accept": "application/json"  // Expect JSON response
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Consent submitted:", data);
        // Redirect after successful submission
        // window.location.href = "/pages/sortingTask.html";
        window.location.href = "/pages/sortingTask.html"; // Change this temporary

    })
    .catch(error => console.error("Error submitting consent:", error));
    

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
let orderIndex = 1;
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
    if (currentStimulusIndex >= stimuliPairs.length) {
        // // Old code
        // alert("Experiment complete! Data saved.");
        // return;

        if (round < totalRounds) {
            round++;
            currentStimulusIndex = 0;
            swapBinPositions();
            loadNextStimulus(); // Starts next round
            shuffleArray(stimuliPairs); //Shuffle again
        } else {
            alert("Experiment complete! Data saved.");
            window.location.href = "/pages/questions.html";
            return;
        }
    }

    

    const stimulus = stimuliPairs[currentStimulusIndex];
    const stimulusImg = document.getElementById("stimulus");

    document.getElementById("stimulus").src = `/assets/stimuli/${stimulus.item}.png`;
    document.getElementById("stimulus").alt = stimulus.item.replace(/_/g, " ");

    stimulusImg.onload = () => {
        startTime = new Date().getTime();  // Start timer when image is fully loaded
        console.log("Image loaded. Timer started.");
    };
}

function startDrag(event) {
    // Not need 
    // startTime = new Date().getTime();  // Start timing
    event.dataTransfer.setData("text", currentStimulusIndex);  // Pass index
}

// Call function when page loads
// window.onload = displayStimuli;

function allowDrop(event) {
    event.preventDefault();  // Allow drop event
}

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
            item: stimulus.item,
            item_id: stimulus.id,
            round: round,
            selectedBin: binColor,
            correct: correct,
            timeTaken: timeTaken,
            orderIndex: orderIndex
        })
    })
    .then(response => response.json())
    .then(data => console.log("Saved:", data.message))
    .catch(error => console.error("Error:", error));

    console.log(`Item: ${stimulus.item} | Bin: ${binColor} | ${correct} | Time: ${timeTaken}s`);

    currentStimulusIndex++;
    orderIndex++; 
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


function toggleOtherText(checkboxId, inputId) {
    const checkbox = document.getElementById(checkboxId);
    const input = document.getElementById(inputId);
  
    if (!checkbox || !input) return;
  
    const isChecked = checkbox.checked;
    input.disabled = !isChecked;
    input.tabIndex = isChecked ? 0 : -1;
    input.style.pointerEvents = isChecked ? "auto" : "none";
  
    if (!isChecked) {
      input.value = "";
    }
}
  
function handleHousingChange() {
    const otherRadio = document.getElementById("housing-other");
    const otherInput = document.getElementById("house_other");
  
    if (!otherRadio || !otherInput) return;
  
    const isOtherSelected = otherRadio.checked;
  
    otherInput.disabled = !isOtherSelected;
    otherInput.tabIndex = isOtherSelected ? 0 : -1;
    otherInput.style.pointerEvents = isOtherSelected ? "auto" : "none";
  
    if (!isOtherSelected) {
      otherInput.value = ""; // Optional reset
    }
  }
  
function submitQuestions(event){
    event.preventDefault(); // Prevent default form submission (so we can use fetch)

    const knowledge = document.getElementById("recycling-knowledge").value;
    const frequency = document.getElementById("recycling-home").value;
    const age = document.getElementById("age").value;
    const trustScale = document.getElementById("q12").value;

    // Get radio button values
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
    const housing = document.querySelector('input[name="housing"]:checked')?.value || "";

    // Get "other" text if housing is "Other"
    const housingOther = document.querySelector('input[name="house_other"]')?.value || "";
    const fullHousing = (housing === "Other" && housingOther) ? `${housing} (${housingOther})` : housing;
    const q11OtherText = document.querySelector('input[name="q11_other"]')?.value || "";


    // Get checkbox values
    const bins = [...document.querySelectorAll('input[name="bins"]:checked')].map(cb => cb.value);
    const q7 = [...document.querySelectorAll('input[name="q7[]"]:checked')].map(cb => cb.value);
    const q11 = [...document.querySelectorAll('input[name="q11[]"]:checked')].map(cb => cb.value);
    const q16 = [...document.querySelectorAll('input[name="q16[]"]:checked')].map(cb => cb.value);
    const q18 = [...document.querySelectorAll('input[name="q18[]"]:checked')].map(cb => cb.value);

    // If "Other" is selected and user typed something, replace "Other" with custom input
    const fullQ11 = q11.includes("Other") && q11OtherText
    ? q11.map(value => value === "Other" ? `Other (${q11OtherText})` : value)
    : q11;

    // Get confidence slider values
    const confidence = {
        plastic: document.getElementById("plasticConfidence").value,
        glass: document.getElementById( "glassConfidence").value,
        metal: document.getElementById("metalConfidence").value,
        softPlastic: document.getElementById("softPlasticConfidence").value,
        eWaste: document.getElementById("eWasteConfidence").value,
    };

    // Basic validation
    if (!gender || !knowledge || !frequency || !age || !fullHousing || !trustScale) {
        alert("Please fill in all required fields.");
        return;
    }

    // Housing Others is selected
    const houseOtherChecked = document.getElementById("housing-other")?.checked;
    const houseOtherText = document.getElementById("house_other")?.value || "";
    if (houseOtherChecked && houseOtherText.trim() === "") {
        alert("Please specify your 'Other' house you live in.");
        return;
    }

    // Checkbox group: recycleMore
    const binsvalid = isCheckboxGroupValid("bins", "bin-wrapper");
    const q16Valid = isCheckboxGroupValid("q16[]", "q16-wrapper");
    const q18Valid = isCheckboxGroupValid("q18[]", "q18-wrapper");

    if (!binsvalid || !q16Valid || !q18Valid) {
    alert("Please fill in all required questions.");
    return; // Stop submission
    }

    // Checkbox group: recyclingActions
    const recyclingActions = [...document.querySelectorAll('input[name="q7[]"]:checked')];
    if (recyclingActions.length === 0) {
        alert("Please select at least one recycling action.");
        return;
    }

    // "Other" checkbox validation for q11
    const otherChecked = document.getElementById("q11-other")?.checked;
    const otherText = document.getElementById("q11_other")?.value || "";
    if (otherChecked && otherText.trim() === "") {
        alert("Please specify your 'Other' concern.");
        return;
    }


    // Compile data
    const formData = {
        gender,
        age,
        housing: fullHousing,
        binAccess: bins,
        knowledge,
        frequency,
        recyclingActions: q7,
        confidenceLevels: confidence,
        recyclingConcerns: fullQ11,
        trustScale,
        motivation: q16,
        sustainabilityHabits: q18
    };

    console.log("Survey submission:", formData);

    // Send to backend if needed
    fetch("http://localhost:3000/submit-survey", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        alert("Thank you for completing the final survey!");
        // Optionally redirect
        window.location.href = "/pages/thankyou.html";
    })
    .catch(err => {
        console.error("Submission error:", err);
        alert("There was an error submitting the form.");
    });
}

function isCheckboxGroupValid(groupName, wrapperId) {
    const checkboxes = document.querySelectorAll(`input[name="${groupName}"]:checked`);
    const wrapper = document.getElementById(wrapperId);
  
    if (checkboxes.length === 0) {
      wrapper.style.border = "2px solid red";
      wrapper.classList.add("highlight-error"); // if invalid
      return false;
    } else {
      wrapper.style.border = "none"; // Reset if valid
      wrapper.classList.remove("highlight-error"); // if valid
      return true;
    }
}
  