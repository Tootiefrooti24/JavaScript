//These are Comparison Operators which will return ans in boolean values
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

/*When we compare two values then their datatype should be same always.......Sometimes Javascript automatically convert one datatype into another when it is required and if it is convertible but prefer to have same datatypes*/
//Example
console.log("2">1);//Not preferred
console.log("02">1); 


//"==" and comparison opertaors work differently.Comparisons convert null to a number,treating it as 0.Therefore,null>=0 is true and null>0 is false
console.log(null>0);//output:false
console.log(null==0);//output:false
console.log(null>=0);//output:true

console.log("2"===2)//output:false cuz "===" checks not only values but datatype also
