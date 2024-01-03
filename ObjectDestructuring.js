const person ={
    name : "Washim",
    friend : "Sohel",
    colleague: "Irfan",
    pg: "Aunty Mess"
}


// let {name,friend, colleague} = person

let {name,friend:Senior,colleague} = person
console.log(Senior); 

console.log("Object Structuring");