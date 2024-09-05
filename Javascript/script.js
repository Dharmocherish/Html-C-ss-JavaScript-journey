// console.log("Dharmocherish's Pen")

// const { async } = require("postcss-js");

// prompt("Enter your gender")
// console.log(`I am a ${prompt("Enter your gender")}`)

// console.log(`My name is ${prompt("Enter your name")} and I am a ${prompt("Enter your gender")}`)



// var string = "Capital of Oyo is Ibadan"
// string=[8,23]

// console.log('The teacher\'s welcomes you to CephasICT. \\n we\'re hoping that you become that great developer that you have always wanted to be')


// console.log(String="Ajala Emmanuel Oluwadamilola".length)


// console.log(`${prompt("firstNumber:667")} + ${prompt("secondNumber:65")} = ${prompt("result:752")}`)
// console.log(`${prompt("firstNumber: 667")}`)
// console.log(`${prompt("secondNumber: 65")}`)
// console.log(`${prompt("result: 752")}`)

// let FirstNumber = prompt(`Enter FrstNumber`)
// let SecondNumber = prompt(`Enter SecondNumber`)
// let FirstNumberConversion = Number(FirstNumber)
// let SecondNumberConversion = Number(SecondNumber)

// console.log(`FirstNumber: ${FirstNumberConversion}`)
// console.log(`SecondNumber: ${SecondNumberConversion}`)
// let result = (FirstNumberConversion + SecondNumberConversion)
// console.log(`result ${result}`)

// var string = "capital of Oyo is Ibadan";
// console.log(string[8]+string[23]+string[6]+string[12]+string[7]+string[1]+string[7]+string[0]+string[1]+string[2])

// function greet(name, lastName){
//     console.log(`Hello`+ ` ` + name + ` ` + lastName)
// }
// greet(`Ajala` , `Emmanuel`)
// // greet(`Ogunniran` , `Precious`)

// let selectedColors = [`purple`, `red`, `green`, `white`, 7]

// console.log(selectedColors)


// const countries = [`Argentina` ,  `Belgium` , `Colombia` , `Denmark` , `Equador` , `France` , `Great Britain`];
// // const phones = [`Samsung` , `IPhone` , `Infinix` , `Tecno` , `Oppo`];
// // const names = [`Adeyemo` , `Aderibigbe`,  `Akanji` , `Akangbe`, `Aduke`]
// // const explorer = countries.concat(phones, names);
// // let country = countries.copyWithin(3,1);
// console.log(countries.copyWithin(3,0))

// let customerIsBanned = false;
// let soup = "chicken noodle soup";
// let crackers = true;
// let reply;
// if (customerIsBanned) {
//     reply = "No soup for you!"
// } else if (soup && crackers) {
//     reply = `Here's your order of ${soup} & crackers.`;
// } else {
//     reply = `Sorry, we're out of soup.`;
// }
// console.log(reply);


// let testScore = 59;
// let collegeStudent = true;
// let grade;
// if (testScore >= 90) {
//     grade = `A`;
// } else if (testScore >= 80) {
//     grade = `B`
// } else if (testScore >= 70) {
//     grade = `C`
// } else if (testScore >= 60) {
//     grade = `D`
// } else {
//     if (collegeStudent) {
//         grade = "U";
//     } else {
//         grade = "F";
//     }

// }
// console.log(grade);

// if (playerOne === computer) {

// } else if (playerOne === "rock") {
//     if (computer === "paper") {

//     } else {

//     }
// }

// switch (Math.floor(Math.random() * 3 + 1)){

//     case 1:
//         console.log(1)
//         break;

//     case 2:
//         console.log(2)
//         break;

//     // add as many case as needed

//     case 3:
//         console.log(3)
//         break;

    
    
//     default:
//         // run this code if no case matches
//         // no need for a break here
//         console.log("No match")


// }

// let playerOne = "scissors"
// let computer = "rock"

// switch (playerOne) {
//     case computer:
//         console.log("Tie game!");
//         break;
//     case "rock":
//         if (computer === "paper") {
//             console.log("computer wins!");
//         } else {
//             console.log("playerOne wins!");
//         }
//         break;   
//         case "paper":
//             if (computer === "scissors") {
//                 console.log("computer wins!");
//             } else {
//                 console.log("playerOne wins!");
//             }
//         break;  
//     default:
//         if (computer === "rock") {
//             console.log("computer wins!");
//         } else {
//             console.log("playerOne wins!");
//         }         
// }


