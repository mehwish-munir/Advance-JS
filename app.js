

//write a function which returns array. call the function and destructure array values and print the value
// let person = ["mehwish", "aisha", "maria", "Misbah", "rafia", "hadia"];
// const [a, b, c, d, ...f] = person;

// function personName(a) {
// console.log(person[1]);
// console.log(person[3]);
// console.log(person);

// }
// personName(a);

// Make a car object with model, year, color. display all the values by destructuring
// const carData = {
//     carName : "nadia",
//     carModel: 2011,
//     carColor: "white"

// }
// let { carName, carModel, carColor} = carData;
// console.log(`My car name is ${carName}.
//  car Model is ${carModel}.`);


 // use three variable name, greeting and display value using template literals


//  let introduction = "Hello";
//  let greeting = "Mehwish";
//  let frName = "Munir";
//  console.log(`${greeting} ${introduction} ${frName}`);
 
 //use array [1,2,3,4,5,6,7,8,9,10] assign first three values in seperate variables
// and all remaining in one element as an array


// let x, y, z, rest;
// [x, y, z] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(x);

// console.log(y);

// console.log(z);


// [x, y, z, ...rest] =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(rest);


// if car speed is less than 80 display "car speed is slow", if greater than 80 but less than 120 than display 
// " car speed is moderate" and if greater than 120 display "car speed is fast"

// var carSpeed = n;

// if(n < 80){
//     console.log("Car speed is Slow");
// }

// if(n > 80 && n < 120 ){
//         console.log("Car speed is Moderate");
// }
// if(n > 120 ){//write a program which shows the couter after each second.
//     console.log("Car speed is fast");
// }


//Assignment no 3


//write a program which shows the couter after each second.


// function clock() {
    //    //shows time
    //    var d = new Date();
    //    var hours = d.getHours();
    //    var min = d.getMinutes();
    //    var sec = d.getSeconds();
    
    //    console.log(`Current time = ${hours}:${min}:${sec}`)
    
    // }
    // setInterval(clock, 1000);
    

    // write a function which takes your name and displays the greeting with your name


    // let num = 0;

// function greetings(){
//    console.log(`mehwish`)
//    num++;
//    console.log(num)
// } 


// console.log(num)
// setTimeout(greetings, 5000)

// console.log(num)


// write a function(arrow function) which takes two values and return its sum as a result



// myFunc1 = () => {    return 2+2 }
//   myFunc1 = () =>   2+2 

//  let b = myFunc1();

//  console.log(b)

//  /write a function(arrow function) which takes a number and multiply it with 0.5 and return the new value. print the new value outside the function



//print simple array of [1,2,3,4,5] with the help of array map funtion


// let records = [
//     {id: 1, name: 'mehwish', fname: 'abc', qual:'BS'},
//     {id: 2,name: 'maria', fname: 'abc', qual:'Matric'},
//     {id: 3,name: 'rafia', fname: 'abc', qual:'BS'},
//     {id: 4,name: 'urooj', fname: 'abc', qual:'Inter'},
//     {id: 5,name: 'misbah', fname: 'abc', qual:'Inter'}

//  ]
//  let a = [1,2,3,4,5]

 
//  records.map((a)=>{
//      if(a.qual == "BS"){
//        console.log(a.name)
//      }
//   })
 
//   let arr = [{id:1,name:"abc"},{id:1,name:"efg"},{id:2,name:"hij"},{id:3,name:"xyz"}]
  // iterate the given array through map function and print the name and id
 



  const myStudent = [
    { id: 1, name: "aaa", age: 15, fees:'yes' },
    { id: 2, name: "bbb", age: 16, fees:`yes`},
    { id: 3, name: "ccc", age: 18, fees:`no`},
    { id: 4, name: "ddd", age: 22, fees:`yes`},
    { id: 5, name: "zzz", age: 12, fees:`no`},
    { id: 6, name: "yyy", age: 12, fees:`no`},
]




// let student = myStudent.filter((a,b)=>{
//     return a.age>14 
// })
// console.log(student)

// let fees = myStudent.find((a)=>{
//     return a.fees=="no"
// })
// console.log(fees)

// let rec = myStudent.map((a,b)=>{
//     return a.age>18
// })
// console.log(rec)

// myStudent.forEach((a)=>console.log(`My name is ${a.name} and age is ${a.age}fees submitted: ${a.fees}`)


// let fname = myStudent.map((a)=>{
//     return a.name
// })
// console.log(fname)

// let newarr = myStudent.filter(a=>a.age<14 && a.fees== 'no')
// console.log(newarr)


// let age = 18
// let myPromise = new Promise((resolve, reject)=>{
//     if(age=18){
//         resolve('you r allow');
//     }else{
//         reject('your are not allowed')
//     }
// });
// myPromise 
// .then(res => console.log(res))
// .catch(err => console.log(err))











