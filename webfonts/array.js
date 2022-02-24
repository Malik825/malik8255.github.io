// let array1 = [0,1,2,3,4,5,6,7,8,9];
//
// function Timesten(element, index, array) {
//   array[index] = element *10;
// }
//
// array1.forEach(Timesten);
//
// document.write(array1);

let array7 = [{
  name:'Kirchoffs',
  age: 20
},
{
name: 'Suleman',
age:21

},
{
name: 'Papa Yaw',
age: 18
},
];

function listOfPeople(element, index, array)
{
  array.innerHTML += '<br>person ' + (index + 1);
  array.innerHTML += '<br> person ' + element.name;
  array.innerHTML += '<br> person ' + element.age;
}
array7.forEach(listOfPeople);
