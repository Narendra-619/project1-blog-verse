for(let i=0;i<10;i++)
{
    console.log(i)  
}
let j=0;
while (j<10)
{
    console.log(`Hello ${j} time`);
    j++;    
}
let k=10;
do
{
console.log(`Hello ${k} time`);
k--;
}while (k>0)

//array of strings
let fruits=["Apple","Banana","Mango","Orange","Pineapple"];
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i])
}

let veggies=["Broccoli","Cauliflower","Carrot","Spinach","Cabbage"];
for (let fruit of veggies)
{
    console.log(fruit)
}
person={name:"Narendra",age:21,city:"VZM"}; 
for (let key in person)
    {
        console.log(`${key}: ${person[key]}`);
    }  
    