"use strict";

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false }
];

const toggleUserState = (allUsers, userName) => {
  //   callback(updatedUsers);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user
      );

      resolve(updatedUsers);
    }, 1000);
  });
};

const logger = resultArray => console.table(resultArray);

/*
 * Сейчас работает так
 */
toggleUserState(users, "Mango", logger);
toggleUserState(users, "Lux", logger);

/*
 * Должно работать так
 */
toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
