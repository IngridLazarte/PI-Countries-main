const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {

    sequelize.define("activity", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificultad: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5')
            // values: ['1', '2', '3', '4', '5']
        },
        duracion: {
            type: DataTypes.STRING
        },
        temporada: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')
            // values: ['Verano', 'Otoño', 'Invierno', 'Primavera']
        }

    }, {timestamps: false})
}



