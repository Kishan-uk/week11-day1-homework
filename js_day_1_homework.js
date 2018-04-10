//Episode 1

//A variable called 'name' is declared as a constant with the value "Keith"
//Another constant called 'printName' is declared as a function and prints the
//text 'My name is Keith' when the printName() method is called.

const name = 'Keith';

const printName = function () {
  console.log(`My name is ${ name }`);
}

printName();

// Episode 2

//A variable named 'score' is declared as a constant with the value "5"
//Another constant called 'result' is decalared as a function. Within that
//function a variable named 'score' is declared as a constant witht the value
//"3" and the function returns the score. console.log calls the result() method
//and prints the result "3"

const score = 5;

const result = function () {
  const score = 3;
  return score;
}

console.log(result());

//Episode 3

//This code fails to execute due to several things being declared as 'const'
//causing the error message: "TypeError: Assignment to constant variable."
//The two arrays 'myAnimals' are declared as 'const' thus causing a conflict
//with each other. Also declaring 'i = 0' as a 'const' means 'i' cannot be
//iterated.

const myAnimals = ['Chickens', 'Cats', 'Rabbits'];

const listAnimals = function () {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];

  for (const i = 0; i < myAnimals.length; i++) {
    console.log(`${ i }: ${ myAnimals[i] }`);
  }
}

listAnimals();


//Episode 4

//The function 'allSuspects' prints the names of all the suspects declared above
//it, apart from suspectThree as the value has been changed in the function from
// 'Keith' to 'Harvey'.
//The method allSuspects() below however prints the original suspectThree value:
//"Keith" as it is has no interaction with the allSuspects function.

const suspectOne = 'Jay';
const suspectTwo = 'Val';
const suspectThree = 'Keith';
const suspectFour = 'Rick';

const allSuspects = function () {
  const suspectThree = 'Harvey';
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
}

allSuspects();
console.log(`Suspect three is: ${ suspectThree }`);

// Episode 5

//Prints the value 'Poirot' from the detectiveInfo() method, as it has
//renamed the original 'name' 'Ace Ventura' declared the 'detective' variable.

const detective = {
  name: 'Ace Ventura',
  pet: 'monkey'
};

const printName = function (detective) {
  return detective.name;
}

const detectiveInfo = function () {
  detective['name'] = 'Poirot';
  return printName(detective);
}

console.log(detectiveInfo());


//Episode 6

//Code doesn't run as the 'murder' variable for 'innerFunction' hasn't been
//declared.

const murderer = 'rick';

const outerFunction = function () {
  const murderer = 'marc';

  const innerFunction = function () {
     murderer = 'valerie';
  }

   innerFunction();
}

outerFunction();
console.log(`The murderer is: ${ murderer }`);
