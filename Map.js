//Map-Similar to object. Map is a key and value pair
let map=new Map();
map.set("garima",22);
map.set("ayushi",21);
map.set("nidhi",21);
map.set("anushree",23);
map.set("garima",18);//By using Set value is updated
console.log(map.get("garima"));//getting the age
//PRINTING ALL THE VALUES
for(let [k,v] of map)
{
    console.log(k,":",v)//pass name then age//garima age is updated to 18
}
//Using for Each loop
map.forEach((a,b)=>{
    console.log(b,":",a)//pass age then name
});
