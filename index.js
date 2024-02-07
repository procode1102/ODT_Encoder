function return_msg(){
    console.log('hello world' + '\n')
    
    console.log('Decode_ODT Front-End Software Engineering')
    // console.log('Decode_ODT Front-End Software Engineering'.length)
}
let msg = return_msg()
console.log(msg)

let appName = '\ndecode_odt_ui'
console.log(appName)
appName = '\ndecodeODT_UI'
console.log(appName)

let appFunction = '\ncalculate electrical resistance'
console.log(appFunction)

//string concatenation & string interpolation.
let engTeam = 'DDR'
console.log(`\ndeveloping a user interface application for the ${engTeam} team to ${appFunction}.`)
engTeam = 'silicon validation'
engTeam = 'DDR'
// conditional statements
if (engTeam == 'DDR'){
    console.log('\n[ > DDR team software application engineeering < ]')
}else{
    console.log('\n[ > linux systems administration < ]')
}

//use a js input prompt.
engTeam = prompt('enter engineering team > ')

// logical and comparison operators, using conditional statements
if (engTeam === 'DDR' || engTeam === 'silicon validation'){
    console.log('\n[ > DDR team test application development < ]')
}else{
    console.log('\nengineering team unidentified.')
}

//logical short circuit evaluations
engTeam === 'DDR' || engTeam === 'silicon validation' || console.log(false)

//ternary operator.
engTeam === 'DDR' ? console.log('\n[ > DDR team test application development < ]') : console.log('\nengineering team unidentified')

//else if statements;  allows multiple conditions & code blocks if the first condition is false.
if (engTeam === 'DDR'){
    console.log('\n[ > DDR team test application development < ]')
}else if (engTeam === 'DDR - silicon validation'){
    console.log('\n[ > DDR team test application development < ]')
}else{
    console.log('\nengineering team unidentified.')
}

//switch keyword
let testVal = Number(prompt('enter integer value'))
switch(testVal){
    case 0:
        console.log(`\ntestVal > ${testVal}`)
        break
    case 1:
        console.log(`\ntestVal > ${testVal}`)
        break
    case 2:
        console.log(`\ntestVal > ${testVal}`)
        break
    // default condition will run if numbers 0, 1, 2 are not input.
    default:
        console.log('\ninvalid test input value')
}

//user enters a username
let userName = prompt('enter username > ');
userName ? console.log(`\nthank you, ${userName}!`) : userName = prompt('enter username > ');

const userInputVal = prompt('enter test value > ')
console.log(`\n${userInputVal}`)

let randomNumber = Math.floor(Math.random() * 6)


switch(randomNumber){
  case 0 && Number(userInputVal):
    console.log(userInputVal)
    break;
  case 1 && Number(userInputVal):
    console.log(userInputVal)
    break
  case 2 && Number(userInputVal):
    console.log(userInputVal)
    break;
  case 3 && Number(userInputVal):
    console.log(userInputVal)
    break;
  case 4 && Number(userInputVal):
    console.log(userInputVal)
    break;
  case 5 && Number(userInputVal):
    console.log(userInputVal)
    break;
default:
    console.log('unidentified number')
    break;
}

/*

js functions
    parameters;
    - allow functions to accept input and perform a task using the
    inputs.
    - placeholders for information that will be passed to the function when its called.
    - treated as variables within a function



    arguments;
    - values passed into the function parentheses when the function is called.
    - can be passed to the function as values or variables


*/
// function takes in a parameter/placeholder for a value.
function testFn0(testParam){
    console.log(testParam)
}
//function takes in an argument value for parameter.
testFn0(11021190)

/**
 * js functions 
    * default parameters
        * allow parameters to have predetermined values in case no argument is passed into the function
        * argument is 'undefined' when called.
        * 
        * 
    * return statement
        * ends function execution and returns the specified value to the location where it was called.
        * undefined or no value will be returned if 'return' statement isnt used within the function.
        * 
        * 
    * helper functions
        * return value of a function inside another function.
        * it makes our code easier to read and debug if necessary. 
        * can use functions to section off small bits of logic or tasks, then use them when we need to.
        * can help take large and difficult tasks and break them into smaller and more manageable tasks.
        * 
        * 
    * function expressions
        * the function name is usually omitted. 
        * A function with no name is called an anonymous function.
        * A function expression is often stored in a variable in order to refer to it.
        * 
        * 
    * arrow functions
        * remove the need to type out the keyword function every time you need to create a function.
        * It’s important to be familiar with the multiple ways of writing functions because you will come across each of these when reading other JavaScript code. 
        * 
    * concise body arrow functions
        * functions that take only 1 parameter do not need parentheses
        * function that take 0 or more than 1 parameter needs parenthases.
        * '=>' implicit return
        * 
        * 
    
*/