// let cups = 100;
// let people;
// if (cups === 50)  {
//     people = 105;
// } else if (cups === 150) {
//     people = 50;
// } else {
//     people = 1;
// }

// console.log(people);


// Dolphins score 44, 23 and 71..............85, 54, and 41
// Koalas score 65, 54, and 49...............23, 34, and 27


// function calcAverageScoresOfDolphins => Number (44 + 23 + 71 / 3); 

// function of calcAverage
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// console.log(calcAverage(50, 20, 23));

// Test 1
// const scoreOfDolphins = calcAverage(44, 23, 71);
// const scoreOfKoalas = calcAverage(65, 54, 49);

// console.log(scoreOfDolphins, scoreOfKoalas);



// check winner

// const checkWinner = function(averageOfDolphins, averageOfKoalas) {
    // if a team has double the average score of the other team

//     if (averageOfDolphins >= 2 * averageOfKoalas) {
//         console.log(`Dolphiins win (${averageOfDolphins} vs. ${averageOfKoalas})`);
//     } else if (averageOfKoalas >= 2 * averageOfDolphins) {
//         console.log(`Koalas win (${averageOfKoalas} vs. ${averageOfDolphins})`);
//     } else{
//         console.log(`No team wins....`);
//     }
// }

// checkWinner(scoreOfDolphins, scoreOfKoalas);

// Test 2

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// checkWinner(scoreDolphins, scoreKoalas);




// const num = 12;
// const floatNum = 3.14;



// const exp = 123e5;

// console.log(exp);

// const x = "12";
// const y = "20";
// const z = y / x;
// console.log(z);


// console.log(parseInt("12.356"));

// console.log(parseFloat("years 10"));

// console.log(100 / "Apple");

// console.log(Math.abs(-7));

// console.log(Math.round(3.5));

// console.log(Math.trunc(7.8));

// console.log(Math.floor(Math.random() * 100));






// let randomNumber = Number(prompt("Enter the guessed number"));
// let guessedNum = Math.floor(Math.random() * 100);

// if(randomNumber < guessedNum){
//     console.log("Your guess is too low");
// } else if (randomNumber > guessedNum){
//     console.log("Your guess is too high");
// } else if (randomnumbr == guessedNum){
//     console.log("You guessed it right");
// } else{
    
// };
// console.log(guessedNum);


// let username = prompt("Enter your username");
// let password = prompt("Enter your password");

// console.log(username, password)

// let loginUsername = prompt("Login with your username");
// if (loginUsername === " "){
//     alert("Ths cant be empty")
// }
// let loginPassword = prompt("Logn with your password");

// if(username === loginUsername && password === loginPassword) {
//     console.log("Correct detals" ?? "You didn't input your username and password");
// } else if(username !== loginUsername || password !== loginPassword) {
//     console.log("Wrong detals" ?? "You didn't input your username and password");
// } ;



// if(username === loginUsername && password === loginPassword) {
//      console.log("Correct detals");
//  } else if(username !== loginUsername || password !== loginPassword) {
//      console.log("Wrong detals");
//  } else if(username === " " && password === " ") {
//     console.log("You are not a user");
//  }


// let scoreOfAkanmu = 50;
// let scoreOfAlagbe = 54;

// let checkWinner = scoreOfAkanmu > scoreOfAlagbe 
//     ? "Akanmu wins"
//     : scoreOfAkanmu < scoreOfAlagbe 
//     ? "Alagbe wins."
//     : "Tie game";  


// console.log(checkWinner);






// let randomNumber = prompt("Enter your random number");
// let guessedNumber = Math.floor(Math.random() * 100 + 1);

// let result = randomNumber > guessedNumber
//     ? "Your guess is too high"
//     : randomNumber < guessedNumber
//     ? "Your guess is too low"
//     : "Your guess is correct";

// console.log(result);    


