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
            console.log(" Invalid Day")
            break;
    }
}

dayNumber(0)