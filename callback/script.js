/*function  hello(){
    console.log("hello");
}
setTimeout(hello, 2000);//timeout
*/



/*setTimeout(() => {
console.log("hello");
},4000);//timeout;
*/
 

//Synchronous programming call back function

/*function sum(a,b) {
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,(a,b) =>{
    console.log(a+b);
});
*/

/*const hello = () =>{
    console.log("hello");
};
setTimeout(hello,3000);
*/


//nesting key word
 
let age = 19;
if(age >= 18) {
    if(age >= 60){
        console.log("senior");
    }
}else {
    console.log("child");
}
