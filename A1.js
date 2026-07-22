//function in js:block of code
//sybtax:
//function fname(){
//}
//fname():
// function add (num1,num2){
//     cconsole.log(num1+num2);
//     return num1+num2;
// }
// add(2,1);

//arrow function
//variable in js: container to store data
//var , let , const
//syntax: ()=>{}
    // const add=()=>{
    //     console.log("arrow function")
    // }
    // add();
const add = (num1,num2)=>{
    return num1 + num2;
}
console.log(add(2,1));

//arguments: array like object
function addNum(){
    console.log(arguments);
}
addNum(1,2,3,4,5,6,7,8,9,10);