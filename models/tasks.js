const Sequelize = require('sequelize');
module.exports = (sequelize, type) =>{
    return sequelize.define('tasks',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        submision: Sequelize.STRING(100),
        id_samples: Sequelize.STRING(100),
        fecha: Sequelize.DATE,
        id_user: {
            type: Sequelize.INTEGER,
            foreignKey: 'id',
            constraints: false
        },
        id_techniques: {
            type: Sequelize.INTEGER,
            foreignKey: 'id',
            constraints: false
        }
    })
}