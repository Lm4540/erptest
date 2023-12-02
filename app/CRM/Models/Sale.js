const { Sequelize, DataTypes, DECIMAL } = require("sequelize");
const sequelize = require("../../DataBase/DataBase");
const SaleDetail = require('./SaleDetail');

const Sale = sequelize.define('Sale', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    client: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    seller: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    sucursal: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    credit_conditions: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
    },
    _status: {
        type: DataTypes.ENUM('process', 'prepared', 'transport', 'delivered', 'collected', 'revoking', 'revoked', 'delivery_failed', 'to_resend', 'closed'),
        defaultValue: 'process',
    },
    type: {
        type: DataTypes.ENUM('minor', 'major'),
        defaultValue: 'minor',
    },
    delivery_type: {
        type: DataTypes.ENUM('local', 'local_delivery', 'delivery','percel'),
        defaultValue: 'local',
    },
    delivery_direction: DataTypes.STRING(500),
    delivery_contact: DataTypes.STRING,
    delivery_instructions: DataTypes.STRING(500),
    delivery_date: {
        type: DataTypes.DATE,
    },
    delivery_time: {
        type: DataTypes.TIME,
    },
    delivery_amount: DataTypes.DECIMAL(10,2),
    delivery_provider: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    revoked_at: {type: DataTypes.DATE,},
    revoked_reason: DataTypes.STRING,
    balance: DataTypes.DECIMAL(10,2),
    collected: DataTypes.DECIMAL(10,2),
    cost: DataTypes.DECIMAL(10,2),
    label:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    package_image: DataTypes.STRING,
    resend_package_image: DataTypes.STRING,
    package_by: DataTypes.STRING(50),
}, {
    tableName: 'CRM_sale',
});

Sale.hasMany(SaleDetail, {
    foreignKey: 'sale',
    sourceKey: 'id'
});

SaleDetail.belongsTo(Sale, {
    foreignKey: 'product',
    targetId: 'id'
})



module.exports = Sale;