// let a=10;
// let b=3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);



// let x=5;
// x=x+3;
// x += 2;
// x -=2;
// x *=4;
// x /=2;
// console.log(x);


// let count=5;
// count++;
// count--;
// console.log(count);




// console.log(a);
// var a=10;


// console.log(b);
// let b=10;


// tst()
// function tst(){
//     console.log("hey");
    
// }



// fun()
// var fun=function(){
//     console.log("hey");
    
// }

// questions:-What gets hoisted?
//  What does not get hoisted fully?
// answer:function is fully hoisted
//         let and const is not fully hoisted



// let vott=prompt("age?")
// if(vott > 18){
//     console.log("adult");
    
// }
// else{
//     console.log("minor");
    
// }



// let marks=prompt("please enter marks");
// if(marks>=90){
//     console.log("A grade");
        
// }
// else if(marks>=75){
//     console.log("B grade");
    
// }
// else if(marks>50){
//     console.log("c grade");
    
// }
// else{
//     console.log("fail");
    
// }


// let city ="delhi";
// if(city == "bhopal"){
//     console.log("mp");
    
// }
// else if(city == "delhi"){
//     console.log('capital');
    
// }
// else{
//     console.log("unknown city");
    
// }


// let score=40;
// score>35?console.log("pass"):console.log("fail");


// let temp=35;
// temp>30?console.log("hot"):console.log("pleasant");


// let age=20;
// let country="india";
// if(age >18 && country === "india"){
//     console.log('eligible for vote');
    
// }
// else{
//     console.log("not eligile");
    
// }
// =========================loops and conditions===========================
// for(let i=1;i<=20;i++){
//     if(i % 2 === 0){
//         console.log(i);
        
//     }
// }


//7. let age=prompt(" please enter age?");
// if(age === null){
//     console.error("please enter value!!!");
    
// }                                           
// else {
//         // console.warning("please enter something");
//     if((age.trim() === "")) console.error("please enter something");
    
    
    

// else{
//     age=Number(age);

//     if(isNaN(age)){
//     console.error("please enter a number");
    
// }
// else{
//     if(age >=18){
//         console.log(`you eligible for vote \n your age is ${age}`);
//     }
//     else{
//         console.log(`${age} is not eligble for vote`);
//     }
    
// }
// }
// }



//8. for(let i=1;i<=10;i++){
//     console.log(`78 x ${i} = ${i*78}`);
// }


// 9.let count=0;
// for(let i=1; i<=15;i++){
//     if(i > 8){
//         // console.log(i);
//         // console.log(i);
//         count++;
        
//         console.log(count);
//     }
//     // console.log(`${count}`);
    
// }


// 10.let pass="joshi";
// let get=prompt("please enter password");
// if(pass===get){
//     console.log("your login successfully");
    
// }
// else{
//     console.log("your password is wrong");
    
// }

// ===================================level-2===================================
// 11.let count=0;
// let pass="joshi";
// let get= prompt("enter password");
// count++;
// if(get==pass){
//     console.log("done");
    
// }
// else{
//     for(let i=count;i<3;i++){
//     get=prompt("enter password");
//     count++;
//     if(get == pass){
//         console.log("done");
//         break;
//     }
// }
// if(count===3 && get != pass){
//     console.log("Account locked");
    
// }
// }


// 12.let count = 0;
// let get = prompt("Enter a word (type 'stop' to end):");

// while (get !== "stop") {
//     if (get === "yes") {
//         count++;
//     }
//     get = prompt("Enter a word (type 'stop' to end):");
// }

// console.log("You wrote 'yes' " + count + " times.");


//13. for(let i=1;i<=50;i++){
//     if(i%7===0){
//         console.log(i);
        
//     }
// }


// 14.let sum=0;
// for(let i=1;i<=30;i++){
//     if(i%2 != 0){
//         sum=sum + i;
//     }
// }
// console.log(sum);


//15. let get= +prompt("enter number");
// while(get%2 != 0){
//     if(get%2==0){
//         break;
//     }
//     get= +prompt("enter number");
// }


// 16.let first=prompt("enter start number");
// let last=prompt("enter last number");
// if(last<first){
//     console.log("plase enter right number");
    
// }
// for(let i=first;i<=last;i++){
//     console.log(i);
    
// }

// 17.let count=0;
// for(let i=1;i<=20;i++){
//     if(count===3)break;
//     if(i%2 != 0){
//         console.log(i);
//         count++;
//     }
// }

// 18.let count=0;
// for(let i=1;i<=5;i++){
//     let get=prompt(`enter number ${i}`);
//     if(get>0){
//         count++;
//     }
// }
// console.log(`positive number is ${count}`);



//19. let balance=1000;

// for(let i=1;i<=3;i++){
//     let get=prompt(`enter withdraw amount ${i}`);
//     if(get>balance && get != balance){
//         console.log("Insufficient balance");
//         break;   
//     }
//     else{
//         balance -= get;
//     }
// }
// console.log(`Total balance ${balance}`);    
