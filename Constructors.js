//CREATING CONSTRUCTOR FUNCTION
function Alien(name,tech)
{
this.name=name;
this.tech=tech;
this.work=function()
{
    console.log("Sloving bugs from 12 hrs")
}
return 7;
}
let alien1=new Alien('Garima','Java')//'new'keyword-create a new object
let alien2=new Alien('Radhika','C++')
alien1.tech='Blockchain';
console.log(alien1)
