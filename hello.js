const a=10;
const b=11;
console.log("hello"+b+a); //gives 1110.
if(a>5)
    console.log(a+" greater than 5");
const n=10;

//let variable as it changes continuously. 
for(let i=0;i<n;i++){
    console.log(i);
}
//array stores multiple data in a single array.
const arr=[a,2,"string",true];

//JSON: javascript object notation.
const data={
    key:"value",
    key1:2,
    key2:a,
};
console.log(data["key2"]);
const x={
    y:undefined,
    z:null,
    d:{
        b:1,
        c:2
    },
};
//useful for debugging.
try{
    console.log(x.b);
} catch(err){
  console.log(err);  
}
function print(x){
    console.log(x);
}
print("square of 2 is:"+2*2);          //commands in terminal.
                                      //npm init(to start any project).
var oneLinerJoke = require('one-liner-joke'); //see the usage of modules in npmjs.
const cowsay=require("cowsay");       //npm i cowsay==npm install cowsay.
var getRandomJoke = oneLinerJoke.getRandomJoke();
print(getRandomJoke);
console.log(                            //it is a module.
    cowsay.say({                       //prints a cow.
        text:getRandomJoke.body,
        e:"O*",
        T:"U"
    })
)