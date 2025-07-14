// Add getKeys to all objects
Object.prototype.getKeys = function () {
  return Object.keys(this);
}

// Create student object
const student = {
  name: "John"
};

// You can test it like this
// console.log(student.getKeys()); // Output: ["name"]
