const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model { }

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        character_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        strength_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dexterity_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        constitution_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        intelligence_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        wisdom_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        charisma_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        initiative: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hit_points: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        armor_class: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        athletics_prof: {
            type: DataTypes.BOOLEAN,
        },
        acrobatics_prof: {
            type: DataTypes.BOOLEAN,
        },
        slight_of_hand_prof: {
            type: DataTypes.BOOLEAN,
        },
        stealth_prof: {
            type: DataTypes.BOOLEAN,
        },
        arcana_prof: {
            type: DataTypes.BOOLEAN,
        },
        history_prof: {
            type: DataTypes.BOOLEAN,
        },
        investigation_prof: {
            type: DataTypes.BOOLEAN,
        },
        nature_prof: {
            type: DataTypes.BOOLEAN,
        },
        religion_prof: {
            type: DataTypes.BOOLEAN,
        },
        animal_handling_prof: {
            type: DataTypes.BOOLEAN,
        },
        insight_prof: {
            type: DataTypes.BOOLEAN,
        },
        medicine_prof: {
            type: DataTypes.BOOLEAN,
        },
        perception_prof: {
            type: DataTypes.BOOLEAN,
        },
        survival_prof: {
            type: DataTypes.BOOLEAN,
        },
        deception_prof: {
            type: DataTypes.BOOLEAN,
        },
        intimidation_prof: {
            type: DataTypes.BOOLEAN,
        },
        performance_prof: {
            type: DataTypes.BOOLEAN,
        },
        persuasion_prof: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'character',
    }
);

module.exports = Character;