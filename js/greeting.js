function GreetPeople(storedUser) {
  var greetCount = 0;
  var nameAnLanguage = '';
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
      nameAnLanguage = 'Good day, ' + name;
    }
    if (Language === 'afrikaans') {
      nameAnLanguage = 'Goeie dag, ' + name;
    }
    if (Language === 'isiXhosa') {
      nameAnLanguage = 'Molo, ' + name;
    }

  }

  function returnGreeting() {
    return nameAnLanguage
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
    returnGreeting,
    greetCounter,
    enterName,
    reset,

  }
}
