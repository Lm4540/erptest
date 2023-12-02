const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../DataBase/DataBase");

const PettyCashMoves = sequelize.define('PettyCashMoves', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    amount: DataTypes.DECIMAL(10, 2),
    last_amount: DataTypes.DECIMAL(10, 2),
    concept: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    petty_cash: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    type: {
        type: DataTypes.ENUM('invoice','sale', 'refill','purchase','payment', 'extra'),
    },
    isin: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    createdBy: DataTypes.STRING,
    asigned_to: DataTypes.STRING,
    _number: DataTypes.INTEGER,
    is_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'Financial_Petty_Cash_Moves',
});


module.exports = PettyCashMoves;