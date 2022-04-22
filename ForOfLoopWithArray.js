let nums=[]
nums[0]=5
nums[99]=9
console.log(nums);//[ 5, <98 empty items>, 9 ]
console.log(nums.length)//100
//Fetching the value of data
for(let n of nums)
{
    console.log(n)
}
for(let key in nums)
{
    console.log(nums[key])
}