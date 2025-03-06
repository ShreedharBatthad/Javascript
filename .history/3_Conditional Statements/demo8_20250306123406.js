let browser;
    switch (browser) {
        case "chrome":
            console.log("Launch Chrome")
            break;
         case "firefox":
                console.log("Launch firefox")
                break;
         case "edge":
            console.log("Launch Edge")       
         default:
            console.log("Enter the right browser")
            break;
    }
    
    console.log(browser("chrome"));