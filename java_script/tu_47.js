console.log("hello world");
let name = "rafiya";
let name1 = "ayesha";
let name2 = "arshiya";
let name4 = "hunaid";
let greet_text="good morning";
console.log("happy birthday ",name);
console.log("happy birthday ",name1);
console.log("happy birthday ",name2);
console.log("happy birthday ",name4);
function wish(name,greet_text = "good Afternoon"){
    let name1 = "name1";
    // this name1 is not equal to outer name1
    console.log("happy birthday "+name);
    console.log(greet_text,name);
}
function sum(a,b,c){
    return a+b+c;
}
wish(name,greet_text);
wish(name1,greet_text);
wish(name2,greet_text);
wish(name4);
let returnval = sum(1,2,3);
console.log(returnval);

