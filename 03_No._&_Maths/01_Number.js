  const score=400
  console.log(score);

  const balance=new Number(100)
  console.log(balance);

  console.log(balance.toString());//balance is converted to string now
  console.log(balance.toString().length);
  console.log(balance.toFixed(2));//used when we want precision in decimals like i got some result of some addition to be 12.345627 but i want it upto 3 decimal places then i will pass 3 to the "toFixed()" function.

  const otherNumber=123.8966
  console.log(otherNumber.toPrecision(3));//toPrecision me jitna value pass kiya hai utne total digits print honge in output roundoff hone ke baad like 123.9 cuz 4 was passed in precision isiliye 4 digits aaye...if 3 was passed then output is 124

  const hundreds=1000000
  console.log(hundreds.toLocaleString('en-IN'));//toLocaleString returns a number as a string, using local language format.Default setting is of US type of no.system so to get it in indian system we passed "en-IN" in the function
  