// function greet(name, lastName){
//         console.log(`Hello`+ ` ` + name + ` ` + lastName)
//      }
//     greet(`Ajala` , `Emmanuel`)
//     greet(`Ogunniran` , `Precious`)
    





// const normalScore = (x,y,z) => (x + y + z) * 2;

// let scoreOfPrecious = normalScore(80, 75, 70);
// let scoreOfPrecilia = normalScore(70, 82, 95);

// console.log(scoreOfPrecious, scoreOfPrecilia);


// const resultChecker =  scoreOfPrecious < scoreOfPrecilia
//      ? "Precilia wins"
//      :  scoreOfPrecious > scoreOfPrecilia
//      ? "Precious wins"
//      : "Tie";

// console.log(resultChecker);     

// let age = prompt("What is your age?");

// let response = age < 18 ? alert("Sorry, you are too young to drive this car. Powering off")
//     : age === 18 ? alert("Congratulations on your first year of driving. Enjoy the ride!")
//     : age > 18 ? alert("Powering on. Enjoy th ride")
//     : alert("Don't drive")

//     console.log(response);


// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

// function multiply(a, b) {
//     return a * b;
// }

// multiply(22, 5);

// let country = ["Austria", "Belgium", "Colombia", "Denmark", "Equador"];

// console.log(country[0, 2, 4]);


// let firstNumber = prompt("Enter the first number");
// let secondNumber = prompt("Enter the second number");
// let firstNumberConversion = Number(firstNumber);
// let secondNumberConversion = Number(secondNumber);

// let answer = firstNumberConversion + secondNumberConversion;

// alert(answer);



// console.log(
//     'Good afternoon. it\'s a good day again. My name is Ajala Emmanuel Oluwadamlola.\n You will hear from me soon. Take care');


// let userInfo = {
//     name: "Damilola",
//     age: 27,
//     hobby: "Soccer",
//     isMarried: false,
// };

// let facebookInfo = {
//     username: "adeyemi",
//     password: "12345678"
// };

// let database = [
//     {
//         username: "adeyemi",
//         password: "12345678",
//     },
//     {
//         username: "oyekunle",
//         password: "123",
//     },
//     {
//         username: "ibikunle",
//         password: "456",
//     }
// ];

// let newsfeed = [
//     {
//         username: "adekunle",
//         timeline: "This is so cool"
//     },

//     {
//         username: "oyekunle",
//         timeline: "This is so cool"
//     },

//     {
//         username: "ibikunle",
//         timeline: "This is so cool"
//     }
// ];

// let userNamePrompt = prompt("What's your username");
// let passwordPrompt = prompt("What's your password");


// function isUserValid(username, password) {
//     for (let i=0; i < database.length; i++) {
//         if(database[i].username === username && database[i].password === password) {
//             return true
//         }
//     } 
//     return false;
// }

// function signIn(username, password) {
//     if(isUserValid(username, password)) {
//         console.log(newsfeed)
//     } else {
//         alert("Sorry, enter your correct username and password")
//     }
     
// };
// signIn(userNamePrompt, passwordPrompt);



// let listOfThings = [
//     "rice",
//     "beans",
//     "yam",
//     "spag",
//     "egg",
//     "fish"
// ];
// let listOfThingsLength = listOfThings.length;

// for (let i=0; i<listOfThingsLength; i++) {
    // listOfThings[i] = listOfThings[i] + "!";
    // console.log(listOfThings[i], i)
    // listOfThings.pop();
// }

// listOfThings.forEach(function(list, i) {
//     console.log(list, i);   
// }) 

// classwork

// let typeOfPhone = ["Iphone", "Samsung", "Redmi", "Infinix", "Tecno"]
// console.log(typeOfPhone);

// let typeOfPhone = {
//     ios: "Iphone", 
//     samsung: "Samsung", 
//     redmi: "Redmi", 
//     infinix: "Infinix", 
//     tecno: "Tecno"
// };
// console.log(typeOfPhone);

// const blogs = [
//     {
//         id: 1,
//         author: 'bryant',
//         contnts: 'lorm'
//     },
//     {
//         id: 1,
//         author: 'bryant',
//         contnts: 'lorm'
//     },
//     {
//         id: 1,
//         author: 'bryant',
//         contnts: 'lorm'
//     },
//     {
//         id: 1,
//         author: 'bryant',
//         contnts: 'lorm'
//     },
// ]

