const name="Shruti Pandey"
const repoCount=50
// console.log(name+ repoCount + " Mango");...not recommended
//This(`Hello`) symbol is called backtick and the method in which we wrote is called String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//we can declare String using two methods:-
// 1.const name="Shruti"
// 2.const gameName=new String('Shruti Pandey')

//Both are same and works fine but interesting thing about using 2nd method is that when we run it in console it gives output in key value-pair type like...... String {'Shruti Pandey'} 0: "S"1: "h"2: "r"3: "u"4: "t"5: "i"6: " "7: "P"8: "a"9: "n"10: "d"11: "e"12: "y"length: 13[[Prototype]]: String[[PrimitiveValue]]: "Shruti Pandey".......aur saathme bahut saare methods ke options aayenge jisse hum string ko uppercase ,lowercase etc etc kar sakte hai

const gameName=new String('Tootiefrooti')


/*********Methods in String**********/ 
console.log(gameName[4]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString=gameName.substring(0,4)//0 se 3rd index tak ke letters print honge excluding letter at index 4.It does not obey negative values
console.log(newString);


const anotherstring=gameName.slice(-8,-3)
console.log(anotherstring);

const newstringOne="    Tootifrootie  "
console.log(newstringOne.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','_'))
console.log(url.includes('sundar'))

