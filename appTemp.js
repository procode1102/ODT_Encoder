/*
    *goal:
        convert 8 (s0/s1) termination values to hex-values.
        check if input_integer/drop-down converts to valid hex-code.
    
        from a 32-bit number. extract a larger number in hexadecimal number.

    *target functionality:

        to test user-input, write a function that takes in an integer and runs a calculation, 
        using termination values. software then validates successful hex-code output.

        *development approach 0:

            > object oriented programming.
                > setter method that stores input-string that is converted into b10 integer.

                > every input-string-array element needs to be compared against object.property.key:value pairs.

                > convert every contained string element into a hexadecimal value.

                > find sum-like hex value calculation.

                > apply function to each form-option element.
                    > capture input, convert, compare, calculate, output to screen.

            > conversion test; string > ohm-object > integer > hex-code.

            > capture sum of all hex values to output final target hex-value.
                > utilize int gathering & hex conversion.


    *current application functionality status:

        > conversions: string > integer.
        > conversions: base_10 interger > base_16/hex number for each rtt_group termination.
        > software output: rtt terminations output hex-code in string format.


    *development approach 1:
        > modify functionality to create <id> elements on all <option> elements while assigning each <id> values 0 through 7.

        > modify functionality to convert all option-element id-values into valid target hex-values

*/






/*prompt asks user for string-int input.
convert to html page dropdown option element.*/
// let targetInput = prompt('enter an integer.')




/* simulates html element options.
 * apply html element/selection values to html buttons.
 * convert options to integers.
*/

const ohmsArr = [
    '0:0Ω',
    '1:240Ω',
    '2:120Ω',
    '3:80Ω',
    '4:60Ω',
    '5:48Ω',
    '6:40Ω',
    '7:34Ω'
]


// selecting/accessing all 'select' elements.
let options = document.querySelectorAll('select')

//conditon that checks is 'select' elements log out truthy values.
options ? console.log(true) : console.log(false)

//setting initializer variable i.
let i

//empty container for 'select' element option-values.
let newOhmValsArr = []
let target;


// function that attempts to match & convert data-types. takes in a select param elements //

