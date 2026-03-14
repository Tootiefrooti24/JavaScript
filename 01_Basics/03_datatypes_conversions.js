let score=33

console.log(typeof score);
    //OR
console.log(typeof (score));


//If we want to change it in another dataype or perform datatype conversion then

let scores="45"
let valueInNumber=Number(scores);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"-->33
//"33abc"-->NaN
//true-->1; false-->0

/*Boolean conversion example*/
let isLoggedIn=1
let booleanIsLogegdIn=Boolean(isLogegdIn)
console.log(booleanIsLogegdIn);//output:true...cuz 1 is converted into boolean

//1-->true 0-->false
//empty string=""-->false dega
//"hitesh"-->true dega

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);//after converting number to string  output will be 33 but when we check its type it will show string only
console.log(typeof stringNumber)
