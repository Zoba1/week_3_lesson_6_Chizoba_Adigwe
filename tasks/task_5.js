// Create multiple objects with different properties
let myProject = {
    name: 'chi'
}
let object ={
    age: 5
}
 let object2 ={
    color:'black'
 }

// Merge the objects into a single object using Object.assign()
let objectmerge = Object.assign(myProject, object, object2)

console.log(objectmerge);