// Dates
let myDate= new Date()
// console.log(myDate.toString()); //Conversion to string expanded info is outputted.
// console.log(typeof myDate); //Date is a type of an object.
// console.log(myDate.toDateString()); //There are many other types of methods to complete this
// console.log(myDate.toLocaleString());// another type.

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); //In JavaScript date starts with 0.
let myCreatedDate = new Date("2023-01-14") //date in format of yyyy-mm-dd
// console.log(myCreatedDate.toLocaleString())

// ############################### TIMESTAMP ###############################
let myTimeStamp = Date.now()

// console.log(myTimeStamp); //Time in milliseconds from that date to till now.

// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000)); //to avoid decimal we use floor function.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()); //Control+space can be used to get more info in vscode

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{ 
    weekday:"long"
})

