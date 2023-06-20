const sequelize = require('../config/connection');
const { Character } = require('../models');

const characterData = [
    {
    character_id: "",
    character_name: "",
    character_race: "",
    level: "",
    character_class: "",
    strength_score: "",
    dexterity_score: "",
    constitution_score: "",
    intelligence_score: "",
    wisdom_score: "",
    charisma_score: "",
    initiative: "",
    hit_points: "",
    armor_class: "",
    athletics_prof: "",
    acrobatics_prof: "",
    slight_of_hand_prof: "",
    stealth_prof: "",
    arcana_prof: "",
    history_prof: "",
    investigation_prof: "",
    nature_prof: "",
    religion_prof: "",
    animal_handling_prof: "",
    insight_prof: "",    
    medicine_prof: "",
    perception_prof: "",
    survival_prof: "",
    deception_prof: "",
    intimidate_prof: "",
    performance_prof: "",
    persuasion_prof: ""
    }
]

const seedCharacter = async () => {
    await sequelize.sync({ force: true });

    await Character.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
}
module.exports = seedCharacter;