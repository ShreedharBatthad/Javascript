function checkDayOfWeek (dayNumber){

    let day;

    switch (dayNumber) {
        case 0:
            day = "sunday"
            break;
        case 1:
            day = "monday"
            break;
        case 2:
             day = "Tuesday"        
            break; 
        case 3: 
            day = "Wednesday"
            break;
        case 4:
            day = "Thrusday" 
            break;   
        case 5:
            day = "Friday" 
            break;       
        default:
            return "Invalid Day"; // Output --> Only Invaliday Output.
           // console.log("Invalid day")    --> Undefined and Invaliday Output.
          
    }
    return day;
}
console.log(checkDayOfWeek(5.5));