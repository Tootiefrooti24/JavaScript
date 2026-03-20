const myArr=[1,2,3,4,5,9]
myArr.push(6)
//".push" method pushes the passed value which is 6 here in the array(i.e,myArr)
myArr.push(8)
console.log(myArr);

const myArr1=[42,5,9,32,21,99]
myArr1.pop()
//"pop()" deletes the last value from the array
console.log(myArr1);

const myArr2=[42,5,9,32,21,99]
myArr2.unshift(57)
//This method shifts all the values and put the value passed in the "unshift()" at the 0th index
console.log(myArr2); 
console.log(myArr2.includes(99));
//output:true
//".includes()" helps us to find whether the value passed inside is present or not...it gives ans in true or false
console.log(myArr2.includes(37));
//output:false
console.log(myArr2.indexOf(99));
//Returns the index of the value passed and if the element is not present in the array then output will be "-1"

const newArr=myArr1.join()
//Adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr1);
console.log(typeof myArr1);
//output:object
console.log(newArr);
console.log(typeof newArr);
//output:string
//newArr me myArr1 ke values store ho gaye lekin .join() ki wajah se string me convert ho gaya separated by commas



const myshru=["apple","strawberry",24,12,1,15]
console.log("A ",myshru);
const myn1=myshru.slice(1,4)
//".slice" hume ek array ka section return karta hai.In this example,start index(jo inclusive hota hai) is 1 and end index(jo exclusive hota hai matlab ye included nahi hota hai) is 4 so .slice humara 1 se 3rd index tak ka value return kardega which is strawberry to 12
console.log(myn1);
console.log("B ",myshru);


const myn2=myshru.splice(2,4)
// Splice Removes elements ,(Optionally) inserts elements and Modifies the original array
console.log("C",myshru);
console.log(myn2);
//myshru array ko splice karte hue myn2 me store kiya phir myshru(jo original array thi) usko print kiya toh jo values spliced ho gayi thi unko chhorke baaki ki values print ho gayi....lekin jab myn2 (jisme spliced myshru ko store kiya tha) ko print kiya tab output me wahi values aayi jo spliced ho gayi thi....which means original_array spliced hoke print hogi and jis array me vo store hota hai vo array me spliced value hi print hogi


//Splicing works like this...usme 1st value is the starting index from where splicing will start and the end index the count of elements you want to delete from the start index
/*Step 1
const myn2 = myshru.splice(2,4);
Break it:
start = 2 → value = 24
deleteCount = 4 → remove 4 elements starting from index 2
Now do it like a machine (not intuition)
Original array with index:
0 → apple  
1 → strawberry  
2 → 24  
3 → 12  
4 → 1  
5 → 15
Remove 4 elements starting from index 2:

Remove:
24 (index 2)
12 (index 3)
1  (index 4)
15 (index 5)
What remains:
["apple", "strawberry"]
What gets returned:
[24, 12, 1, 15]
*/
