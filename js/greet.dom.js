//reference the userName field
var theName = document.querySelector('.userName');
//reference the greetBtn
var greetBtnElement = document.querySelector('.greetBtn');
//reference the counter field
var count = document.querySelector('.counter');
//reference the display field
var displayElement = document.querySelector('.dis');
//reference the language radio buttons
var langRadio = document.querySelector('.languageRadio');
//reference the resetBtn
var resetBtnElement = document.querySelector('.resetBtn');
//reference the users for the local localStorage
var referenceUser = localStorage.getItem('users');



var storedUsers = referenceUser ? JSON.parse(referenceUser) : {};

//each time a name is entered, add it in the list of objects
count.innerHTML = Object.keys(storedUsers).length;



//instance of the factoryFunction from the logic file
var factoryF = GreetPeople(storedUsers)





//this is the dom function
function greetPeople() {
  var checkedLangRadio = document.querySelector("input[name='languages']:checked");
  if (checkedLangRadio) {
    var name = theName.value.toLowerCase();
    //if the name entered is lower case then change the first letter to upper case
    name  = name.charAt(0).toUpperCase()+name.substring(1,name.length);
    var Language = checkedLangRadio.value;
    //if a user does not enter a name then display the message
    if (name === "") {
      displayElement.innerHTML = 'Please enter a name'
      //focus is for when there was no name entered then the cursor must go back to the name element
      theName.focus();
    }else{
      factoryF.greetFunc(name, Language);
      theName.value = '';
      localStorage.setItem('users', JSON.stringify(factoryF.enterName()));
      displayElement.innerHTML = factoryF.returnGreet();
      count.innerHTML = factoryF.greetCounter();
    }
  }else{
    displayElement.innerHTML = 'Please select one of the languages';
  }
}



//the eventlistener for when the greetBtn is clicked
greetBtnElement.addEventListener('click', function() {
  greetPeople();
})


//the eventlistener for when the reset is clicked
resetBtnElement.addEventListener('click', function() {
  localStorage.clear('users');
  location.reload();
})
