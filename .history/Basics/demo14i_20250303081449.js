let a = " block level identifier and not hoisted"
var b = " global level identifier and hoisted"
const c = "once assign the value we cannot change it and not hoisted"

console.log("c is: " + typeof c, ",     b is :" + typeof a,  ", a is: "+ typeof a);