const myArr=[1,2,3,4,5,9]
myArr.push(6)//".push" method pushes the passed value which is 6 here in the array(i.e,myArr)
myArr.push(8)
console.log(myArr);

const myArr1=[42,5,9,32,21,99]
myArr1.pop()//"pop()" deletes the last value from the array
console.log(myArr1);

const myArr2=[42,5,9,32,21,99]
myArr2.unshift(57)//This method shifts all the values and put the value passed in the "unshift()" at the 0th index
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
console.log(typeof myArr1);//output:object
console.log(newArr);
console.log(typeof newArr);//output:string
//newArr me myArr1 ke values store ho gaye lekin .join() ki wajah se string me convert ho gaya separated by commas