// function convertToOhms(inputParam, arrayParam){
function convertToOhms(optionValues){

    // loop that applies numbers to select element id attributes for every iteration.
    for(i = 0; i <= 7; i++){

        // selecting all option elements
        // optionValues = document.querySelectorAll('option')
        
        //setting html select values to i variable/number.
        optionValues.value = i
        

        //log out string containing each select value data type.
        //logged out data types are numbers.
        console.log(`\noptions element value >>> ${optionValues.values}\n`)

        //appending/pushing every select integer data type to the empty container, for every iteration.
        newOhmValsArr.push(optionValues.values)
        

        //future-dev: apply number-string values to DOM elements to match ohm-string values when selected.//
        console.log(newOhmValsArr[i])

    }

    

    


  

    // 
    //logging out an array that contains every select-option-drop-down value.
    // console.log(newOhmValsArr)  
 


    //placeholder line/marker.
    console.log('----')




    //targeted termination empty variables.
    let rtt_nom_rd_s0, rtt_nom_wr_s0, rtt_park_s0, rtt_wr_s0, rtt_dqs_park_s0, Rtt_nom_rd_s1, Rtt_nom_wr_s1, Rtt_park_s1, Rtt_wr_s1, Rtt_dqs_park_s1

    
    //** actual/target conversion values will be select-option-drop-down values. **//
    //function that collects string input into an array > convert strings into integers > ouputs hexadecimal code.
    function validateInput(){
        let targets = newOhmValsArr
        //declaring new index variable.
        let j
        
        //simple iteration over the input array.
        for(j = 0; j < targets.length; j ++){
          
            
            //checking for truthy values within an array and logging out string.
            console.log(`target indexed value >>> ${targets[j]}`)
        }   

        
    /* 
        input values must match list of numbers provided within drop down values.
            combine output values into an array/object
            testValues = [0, 1, 2, 3, 4, 5, 6, 7]
            
            
            interate through and convert all elements into integers
            iterate and add all elements
            convert final sum into hex-value.

            terminations converted to hex from base10 numbers.

        termination variables conversion.
        
        converting and reassigning termination variables with bitwise operations.
        
        based on html element DIMM slot and rank, 
        may need to divide termination variables into two groups.
    */
    
    //
    rtt_wr_s0 = 7 & targets[j];

    rtt_nom_rd_s0 = (7 << 3 && targets[j]) >> 3;

    rtt_nom_wr_s0 = (7 << 6 && targets[j]) >> 6;

    rtt_park_s0 = (7 << 9 && targets[j]) >> 9;

    // do not output
    rtt_dqs_park_s0 = (7 << 12 && targets[j]) >> 12


    //
    Rtt_wr_s1 = (7 << 16 && targets[j]) >> 16;

    Rtt_nom_rd_s1 = (7 << 19 && targets[j]) >> 19;

    Rtt_nom_wr_s1 = (7 << 22 && targets[j] )>> 22;

    Rtt_park_s1 = (7 << 25 && targets[j]) >> 25;
    
    
    // do not output
    Rtt_dqs_park_s1 = (7 << 28 && targets[j]) >> 28

    
    // containing all except dqs s0, s1 terminations.
    let containConvertTerms = []
    
    
    //array is now populated with indexed elements.
    containConvertTerms.push(
        rtt_wr_s0,
        rtt_nom_rd_s0, 
        rtt_nom_wr_s0,
        rtt_park_s0,
        rtt_dqs_park_s0,


        Rtt_wr_s1,
        Rtt_nom_rd_s1,
        Rtt_nom_wr_s1,
        Rtt_park_s1,
        Rtt_dqs_park_s1
    )
    console.log(containConvertTerms)
    
    
    //sum of all converted elements.
    // containConvertTerms = containConvertTerms.reduce((previous, current)=>{
    //     return previous += current
    // }, 0)
    // console.log(containConvertTerms)
    // containConvertTerms = containConvertTerms.toString(16)
    // console.log(containConvertTerms)
    


        




    


    /*
        rtt_wr_s0 = parseInt(rtt_wr_s0, 10).toString(16)

        rtt_nom_rd_s0 = parseInt(rtt_nom_rd_s0, 10).toString(16)

        rtt_nom_wr_s0 = parseInt(rtt_nom_wr_s0, 10).toString(16)

        rtt_park_s0 = parseInt(rtt_park_s0, 10).toString(16)



        // 

        Rtt_wr_s1 = parseInt(Rtt_wr_s1, 10).toString(16)

        Rtt_nom_rd_s1 = parseInt(Rtt_nom_rd_s1, 10).toString(16)

        Rtt_nom_wr_s1 = parseInt(Rtt_nom_wr_s1, 10).toString(16)

        Rtt_park_s1 = parseInt(Rtt_park_s1, 10).toString(16)

        
        

        //log out

        console.log(

            `\nrtt_wr_s0 = ${rtt_wr_s0}

            \nrtt_nom_rd_s0 = ${rtt_nom_rd_s0}

            \nrtt_nom_wr_s0 = ${rtt_nom_wr_s0}

            \nrtt_park_s0 = ${rtt_park_s0}

            \nRtt_wr_s1 = ${Rtt_wr_s1}

            \nRtt_nom_rd_s1 = ${Rtt_nom_rd_s1}

            \nRtt_nom_wr_s1 = ${Rtt_nom_wr_s1}

            \nRtt_park_s1 = ${Rtt_park_s1}`
        );
    */


    


    //event-target
    //DROP-DOWN FUNCTIONALITY
    let selectElements = document.querySelectorAll('select')







    //event-target
    //BUTTON FUNCTIONS THAT SHOW AND HIDE CONVERSION VALUE.

    //accessing button element
    let convertBtn = document.getElementById('convert')
    
    
    //method that outputs final conversion value.
    //apply eventHandler function that will output final hex-code value to the section-header-element.
    function outputConvert(){
    
        document.getElementById('hex-code-output-heading').innerHTML = `${newOhmValsArr}`
        


    }

        //event target takes in a fn() that invokes an innerHTML-prop text.
        //convertBtn.onclick = outputConvert
    

        //alternative event-handler process

    convertBtn.addEventListener('click', outputConvert)
    




    
    //event-handler-function
    
    function clearOutput(){
        //event-handler - block of code that runs when the event is fired.
        document.getElementById('hex-code-output-heading').innerHTML = ''
        
    }

    convertBtn.addEventListener('dblclick', clearOutput)


    }
    //function call that takes in array of select-options values integers.
    validateInput()

}


//function call that takes in select elements.
convertToOhms(options)








