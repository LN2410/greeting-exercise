//reference the greetBtn
var greetBtnElement = document.querySelector(".greetBtn");
//reference the three 3 radio buttons for languages and also the display area
var isiXhosaRadioElement = document.querySelector(".isiXhosaRadio");
var englishRadioElement = document.querySelector(".englishRadio");
var afriRadioElement = document.querySelector(".afriRadio");
var display = document.querySelector('.dis');
//reference the textbox where names are entered
var userNameElement = document.querySelector(".userName");
var Counter = document.querySelector(".counter")

function greetPeople(){
  var checkedLanguageRadioBtn = document.querySelector("input[name='language']:checked");
  if (checkedLanguageRadioBtn) {
    var Language = checkedLanguageRadioBtn.value;
    var names = userNameElement.value;

    factoryF.greet(Language,names);
    display.innerHTML = factoryF.displayName();

    Counter.innerHTML = factoryF.count();
  }
}
console.log(greetPeople());
greetBtnElement.addEventListener('click', greetPeople());
// 
// var text = document.querySelector ('.Text');
// var language = document.querySelector ('.language');
// var GreetBtn = document.querySelector ('.GreetBtn');
// var ResetBtn = document.querySelector ('.Reset');
// var output = document.querySelector ('.output');
// var peopleCount = document.querySelector('.peopleCount');
//
//
//
//
// function dom(pName) {
//  var checkLanguage = document.querySelector("input[name=languageType]:checked");
//    if (checkLanguage) {
//    var  names=text.value;
//    var language= checkLanguage.value;
//    factoryF.Greet(names,language);
//    output.innerHTML = factoryF.GetName();
//    peopleCount.innerHTML=factoryF.countName();
//
//    }
// }
//
//
//
//
// GreetBtn.addEventListener('click', dom);
