// let person={name:"Narendra",age:21,city:"VZM"};
// const {name,age,city}=person;
// console.log(name);
// console.log(age);
// console.log(city);
// let arr=[1,2,3,4,5];
// let vil=arr.map((num)=>num*2) 
// for (let v of vil)
// {
//     console.log(v)
// }
// console.log('new array with filter/n')
// vor=vil.filter((num)=>num>5)
// for (let v of vor)
// {
//     console.log(v)
// }
// let som=vor.reduce((acc,cur)=>acc*cur,1)
// console.log(som)
let details=[{name:"Narendra",marks:90,attendance:80},
{name:"Ravi",marks:70,attendance:60},
{name:"Suresh",marks:50,attendance:40},]
for (let d of details)
{
    console.log(d)
}   
console.log("employee details")
let  employee=(name,task,experience)=>
{
    arr=[{name:name,task:task,experience:experience}]
    for (let d of arr)
{
    console.log(d)
}   

}
employee("Shiva","Developer",5)
let top=details.reduce((acc,cur)=>acc.marks>cur.marks?acc:cur)
console.log("Topper of the class")
console.log(top)