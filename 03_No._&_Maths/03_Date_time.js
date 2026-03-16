//Date is a object 
let myDate=new Date()
console.log(typeof myDate)
console.log(myDate);//output:2026-03-16T18:00:28.675Z
console.log(myDate.toString());//converted date to string with output:Mon Mar 16 2026 23:30:28 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//output:Mon Mar 16 2026
console.log(myDate.toISOString());//output:2026-03-16T18:00:28.675Z
console.log(myDate.toJSON());//output:2026-03-16T18:00:28.675Z
console.log(myDate.toLocaleDateString());//output:16/3/2026
console.log(myDate.toLocaleTimeString());//output:11:30:28 pm
console.log(myDate.toLocaleString());
//output:16/3/2026, 11:30:28 pm
//Very Important property 



let myCreatedDate=new Date(2026,0,16)
//Months start form zero in javascript 
console.log(myCreatedDate.toDateString());
//output:Fri Jan 16 2026

let myCreatedDate1=new Date("2026-03-16")
//Months start form zero in javascript 
console.log(myCreatedDate1.toLocaleString());
//output:Fri Jan 16 2026

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
//getTime()returns the no. of milliseconds since the epoch( january 1 1970)
//Date.now() returns current timestamp in milliseconds and represents the number of milliseconds since the Unix Epoch.


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
//starts from 0th month
//output:2
console.log(newDate.getDay());
//output:1 (Starts from monday,tuesday....etc so the count is 1)