// function showBlogs () {
//     blogs.map(item);
// }

// let totalScore = 50;

// for(let i=1; i<totalScore; i++) {
//     console.log("Sorry, you did not pass")
// };


// var a = "Hey. Who are you?";

// function bb() {
//     var b = "pretty";
// };
// console.log(a);


// console.log(bb())

// let user1Age = Number(prompt('Enter ur age'))
// let user2Age = Number(prompt('Enter ur age'))

// function ages(age1, age2) {
//     let calc = (age1 * age2) / 2
//     return calc  
// }

// console.log(ages(user1Age, user2Age))


// function tallest() {
//     let tall = "mississippi";
// }

// function isTall() {
//     tall = "everest";
// }

// console.log(tall);
// taller();
// tallest();
// isTall();

// var tall = 10;
// tall = 4;

// function tallFunction() {
//     var tall = "What's up?";
//     console.log(tall);
// }

// function tallerFuncton() {
//     var tall = "one in million";
//     console.log(tall);
// }

// function tallestFunction() {
//    var tall = 26;
//     console.log(tall);
// }

// console.log(tall);
// tallFunction();
// tallerFuncton();
// tallestFunction();



// let userDetails = [
//     {
//         username: "Precilia",
//         password: "2025",
//     },
//     {
//         username: "Marvellous",
//         password: "2035",
//     },
//     {
// };



// function calcAverageScoresOfDolphins => Number (44 + 23 + 71 / 3); 

// function of calcAverage
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// function sumOfNumbers = Number (25 + 39 + 2);


// let sumOfNumbers = Number ["25", "39", "2"];
// function additionOfNum() {
//     for(let i = 1; i === sumOfNumbers; i++) {
//         console.log(sumOfNumbers);
//     }
// };


// function  sumOfNumbers(num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum = sum + num[i]
//     }
//     console.log(sum);
// }
// sumOfNumbers([1, 2, 3, 4, 5]);  

// let promise1 = "Hello";
// let promise2 = 10;
// let promise3 = new Promise((resolve, rejected) => console.log("Successful"));
// let promise4 = fetch("https://jsonplaceholder.typicode.com/posts");


// Promise.all(promise1, promise2, promise3, promise4);



// const apiUrl = "https://jsonplaceholder.typicode.com/posts";
// let output = document.querySelector(".list");

// async function fetchPost() {
//     const res = await fetch(apiUrl);
//     const data = await res
//     .json()

//     output.innerHTML = "";
//     data.forEach((post) => {
//         output.innerHTML += `<li>
//         <h3>${post.title}</h3>
//         <p>${post.body}}</p>
//         </li>`
//     });

//     // console.log(apiUrl)

// };

// async function createPost(post) {
//     const res2 = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json",
//         },
//         body: JSON.stringify(post),
//     })
//     const data2 = await res2.json()

//     output.innerHTML = "";
    
//     output.innerHTML += `<li>
//     <h3>${data2.title}</h3>
//     <p>${data2.body}}</p>
//     </li>`
// }

// function createPost(post) {
//     fetch(apiUrl, {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json",
//         },
//         body: JSON.stringify(post),
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         output.innerHTML = "";
//         output.innerHTML += `<li>
//             <h3>${post.title}</h3>
//              <p>${post.body}}</p>
//             </li>`
//             console.log("Post created", data);
//          })
//     .catch((error) => console.log(`Error: ${error}`));      

    
//     console.log("Post crated:", data2)
// }



// fetchPost()


// createPost({title: "God of War", body: "This s a God of War"});

// constructor method


class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
        this.borrowedBook = []
    }
}

class Admin{}

class Library{
    constructor(bookTitle, author) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.books = [
            {title: "The Road Ahead", author: "Bill Gates", libraryID: 1254},
            {ttle: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264},
        ];
    }
    addBook(book){
        return this.books.push(book);
    }
}



const user1 = new User("Damilola", 24449)
console.log(user1)

const user2 = new User("Aderibgbe", 50311)
console.log(user2)


const library = new Library();

const book1 = {
    title: "Learn Javascript",
    author:c
}















































