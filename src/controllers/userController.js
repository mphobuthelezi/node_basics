// userController.js
let users = [];

const addUser = (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json({ message: 'User added successfully', user });
};

const getUsers = (req, res) => {
    res.status(201).json(users);
};

module.exports = {
    addUser,
    getUsers
};