/*
function takes in default parameters and adds 1 to each param
user has option to input different numbers.
*/
function testFn1(def0=0, def1=1, def2=2){
    console.log(
        def0 + 1
    )
    console.log(
        def1 + 1
    )
    console.log(
        def2 + 1
    )
}
testFn1()
testFn1(1, 2, 3)

//use of return
function testFn2(prodVal0, prodVal1){
    return prodVal0 * prodVal1
}
const productVal = testFn2(1, 12345678910)
console.log(productVal)

//helper function logic
function testFn3(testValA, testValB){
    //product of fn params and args.
    //1
    return (testValA * testValB) + 1
}

function testFun4(testValC, testValD){
    //1 + 5 = 6
    return testFn3(testValC, testValD) + 5
}
const testFn4ProdVal = testFun4(1, 0)
console.log(testFn4ProdVal)


//function expression
const testFn5 = function(testValE, testValF){
    if(testValE === testValF){
        return true
    }else{
        return false
    }
}
userTestInput0 = prompt('enter an integer value')
userTestInput1 = prompt('enter an integer value')
console.log(testFn5(userTestInput0, userTestInput1))

//concise arrow functions
const testArrowFn0 = () => userTestInput0 !== userTestInput1 ? 'not equal':'equal';
console.log(testArrowFn0())

//create a function that returns any number. 
const getVal = val =>{
    //function should accept a val as an argument and return a value. 
    const randomVal = Math.floor(Math.random()  * 9)
    if (val >= 0 || val === randomVal){
        return `${val} total`, randomVal
        //gather total value
        //get/set the ideal value
        //calculate diffference/loss.
        //
        
    }
    
  }
// console.log(getVal(6))

//different argument values added for the actual value, being returned by getPrecise function.

const getPreciseVal = ( )=> getVal(6) + getVal(6) + getVal(8) + getVal(7) + getVal(5) + getVal(7) + getVal(9)



//function that returns a desired value.
const gettargetVal = () =>{

    const targetVal = 9

    console.log(targetVal * 7, 'progran terminated')

}
gettargetVal()

function calculateDiff(){

    const preciseVal = getPreciseVal()

    const targetVal = gettargetVal()
    /*

    If actual val equals ideal val, log to the console perfect amount of val.
    If the actual val is greater than the ideal val, log to the console that the user got higher val than needed.
    If the actual val is less than the ideal val, log to the console that the user should enter a higher value.

    */
   if(preciseVal === targetVal){
    console.log(`target value > ${preciseVal}`)
   }else if(`preciseVal > targetVal`){
    console.log(`above target value  > ${preciseVal}`)
   }else if(`preciseVal < targetVal` ){
    console.log(`below target value > ${targetVal}`)
   }

}
calculateDiff()

/**
 * variable scope.
    * 
    * Scope defines where variables can be accessed or referenced. 
    * 
    * While some variables can be accessed from anywhere within a program, 
    other variables may only be available in a specific context. 
    * 
    * 
    * 
    * 
 */
const testVar = true
const testFun6 = () =>{
    let testVar1 = 5
    if (testVar1){
        return testVar
    }
    return false
}
console.log(testFun6())




/*
js methods - string methods

methods are actions we can perform.
Data types have access to specific methods that allow us to handle instances of that data type.

'example string'.methodName()

*/
let testString = 'test'
testString = testString.toLowerCase()
console.log(testString)


/*
built in objects; Math object, Number object


Math.random() - generates a random number between 0 and 1.

Math.random() * 100 - we then multiply that number by 50, so now we have a number between 0 and 50.

Math.floor(Math.random() * 100) - rounds the number down to the nearest whole number.

Number.isInteger(100) - validates integer arguments.

*/

/*
js variables

var - legacy way of creating variables.

let - let keyword signals that the variable can be reassigned a different value.

const - const variable cannot be reassigned because it is constant.
    - must be assigned a value when declared. 



js comparison operators & logical operators


Less than: <

Greater than: >

Less than or equal to: <=

Greater than or equal to: >=

Is strictly equal to: ===

Is not equal to: !==



and operator (&&) 
    - both conditions must evaluate to true for the entire condition to evaluate to true and execute.
    - if either condition is false, the && condition will evaluate to false and the else block will execute. 

or operator (||) 
    - using the || operator, only one of the conditions must evaluate to true for the overall statement to evaluate to true.
    - 

not operator, otherwise known as the bang operator (!) 
    - ! not operator reverses, or negates, the value of a boolean.


short circuit evaluation

let checkValue = true
checkValue === true ? console.log('truthy') || console.log('falsy)
checkValue && checkValue === true ? console.log('truthy') || console.log('falsy')

ternary operator - :

checkValue ? console.log('truthy') : console.log('falsy')
checkValue === true ? console.log('truthy') : console.log('falsy')

*/


