var a=120;
console.log("This is tha value declared in var type:"+" "+ a)

a=0
if(a===0){
    console.log("The number is 0 and adding 1 making it positive")
}

//if else:


var a = prompt("Enter a number : ")
console.log("Number : " + a)
if (a === 0) {
    console.log("The number is 0 and adding 1 to make it positive")
    a +=1
}
else if (a > 0) {
    console.log("The number is positive")
}
else {
    console.log("The number is negative")
}



//for loop:


a=5
for(i=0;i<a;i++)
{
  console.log(i)
}

//While loop:

i=0
while(i<=a){
    console.log(i)
    i++
}

//for each:

array=[10,20]
array.forEach(element =>{console.log(element)});



Array


const array = [10,20,"PW",23.08 , Date() ]
console.log("Before change:")
for (var ele of array) {
    console.log(ele)
}

after
console.log("After change:")
array.push("3rd year")
for (var ele of array) {
    console.log(ele)
}

 pop
array.pop()
console.log("After pop:")

for (var ele of array) {
    console.log(ele)
}

array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
if (array.length > 0) {
    console.log ("Elements are in the array")
    for (var ele of array) {
        console.log(ele)
    }
}
else {
    console.log ("No elements are in the array")
}

array.push(1)
if (array.length > 0) {
    console.log ("Elements are in the array")
    for (var ele of array) {
        console.log(ele)
    }
}
else {
    console.log ("No elements are in the array")
}


// Objects
b = {
    car : "Audi",
    model : "AB",
    airbags : 8,
    wheels : 4,
    color : "Blue"
}

<<<<<<< HEAD
 //accessing the object
=======
 accessing the object
>>>>>>> dbeb069e1053b46a62c0122d25bee3caf5e8c1a8
console.log(b["color"])
console.log(b.airbags)
var some = "model"
console.log(b[some])
console.log(b)

<<<<<<< HEAD
//changing the value of an object
b.car = "BMW"
console.log(b)

//adding new value and nested object
=======
changing the value of an object
b.car = "BMW"
console.log(b)

/adding new value and nested object
>>>>>>> dbeb069e1053b46a62c0122d25bee3caf5e8c1a8
b.sunroof = {
    is_present : "Yes",
    Shape : "Rectangle"
}
console.log(b)
// accessing nested object
console.log(b.sunroof.is_present)
for (var ele in b) {
    console.log(ele + ":" + b[ele] )
    if (typeof b[ele] == "object")
    {
        for (var val in b[ele]) {
            console.log (val + ":" + b[ele][val])
        }
    }
}

Functions

function fun_name(){
    console.log(5+5)
    console.log("PSN"+5+5)
}
 fun_name()

 function f_name(a,b){
    console.log(a+b)
    console.log(a+b+5+8+'Vicky'+5+5)
 }
 f_name(5,5)


