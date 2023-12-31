const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../DataBase/DataBase");

const SaleDetail = sequelize.define('SaleDetail', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    sale: DataTypes.INTEGER.UNSIGNED,
    product: DataTypes.INTEGER.UNSIGNED,

    price: {
        type: DataTypes.DECIMAL(10, 2),
    },
    description: DataTypes.TEXT,
    image: {
        type: DataTypes.STRING,
        get() {
            const storedValue = this.getDataValue('image');
            return storedValue !== null ?
                (storedValue.includes('http') ? storedValue : `/upload/images/${storedValue}`) :
                '/upload/images/image-not-found.png';
        }
    },
    img: {
        type: DataTypes.VIRTUAL,
        get() {
            return this.getDataValue('image');
        }
    },
    _order: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: false,
    },
    cant: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    ready: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
    },
    delivered: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
    },
    reserved: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
    },
    to_reverse: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
    },
    product_cost: {
        type: DataTypes.DECIMAL(10, 2),
    },


}, {
    indexes: [],
    tableName: 'crm_sale_detail',
    timestamps: true,
});




module.exports = SaleDetail;