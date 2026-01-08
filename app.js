console.log("Hello World!\n==========\n");




// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

printOdds(10);
console.log("");
function printOdds(count){
    for(let i=0; i<count; i++){
        if (i < 0){
            console.log(`${i} is NOT a valid number`);
        }else if (i % 2 === 1){
            console.log(i);
        }
    }
}

console.log("==============");
console.log("");
// Exercise 2 Section
console.log("EXERCISE 2:\n============\n");

console.log(" ");
console.log(" ");

checkAge("Colton" , 17)
console.log(" ");

function checkAge(userName, age){
    if (userName == null){
        userName = "Man";
    }
    if (age == null){
        console.log(`You have not been born yet?? WOW!`);
    }else{
        if (age < 16){
            console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
        }else if (age >= 16){
            console.log(`Congrats ${userName}, you can drive!`)
        } 
    }
}

whichQuadrant(-6, 18);
console.log(" ");
whichQuadrant(1, 2);
console.log(" ");
whichQuadrant(0, 2);
console.log(" ");
function whichQuadrant(x,y){
    if (x > 0 && y > 0){
        console.log(`The x value ${x} and the y value ${y} is in the 1st Quadrant`);
    }
    if (x < 0 && y > 0){
        console.log(`The x value ${x} and the y value ${y} is in the 2nd Quadrant`);
    }
    if (x < 0 && y < 0){
        console.log(`The x value ${x} and the y value ${y} is in the 3rd Quadrant`);
    }
    if (x > 0 && y < 0){
        console.log(`The x value ${x} and the y value ${y} is in the 4th Quadrant`);
    }
    if (x === 0){
        console.log(`The x value ${x} and the y value ${y} is on the Y axis`);
    }
    if (y === 0){
        console.log(`The x value ${x} and the y value ${y} is on the X axis`);
    }
}


whatTypeOfTriangle(4,4,4)
console.log(" ");
whatTypeOfTriangle(2,3,4)
console.log(" ");
whatTypeOfTriangle(2,2,1)
console.log(" ");
whatTypeOfTriangle(1,1,2)
console.log(" ");

function whatTypeOfTriangle(sideOne , sideTwo , sideThree){
    if (sideOne + sideTwo > sideThree && sideTwo + sideThree > sideOne &&
        sideThree + sideOne > sideTwo){
        
        if (sideOne === sideTwo && sideTwo === sideThree){
            console.log("This is a Right Triangle!!");
        }
        if ((sideOne === sideTwo || sideTwo === sideThree) &&
        !(sideOne === sideTwo && sideTwo === sideThree)){
            console.log("This is a Isosceles Triangle!!");
        }
        if (sideOne !== sideTwo && sideTwo !== sideThree && sideOne !== sideThree){
            console.log("This is a Scalene Triangle!!");
        }
        
    }else{
        console.log("This is not a Triangle!");
        let longestSide = sideOne;
        let longestSideText = "One"
        if (longestSide < sideTwo){
            longestSide = sideTwo;
            longestSideText = "Two"
        }
        if (longestSide < sideThree){
            longestSide = sideThree;
            longestSideText = "Three"
        }
        console.log(`Side ${longestSideText} is to long.`);
    }
}
dataPlanStatus(100,15,56)
function dataPlanStatus(planLimit,day,usage){
    let GB = Math.round((usage / day)*100 )/100;
    let daysRemaining = 30 - day;
    let ADU = Math.round((planLimit / 30)*100 )/100;
    let dataExeed = Math.round(((GB * 30) - planLimit)*100 )/100;
    let dataFix = Math.round((GB - (dataExeed / daysRemaining))*100 )/100;
    
    if (dataExeed <= 0){
        console.log(`Keep it up! you will not exceed your plan`);
    }else{
        console.log(`${day} days used, ${daysRemaining} days remaining`);
        console.log(`Average daily use: ${ADU} GB/day`);
        console.log(`You are EXCEEDING your average daily use (${GB} GB/day),`);
        console.log(`continuing this high usage, you'll exceed your data plan by`);
        console.log(`${dataExeed} GB.`);
        console.log(`To stay below your data plan, use no more than ${dataFix} GB/day.`)
    }
    
   
    
}