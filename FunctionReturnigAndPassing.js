function greet()
{
    return "hello world"
}
let str=greet();
console.log(str);
//Passing
function greet1(name)
{
    //using + operator
    return "hello "+name
    //using template literal
    return `hello ${name}`
    //note:choose any one from both
}
let user="Garima";
let str1=greet1(user);
console.log(str1);