// Using template literals instead of concatenation, write a function 
// that takes firstName and lastName and returns ‘fistName lastName’ 
const firstName = ('Grant ');
const lastName =('Hood');
function createFullName(first,last){
    return `${firstName}${lastName}`;
}
createFullName(firstName,lastName);

// Write the same function as above as an 
// arrow function with a different name.      

let createFullName2 = (first, last) =>  `${first} ${last}`;
console.log(createFullName2('John','Johnson'));



// Look up the JavaScript functions setTimeout() and setInterval().
//  Notice how they each take a callback.

// Using setTimeout, write an anonymous (has no name assigned to it) 
// arrow function in the callback parameter position. The function should
//  alert ‘Time is up!’. Choose whatever length of time you want for the 
//  timeout.

// Write an arrow function named askAreWeThereYet that alerts ‘Are we 
// there yet?’. Using setInterval, pass askAreWeThereYet into the callback
//  parameter position. Choose whatever length of time you want for the
//   interval.



setTimeout(() => { alert('Time is up!'); }, 200);


setInterval(() => {
  alert('Are we there yet?');
}, 50);


// Write a new function named processSplicedValue that takes 3 parameters
//  – an array, the index of the element to be spliced from the array,
//   and a callback function that will process the sliced element. 

//Inside the function, use the first two parameters to splice an element from the array.

//Inside the function, call the callback function and pass the spliced value into it.

//Outside of the function, create an array of strings, call processSplicedValue, 
//and pass in the array you just created, an index number, and console.log into it. 

//For example: processSplicedValue(arrayName, 2, console.log);




function processSplicedValue(arr, i, callback) {
  let spliced = arr[i];
  console.log(` ${spliced} (arr[${i}])`);
  let result = callback(spliced);
  return result;
}

const demoArray = ['arr', '1', 'test','test2', 'test3'];
processSplicedValue(demoArray, 3, console.log);


//Call the processSplicedValue function again but this 
//time pass in the alert method instead of console.log.

processSplicedValue(demoArray, 3, alert('Test Alert!'));


//Call the processSplicedValue function again, but this 
//time pass in an anonymous arrow function that alerts the spliced value.

const alertFunction = (splicedResult) => {
  return alert(splicedResult)
}

processSplicedValue(demoArray, 3, alertFunction);

//Call the processSplicedValue function one more time, but this time, 
//pass in a custom function of your choice that you should create and name.

function stringMinusOne(splicedIndex) {
  let result = splicedIndex.charAt(splicedIndex.length -1);
  console.log(result);
  return result;
}
processSplicedValue(demoArray, 3 ,stringMinusOne) 


