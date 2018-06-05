function GreetPeople(storedUser) {
  var greetCount = 0;
  var theGreet = '';
  var peopleNames = storedUser || {};

  function greetFunc(name, Language) {

    if (name !== "" && Language ) {
      if (peopleNames[name] === undefined) {
        peopleNames[name] = 0;
      }
    }

    if (Language === 'english') {
      theGreet = 'Good day, ' + name;
    }
    else if (Language === 'afrikaans') {
      theGreet = 'Goeie dag, ' + name;
    }
    else if (Language === 'isiXhosa') {
      theGreet = 'Molo, ' + name;
    }
    else if(name === ''){
      theGreet = 'Please enter a name';
    }
    else {
      theGreet = 'Please select one of the languages'
    }

  }

  function returnGreet() {
    return theGreet
  }

  function greetCounter() {
    return Object.keys(peopleNames).length;
  }

  function enterName(storedUser) {
    return peopleNames
  }

  function reset() {
    peopleNames = {}
  }

  return {
    greetFunc,
    returnGreet,
    greetCounter,
    enterName,
    reset,

  }
}
