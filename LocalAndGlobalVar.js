let user="Garima";//user-global as it s created outside the function
function greet(name)//name-local variable as it is created in the function
{
    let num=5//local variable
    console.log(num)
    return `hello ${name}`
}

let str=greet(user)
console.log(str)
//program to add two nos
function add(num1,num2,num3=1)
{
    return num1+num2+num3;
}
let result=add(5,6,5);
console.log(result)