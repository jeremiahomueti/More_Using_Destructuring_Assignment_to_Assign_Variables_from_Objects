/* Let's use destructuring to obtain the average temperature 
for tomorrow. */


//So...

const AVG_TEMPERATURES = 
{
    today: 77.5, //...we have the temperature for today
    tomorrow: 79 //and the temperature for tomorrow
};


function getTempOfTomorrow(AVG_TEMPERATURES)  //

{
    "use strict";

    const {tomorrow : tempOfTomorrow} = AVG_TEMPERATURES; //this is saying, get the tomorrow field, from the avgTemperatures object, and assign it to the tempOfTomorrow variable.

    return tempOfTomorrow;
}

console.log(getTempOfTomorrow(AVG_TEMPERATURES));

//So we successfully used destructuring to get the tomorrow variable out
//of the avg_temperatures object and into the tempOfTomorrow variable.