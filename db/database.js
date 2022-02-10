const Sequelize = require('sequelize');
const UserModel = require('../models/users')
const TasksModel = require('../models/tasks')
const DetailsModel = require('../models/details')
const TechniquesModel = require('../models/techniques')


const sequalize = new Sequelize('bdicp', 'root', '11041714', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: false
});

const Users = UserModel(sequalize, Sequelize);
const Tasks = TasksModel(sequalize, Sequelize);
const Details = DetailsModel(sequalize, Sequelize);
const Techniques = TechniquesModel(sequalize, Sequelize);

sequalize.sync({ force: false })
    .then(() => {
        console.log('tablas sincronizadas')
    })

module.exports = {
    Users,
    Tasks,
    Details,
    Techniques
}