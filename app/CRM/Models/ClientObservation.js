const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../DataBase/DataBase");

const ClientObservation = sequelize.define('ClientObservation', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    client: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    createdBy: DataTypes.STRING,
    observation: DataTypes.TEXT
}, {
    tableName: 'CRM_Client_Observation',
});

module.exports = ClientObservation;