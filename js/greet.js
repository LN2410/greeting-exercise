
function GreetPeople(){
var greetCount=0 ;

function greet(Language,names){

  if (Language === 'english'){
  display = 'Good day ' + names;
    }
  if (Language === 'isiXhosa') {
  display = 'Molo ' + names;
  }
  if (Language === 'afrikaans'){
    display = 'Goeie dag ' + names;
  }
}

function count(Language,names) {
  greetCount++;
}
function displayName(){
  return display;
}
return{
  GreetPeople,
  greet,
  count,
  displayName
}

var factoryF = GreetPeople()
// function clickCounter(){
// if (localStorage.clickcount){
//   localStorage.clickcount = Number(localStorage.clickcount)+1;
// }
// else {
//   localStorage.clickcount = 1;
// }
// Counter.innerHTML = "names greeted here" + localStorage.clickcount;
// }
// function clearCounter() {
//
// }
// return {
//   clickCounter,
//   clearCounter
// }
// function GreetF(){
//
//   var personname = '' ;
//   // var greetName = '' ;
//   var greetCounter= 0 ;
//
//
//
// function Greet(names,language) {
//
//     if (names != '') {
//       personname=names;
//   }
//   if (language === 'Eng' ) {
//         greetName = 'Hello, ' + names ;
//       }
//
//    if (language === 'Xho' ) {
//       greetName= 'Molo, ' + names ;
//       }
//  if (language === 'Afri') {
//     greetName = 'Halo, ' + names;
//     }
//
//
// }
// function countName() {
//  //Object.keys(greetCounter).length;
//   return  greetCounter++;
//
// }
//
//
//
// //
// function GetName() {
//   return greetName;
// }
//
// return {
//       GreetF,
//       Greet,
//       GetName,
//       countName
// }
// }
// var factoryF= GreetF()
}
