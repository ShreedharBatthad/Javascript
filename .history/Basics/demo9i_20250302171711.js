var pop = "hi js";
 function rel(){
    var top = "hello";
    console.log(top);
 }
// it will throw an error, because var is only applicable for global scope, but here we calling from local, thats why we get an error.
//  console.log(top);
 rel();
 console.log(pop);