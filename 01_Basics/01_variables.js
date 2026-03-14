const accountId=1445533 
// accountId=2
//const ko hum change nahi kar sakte ...for eg we gave new value 2 to accountId but compiler throws an error ....which means once accountId is declared as const then it cannot change values

let accountEmail="Tootiefrooti@gmail.com"
accountEmail="Tootie@gmail.com"
// "let" and "var" dono me values change karne pe change ho jaa rahi hai unlike "const".....so what is the diff.....The diff is earlier in initial days var was used and it used to create some difficulties because it cannot understand blockscopes  and functional scopes which is handled correctly by "let"

var accountPassword="12345"
accountPassword="21212121"
// prefer not to use Var from now on 

accountCity="Jaipur"
accountCity="Ahmedabad"
// we can also write variables like this and reserve memory but it is not a good way 

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])
