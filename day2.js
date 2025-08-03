// const myobj = {
//     "name":"Alice",
//     "age":19,
//     "isStudent":true,
//     "hobbies":["coding","sleeping"],
//     "address":{
//         "city":"kalyan",
//         "zipcode":"10001"
//     }
    
// }
// console.log(`name: ${myobj.name}`);
// console.log(`address: ${myobj.address.city}`);

// const num = [];

// function createarr() {
//     for (let i = 1; i <= 100; i++) {
//         num.push(i);
//     }
// }

// createarr(); 

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]); 
// }
// for(i=0;i<num.length;i++)
// {
//     num[i]=num[i]*3
// }
// console.log("Tripled:" +num)
// let w = []
// for(i=0;i<num.length;i++)
// {
//     if(num[i]%5==0)
//     {
//         w.push(i);
//     }
// }
// console.log("filtered:",w)
// let sum =0;
// for(i=0;i<w.length;i++)
// {
//     sum = sum+w[i]
// }
// console.log(sum)





const users = [
    {name:'Alice',age:25},
    {name:'Rutu',age:19},
    {name:'shrey',age:22},
];
let ages = users.map(x=>x.age)
console.log(ages)
let total = ages.reduce((sum, age) => sum + age, 0);

let average = total / ages.length;

console.log("Ages:", ages);   
console.log("Average Age:", average);
