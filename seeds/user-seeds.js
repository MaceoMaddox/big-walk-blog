const { User } = require('../models');

const userData = [{
        username: 'Maceo',
        password: 'Maceo'

    },
    {
        username: 'Malik',
        password: 'Malik'
    },
    {
        username: 'Maddox',
        password: 'Maddox'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;