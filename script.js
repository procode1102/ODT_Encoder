console.log('\n\ntest output')
/*
js methods - string methods

methods are actions we can perform.
Data types have access to specific methods that allow us to handle instances of that data type.

'example string'.metht _name()

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
        * the functiot _name is usually omitted. 
        * A function with nt _name is called an anonymous function.
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
const getTargetVal = () =>{

    const targetVal = 9

    console.log(targetVal * 7, 'progran terminated')

}
getTargetVal()

function calculateDiff(){

    const preciseVal = getPreciseVal()

    const targetVal = getTargetVal()
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
 * js code challenges
 * 
 * 1. fix the broken code - 
 * smallestPowerOfTwo() hould take in an array and return the 
 * lowest power of 2 that is greater than or equal to each number in that array
 * 
 * A power of two is any value 2n where n is a non-negative integer (including 0). The list of powers of 2 
 * for non-negative integers starts with [1, 2, 4, 8, 16, 32, 64,...] where 20=1, 21=2, 22=4, and so on.
 * 
 * 
*/

/**
 * variable scope.
    * 
    * Scope defines where variables can be accessed or referenced, or declared.
    * 
    * While some variables can be accessed from anywhere within a program, 
    other variables may only be available in a specific context. 
    * 
    * global scope 
    * global scope, variables are declared outside of blocks. 
    * 
    * can be accessed by any code in the program, including code in blocks.
    * 
    * block scope/local variables
    * block scope because it is only accessible to the lines of code within that block.
    * 
    * scope pollution
    * when we have too many global variables that exist in the globat _namespace, or when we reuse variables across different scopes.
    * 
    * scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents.
    * 
    * bad practice in code maintainability and could impact our program in ways we do not intend.
    * 
    * preventing scope pollution - It will save memory in your code because it will cease to exist after the block finishes running.
    * 
    * 
    * i.e. - globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.
    * 
    * i.e. - unintentially reassigning global scoped variuables.
    * 
    * i.e. - declaring duplicate variables within block and local scope, and trying to output both values.
    * 
    * i.e. - declaring duplicate variables within function-local and conditional-local scope, and trying to output both values.
    * 
    * 
 */


//global scoped variable
const testVar = true

//arrow function accesses all scoped variables
const testFun6 = () =>{
    let testVar1 = 5
    if (testVar1){
        //variable has been accessed from global scope.
        return testVar
    }
    return false
}
console.log(testFun6())



//block scoped variables wihtin fns
//bad practice: attempting to access block scoped variable outside of local scope will throw a referenceError error.
function shareBlockFail(){

    //block scoped/local variable.
    const blockVar = true
    console.log(`${blockVar}`)
}
shareBlockFail()

//bad practice: console.log(blockVar)
console.log('\ntest output')


//training days variuable scope debug. - duplicate function.
const __name = 'Nala';

const getRandEvent = () => {
    //moving random to local scope of getRandEvent().
    const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
         days = 100;
    } else if (event === 'Pentathlon') {
         days = 200;
    }

  return days;
};

// The scope of __name is too tight. 
const logEvent = (__name, event) => {
  
  console.log(`${__name}'s event is: ${event}`);
};

