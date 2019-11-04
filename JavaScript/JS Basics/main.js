//###Variables###

// var number1 = 1;
// var number2 = 2;
// var sum = number1+number2;

// alert('1+2 equals:' +sum);

//###Array with strings###

// var colors = new Array('red', 'blue', 'yellow');
// colors.push('purple');
// alert(colors[3]);


//###Array with numbers###

// var numbers = [5,10,8,56,'Seven'];

// alert(numbers[4]);
// console.log(numbers.length);
// console.log(numbers.reverse());

//###For loop###

// for(var i = 0; i<10; i++){
//     console.log('The number is:'+i);
// }

//While loop

// var i=0;

// while(i<10){
//     console.log(i);
//     i++;
// }

//Show all the array with loop

// var numbers=[33,103,45,66,6,5];
// numbers.reverse();

// numbers.forEach(function(number){
//     console.log(number);
// });

// //or

// for(var i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

//###Conditionals### 

// var var1 = 3;
// var var2 = 3;

// if(var1 == var2 && var1 == 3){
//     console.log('This is true');

// }
// else{
//     console.log('Not equal');
// }

// var fruit = 'apple';

// switch(fruit){
//     case "banana":
//         alert('I eat bananas');
//         break;
//     case "apple":
//         alert('I love apples');
//         break;
//     case "orange":
//         alert('I only like to drink them');
//         break;
//     default:
//         alert('Whatever');
//         break;     
// }

//###Object literal###

// var person = {
//     firstName: 'George',
//     lastName: 'Vgs',
//     age:22,
//     cats: ['Java', 'Script'],
//     adress: {
//         street: 'Odous 10',
//         city: 'Athens',
//         state: 'Attica'
//     },
//     fullName: function(){
//         return this.firstName +" "+this.lastName;
//     }
// }

// console.log(person.cats[0]);
// console.log(person.adress.city);
// console.log(person.fullName());

//###Object Constructor###

// var apple = new Object();
// apple.color = 'red';
// apple.shape = 'round';

// apple.describe = function(){
//     return 'An apple is the color '+this.color+' and is the shape '+this.shape;

// }

// console.log(apple.describe());

//###Constructor Pattern###

// function Fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;

//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }

// // var apple = new Fruit('apple', 'red', 'round');

// var melon = new Fruit('melon', 'green', 'round');

// // console.log(apple);
// console.log(melon.describe());

//###Array of objects###

// var users = [
//     {
//         name: 'John Doe',
//         age: 20
//     },
//     {
//         name: 'Papa Vero',
//         age:30
//     },
//     {
//         name: 'Maria DB',
//         age:44
//     }
// ];

// console.log(users[2].name);

//###Events###

// function doClick(){
//     alert('You clicked');
// }

// // function changeText(id){
// //     id.innerHTML = 'You Clicked!';
// // }

// function changeText(){
//     var heading = document.getElementById('heading');
//     heading.innerHTML = "Button clicked!";
// }

// function showDate(){
//     document.getElementById('time');
//     time.innerHTML = Date();
// }

//###Forms###

// function changeBackground(x){
//     console.log(x.value);
//     var heading = document.getElementById('heading');
//     heading.style.color = x.value;
// }

// function validateForm(){
//     var firstName = document.forms["myForm"]["firstName"].value;

//     if(firstName == null || firstName == ""){
//         alert("First name is required");
//         return false;
//     }
//     if(firstName.length < 3){
//         alert("First name must be at least 3 chars");
//         return false;
//     }
// }