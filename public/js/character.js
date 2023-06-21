const postCharacter = async (event) => {

    event.preventDefault();



    const email = req.session.email;
    const character_name = document.querySelector('#inputName').value.trim();
    const strength_score = document.querySelector('.strength-select').value;
    const dexterity_score = document.querySelector('.dexterity-select').value;
    const constitution_score = document.querySelector('.constitution-select').value;
    const intelligence_score = document.querySelector('.intelligence-select').value;
    const wisdom_score = document.querySelector('.wisdom-select').value;
    const charisma_score = document.querySelector('.charisma-select').value;
    const character_race = document.querySelector('.race-select').value;
    const character_class = document.querySelector('.class-select').value;
    const level = document.querySelector('.level-select').value;
    const hit_points = document.querySelector('#inputHitPoints').value;
    const armor_class = document.querySelector('#inputArmorClass').value;
    const initiative = document.querySelector('#inputInitiative').value;
    const acrobatics_prof = document.querySelector('.acrobatics-check').checked;
    const animal_handling_prof = document.querySelector('.animal-handling-check').checked;
    const arcana_prof = document.querySelector('.arcana-check').checked;
    const athletics_prof = document.querySelector('.athletics-check').checked;
    const deception_prof = document.querySelector('.deception-check').checked;
    const history_prof = document.querySelector('.history-check').checked;
    const insight_prof = document.querySelector('.insight-check').checked;
    const intimidation_prof = document.querySelector('.intimidation-check').checked;
    const investigation_prof = document.querySelector('.investigation-check').checked;
    const medicine_prof = document.querySelector('.medicine-check').checked;
    const nature_prof = document.querySelector('.nature-check').checked;
    const perception_prof = document.querySelector('.perception-check').checked;
    const performance_prof = document.querySelector('.performance-check').checked;
    const persuasion_prof = document.querySelector('.persuasion-check').checked;
    const religion_prof = document.querySelector('.religion-check').checked;
    const sleight_of_hand_prof = document.querySelector('.sleight-of-hand-check').checked;
    const stealth_prof = document.querySelector('.stealth-check').checked;
    const survival_prof = document.querySelector('.survival-check').checked;



    var characterData = {
        character_name: character_name,
        strength_score: strength_score,
        dexterity_score: dexterity_score,
        constitution_score: constitution_score,
        intelligence_score: intelligence_score,
        wisdom_score: wisdom_score,
        charisma_score: charisma_score,
        character_race: character_race,
        character_class: character_class,
        level: level,
        hit_points: hit_points,
        armor_class: armor_class,
        initiative: initiative,
        acrobatics_prof: acrobatics_prof,
        animal_handling_prof: animal_handling_prof,
        arcana_prof: arcana_prof,
        athletics_prof: athletics_prof,
        deception_prof: deception_prof,
        history_prof: history_prof,
        insight_prof: insight_prof,
        intimidation_prof: intimidation_prof,
        investigation_prof: investigation_prof,
        medicine_prof: medicine_prof,
        nature_prof: nature_prof,
        perception_prof: perception_prof,
        performance_prof: performance_prof,
        persuasion_prof: persuasion_prof,
        religion_prof: religion_prof,
        sleight_of_hand_prof: sleight_of_hand_prof,
        stealth_prof: stealth_prof,
        survival_prof: survival_prof
    };

    sessionStorage.setItem("characterData", JSON.stringify(characterData));




};

document
    .querySelector('.modal')
    .addEventListener('submit', postCharacter);
