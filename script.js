/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

// Variable name conventions
let firstName = "Achini";
console.log(firstName);

year = 1997;
console.log(typeof year);

// Math Operators
const now = 2022;
const ageachini = now - 1999;
const ageavishka = now - 1995;
console.log(ageachini, ageavishka);
console.log(ageachini + ageavishka);

const First_N = "Ahinsa";
const Last_N = "Thathsarani";
console.log(First_N + " " + Last_N);

// Assigment Operators
let a = 10 + 5; // 15
a += 10; // a = a + 10 = 25
a *= 4; // a = a * 4 = 100
a++; // a = a + 1
a--; // a = a - 1
a--;
console.log(a);

// Comparison Operators
console.log(ageachini < ageavishka);  // >, <, >=, <=
console.log(ageavishka >= 18);

// Operator Precedence
let x, y;
x = y = 25 - 10 - 5; // x = 10, y = 10
console.log(x, y);

const birthYear = 2037;
const age_mom = birthYear - 1978;
const age_dad = birthYear - 1976;

const averageAge = age_mom + age_dad / 2;
console.log(age_mom, age_dad, averageAge);


// Coding Challenge
const massMark = 78;
const heightMark = 1.69;
const massJhone = 92;
const heightJhone = 1.76;

const BMLMark = massMark / heightMark ** 2;
const BMIJhone = massJhone / (heightJhone * heightJhone);
const markHigherBMI = BMLMark > BMIJhone;

console.log(BMLMark, BMIJhone, markHigherBMI); 

// String and Template
const firstName = "Achini";
const job = "teacher";
const birthYear = 1999;
const year = 2022;

const Achini = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(Achini);

const AchiniNew = `Im ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(AchiniNew);

console.log("Just a regular string...");

console.log(" String with \n multiple \n lines"); 


// _if_else Statement
const age = 15;

if (age >= 18)
{
    console.log("Achini can start driving license");
}
else
{
    const yearsLeft = 18 - age;
    console.log(`Achini is too young. Wait another ${ yearsLeft} years :)`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000)
{
    century = 20;
}
else
{
    century = 21;
}
console.log(century);  


// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23),23);


// Type Conversion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "3");
console.log("23" > "18");
console.log("23" + "44"); // + sing is not work in string --> 2344   

// Boolean --> true And false Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ahinsa"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money)
{
    console.log("Don't spend it all ;)");
}
else
{
    console.log("You should get a job!");
}

let height;
if (height)
{
    console.log("YAY! Heiht is defined");
}
else
{
    console.log("Height is UNDEFINED");
}


// Equality Operators ( == vs. ===)  --> dekenma krnne Same 'da balana eka
const age = 18; 
   //18 === 18 --> true (number)
   //  18 === 19 --> false (number)
   // "18" == 18 --> true (string)
    //"18" === 18 --> false (string)
 
if (age === 18) console.log("You just became an adult:D (string)");
if (age == 18) console.log("You just became an adult:D (loose)");

const favorite = Number(prompt("What 's your favorite number?"));
console.log (favorite);
console.log (typeof favorite);
if (favorite === 23) // 22 === 23 -> FALSE
{
    console.log("Cool! 23 is an amzaing number!");
} 
else if (favorite === 7)
{
    console.log("7 is also a cool number");
}
else if (favorite === 9)
{
    console.log("9 is also a cool number");
}
else 
{
    console.log("Number is not 23, 9 or 7");
}

if (favorite !== 23) console.log("Why not 23 ?");


// Logical operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // true when ALL are ture,
console.log(hasDriversLicense || hasGoodVision); // true when ONE is ture,
console.log(!hasDriversLicense); // inverts ture , false value ,

// if (hasDriversLicense && hasGoodVision){
//     console.log ("sarah is able to drive !");
// } else {
//     console.log ("Someone else should drive..");
// }

const isTired = false;
console.log (hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && ! isTired){
    console.log ("sarah is able to drive !");
} else {
    console.log ("Someone else should drive..");
}

const newisTired = true;
console.log (hasDriversLicense && hasGoodVision && newisTired);
if (hasDriversLicense && hasGoodVision && ! newisTired){
    console.log ("sarah is able to drive !");
} else {
    console.log ("Someone else should drive..");
}


// Coding challenge --> #3
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log (scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log ("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log ("Koalas win the trophy 🏆");
} else if (scoreKoalas === scoreDolphins && scoreKoalas >= 100 && scoreKoalas >= 100) {
    console.log ("Both win the trophy!");
} else {
    console.log ("No one wins the trophy 😭");
}


// The switch Statment
const day = "monday";

switch (day) {
    case "monday": // day === "monday"
        console.log ("Plan course structure");
        console.log ("Go to coding meetup");
        break;
    case "tuesday":
        console.log ("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log ("Write code examples");
        break;
    case "friday":
        console.log ("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log ("Enjoy the weekend :D");
        break;
    default:
        console.log ("Not a valid day!");
}
// The switch Statment -> if else block,
if (day === "monday") {
    console.log ("Plan course structure");
    console.log ("Go to coding meetup");
} else if (day === "tuesday") {
    console.log ("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log ("Write code examples");
} else if (day === "friday") {
    console.log ("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log ("Enjoy the weekend :D");
} else {
    console.log ("Not a valid day!");
}

// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = "23 is bigger";
}

const me = "Achini";
console.log (`I'm ${1999 - 2022} years old ${me}`);
*/

// The Conditional (Ternary) Operators
const age = 23;
//age >= 18 ? console.log ("I like to drink wine 🍷") : console.log ("I like to drink water 💦"); 

const drink = age >= 18 ? "wine 🍷" : "water 💦";
console.log (drink);

let drink2;
if (age >= 18) {
    drink2 = "wine 🍷";
} else {
    drink2 = "water 💦";
}
console.log (drink2);

console.log (`I like to drink ${age >= 18 ? "wine 🍷" : "water 💦"}`);