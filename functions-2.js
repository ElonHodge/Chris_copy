const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const arrayNum =[1,2,3,4];
const arrayWords=["wordOne","wordThree","wordFour","wordSeventeen"]
const str = "jag tester";



// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

maxOfTwoNumbers = (x,y) => {
  // ADD YOUR CODE HERE
    return Math.max(x,y);
};
console.log( "1) maxOfTwoNumbers: "+maxOfTwoNumbers(5,6))

/*2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.*/
maxOfThree = (...x) => {
  // ADD YOUR CODE HERE
   return Math.max(...x);
};
console.log("2) maxOfThree: "+maxOfThree(...arrayNum))

/*3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/

isCharacterAVowel = (chr) => {
  // ADD YOUR CODE HERE
    let reg = /[aeiou]/i;
    return reg.test(chr);
};
console.log("3) isCharacterAVowel: "+isCharacterAVowel('A'))

/*4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.*/

sumArray = (array) => {
  // ADD YOUR CODE HERE
    let total = 0;
    for (let i = 0; i < array.length; i++)
        total+=array[i]
    return total
};
multiplyArray = (array) => {
    // ADD YOUR CODE HERE
    let total = 1
    if (Math.min(...array) > 0)
    for (let i = 0; i < array.length; i++)
        total*=array[i];
    return total;
};

console.log("4.1) sumArray: "+sumArray(arrayNum));
console.log("4.2) multiplyArray: "+multiplyArray(arrayNum));


/*5.Write a function that returns the number of arguments passed to the function when called.*/

function numberOfArguments(x,y,z){
    return arguments.length;
}
console.log("5) numberOfArguments: "+numberOfArguments(1,2));

/*6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".*/

reverseString = (str) => {
  // ADD YOUR CODE HERE
    let array =[];
    for (let i = 0; i < str.length; i++) {
        array.push(str[i])
    }
    return array.reverse();
};

console.log("6) reverseString: "+reverseString(str))

/*7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.*/

findLongestWord = (array) => {
  // ADD YOUR CODE HERE
    let max = "";
    array.forEach(element=>{
    if (element.length > 0) max = element.length;
    })

    return max;
};
 console.log("7) findLongestWord: "+findLongestWord(arrayWords))

/*8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.*/

filterLongWords = (array,num) => {
  // ADD YOUR CODE HERE
    let filterArray = [];
    array.forEach(element=>{
    if (element.length > num) filterArray.push(element);
    })
    return filterArray;

};

console.log("8) filterLongWords: " +filterLongWords(arrayWords,11))

// Bonus
String.prototype.reverseString = function (){

    let array = [];
    for (let j = 0; j <alphabet.length ; j++) {
        let counter = 0;
        for (let i = 0; i <this.length ; i++) {
            if (  alphabet[j] === this.charAt(i).toLowerCase()){
                counter ++;
            }

        }
        if (counter > 0){
            array.push(alphabet[j]+" : "+counter);

        }


    }
    array.forEach((element)=>{
        console.log(element)
    })

}


"Per Scholas".reverseString()