const logTime = ( __name, days) => {
  
  console.log(`${__name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define at __name` variable. Use it as an argument after updating logEvent and logTime 


logEvent (__name, event);
logTime (__name, days);

function setNewLine(){
    console.log('\n')
}
setNewLine()


//testing with another participant
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
setNewLine()



//js scope best practice
/*
function that assigns a random number to a user and returns username 
and 'true' if number matches and is a positive and even number.
*/
const _user = 'user'
const assignRandNumber = () =>{
    const randInt = Math.floor(Math.random() * 5)

    //checking for the matching random number value.
    switch(randInt){
        case 0:
            return `${_user}'s number > ${randInt}`, 0
            break;
        case 1:
            return `${_user}'s number > ${randInt}`, 1
            break;
        case 2:
            return `${_user}'s number > ${randInt}`, 2
            break;
        case 3:
            return `${_user}'s number > ${randInt}`, 3
            break;
        default:
            return 'number out of range'
    }

}

//converting integer to string based on what the random number is.
const convertToString = (randInt)=>{
    if(randInt === 0){
        return 'string convert > zero'
    }else if(randInt === 1){
        return 'string convert > one'
    }else if(randInt === 2){
        return 'string convert > two'
    }else if(randInt === 3){
      return 'string convert > three'
    }
    return 'number out of range'
}

//logging username and number to console.
const logUserAndNumber = (_user, randInt)=>{
    console.log(`${_user}'s number > ${randInt}`)
}

const logStringConvert = (string) =>{
    console.log(`${string}`)
}

//function stored within variables
const rand_Int = assignRandNumber()

//function stored within variables, function passed in as argument.
const stringConvert = convertToString(rand_Int)

//function calls
logUserAndNumber(_user, rand_Int)

logStringConvert(stringConvert)
setNewLine()

/*


Write a function, quarterOfValue(), that takes in the total number of  a value and returns a quarter of the number.

value can only be a whole numbers=, be sure to round your result up to the nearest whole number before returning it.

The JavaScript Math.ceil() function will come in handy. Check out the documentation here to figure out how it works.

The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
*/
const quarterOfValue =(value)=>{
    const quarterVal = Math.ceil(value) / 4
    return quarterVal
}
console.log(quarterOfValue(7))
console.log(quarterOfValue(12))

//function needs to use string interpolation/concat to return a sentance using passed in arguments/params.
// Write your function here:

const devString = (adjective, verb, noun)=>{
    return ` >> ${adjective} ${verb} <<   \n --- ${noun} utilized --- \n`
  }
  // console.log(devString('thrilled', 'practice', 'programming'))
  
  // Uncomment the line below when you're ready to try out your function
console.log(devString('successful', 'debug', 'function')) 

/*
convert
Write a function, debug(), that has two number parameters, bug and debug, and returns how to debug the error. function should Handle three different cases:

    If the bug is firmware related, code related or os related issue, you should return a string in the following format based on fw bug, code bug,  os bug.

    'fw related string'
    'code related string'
    'os related string'


    If the component is before they were born, you should return a string in the following format:

'The component  component passed in] was [calculated number of components] components before you were born'

    If the component is in the past but not before the person was born, you should return a string in the following format:

'You were [calculated age] in the component  component passed in]'
*/

//invoke a function without paranthesis.
const num2 = 1
const invokedFn = num1 => num1 += num2
const newMath = invokedFn
console.log(newMath)




function debug(bug){
    const fw_debug = 'frimware update'
    const sw_debug = 'modify code'
    const os_debug = 'update os'
    //set debug conditions based on bug input.
    if(bug === 'firmware'){ 
        return `\n${bug} error identified. debug > ${fw_debug}`
    }else if(bug === 'code'){
        return `\n${bug} error identified. debug > ${sw_debug}`
    }else{
        return `\n${bug} error identified. debug > ${os_debug}`
    }

    //write debugging methods here.
}
console.log(debug('firmware'))
console.log(debug('code'))
console.log(debug('os'))

//tip calculator
/*
   * 
   * Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received
   * and a number representing the total cost.

    Return the tip, as a number, based on the following:
    ‘bad’ should return a 5% tip
    ‘ok’ should return a 15% tip
    ‘good’ should return a 20% tip
    ‘excellent’ should return a 30% tip
    all other inputs should default to 18%
*/

const tipCalculator = (serviceQuality, cost)=>{
    if(serviceQuality === 'bad'){
        cost *= 0.05
        return cost
    }else if(serviceQuality === 'ok'){
        cost *= 0.15
        return cost
    }else if(serviceQuality === 'good'){
        cost *= 0.20
        return cost
    }else if(serviceQuality === 'excellent'){
        cost *= 0.30
        return cost
    }else{
        cost *= 0.18
        return cost
    }
}
console.log(tipCalculator('very good', 71))

/*
Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. 
Use a switch/case, and cover these cases:

'shrug' should return '|_{"}_|'
'smiley face' should return ':)'
'frowny face' should return':('
'winky face' should return ';)'
'heart' should return '<3'
any other input should return '|_(* ~ *)_|'

*/
const toEmoticon = (input)=>{
    switch(input){
        case 'shrug':
            return '|_{"}_|'
            break
        case 'smiley face':
            return ':)'
            break
        case 'frowny face':
            return ':('
            break
        case 'winky face':
            return ';)'
            break
        case 'heart':
            return '<3'
            break
        default:
            return '|_(* ~ *)_|'
            break
    }
}
console.log(
    toEmoticon('winky face')
)




/**
 * 
 * js arrays
 * 
 * arrays === list type 
    * Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, 
    * and booleans). Like lists, arrays are ordered, meaning each item has a numbered position. 
 * 
 * 
 * access array elements using square-bracket notation.
 * 
 * 
 * modify/update elements within an array.
    * testArray[0] = 'modified value'
 * 
 * 
    * reassign an array declared with let.
    * testArray = ['single element']
 * 
 * 
 */
let testArray = [
    0,
    1,
    2,
    3,
    4,
    5
]
console.log(testArray)
console.log(testArray[0])




//finding the length of an array
const testArrayLen = testArray.length;
console.log(testArrayLen)




//function that modifies/updates array elements
function modifyTestArrElements(inputElement){

    switch(inputElement){
        case 0:
            testArray[0] += 1
            return testArray[0]
            break
        case 1:
            testArray[1] += 1
            return testArray[1]
            break;
        case 2:
            testArray[2] += 1
            return testArray[2]
            break;
        case 3:
            testArray[3] += 1
            return testArray[3]
            break;
        case 4:
            testArray[4] += 1
            return testArray[4]
            break;
        case 5:
            testArray[5] += 1
            return testArray[5]
            break;
        default:
            return 'default array elements'
            break
    }
}
console.log(modifyTestArrElements(5))
console.log(modifyTestArrElements(0))



//UPDATE ARRAY ELEMENTS
setNewLine()
console.log(testArray[3])
setNewLine()
const updateArrElement = testArray[3] = 33
console.log(updateArrElement)
setNewLine()

console.log(`TEST ARRAY OUTPUT >>> ${testArray}\n`)


//UPDATE ARRAY ELEMENTS
for(let i = 0; i <= testArray.length; i++){
    if(testArray[i] > 10){
        testArray[i] = 3
    }
}
console.log(`TEST ARRAY OUTPUT >>> ${testArray}\n`)

/*
    accessing elements in an array

    finding index of items in an array

    indexOf() - he indexOf() method takes an item as an argument 
    and will either return the item's index or -1 if the item is not in the array
*/



console.log(
    testArray.indexOf(5)
)
console.log(
    testArray.indexOf(6)
)


/**
 * JS ARRAY METHODS
 * 
 * ADDING ARRAY ELEMENTS
 * .push() - add one or more items to the end of an array.
 * 
 * 
 * .unshift() - add an element to the first index of an array.
 * 
 * 
 * REMOVE ARRAY ELEMENTS
 * .pop() - remove the last element from an array.
 * 
 * .shift() - remove the first element from an array.
 * 
 * .splice() - if we know the index of an element we can remove it.
 * 
 * ACCESSING ARRAY ELEMENTS
 *  array[index number] - bracket notation to access a specific element.
 * 
 * 
 * .indexOf() - returns the index of a specified element. returns -1 if argument is not found.
 * can take up to 2 arguments; array.indexOf(targetElement, indexNumber). returns -1 if argument is not found.
 * 
 * 
 * 
 * .
 * 
 */

//accessing array elements using [bracket-notation].
console.log(`TEST ARRAY FIRST ELEMENT > ${testArray[0]}\n`)

const locateElementIndex = testArray.indexOf(1)
console.log(locateElementIndex)



//adding elements to the end of an array with .push()
testArray.push(7, 8, 9, 10)
console.log(testArray)

testArray.push(11, 12, 13, 14, 15)
console.log(testArray)


//removing the last array element with .pop()
const testArrLast = testArray.pop()
console.log(testArrLast)


//removing the first elment of an array with .shift()
const testArrFirst = testArray.shift()
console.log(testArrFirst)


//using splice() to REMOVE an element from an array.
const targetIndex = testArray.indexOf(testArray[3])
testArray.splice(targetIndex, 1)

console.log(testArray)
console.log(targetIndex)



//accessing specific elements from within an array with .slice(startIndex, endIndex)
const targetElements = testArray.slice(1, 4)
console.log(`array index elements [1 - 3] >>> ${targetElements}`)



//adding elements to the first index of an array.
const firstIndex = testArray.unshift('a')
console.log(`UPDATED TEST-ARRAY >>> ${testArray}`)



//ARRAYS & FUNCTIONS - functionality on mutable arrays.
    //a global array that is modified within a function will be modified wihtin the global scope.
    //arrays mutated by functions are 'PASSED IN BY REFERENCE'
    //

/**
* ACCESSING ARRAY ELEMENTS USING FOR...OF LOOP.
* for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
* iterable object > arrays, strings, TypedArray
 * 
 * performing the same tasks on every item in an array with array.map()
 * 
 * ARRAYS AND FUNCTIONS
 * arrays passed into functions and modified within fn scope are modified throughout program.
 * pass-by-reference
 * 
 * NESTED ARRAYS - store arrays as indexed elements within arrays.
 * accessing nested array elements
 * nestedArray = [[0, 1]]
 * accessNestedArrayElements  = nestedArray[0][1]
 * 
 * 
 */
for (const element of testArray){
    console.log(element * 10)
}



//reassigning testArray
setNewLine()
testArray = [0]
console.log(testArray)

testArray.push(1)
testArray.push('binary')
setNewLine()
console.log(testArray)
testArray = [0, 1, 2, 3, 4, 5]


//modifying an array from within a fn(), using array methods.
//array.map() that multiplies each array element number data-type by 2.
const elementsDoubled = testArray.map((element)=>{
    //condition that checks for Number data types & multiplies by 2.
    return element * 2
    
})
console.log(elementsDoubled)



//NESTED ARRAYS AND ACCESSING NESTED ARRAY ELEMENTS.
const testNestedArray = [ [0, 1], [2, 3], [4, 5], [6, 7] ]
const nestedElements = testNestedArray[3][1]

console.log(nestedElements)


/**
 * 
    Use the .length property to find the last element of an array.

    Use the other methods in MDN documentation not mentioned in the lesson.

    Take all the elements in an array and make a string.
    
    Find the return value of calling .push() on an array.

    Nest an array within an array.

    Access an element in the nested array.
 * 
 */

//Use the .length property to find the last element of an array.
const lastNestedElement = testNestedArray[testNestedArray.length - 1]
console.log(`nested array last element > [${lastNestedElement}]`)
setNewLine()

//Use the other methods in MDN documentation not mentioned in the lesson.
const nestedMiddleElements = testNestedArray.find((element) => element === testNestedArray[1])
console.log(nestedMiddleElements)

//Take all the elements in an array and make a string.
console.log(
    `
     index 0 > ${testNestedArray[0]}\n
     index 1 > ${testNestedArray[1]}\n
     index 2 > ${testNestedArray[2]}\n
     index 3 > ${testNestedArray[3]}
    `
)


//Find the return value of calling .push() on an array.
testNestedArray.push([8,9])
console.log(testNestedArray)
setNewLine()

//Nest an array within an array.
let testNestedArray1 = []
if(testNestedArray){
    testNestedArray1.push(testNestedArray)
    console.log(testNestedArray1, '> true')
}else{
    console.log(testNestedArray1, '> false')

}
setNewLine()

//Access an element in the nested array.
//adding an empty array to the end of an array.
const empty = []
testNestedArray1.push(empty)
console.log(testNestedArray1)
setNewLine()

const accessTestNestedArray1Index = testNestedArray1[0][0][0]
console.log(accessTestNestedArray1Index)
setNewLine()

//function that replaces indexed elements within an array.
function replaceElements(a, e){
    //to replace elements, splice elementts within the array.
    a.splice(testArray[0], 1, e)

    //add an element to the beginning of an array.
    a.unshift('ddr validation software')
    console.log(a)
}
console.log(replaceElements(testArray, 'a'))








/**
 * js loops
 * 
 * for-loop
 * 1. initialization variable - starting point/variable.
 * 2. stopping condition - iteratioin continue as condition remains true, will stop when false.
 * 3. iteration statement - signals loop to iterate until stop condition is false.
 * 4. code block - code to run during active iteration.
 * 
 * iterating through arrays
 * To loop through each element in an array, a for loop should use the array’s .length property in its condition. 
 * arrayVar.length
 * 
 * 
 */
//for-loop that iterates and logs out numbers from 0 up to/including 10.
for(let i=0; i <= 10; i++){
    console.log(i)
}
setNewLine()

//for-loop that iterates and logs out numbers in reverse from 10 down to/including 0.
for(let j=10; j >= 0; j--){
    console.log(j)
}

//iterating through an array and accessing all elements.
///arrayName.length;
for(let k = 0; k <= testNestedArray.length; k++){
    console.log(
        `nested element accessed > ${testNestedArray[k]}`
    )
}
setNewLine()

/**
 * nested loops
 * use-case; compare elements within two arrays
 * 
 * while loop
 * use case; The syntax of a while loop is ideal when we don’t know in advance how many times the loop should run.
 * use case; In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.
 * 
 * do...while statements
 * code to run at least once and then loop based on a specific condition after its initial run. 
 * 
 * for...of loop
 * alternative to for-loop.
 * pros - easier to read code/loop, less errors.
 * cons - does not iterate in reverse order.
 */
console.log(testNestedArray1)
setNewLine()


let emptyIndex = []
let testArray2 = [[0, 2, 2], '0']

testArray2.push(emptyIndex)

console.log(testArray2)

let counter = 0
for(let c = 0; c < testArray2.length; c++){

    //while loop that counts total amount of elements    
    while(counter <= testArray2.length){
        if(counter === testArray2.length){
            break
        }
        console.log('iteration test in progress...')
        counter++
    }
        
   
    if(testArray2[c] === emptyIndex){

        console.log(testArray2[c])
    }
}

setNewLine()


//for..of loop iterates through nested array that outputs a target element.
for(testElement of testNestedArray1){
    if(testElement = []){
        console.log(testElement)
        break
    }
}

/**
 * creating objects
 * key:'value'
 * 'key':'value'
 * 
 * 
 * accessing object properties.
 * dot-notation (.property)
 * objectName.propertyName
 * 
 * 
 * 
 * bracket-notation
 * must use bracket notation when accessing keys that have numbers. spaces, or special characters in them.
 * 
 * 
 * property assignment
 * properties are mutable/can be changed.
 * are what objects have.
 * 
 * can use both;
 *  obj.prop = 'new value'
 *  obj['prop'] = 'new value'
 *  no prop name > new prop name/value created.
 * 
 * object methods
 *  when data stored on a function.
 *  method is what an object does.
 * 
 * 
 * delete keyword/method will DELETE object key value pairs.
 */




//keys can omit quotation marks when no special characters exist.
let testObj0 = {
    testKey0:'test-val0',
    testKey1:'test-val1'
}
console.log(testObj0)
setNewLine()


// integer keys will be typecasted as string keys.
testObj0 = {
    0:'test-val0',
    1:'test-val1'
}
console.log(testObj0)
setNewLine()





testObj0 = {
    'testKey0':'test-val0',
    'testKey1':'test-val1'
}


//accessing object properties using .dot notation.
console.log(
    testObj0.testKey0,
)
setNewLine()

console.log(
    testObj0.testKey1
)
setNewLine()

//accessing object properties using bracket[] notation
const accessedTestProp0 = testObj0['testKey0']
console.log(accessedTestProp0)
setNewLine()


//new empty object for storing different data-types and data-structures in objects.
let testSwDev = {}
//assigning object properties.
testSwDev.swTitle = 'decode_odt'
console.log(testSwDev)
setNewLine()


//assigned a new object list key-value pair.
testSwDev['programmingLanguaes'] = ['html', 'css', 'javaScript']
console.log(testSwDev['programmingLanguaes'])
setNewLine()


//assigned a new object list key-value pair.
testSwDev['swDevSpec'] = ['front-end', 'web-development', 'user interface']
console.log(testSwDev)
setNewLine()
//accessing object key-value pairs.
console.log(testSwDev['swDevSpec'])
setNewLine()



//object methods
let testObjFn = {

    logTestData0(){
        console.log(`${testSwDev.programmingLanguaes}`)
    }
}
testObjFn.logTestData0()
setNewLine()



//assigning a method to an object.

//name of the new object method.
testObjFn['logTesData1'] = () =>{
    console.log(testSwDev.swDevSpec)
    console.log(true)
}   
testObjFn.logTestData0()


//creating objects and nested props.array containing objects.
let testObjFn1 = {
    testData0:[
        {'testProp0':true}, 
        {'testProp1':false}
    ]
}
console.log(
    testObjFn1.testData0[0]
)

/**
 * pass objects by reference
 * 
 * functions that take in and modify objects as parameters are permanently modified
 * even when assigned with 'const' keyword. 
 * 
*/



let testObj1 = {
    testKey2:true,
    testKey3:1
}


/*  
    function that creates an object, then logs it to the console
    after an object is passed into the function by reference.
*/
const modifyObj = (objParam)=>{
    //
    objParam.testKey2 = false
    objParam.testKey3 = 0
}

//object passed into function by reference.
modifyObj(testObj1)
//modified object logged out to the console.
console.log(
    testObj1
)




/**
 * ITERATE OBJECTS
 * for...in-loop > used to iterate through an object.
 * 
*/

for(let testKeyVal in testObj1){
    console.log(
        `logging out > ${testObj1[testKeyVal]}`
    )
}

// function takes in an object and creates a new key-val-pair.
function addArrToObj(objParam){

    //creating, assigning key-val array.
    objParam['objArr'] = ['a', 'b', 'c']

    //logging out key-val array.
    console.log(
        `test object array > [${objParam['objArr']}]`
    )

}
//passing in existing object by reference.
addArrToObj(testObj1)


/**
 * THIS. & advanced objects
 * 
 * this. keyword references the calling object
 *  
 * which provides access to the calling object’s properties
 * _property_name:'' - common convention to signal when object.properties should not be altered/updated.
 * 
 */

let testObj2 = {

    testKey4:'test value',
    // object method that accesses object key-val-pair.
    testKey4Method(){
        console.log(
            `utilizing the ${this.testKey4}`
        )
    
    }
}

setNewLine()



//function that accesses and modifies an object key-value-pair.
function modifyThisValue(objParam){

    // objParam.testKey4 = ['test value 0', 'test value 1']
    objParam.testKey4 = ['test value 00', 'test value 01']
    

    for(let testKey4 in objParam){

        console.log(
            objParam[testKey4][0]
        )
    }
}

modifyThisValue(
    testObj2
)



/**
 * arrow functions and 'this'
 * arrow functions will return 'undefined' when trying to access object properties.
 * 
 * 
 * 
 * xfaulty objectMethod = ()=>{
 * }
 * 
 * * good > objectMethod(){
 *      //code block
 * }
 * 
 * * good > function objectMethod(){
 *      //code block
 * }
 */




//PROHIBITTED object.method that returns an undfined value, when its called.
let testMethodFault = {

    key0: true,
    //prohibitted.
    logKey0: () =>{
        //logs out string, logs out undefined for object.key
        console.log(`object.method fault test > ${this.key0}`)
    }
    // logKey0(){
    //     //logs out boolean value for object.key
    //     console.log(`object.method fault test > ${this.key0}`)
    // }
}
testMethodFault.logKey0()
//PROHIBITTED object.method that returns an undfined value, when its called.



//conventional object.method that reassigns and logs object.property value that uses this.keyword.
function conventionalPropReturn(objParam){

    //KEY-VALUE pair reassignment.
    objParam['key0'] = ['1', '2', 2, 33]
    console.log(
        objParam.key0
    )
}
conventionalPropReturn(
    testMethodFault
)


/**
 * object privacy
 * 
 * privacy in objects, we define it as the idea that only certain 
 * properties should be mutable or able to change in value.
 * 
 * getters - are methods that get and return the internal properties of an object.
    * Getters can perform an action on the data when getting a property.
    Getters can return different values using conditionals.
    In a getter, we can access the properties of the calling object using this.
    The functionality of our code is easier for other developers to understand.

 * setters - reassign values of existing properties within an object.
    * advantages to using setter methods that include checking input, performing actions on properties, 
    and displaying a clear intention for how the object is supposed to be used. 
 * 

 */



/*
//!!AVOID AVOID AVOID!!//
let testPrivateObj = {
    _key1:' > ',
    log_Key1 (){

        setNewLine()


        
        //reassigning PRIVARTE_object.property can log out both original value and updated assignment value.
  

        this._key1 += ' > test output'

        console.log(
            `> ${this._key1}`
        )
    }
}*/

//reassigning PRIVATE _object.property - faulty
testPrivateObj['_key1'] = '> updated test output'
setNewLine()


testPrivateObj.log_Key1()
console.log('system detect: previous log; functional error')
setNewLine()


//utilizing GETTER methods > logs out props data type.
let testGetterMethodProp = {

    //object property.
    _key2: false,
    
    //object getter method, returns & validates prop values.
    get log_Key2(){
        
        //condition
        if(typeof this._key2 === 'number'){
            console.log(
                'number'
            )

        }else if(typeof this._key2 === 'string'){
            console.log(
                'string'
            )
            
        }else{
            console.log(
                'other'
            )
            setNewLine()
        }

    },

    //utilizing setter method > modifies/sets object.props based on condition/code-block.
    /**
     * boolean type indicator
     * @param {boolean} newKeyVal
     */
    set Log_Key2(newKeyVal){

        //checks if prop value is negative/falsy.
        if(!this._key2){
            //sets new value to param/argument.
            this._key2 = newKeyVal

            //outputs true boolean.
            console.log(`updated value > ${this._key2}`)

        //string indicating remaining negative/falsy value.
        }else{
            console.log(`original data type detected > ${this._key2}`)
        }
    }
}
//accessing and setting new value to prop setter method.
testGetterMethodProp.Log_Key2 = true
//output.
console.log(
    testGetterMethodProp.Log_Key2
)


//
setNewLine()

//accessing and setting new value to prop setter method.
//will detect original 'false' boolean-data type.
testGetterMethodProp.Log_Key2 = false
console.log(
    testGetterMethodProp.Log_Key2
)


/**
 * OBJECTS FLASH REVIEW *
 * 
 * 
 * start with an empty object * 
 * assign and utilize each data type
 * assigned and utilize nested data-structures.
 * utilize THIS
 * object methods
 * GETTERS & SETTERS.
 * pass in data be reference (internally) or pass in data be refernce externally.
 * 
 * 
 */


// empty object
let testObjA = {}

//assigning data types to empty object.
testObjA['key0'] = 0
console.log('OBJECT FLASH DATA >',testObjA)
console.log()
testObjA['key1'] = true
testObjA['key2'] = 'test string'
console.log('OBJECT FLASH DATA >',testObjA)
console.log()

//assign object props to nested data structure.
//assign nested data structure to object.
testObjA['key3'] = [testObjA.key0, testObjA.key1, testObjA.key2, [0, 1, 2]]
console.log('OBJECT FLASH DATA >',testObjA)
console.log()


//assign/create object method() access object key-vals.
testObjA['key4Method'] = () =>{

    //method iterates through object key value pairs.
    for(let i = 0; i <= testObjA.key3.length; i++){
        console.log(testObjA.key3[i])
    }
    console.log()
}
testObjA.key4Method()


//getter and setter
let testObjB = {
    key0:testObjA.key1,
    key1:testObjA.key2,
    log:function(){
        console.log()
    },



    //getter method
    get validateObjData(){
        //utilize this keyword.
        if(!this.key0){
            console.log('falsey value detected.')
        }else{
            console.log(`key value > ${this.key0}`)
        }
    },


    //setter method utilizing this keyword.
    /**
     * @param {number} modifierData
     */
    set validateUpdatedObjData(modifierData){
        if(!this.key1){
            this.key1 = 'modified test string'
            console.log(this.key1)
        }else{
            console.log(`value detected > ${this.key0}`)
            this.log()
        }
    }
}
console.log('utilizing global object data > ', testObjB)


testObjB.validateObjData
testObjB.validateUpdatedObjData = 0




//passing in object data by reference.
function utilizingReference(targetObject){
    if(targetObject){
        targetObject = testObjB.validateObjData
    }else{
        console.log('value logged > false')
    }
}
console.log('----')
utilizingReference(false)
utilizingReference(true)
console.log('----')



/**
 * FACTORY FUNCTIONS
    * are functions that return an object and can be reused to make multiple object instances. 
    * Factory functions can also have parameters allowing us to customize the object that gets returned.
 * 
 * 
 * property value shorthand > 
    *  shortcut to assigning properties to variables.
 * 
 * 
 * destructured assignment
    * create a variable with the name of an object’s key 
    that is wrapped in curly braces { } and assign to it the object.
 * 
 * 
 * 
 */


//FACTORY FUNCTION
function app(title, language, devType){
    return {
        title: title,
        languages: language,
        devType: devType,

        //method that logs out factory fn() param.prop.argument values.
        logAppDetails(){
            console.log(
                `application: ${title}, ${language}, ${devType}`
            )
        }
    }
}
const frontEndApp = app('user interface validator', ['{\'html', 'css', 'javaScript/react.js\'}'], 'front-end')
console.log(
    frontEndApp
)
//invoking factory function-object method.
console.log(
    frontEndApp.logAppDetails()
)



//FACTORY FUNCTIONS - PROPERTY SHORTHAND
const factoryFn0 = (param0, param1, param2) =>{
    return {
        param0,
        param1,
        param2
    }
}
const factObj0 = factoryFn0('user interface', 'software engineer', 'javaScript')
//logging out object created by factory function.
console.log(
    factObj0
)



setNewLine()

//logging out first factory function object param.property.
console.log(
    factObj0.param1
)

//factory function & property shorthand.
const factoryFn1 = (p0, p1, p2) =>{
    return{
        p0,
        p1,
        p2,
        logParamSum(){
            
            console.log(p0 + p1 + p2) 
        }
    }
}
const factObj1 = factoryFn1(1, 2, 12)

//invoking factory function method.
factObj1.logParamSum()
setNewLine()


//object destructured assignment.
const factoryFn2 = {
    destParam0:'facory fn parameter 0',
    destParam1:'facory fn parameter 1',
    destParam2:[true, false],

    get logFn2DestParamArray(){
        //iterate through parameter array elements.
        for(let i = 0; i <= this.destParam2.length; i++){
            console.log(this.destParam2[i])
            
        }
    }
}
//destructuring object parameter.
const {destParam0} = factoryFn2
console.log(destParam0)

//destructuring object parameter.
const {destParam1} = factoryFn2
console.log(destParam1)

//destructuring object parameter.
const {destParam2} = factoryFn2
console.log(destParam2)

setNewLine()

//destructuring object.method() that iterates through property array elements.
const { logFn2DestParamArray } = factoryFn2
console.log(logFn2DestParamArray)
setNewLine()

//factory functions, property shorthand and object destructured assignment combined.
//factory functions cannot be passed in as an object.
const factoryFn3ShortHand = (p0, p1, p2) =>{
    return{
        p0,
        p1,
        p2,
        get getParamSum(){
            console.log(
                `parameters sum > ${this.p0 + this.p1 + this.p2}`
            )
        }
    }
}
//proper object property destructuring.
const {p0, p1, p2, getParamSum} = factoryFn3ShortHand(1, 2, 4)
console.log(
    p0
)

console.log(
    p1
)

console.log(
    p2
)

/**
 * built in object methods
 *  Object.keys(source_object) > only accesses object key
 *  Object.assign(target, source_object) > assigns properties located in one object into a new object.
 *  Object.entries(source_object) > accessing an objects key-value:pairs.
 *  
 * 
 * 
 */


//Object.keys() logging out an objects keys-properties.
const logOutObjKeys = Object.keys(
    factoryFn2
)
console.log(logOutObjKeys)

//Object.assign() creating a new/clone object assigned with a global scoped object's properties.
//along with its own default properties.
const clonedObject = Object.assign({'default_cloned_key':'string data'}, factoryFn2)
console.log(
    clonedObject
)

setNewLine()
const accessObjKeyVals = Object.entries(clonedObject)
console.log(
    `log out; accessing clone_object properties/entries > \n${accessObjKeyVals}`
)


/**
 * higher order functions
 * function that accepts functions as parameters
 * function that returns a function
 * call-back-functions - functions that get passed in as parameters.
    * call-back functions get invoked during the execution of the higher-order function.
    * pass in function as an argument without parentheses.
    * 
 * 
    * fuctions passed-in/as data.
        * functions act like other data types
        * can pass functions to variables to be accessed later.
        * can call as such > variableFun()
        * can apply obejct built-in object.properties. 
 * 
    * functions as parameters
        *  functions can behave like any other type of data in JavaScript.
        *  functions can accept other functions as parameters.
        *  
 * 
 * 
 * 
 * 
 */
//function as data
const testFnA = (paramA, paramB) =>{    
    return `${paramA} ${paramB}`
}
const shareTestParams = testFnA
setNewLine()
console.log(shareTestParams.name)
console.log(shareTestParams)
shareTestParams()
setNewLine()
//higher-order function
//function that shares engineering data.
function shareTestData(paramC){
    return paramC
}

function validateTestData(fn, callParamC){
    let callParamVar = callParamC
    let fnParam = fn(callParamC)
    return callParamVar === fnParam ? fn(callParamC) : 'error; log out'
}

console.log(
    validateTestData(shareTestData, 'embedded systems debug')
)

//higher order function; use of callback function.
/*
    function that returns a number with 1 added to it if the input number is odd.
    function will retirn a number with 2 added to it if the input number is even.
*/

const intTestFn = (int) => {
    return int
}
const validateInt = (fn, int_)=>{
    let _int_ = int_

    let _fun_ = fn(int_ *= 1)

    /*
        function that returns a number if that input number is odd.
        function will return the doubled product of the input number if its even.
    */
    return _int_ % 2 === 1 ? _fun_ : _fun_ *= 2
}
console.log(
    validateInt(intTestFn, 22)
)


/**
 * iterators
    *  forEach(()=>{}) - iterates over an array's 
    indices and performs the same code on each element.

    *  map(()=>{}) -  .map() is called on an array, it takes an argument 
    of a callback function and returns a new array! 
 * 
    *  
 * 
 * 
 * 
 * 
 *.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.

.map() executes the same code on every element in an array and returns a new array with the updated elements.
.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
.findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
.reduce() iterates through an array and takes the values of the elements and returns a single value. 
 */


//forEach(()=>{}) function. log-out array string elements.
const testStringNumArr = ['1', '2', '3', '4', '5', '6', '7']
testStringNumArr.forEach(i => console.log(i))

//forEach(()=>{}) function. concat a string to to array string elements.
const convertTestStringNumArr = testStringNumArr.forEach(num =>{
    console.log(`string-number > ${num}\n`)
   
})
console.log(
    convertTestStringNumArr
)

/*
    forEach(()=>{}) iterator. passing a function into 
    forEach(fun) method. log out the last element of an array
*/

const logLastTestElement = (last)=>{
    if(last === testStringNumArr[testStringNumArr.length - 1]){
        console.log(
            `[array last element] > ${last}\n`
        )
    }
}

testStringNumArr.forEach(logLastTestElement)





/*
array.map(()=>{}) function.
function that converts each array element into a number.
*/
const stringToNums = testStringNumArr.map(strNum => parseInt(strNum, 10))
console.log(stringToNums)
setNewLine()



/*
array.map(()=>{}) function.
function that converts each array element into a number 
and minuses 1 from each.
*/
const strNumMinOne = testStringNumArr.map(
    function (num){
        let _num = parseInt(num, 10)
        console.log(
            `[${_num} - 1] > ${_num - 1}`
        )
        
    }
)
strNumMinOne
setNewLine()



/**
 * map(()=>{}) method that converts elements to strings based on 
 * value and concats Ω at each end.
 * 
*/


const ohmsValArr = [
    '0:0Ω',
    '1:240Ω',
    '2:120Ω',
    '3:80Ω',
    '4:60Ω',
    '5:48Ω',
    '6:40Ω',
    '7:34Ω'
]
const numsArr = [7, 2, 2, 3, 4, 5, 6, 1]

//map numsArr to convert to ohmsValArr elements.
const convertedVals = numsArr.map((num)=>{

        if(num === 0){
            num = ohmsValArr[0]
            return num

        }
        
        if(num === 1){
            num = ohmsValArr[1]
            return num

        }
         if(num === 2){
            num = ohmsValArr[2]
            return num

        }
        if(num === 3){
            num = ohmsValArr[3]
            return num

        }
        
        if(num === 4){
            num = ohmsValArr[4]
            return num
        }
        
        if (num === 5){
            num = ohmsValArr[5]
            return num
        }

        if (num === 6){
            num = ohmsValArr[6]
            return num
        }


        if (num === 7){
            num = ohmsValArr[7]
            return num
        }
})
console.log(convertedVals)


/*
array.filter(()=>{}) method.
function that adds elements to an array if they return true.
*/
const intsArr = [0, 1, 2, 3, 4, 5]
const logEvens = intsArr.filter((int)=>{
    if(int % 2 === 0){
        return int
    }
})
console.log()
console.log(intsArr)
console.log(logEvens)



/**
 * array.reduce() method.
 * returns a single value after iterating through and adding the elements of an array,
 * thereby reducing the array to a single element.
 */
const targetIntsArrLast = intsArr.reduce((a, c, d)=>{
    a = intsArr[intsArr.length - 3]

    return a + c + d
}, 0)
console.log(targetIntsArrLast)


/* array.findIndex() method.
 * used to locate the position of an element in an array.
 * returns the desired index.
*/
const valueOfFive = intsArr.findIndex((int)=>{
    if(int === 5){
        console.log(`target value located > ${int}`)
    }
})
console.log(`target value located at index > [ ${valueOfFive} ]`)


/**
 * array.some(()=>{}
 * tests whether at least one element in the array 
 * passes the test implemented by the provided function.
 */
const evenInts = intsArr.some((int)=>{
   console.log(int % 2 === 0);
   console.log(`${int}`)
})
console.log(evenInts)

/* 
Write a function, reverseArray(), that takes in an array as an 
argument and returns a new array with the elements in the reverse order.
*/

let intsarr = [1, 2, 3, 4, 5]
const reverseArray = (array)=>{
    let reversed = []
    for(let i = array.length-1; i >= 0; i--){
        reversed.push(array[i])
    }
    return reversed
}
console.log(
    reverseArray(intsarr)
)


/***
 * Write a function, greetAliens(), that takes in an array of strings 
 * and uses a for loop to print a greeting with each string in the array. 
 */
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
const greetAliens = (arr)=>{
    for(let i = 0; i < arr.length; i++){
        console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
    }
}
console.log(greetAliens(aliens))

/**
 * Write a function, convertToBaby(), that takes in an array as an argument and, 
 * using a loop, returns a new array with each string in the array prepended with 'baby '. 
 */
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = (arr)=>{
    let babyArray = []
      for(let j = 0; j < arr.length; j++){
          
          babyArray.push(`baby ${arr[j]}`)
  
      }
      return babyArray
  }

console.log(convertToBaby(animals))






/*
    OBJECTS REVIEWS
        - arrays, loops, objects.
*/





/**
 * DOM - THE CORE DOM defines the entities describing any DOCUMENT
 * and the objects within it. 
 *  This is expanded upon as needed by other APIs that add new features and capabilities to the DOM. 
 * 
 * 
 * The DOCUMENT as a whole, and all elements (the head, tables within the document, table headers, text within the table cells, 
 * and all other elements) in a document are parts of the DOCUMENT OBJECT MODEL for that document. 
 * 
 * 
 * The DOM is not part of the JavaScript language, but is instead a Web API used to build websites. 
 * JavaScript can also be used in other contexts.
 * 
 * As it is generally not recommended to mix the structure of the page (written in HTML)
 * and manipulation of the DOM (written in JavaScript), the JavaScript parts will be grouped together here, and separated from the HTML. 
 * 
 * there are a number of different data types being passed around the API that you should be aware of.
 * 
 * 
 * DOM Data Types
 * Document - a member returns an object of type document, this object is the root document object itself. 
 *  - e.g. ownerDocument property of an element returns the document to which it belongs.
 * 
 * Node - Every object located within a document is a node of some kind.
 *  - e.g. within an HTML Document and object can be an element node, text node, or Attribute node.
 * 
 *  * Element - The element type is based on node.
 * 
 * 
 * NodeList - element type is based on node. It refers to an element or a node of type element returned by a member of the DOM API.
 *  - e.g. document.createElement() returns an object reference to a node, method returns the element that has been created in the DOM.
 *  - 
 * 
 * Attr - 
 * 
 * NameNodeMap - 
 * 
 * 
 */

