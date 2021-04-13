/*
  Defining Object
  [1] Object Literal
*/

let user = {
  // Properties
  firstName: 'Moussa',
  lastName: 'Ibrahiem',
  age: 21,
  address: {
    eg: "Cairo",
    ksa: "Riyad",

    getMainAddress: function () {
      return `Main Adress Is In Egypt In City ${user.address.eg}`;
    }
  },

  // Methods
  // getFullName: function () {
  //   return `Full Name: ${user.firstName} ${user.lastName}`
  // }
  getFullName: () => `Full Name: ${user.firstName} ${user.lastName}`,

  getAgeInDays: () => `Your Age In Days Is ${user.age}`
};

//Accessing Object Properties
console.log(user.firstName); //Dot Notation
console.log(user["firstName"]);  //Bracket Notation

console.log(typeof user.firstName); //String

console.log(user.address.eg);
console.log(user["address"]["ksa"]);

//Accessing Object Methods
console.log(typeof user.getFullName); //Function
console.log(user.getFullName());
console.log(user.getAgeInDays());

console.log(user.address.getMainAddress());