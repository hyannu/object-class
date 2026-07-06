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


//nested if else key word
 
/*let age = 19;
if(age >= 18) {
    if(age >= 60){
        console.log("senior");
    }
}else {
    console.log("child");
}*/

// nested loops

/*for(let i = 0; i<5; i++){
    let str ="";
    for(let j = 0; j<5; j++){
      str=str+1;
    }
}console.log(str);
*/

/*function getData(dataId, getNextData) {
    //2second
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    },2000);
}
    
getData(1, () => {
    console.log("getting data2......");
    getData(2, () => {
        console.log("getting data3....");
    getData(3, () =>{
        console.log("getting data4")
        getData(4);
    });

    });
});
*/

//permises
let permise  = new Promise((resolve, reject) =>{
    console.log("I am a promise");
    // resolve("success");
    reject("sum error");
});






















