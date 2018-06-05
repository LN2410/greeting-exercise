describe('The Greeting Exercise Function', function(){
    it('should greet the name entered in English when the greetbtn is clicked', function(){
    var engGreet = GreetPeople();

    engGreet.greetFunc("Lihle", 'english')

    assert.equal(engGreet.returnGreet(),'Good day, Lihle')
    });

    it('should greet the name entered in Afrikaans when the greetbtn is clicked', function(){
    var afriGreet = GreetPeople();

    afriGreet.greetFunc("Siyasanga", 'afrikaans')

    assert.equal(afriGreet.returnGreet(),'Goeie dag, Siyasanga')
    });

    it('should greet the name entered in isiXhosa when the greetbtn is clicked', function(){
    var xhosaGreet = GreetPeople();

    xhosaGreet.greetFunc("Schtoo", 'isiXhosa')

    assert.equal(xhosaGreet.returnGreet(), 'Molo, Schtoo')
  });

  it('should be able to count names greeted in English', function(){
    var greetAll = GreetPeople();

    greetAll.greetFunc("Yonela", 'isiXhosa');
    greetAll.greetFunc("Sanele", 'isiXhosa');
    greetAll.greetFunc("Ntando", 'isiXhosa');
    greetAll.greetFunc("Pholisa", 'isiXhosa');
    greetAll.greetFunc("Siyasanga", 'isiXhosa');

    assert.equal(greetAll.greetCounter(), 5)
  });

  it('should only count the same name entered once', function(){
    var everyName = GreetPeople({name: "Yonela"});

    everyName.greetFunc('afrikaans')
    everyName.greetFunc('english')
    everyName.greetFunc('isiXhosa')

    assert.equal(everyName.greetCounter(), 1);
  });

  it('should not greet when there is no name entered', function(){
    var noName = GreetPeople();

    noName.greetFunc('')

    assert.equal(noName.returnGreet(),'Please enter a name');
  });

  it('should not greet when there is no language selected', function(){
    var noLang = GreetPeople();

    noLang.greetFunc('lihle','')

    assert.equal(noLang.returnGreet(), 'Please select one of the languages');
  });
});
