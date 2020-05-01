/*
1- Write a function called countNumOfStrings that takes an array of mixed elements (different data types) 
and returns the number of strings there are in the array.
Calling your function should result in:
countNumOfStrings(["hello", "world", 5, true, {}]); //2
countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"]); //3
countNumOfStrings(["There is only one string in this example"]); //1
Hint: Recall typeof? If not: check it out on MDN. :-)
*/
function countNumOfStrings(array){
	var count = 0;
	for (var i=0 ; i<array.length ; i++){
		if(typeof(array[i]) === 'string'){
           count++;
		}
	}
	return count
}

/*
2- Write a function called  listLengthOfAllWords that takes an array of words (strings), 
and returns an array of numbers representing the length of each word.

Calling your function should result in:

listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5, 1, 3, 4];

*/
function listLengthOfAllWords(array){
	var lengthArr=[]
	for (var i=0 ; i<array.length ; i++){
		lengthArr.push(array[i].length)
	}
   return lengthArr
}
/*
Write a function called flipPairs that takes a string a parameter 
and returns the given string after Flip every pair of characters.
Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
*/
function each(coll, f) {
  if (Array.isArray(coll)) { 
    for (var i = 0; i < coll.length; i++) { 
      f(coll[i], i); //it will be called for each element
    } 
  } else { 
     for (var key in coll) { 
       f(coll[key], key); 
     } 
   } 
 }

function map(array, f) {
  var acc=[]
  each(array,function(element,i){//return element**2
    acc.push(f(element,i))
  })
  return acc
}

function  reverseString (string){
  var array = string.split('').reverse()
 // console.log(array)
  var x = array.length-1
  var result = map(array,function(element,i){
     return element

   })
  return result.join('')
}
function  flipPairs (string){
   var array = string.split(' ')
   var result=map(array,function(element,i){
     return reverseString(element)
   })
   return result.join(' ')
}





