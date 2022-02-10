const Sequelize = require('sequelize');
module.exports = (sequelize, type) =>{
    return sequelize.define('details',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_tasks: {
            type: Sequelize.INTEGER,
            foreignKey: 'id',
            constraints: false
        },
        id_techniques: {
            type: Sequelize.INTEGER,
            foreignKey: 'id',
            constraints: false
        },

        details: Sequelize.STRING(200)

    })
}