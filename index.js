// Write your solution in this file!
const employee = {
  name: 'Lewis ',
  streetAddress : '123 Main Street'
}

// ✓ returns an employee with the original key value pairs and the new key value pair
// ✓ it does not modify the original employee, but rather returns a clone with the new data
function updateEmployeeWithKeyAndValue(employee, key, value){
  return {
    ...employee,
    [key]: value,
  };
}

// ✓ updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Sam'));

// ✓ deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
// ✓ does not modify the original employee (it is non-destructive)
function deleteFromEmployeeByKey(employee, key){
  const newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
}

console.log(deleteFromEmployeeByKey(employee, 'name'),`Deleted`);

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
}

console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name'),`Deleted 2`);





