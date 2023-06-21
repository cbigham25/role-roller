const router = require('express').Router();
const { Character } = require('../../models/Character');

router.post('/characters', async (req, res) => {
    try {
        const characterData = await Character.create({
            character_name: req.body.character_name,
            character_race: req.body.character_race,
            level: req.body.level,
            character_class: req.body.character_class,
            strength_score: req.body.strength_score,
            dexterity_score: req.body.dexterity_score,
            constitution_score: req.body.constitution_score,
            intelligence_score: req.body.intelligence_score,
            wisdom_score: req.body.wisdom_score,
            charisma_score: req.body.charisma_score,
            initiative: req.body.initiative,
            hit_points: req.body.hit_points,
            armor_class: req.body.armor_class,
            athletics_prof: req.body.athletics_prof,
            acrobatics_prof: req.body.acrobatics_prof,
            slight_of_hand_prof: req.body.slight_of_hand_prof,
            stealth_prof: req.body.stealth_prof,
            arcana_prof: req.body.arcana_prof,
            history_prof: req.body.history_prof,
            investigation_prof: req.body.investigation_prof,
            nature_prof: req.body.nature_prof,
            religion_prof: req.body.religion_prof,
            animal_handling_prof: req.body.animal_handling_prof,
            insight_prof: req.body.insight_prof,
            medicine_prof: req.body.medicine_prof,
            perception_prof: req.body.perception_prof,
            survival_prof: req.body.survival_prof,
            deception_prof: req.body.deception_prof,
            intimidation_prof: req.body.intimidation_prof,
            performance_prof: req.body.performance_prof,
            persuasion_prof: req.body.persuasion_prof,
          });
      
          req.session.save(() => {
            req.session.loggedIn = true;
      
            res.status(200).json(userData);
          });
      
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }     
      
});
  