let totalParticipants = 0;
        let completedParticipants = 0;
        let currentIndex = 0;
        let startTime;
        let results = "Participant_ID,Stimulus,Correct_Bin,Chosen_Bin,Reaction_Time,Mouse_Trajectory\n";
        let mouseMovements = [];
        let taskCompleted = false;

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

        function startTask() {
            totalParticipants++;
            document.getElementById("survey-section").style.display = "none";
            document.getElementById("task-section").style.display = "block";
            loadStimulus();
        }

        // Randomize stimuli order
stimuliPairs.sort(() => Math.random() - 0.5);

        function loadStimulus() {
            if (currentIndex >= stimuliPairs.length) {
                taskCompleted = true;
                completedParticipants++;
                downloadCSV();
                document.body.innerHTML = `<h2>Thank you for participating! Your data has been saved.</h2>
                <p>Total Participants: ${totalParticipants}</p>
                <p>Completed Participants: ${completedParticipants}</p>`;
                return;
            }

            const trial = stimuliPairs[currentIndex];
            const stimulusImg = document.getElementById("stimulus");

            stimulusImg.src = `./stimuli/${trial.item}.png`;
            stimulusImg.dataset.correctBin = trial.correctBin;
            startTime = performance.now();
            mouseMovements = [];
        }

        function allowDrop(event) {
            event.preventDefault();
        }

        function drop(event, bin) {
            event.preventDefault();
            const draggedItem = document.getElementById("stimulus");
            const correctBin = draggedItem.dataset.correctBin;
            const reactionTime = (performance.now() - startTime) / 1000;

            results += `${totalParticipants},${draggedItem.src.split("/").pop()},${correctBin},${bin},${reactionTime.toFixed(2)},"${JSON.stringify(mouseMovements)}"\n`;

            currentIndex++;
            setTimeout(loadStimulus, 500);
        }

        function startMouseTracking(event) {
            mouseMovements = [];
            document.addEventListener("mousemove", trackMouse);
        }

        function trackMouse(event) {
            mouseMovements.push({ x: event.clientX, y: event.clientY, time: performance.now() });
        }

        function stopMouseTracking(event) {
            document.removeEventListener("mousemove", trackMouse);
        }

        function downloadCSV() {
            if (!taskCompleted) return;

            const blob = new Blob([results], { type: 'text/csv' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = "recycling_experiment_results.csv";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }