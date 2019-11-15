var john = {
    name : "John",
    age : 24,
    isActive : true
}

var marry = {
    name:"Marry",
    age:23,
    isActive:true
}
var sam = {
    name:"sam",
    age:29,
    isActive:false
}

let users = new Map()  //I just now created a Map named users

users.set('john',john);

users.set('marry',marry);

users.set('sam',sam);
console.log(users.size)// I can see how many users are there

// console.log(users.get("sam"))

// console.log(users.keys())
// console.log(users.values())

// now lets try forof loop yeah baby 

for (const key of users.keys()) {
    console.log(key)
}

// another different way of doing it

for (const [key, value] of users.entries()) {
    console.log(key);
    console.log(value);
}