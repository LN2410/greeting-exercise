//reference the greetBtn
var greetBtnElement = document.querySelector(".greetBtn");

//reference the three 3 radio buttons for languages and also the display area
var isiXhosaRadioElement = document.querySelector(".isiXhosaRadio");
var englishRadioElement = document.querySelector(".englishRadio");
var afriRadioElement = document.querySelector(".afriRadio");
var display = document.querySelector('.dis');
//reference the textbox where names are entered
var userNameElement = document.querySelector(".userName");
var Counter = document.querySelector(".counter");

var greetCount=0 ;

function greetPeople(){
var checkedLanguageRadioBtn = document.querySelector("input[name='language']:checked");
var Language = checkedLanguageRadioBtn.value;
var names = userNameElement.value;

  if (Language === 'english'){
  return display.innerHTML = 'Good day ' + names;
    }
else if (Language === 'isiXhosa') {
  return display.innerHTML = 'Molo ' + names;
  }
  else if (Language === 'afrikaans'){
    return display.innerHTML = 'Goeie dag ' + names;
  }


function count() {
  greetCount++;

}


//
// var namesGreeted = 0;
// function greetCount(){
//   namesGreeted++;
//   return Counter.innerHTML
// }
// return{
//   greetCount
// }

function clickCounter(){
if (localStorage.clickcount){
  localStorage.clickcount = Number(localStorage.clickcount)+1;
}
else {
  localStorage.clickcount = 1;
}
Counter.innerHTML = "names greeted here" + localStorage.clickcount;
}
function clearCounter() {

}
return {
  clickCounter,
  clearCounter
}
}
greetBtnElement.addEventListener('click', greetPeople);
