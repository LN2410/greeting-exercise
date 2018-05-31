function GreetPeople(storedUser) {
  var greetCount = 0;
  var theGreet = '';
  var peopleNames = {};

  function greetFunc(name, Language) {

    if (storedUser) {
      peopleNames = storedUser
    }

    if (name !== "" && Language ) {
      if (peopleNames[name] === undefined) {
        peopleNames[name] = 0;
      }
    }

    if (Language === 'english') {
      theGreet = 'Good day, ' + name;
    }
    if (Language === 'afrikaans') {
      theGreet = 'Goeie dag, ' + name;
    }
    if (Language === 'isiXhosa') {
      theGreet = 'Molo, ' + name;
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
