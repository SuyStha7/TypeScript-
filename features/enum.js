"use strict";
// * Enums in TypeScript are commonly used when you want to represent a set of related values
// * and choose one value from multiple options. Enums provides a convenient way to define a set of
// * named values and associate them with specific meaning.
//* In TypeScript, when enum constant are not explicitly assigned numeric values, they are
// * automatically assigned incremental numeric values starting from 0. The default numeric value
// * for the first enum constant is 0, and subsequent enum constants recieve values incremented by 1.
// user1 = login => normal user
// user2 = login => admin
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    emailId: "suyogstha@gmail.com",
    password: "12345678",
    role: Roles.admin,
};
const user2 = {
    emailId: "samyog@gmail.com",
    password: "12345",
    role: Roles.user,
};
const isAdmin = (user) => {
    const { emailId, role } = user;
    return role === "admin"
        ? `${emailId} is allowed to edit the website`
        : `${emailId} is not allowed to edit the website`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
