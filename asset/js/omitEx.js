"use strict";
const users = [];
let lastId = 0;
const addUser = (name, email) => {
    const user = {
        id: lastId++,
        name,
        email,
    };
    users.push(user);
    return user;
};
addUser("Sourov", "sourovDash@gmail.com");
addUser("Sanju", "sanju@gmail.com");
console.log(users);
// BuildIn Method
const addUser2 = (user) => {
    const newUser = {
        ...user,
        id: lastId++,
    };
    users.push(newUser);
    return newUser;
};
addUser2({ name: "Sourov", email: "sourovDash@gmail.com" });
addUser2({ name: "Sanjubaba", email: "sanjubaba@gmail.com" });
console.log(users);
