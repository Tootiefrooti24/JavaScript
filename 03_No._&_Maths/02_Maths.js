//Maths library comes with javascript by default.Math is a object and has lots of properties like sqrt,LN,etc. We can check that by printing Math on console

console.log(Math);
console.log(Math.abs(-4));//"abs" give absolute value which always gives positive
console.log(Math.round(4.6));//"round" gives round off values

console.log(Math.ceil(4.2));
//output:5
//"ceil" gives roundoff value greater than 4.2 or some other no. which means it gives top value


console.log(Math.floor(4.2));
//output:4
//"floor" gives roundoff value smaller than 4.2 which means it gives lowest value

console.log(Math.min(4,-1,24,33));//Math.min gives the minimum value from the array or some list of numbers

console.log(Math.max(4,-1,24,33));//Math.max gives the maximum value from the array or some list of numbers

console.log(Math.random());
//output:0.6984563702736 (changes everytime we run the program)
//"random"gives any random value between 0-1 with decimal no.s also

console.log((Math.random()*10)+1);//Agar hume 0 aur 1 ke alawa koi dusra no. chahiye toh humne 10 se multiply kar diya jisse decimal point shift ho jaaye aur koi dusri value value mile.If the value is 0.67845 and saathme floor() function use hua hai and multiplied by 10  it will still remain 0 so avoid it we added 1 afterwards.

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)) + min)
//when we use random() we try to get the smaller value so we also use floor() for getting smaller random value
//Now we want answers between some range like from 10 to 20... we want no.s b/w them so to get range we subtracted both and added 1 to avoid    getting 0 in the answer..........We also the wanted the minimum answer to be 10 so in the end we added min 
//It is a kind of formula so remember it