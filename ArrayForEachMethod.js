let nums=[42,51,24,98,65,12]
nums.forEach((n,i,nums)=>{
console.log(n,i,nums);//printing the value ,its index and the entire array
});
//USING FILTER
let data=[42,51,24,98,65,12]
let result=data.filter(n=>n%2==0)
.map(d=>d*2)//take a value and double it
//ADDING ALL TEH VALUES
.reduce((a,b)=>a+b)
console.log(result)
//.forEach(d=>{
    //console.log(d);//printing the value ,its index and the entire array
    
//});
