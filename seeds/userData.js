const sequelize = require('../config/connection');
const { User } = require('../models');

const User = [
    {
        name: 'fake',
        email: 'fake@fake.net',
        password: 'fake123'
    }
]

const seedUser = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
}
module.exports = seedUser;