

let selectElements = document.getElementsByTagName('option')


const ohmsArr = [
    '1:240Ω',
    '2:120Ω',
    '3:80Ω',
    '4:60Ω',
    '5:48Ω',
    '6:40Ω',
    '7:34Ω'
]




//on-die termination values.
//odt-value-variables
let rtt_nom_rd_s0, rtt_nom_wr_s0, rtt_park_s0, rtt_wr_s0, rtt_dqs_park_s0, Rtt_nom_rd_s1, Rtt_nom_wr_s1, Rtt_park_s1, Rtt_wr_s1, Rtt_dqs_park_s1


let convertBtn = document.getElementById('convert')

let elementIds = document.getElementsByTagName('option')
let RttFinalHexVal

let rttTerms = []
//apply function to inline html code.

let filteredRttTerms;

function outPut(){



    //update list.
    let selectIdGrp1 = [
    
        "rtt-nom-wr-ohm-1", 
        "rtt-nom-wr-ohm-2",
        "rtt-nom-wr-ohm-3", 
        "rtt-wr-ohm-1", 
        "rtt-nom-wr-ohm-4", 
        "rtt-nom-wr-ohm-5",
        "rtt-wr-ohm-2",
        "rtt-nom-wr-ohm-6",
        "rtt-nom-wr-ohm-7",
        "rtt-wr-ohm-3",
        "rtt-nom-wr-ohm-8",
        "rtt-nom-wr-ohm-9",
        "rtt-wr-ohm-4",
        "rtt-nom-wr-ohm-10",
        "rtt-nom-wr-ohm-11",
        "rtt-nom-wr-ohm-12",

        // enter read rtt-terms ids
        "rtt-dq-park-1",
        "rtt-dq-park-2",
        "rtt-nom-rd-1",

        "rtt-dq-park-3",
        "rtt-dq-park-4",
        "rtt-nom-rd-2",

        "rtt-nom-rd-3",
        "rtt-dq-park-5",
        "rtt-dq-park-6",

        "rtt-nom-rd-4",
        "rtt-dq-park-7",
        "rtt-dq-park-8",

        "rtt-dq-park-9",
        "rtt-dq-park-10",

        "rtt-nom-rd-5",

        "rtt-dq-park-11",
        "rtt-dq-park-12",

        "rtt-nom-rd-6",
        "rtt-nom-rd-7",

        "rtt-dq-park-13",
        "rtt-dq-park-14",

        "rtt-nom-rd-8",

        "rtt-dq-park-15",
        "rtt-dq-park-16"
    ]


    let collectRttVals = []
    
    

    //accessing specific elements from within an array with .slice(startIndex, endIndex)

    // selectIdGrp1 = selectIdGrp1.slice(0, selectElements.length - 1)

    // console.log(`array index elements [0 - 15, 16 total] >>> ${selectIdGrp1}`)

    
    //contain each value that is selected, create conversion logic/method.
    //document.getElementById('hex-code-output-heading').innerHTML = `${rtt1Value}`
    for(let i of selectIdGrp1){
    


        if(i === selectIdGrp1[0]){ 
            let selectId0 = document.getElementById(selectIdGrp1[0])
            let elementValue = selectId0.value

            elementValue = parseInt(elementValue, 10)
            console.log(elementValue)
            collectRttVals.push(elementValue)
            if(!elementValue){
                collectRttVals.pop(elementValue)
                elementValue = parseInt(elementValue, 10)
                elementValue = 0
                collectRttVals.push(elementValue)
            }
        }    


        if(i === selectIdGrp1[1]){
            let selectId1 = document.getElementById(selectIdGrp1[1])
            let value1 = selectId1.value

            value1 = parseInt(value1, 10)
            console.log(value1)
            collectRttVals.push(value1)
            if(!value1){
                collectRttVals.pop(value1)
                value1 = parseInt(value1, 10)
                value1 = 0
                collectRttVals.push(value1)
            }
        }
        if(i === selectIdGrp1[2]){
            let selectId2 = document.getElementById(selectIdGrp1[2])
            let value2 = selectId2.value

            value2 = parseInt(value2, 10)
            console.log(value2)
            collectRttVals.push(value2)
            if(!value2){
                collectRttVals.pop(value2)
                value2 = parseInt(value2, 10)
                value2 = 0
                collectRttVals.push(value2)
            }
        }
        if(i === selectIdGrp1[3]){
            let selectId3 = document.getElementById(selectIdGrp1[3])
            let value3 = selectId3.value

            value3 = parseInt(value3, 10)
            console.log(value3)
            collectRttVals.push(value3)
            if(!value3){
                collectRttVals.pop(value3)
                value3 = parseInt(value3, 10)
                value3 = 0
                collectRttVals.push(value3)
            }
        }
        if(i === selectIdGrp1[4]){
            let selectId4 = document.getElementById(selectIdGrp1[4])
            let value4 = selectId4.value

            value4 = parseInt(value4, 10)
            console.log(value4)
            collectRttVals.push(value4)
            if(!value4){
                collectRttVals.pop(value4)
                value4 = parseInt(value4, 10)
                value4 = 0
                collectRttVals.push(value4)
            }
        }
        if(i === selectIdGrp1[5]){
            let selectId5 = document.getElementById(selectIdGrp1[5])
            let value5 = selectId5.value

            value5 = parseInt(value5, 10)
            console.log(value5)
            collectRttVals.push(value5)
            if(!value5){
                collectRttVals.pop(value5)
                value5 = parseInt(value5, 10)
                value5 = 0
                collectRttVals.push(value5)
            }
        }

        if(i === selectIdGrp1[6]){
            let selectId6 = document.getElementById(selectIdGrp1[6])
            let value6 = selectId6.value

            value6 = parseInt(value6, 10)
            console.log(value6)
            collectRttVals.push(value6)
            if(!value6){
                collectRttVals.pop(value6)
                value6 = parseInt(value6, 10)
                value6 = 0
                collectRttVals.push(value6)
            }
        }
        
        if(i === selectIdGrp1[7]){
            let selectId7 = document.getElementById(selectIdGrp1[7])
            let value7 = selectId7.value

            value7 = parseInt(value7, 10)
            console.log(value7)
            collectRttVals.push(value7)
            if(!value7){
                collectRttVals.pop(value7)
                value7 = parseInt(value7, 10)
                value7 = 0
                collectRttVals.push(value7)
            }
        }

        if(i === selectIdGrp1[8]){
            let selectId8 = document.getElementById(selectIdGrp1[8])
            let value8 = selectId8.value

            value8 = parseInt(value8, 10)
            console.log(value8)
            collectRttVals.push(value8)
            if(!value8){
                collectRttVals.pop(value8)
                value8 = parseInt(value8, 10)
                value8 = 0
                collectRttVals.push(value8)
            }
        }

        if(i === selectIdGrp1[9]){
            let selectId9 = document.getElementById(selectIdGrp1[9])
            let value9 = selectId9.value

            value9 = parseInt(value9, 10)
            console.log(value9)
            collectRttVals.push(value9)
            if(!value9){
                collectRttVals.pop(value9)
                value9 = parseInt(value9, 10)
                value9 = 0
                collectRttVals.push(value9)
            }
        }

        if(i === selectIdGrp1[10]){
            let selectId10 = document.getElementById(selectIdGrp1[10])
            let value10 = selectId10.value

            value10 = parseInt(value10, 10)
            console.log(value10)
            collectRttVals.push(value10)
            if(!value10){
                collectRttVals.pop(value10)
                value10 = parseInt(value10, 10)
                value10 = 0
                collectRttVals.push(value10)
            }
        }

        if(i === selectIdGrp1[11]){
            let selectId11 = document.getElementById(selectIdGrp1[11])
            let value11 = selectId11.value

            value11 = parseInt(value11, 10)
            console.log(value11)
            collectRttVals.push(value11)
            if(!value11){
                collectRttVals.pop(value11)
                value11 = parseInt(value11, 10)
                value11 = 0
                collectRttVals.push(value11)
            }
        }
        if(i === selectIdGrp1[12]){
            let selectId12 = document.getElementById(selectIdGrp1[12])
            let value12 = selectId12.value

            value12 = parseInt(value12, 10)
            console.log(value12)
            collectRttVals.push(value12)
            if(!value12){
                collectRttVals.pop(value12)
                value12 = parseInt(value12, 10)
                value12 = 0
                collectRttVals.push(value12)
            }
        }
        if(i === selectIdGrp1[13]){
            let selectId13 = document.getElementById(selectIdGrp1[13])
            let value13 = selectId13.value

            value13 = parseInt(value13, 10)
            console.log(value13)
            collectRttVals.push(value13)
            if(!value13){
                collectRttVals.pop(value13)
                value13 = parseInt(value13, 10)
                value13 = 0
                collectRttVals.push(value13)
            }
        }

        if(i === selectIdGrp1[14]){
            let selectId14 = document.getElementById(selectIdGrp1[14])
            let value14 = selectId14.value

            value14 = parseInt(value14, 10)
            console.log(value14)
            collectRttVals.push(value14)
            if(!value14){
                collectRttVals.pop(value14)
                value14 = parseInt(value14, 10)
                value14 = 0
                collectRttVals.push(value14)
            }
        }

        if(i === selectIdGrp1[15]){
            let selectId15 = document.getElementById(selectIdGrp1[15])
            let value15 = selectId15.value

            value15 = parseInt(value15, 10)
            console.log(value15)
            collectRttVals.push(value15)
            if(!value15){
                collectRttVals.pop(value15)
                value15 = parseInt(value15, 10)
                value15 = 0
                collectRttVals.push(value15)
            }
        }

        if(i === selectIdGrp1[16]){
            let selectId16 = document.getElementById(selectIdGrp1[16])
            let value16 = selectId16.value

            value16 = parseInt(value16, 10)
            console.log(value16)
            collectRttVals.push(value16)
            if(!value16){
                collectRttVals.pop(value16)
                value16 = parseInt(value16, 10)
                value16 = 0
                collectRttVals.push(value16)
            }
        }

        if(i === selectIdGrp1[17]){
            let selectId17 = document.getElementById(selectIdGrp1[17])
            let value17 = selectId17.value

            value17 = parseInt(value17, 10)
            console.log(value17)
            collectRttVals.push(value17)
            if(!value17){
                collectRttVals.pop(value17)
                value17 = parseInt(value17, 10)
                value17 = 0
                collectRttVals.push(value17)
            }
        }

        if(i === selectIdGrp1[18]){
            let selectId18 = document.getElementById(selectIdGrp1[18])
            let value18 = selectId18.value

            value18 = parseInt(value18, 10)
            console.log(value18)
            collectRttVals.push(value18)
            if(!value18){
                collectRttVals.pop(value18)
                value18 = parseInt(value18, 10)
                value18 = 0
                collectRttVals.push(value18)
            }
        }
 

        if(i === selectIdGrp1[19]){
            let slectdId19 = document.getElementById(selectIdGrp1[19])
            let value19 = slectdId19.value

            value19 = parseInt(value19, 10)
            console.log(value19)
            collectRttVals.push(value19)
            if(!value19){
                collectRttVals.pop(value19)
                value19 = parseInt(value19, 10)
                value19 = 0
                collectRttVals.push(value19)
            }
        }

            // 20
            if(i === selectIdGrp1[20]){
                let slectdId20 = document.getElementById(selectIdGrp1[20])
                let value20 = slectdId20.value
    
                value20= parseInt(value20, 10)
                console.log(value20)
                collectRttVals.push(value20)
                if(!value20){
                    collectRttVals.pop(value20)
                    value20 = parseInt(value20, 10)
                    value20 = 0
                    collectRttVals.push(value20)
                }
            }

        if(i === selectIdGrp1[21]){
            let selectId21 = document.getElementById(selectIdGrp1[21])
            let value21 = selectId21.value

            value21 = parseInt(value21, 10)
            console.log(value21)
            collectRttVals.push(value21)
            if(!value21){
                collectRttVals.pop(value21)
                value21 = parseInt(value21, 10)
                value21 = 0
                collectRttVals.push(value21)
            }
        }


        if(i === selectIdGrp1[22]){
            let selectId22 = document.getElementById(selectIdGrp1[22])
            let value22 = selectId22.value

            value22 = parseInt(value22, 10)
            console.log(value22)
            collectRttVals.push(value22)
            if(!value22){
                collectRttVals.pop(value22)
                value22= parseInt(value22, 10)
                value22 = 0
                collectRttVals.push(value22)
            }
        }    

        // 23
        if(i === selectIdGrp1[23]){
            let slectdId23 = document.getElementById(selectIdGrp1[23])
            let value23 = slectdId23.value

            value23 = parseInt(value23, 10)
            console.log(value23)
            collectRttVals.push(value23)
            if(!value23){
                collectRttVals.pop(value23)
                value23 = parseInt(value23, 10)
                value23 = 0
                collectRttVals.push(value23)
            }
        }
        if(i === selectIdGrp1[24]){
            let selectId24 = document.getElementById(selectIdGrp1[24])
            let value24 = selectId24.value

            value24 = parseInt(value24, 10)
            console.log(value24)
            collectRttVals.push(value24)
            if(!value24){
                collectRttVals.pop(value24)
                value24 = parseInt(value24, 10)
                value24 = 0
                collectRttVals.push(value24)
            }
        }

        if(i === selectIdGrp1[25]){
            let selectId25 = document.getElementById(selectIdGrp1[25])
            let value25 = selectId25.value

            value25 = parseInt(value25, 10)
            console.log(value25)
            collectRttVals.push(value25)
            if(!value25){
                collectRttVals.pop(value25)
                value25 = parseInt(value25, 10)
                value25 = 0
                collectRttVals.push(value25)
            }
        }

        if(i === selectIdGrp1[26]){
            let selectId26 = document.getElementById(selectIdGrp1[26])
            let value26 = selectId26.value


            value26 = parseInt(value26, 10)
            console.log(value26)
            collectRttVals.push(value26)
            if(!value26){
                collectRttVals.pop(value26)
                value26 = parseInt(value26, 10)
                value26 = 0
                collectRttVals.push(value26)
            }
        }

        if(i === selectIdGrp1[27]){
            let selectId27 = document.getElementById(selectIdGrp1[27])
            let value27 = selectId27.value

            value27 = parseInt(value27, 10)
            console.log(value27)
            collectRttVals.push(value27)
            if(!value27){
                collectRttVals.pop(value27)
                value27 = parseInt(value27, 10)
                value27 = 0
                collectRttVals.push(value27)
            }
        }

        if(i === selectIdGrp1[28]){
            let selectId28 = document.getElementById(selectIdGrp1[28])
            let value28 = selectId28.value

            value28 = parseInt(value28, 10)
            console.log(value28)
            collectRttVals.push(value28)
            if(!value28){
                collectRttVals.pop(value28)
                value28 = parseInt(value28, 10)
                value28 = 0
                collectRttVals.push(value28)
            }
        }

        if(i === selectIdGrp1[29]){
            let selectId29 = document.getElementById(selectIdGrp1[29])
            let value29 = selectId29.value


            value29 = parseInt(value29, 10)
            console.log(value29)
            collectRttVals.push(value29)
            if(!value29){
                collectRttVals.pop(value29)
                value29 = parseInt(value29, 10)
                value29 = 0
                collectRttVals.push(value29)
            }
        }

        if(i === selectIdGrp1[30]){
            let selectId30 = document.getElementById(selectIdGrp1[30])
            let value30 = selectId30.value

            value30 = parseInt(value30, 10)
            console.log(value30)
            collectRttVals.push(value30)
            if(!value30){
                collectRttVals.pop(value30)
                value30 = parseInt(value30, 10)
                value30 = 0
                collectRttVals.push(value30)
            }
        }

        if(i === selectIdGrp1[31]){
            let selectId31 = document.getElementById(selectIdGrp1[31])
            let value31 = selectId31.value

            value31 = parseInt(value31, 10)
            console.log(value31)
            collectRttVals.push(value31)
            if(!value31){
                collectRttVals.pop(value31)
                value31 = parseInt(value31, 10)
                value31 = 0
                collectRttVals.push(value31)
            }
        }

        if(i === selectIdGrp1[32]){
            let selectId32 = document.getElementById(selectIdGrp1[32])
            let value32 = selectId32.value

            value32 = parseInt(value32, 10)
            console.log(value32)
            collectRttVals.push(value32)
            if(!value32){
                collectRttVals.pop(value32)
                value32 = parseInt(value32, 10)
                value32 = 0
                collectRttVals.push(value32)
            }
        }

        if(i === selectIdGrp1[33]){
            let selectId33 = document.getElementById(selectIdGrp1[33])
            let value33 = selectId33.value

            value33 = parseInt(value33, 10)
            console.log(value33)
            collectRttVals.push(value33)
            if(!value33){
                collectRttVals.pop(value33)
                value33 = parseInt(value33, 10)
                value33 = 0
                collectRttVals.push(value33)
            }
        }

        if(i === selectIdGrp1[34]){
            let selectId34 = document.getElementById(selectIdGrp1[34])
            let value34 = selectId34.value

            value34 = parseInt(value34, 10)
            console.log(value34)
            collectRttVals.push(value34)
            if(!value34){
                collectRttVals.pop(value34)
                value34 = parseInt(value34, 10)
                value34 = 0
                collectRttVals.push(value34)
            }
        }

        if(i === selectIdGrp1[35]){
            let selectId35 = document.getElementById(selectIdGrp1[35])
            let value35 = selectId35.value

            value35 = parseInt(value35, 10)
            console.log(value35)
            collectRttVals.push(value35)
            if(!value35){
                collectRttVals.pop(value35)
                value35 = parseInt(value35, 10)
                value35 = 0
                collectRttVals.push(value35)
            }
        }


        if(i === selectIdGrp1[36]){
            let selectId36 = document.getElementById(selectIdGrp1[36])
            let value36 = selectId36.value

            value36 = parseInt(value36, 10)
            console.log(value36)
            collectRttVals.push(value36)
            if(!value36){
                collectRttVals.pop(value36)
                value36 = parseInt(value36, 10)
                value36 = 0
                collectRttVals.push(value36)
            }
        }
        

        if(i === selectIdGrp1[37]){
            let selectId37 = document.getElementById(selectIdGrp1[37])
            let value37 = selectId37.value

            value37 = parseInt(value37, 10)
            console.log(value37)
            collectRttVals.push(value37)
            if(!value37){
                collectRttVals.pop(value37)
                value37 = parseInt(value37, 10)
                value37 = 0
                collectRttVals.push(value37)
            }
        }


        if(i === selectIdGrp1[38]){
            let selectId38 = document.getElementById(selectIdGrp1[38])
            let value38 = selectId38.value

            value38 = parseInt(value38, 10)
            console.log(value38)
            collectRttVals.push(value38)
            if(!value38){
                collectRttVals.pop(value38)
                value38 = parseInt(value38, 10)
                value38 = 0
                collectRttVals.push(value38)
            }
        }

        if(i === selectIdGrp1[39]){
            let selectId39 = document.getElementById(selectIdGrp1[39])
            let value39 = selectId39.value
            value39 = parseInt(value39, 10)
            console.log(value39)
            collectRttVals.push(value39)
            if(!value39){
                collectRttVals.pop(value39)
                //initailly convert select-id-values to hex-values instead of integers.
                value39 = parseInt(value39, 10)
                value39 = 0
                collectRttVals.push(value39)
            }
        }

    }
    console.log(collectRttVals)

    //collect all numbers besides 0.

    let deleteTargetItem = [0]
    collectRttVals = collectRttVals.filter(item => !deleteTargetItem.includes(item))
    //array

  
    





    //joining array elements to become one whole integer that simulates entering a multi-digit number.

    collectRttVals = collectRttVals.join('')
    console.log(collectRttVals)

    //converting collectRttVals into an integer value.
    collectRttVals = parseInt(collectRttVals, 10)

    //converting collectRttVals into a hex value.
    // collectRttVals = collectRttVals.toString(16)
    
//    collectRttVals = parseInt(collectRttVals, 10).toString(16)
    // 
    //adding elements/numbers within an array
    // collectRttVals = collectRttVals.reduce((pre, current)=>{
    //     return pre += current
    // }, 0)

    // collectRttVals = collectRttVals.toString(16)
    // document.getElementById('hex-code-output-heading').innerHTML = `${collectRttVals}`
    // console.log(collectRttVals.toString(16))
    // console.log(

    //     `hex-conversion of collected termination selections >>> ${collectRttVals}`
        
        
    // )

   

        rtt_wr_s0 = 7 & collectRttVals;

        rtt_nom_rd_s0 = (7 << 3 & collectRttVals) >> 3;

        rtt_nom_wr_s0 = (7 << 6 & collectRttVals) >> 6;

        rtt_park_s0 = (7 << 9 & collectRttVals) >> 9;

        rtt_dqs_park_s0 = (7 << 12 & collectRttVals) >> 12
        
        
        //
        Rtt_wr_s1 = (7 << 16 & collectRttVals) >> 16;

        Rtt_nom_rd_s1 = (7 << 19 & collectRttVals) >> 19;

        Rtt_nom_wr_s1 = (7 << 22 &  collectRttVals) >> 22;

        Rtt_park_s1 = (7 << 25 &  collectRttVals) >> 25;
        
        Rtt_dqs_park_s1 = (7 << 28 & collectRttVals) >> 28;
        
        

        
        rttTerms.push(
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
        
        //adding all rtt-term-vals
        let sumRttTerms = rttTerms.reduce((pre, current)=>{
            return pre += current
        }, 0)
        sumRttTerms = parseInt(sumRttTerms, 10);

        console.log(sumRttTerms)
        const hexVal = sumRttTerms.toString(16)


        
        // if(sumRttTerms && sumRttTerms >= 0){
        //     //convert values to hex-val.
            
        //     console.log(hexVal)
        //     console.log('---\n---')
        //     // document.getElementById("convert-h3").innerHTML = 'CLEAR'
        //     document.getElementById('hex-code-output-heading').innerHTML = `${hexVal}`
 
        
        
        // document.getElementById('hex-code-output-heading').innerHTML = `${collectRttVals.toString(16)}`
        document.getElementById('hex-code-output-heading').innerHTML =  `hex-conversion >>> ${hexVal}`

        

        

        // RttFinalHexVal = rttTermsHexVal.toString(16)
        
    }

   
        

    

    





            // console.log(rttTerms)

        



        
        // containing all except dqs s0, s1 terminations.

        
    
    

    


// //display button event-listener
// function clear(){
    
//     document.getElementById("convert-h3").innerHTML = 'CONVERT'
//     document.getElementById('hex-code-output-heading').innerHTML = ''

    
// }

// //event target takes in a fn() that invokes an innerHTML-prop text.
// //convertBtn.onclick = output


// //alternative event-handler process

// convertBtn.addEventListener('dblclick', clear)






