// const str1 = "log, sad, mad, men";
// const str2 = "hind, women";
// let split = str1.split("");
// console.log(split.join("-"));

// let obj = {
//  name: "Raj",
//  age: 20
//  gender: "male",
//  hobbies: ["coding", "reading", "swimming", { name: "Sam"}]    
//  sayHi: function {} {
//    console.log('Hi, I'm ${this.hobbies[3].name}');
//  }

//const str1 = "a,b,d,s,g,y,h,i,d,s,a,a,d,g,b,d,a,a,s,b,v,c,y,d,s,a,a,b,d,g,s,a,a,y,r,e";
//console.log(str1.length a);

const arr = [a,b,d,s,g,y,h,i,d,s,a,a,d,g,b,d,a,a,s,b,v,c,y,d,s,a,a,b,d,g,s,a,a,y,r,e];
const counts = {};

for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts);
console.log(counts[a], counts[b], counts[d], counts[y]);
//this is where i check to see my new branch to see if it is working