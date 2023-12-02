const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../DataBase/DataBase");


const Contact = require('./Contact');
const Budget = require('./Budget');
const BudgetDetail = require('./BudgetDetail');
const Invoice = require('./Invoice');
const InvoiceDetail = require('./InvoiceDetail');
const InvoiceSerie = require('./InvoiceSerie');
const PriceList = require('./PriceList');
const PriceListDetail = require('./PriceListDetail');
const Sale = require('./Sale');
const SaleDetail = require('./SaleDetail');

const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('minor', 'major'),
        defaultValue: 'minor',
    },
    NIT_DUI: {
        type: DataTypes.STRING
    },
    NRC: {
        type: DataTypes.STRING
    },
    isLocal: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    isRetentionAgent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    classification: {
        type: DataTypes.ENUM('otro', 'mediano', 'gran', 'ninguno'),
        set(value){
            value = String.prototype.toUpperCase.call(value);
            let vals = {
                'OTRO': 'otro',
                'OTRO CONTRIBUYENTE': 'otro',
                'PEQUEÑO': 'otro',
                'PEQUEÑO CONTRIBUYENTE': 'otro',
                'PEQUENIO CONTRIBUYENTE': 'otro',
                'PEQUENIO': 'otro',
                'MEDIANO': 'mediano',
                'MEDIO': 'mediano',
                'MEDIO CONTRIBUYENTE': 'mediano',
                'MEDIANO CONTRIBUYENTE': 'mediano',
                'GRANDE': 'gran',
                'GRAN': 'gran',
                'GRANDE CONTRIBUYENTE': 'gran',
                'GRAN CONTRIBUYENTE': 'gran',
                'NINGUNO': 'ninguno',
                'NO CLASIFICADO': 'ninguno',
            }
            this.setDataValue('classification', vals[value] !== undefined ? vals[value] : 'ninguno');
        },
    },
    createdBy: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    direction: DataTypes.STRING(500),
    balance: DataTypes.DECIMAL(10, 2),
    seller: DataTypes.INTEGER.UNSIGNED,
    sucursal: DataTypes.INTEGER,
}, {
    tableName: 'CRM_Client',
});


module.exports = Client;