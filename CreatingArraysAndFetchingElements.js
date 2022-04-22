//ARRAYS
let values=[8];
values.push(5);
values.push(7);
console.log(values);
//CALCULATING LENGTH OF THE ARRAY
console.log(values.length);
//Fetching a particular value
console.log(values[1])//5
console.log(values[3])//undefined
let names=['Garima','Kiran','Chirag']
names[3]='Avni';
names.push('Ankita')
console.log(names)
//DIFFERENT TYPES OF DATA IN ARRAY
let data=['Tarun',10,{tech:'Java'},function(){
    console.log("hello world");}]//string,nos,object,function
    console.log(data);
    data[3]();//fetch the 3rd index element 
//ARRAY METHODS 
let data1=[5,7,8,9]
//1.push-adds element fromt he last
console.log(data1.push(2));
console.log(data1)//[ 5, 7, 8, 9, 2 ]
//2.pop-removes element from end
console.log(data1.pop());
console.log(data1)// [5, 7, 8, 9 ]
//3.shift-removes element from the start
console.log(data1.shift())
console.log(data1)//[ 7, 8, 9 ]
//3.unshift-adds elemment from the first
console.log(data1.unshift(2))
console.log(data1)//[ 2, 7, 8, 9 ]
//NOTE-pop and push does not change the index number of all the elements
//4.splice-removes element from nth index
console.log(data1.splice(2))//removes element from 2nd index number
console.log(data1)

