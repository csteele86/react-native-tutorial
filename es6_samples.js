//  http://es6-features.org



// Spread operator

const object1 = {
    firstName: 'Fred',
    lastName: 'Flintstone'
};

const object2 = {
    ...object1,
    address: '123 Stone Ave',
    lastName: 'Not Flinstone',
};

console.log(object1);
console.log(object2);











// Object deconstruction

const { firstName, lastName } = object1;

console.log(firstName);
console.log(lastName);












// Property Shortcuts

const object3 = {
  firstName,
  lastName,
};












// Arrow Functions

function doSomething(param) {
    console.log(param);
}

const doSomethingArrow = (param) => {
    console.log(param);
};



function addOne(value) {
    return value + 1;
}
const addOneArrow = (value) => value + 1;



function newObject(value) {
    return {
        firstName: value,
        lastName: 'Rubble'
    };
}
const newObjectArrow = (value) => ({ firstName: value, lastName: 'Rubble'});













// String Interpolation

const fullName = `My full name is ${object1.firstName} ${object2.lastName}.`;

