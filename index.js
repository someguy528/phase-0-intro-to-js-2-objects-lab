// Write your solution in this file!
const employee = {name:"guy",streetAddress:"someplace"};
function updateEmployeeWithKeyAndValue(object,key,value){
    return {...object, [key]: value}
};
function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value){
    object[key]= value;
    return object
};
function deleteFromEmployeeByKey(object, key){
    let newObj = {...object};
    delete newObj[key];
    return newObj
};
function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key];
    return object
}