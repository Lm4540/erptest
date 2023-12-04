const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../DataBase/DataBase");

const SalePayment = sequelize.define('SalePayment', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    client: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    sales: { 
        type: DataTypes.TEXT,
        get() {
            let prefe = this.getDataValue('sales');
            return prefe !== null && prefe !== undefined ? JSON.parse(prefe) : null;
        },
        set(param) {
            this.setDataValue('sales', param == null ? null : JSON.stringify(param) );
        }
    },

    type: {
        type: DataTypes.ENUM('money', 'credit_card', 'transfer'),
        defaultValue: 'money',
    },
    amount: DataTypes.DECIMAL(10,2),
    asigned_amount: DataTypes.DECIMAL(10,2),
    bank: DataTypes.STRING,
    reference: DataTypes.STRING,
}, {
    tableName: 'crm_sale_payment',
});

module.exports = SalePayment;