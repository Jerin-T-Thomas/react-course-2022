

// 11. Define a variable limit Print your name using for loop the no of times the value is assigned to the variable limit.

var limit = 5
var name = 'Jerin'
for(var i = 0; i<limit; i++){
    console.log(name)
}

// 12. Given a starting number and a decrement value, print all numbers from the starting number to zero deducting the decrement value each time. Starting - 13, Decrement - 4
// Output : 
// 13
// 9
// 5
// 1

var initialNum = 20
var decrement = 2
while(initialNum > 0){
    console.log(initialNum)
    initialNum = initialNum - decrement
}

// 13. Given a string print all the consonants which are not a,e,i,o,u using for loop.
// Hint: use && operator and !== ‘a’ like this inside a conditional statement.

var str = 'bat'
for(var i=0; i<str.length; i++){
    if((str.charAt(i) !== 'a' ||  str.charAt(i) !== 'e' || str.charAt(i) !== 'i' || str.charAt(i) !== 'o' || str.charAt(i) !== 'u') 
    && (str.charAt(i) == 'b' || str.charAt(i) == 'z' || str.charAt(i) == 'h' || str.charAt(i) == 't' || str.charAt(i) == 'g')) {
        console.log(str.charAt(i))
    }
}

// 14. Given a string print the odd indexes of that string using for loop
// Example: “react” => print e, c, t

var str = 'samsung'
for(i=0;i<str.length;i++){
    if(i%2 !== 0){
        console.log(str.charAt(i))
    }
}

// 15. Given a Pincode validate it with the below conditions
// It should be length of 6
// It should start with 5
// There should be at least one zero

var pin = '585514'

if(pin.length !== 6){
    console.log("Length of pincode should be 6 digits")
}

if(pin.charAt(0) != 5){
    console.log('First digit of pincode should be 5')
}
var count = 0
for(i=0;i<pin.length;i++){
    if(pin.charAt(i) == 0){
        count++
    }
}
if(count == 0){
    console.log('Atleast one zero is necessary')
}

// 16. Given a string print "YES" if it is a palindrome and print "NO" if it is not 
// A palindrome is a word that reads the same backward as forward, such as  madam, bob

var str = 'madam'
for(var i = 0; i<str.length/2; i++){
        if(str.charAt(i) != str.charAt(str.length -1 -i)){
            console.log('NO')
    }
    else {
        console.log('YES')
    }
}
 
// 17. Given an array of strings, remove all the odd-length strings from it
// Sample Input: [‘edstem’, ‘react’, ‘html’, ‘foodie’, ‘coder’’  ]
// Sample Output: [ ‘edstem’, ‘html’, ‘foodie’ ]

input = ['edstem', 'react', 'html', 'foodie', 'coder']
for(var i=0; i<input.length; i++){
    if(input[i].length % 2 != 0){
        input.splice(i,1)
    }
}
console.log(input)
 
// 18. Given a string split it into an array of words
// Sample Input - "I’m learning javascript basics"
// Sample Output - ["I’m", "Learning", “javascript”, “basics”]
// Note: Don’t use str.split(‘ ‘) method
// Hint: you can use for loop and push method

var str = "I’m learning javascript basics"
var word = '', result = []

for (char of str) {
  word = char == ' ' ? (result.push(word), "") : (word + char);
}

result.push(word);
console.log(result)

// 19. Given a sentence print the count of words (Separated by a space character)
// Sample Input- "Coding is Easy"
// Sample Output:- 3

var input = "Coding is Easy"
console.log(input.split(" ").length)
 
// 20. Given an array of string join them with a comma ,
// Sample Input - ["HTML", "CSS", "JAVA", "JS"]
// Sample Output - HTML,CSS,JAVA,JS

input = ["HTML", "CSS", "JAVA", "JS"]
console.log(input.join())
 
// 21. Given an array of game, scores print the highest and lowest score
// Sample Input - [100, 20, 31, 150, 39, 72]
// Sample Output - 150 
// 		   20

input = [100, 20, 31, 150, 39, 72]
var highest = input[0];
var lowest = input[0];

for (var i = 1; i < input.length; i++) {
  if (input[i] > highest) {
    highest = input[i];
  } else if (input[i] < lowest) {
    lowest = input[i];
  }
}
console.log(highest);
console.log(lowest);

// 22. Given a matrix print the first diagonal
// Sample Input:  [[1, 2, 3], [4, 5. 6], [7, 8, 9]]
// Sample Output: 1, 5, 9

input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for(i=0;i<input.length;i++){
    console.log(input[i][i])
}

// 23. Given a 2d Array print the difference between first and second diagonals sum 
// Sample Input - [
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7,  8, 9]
// ]
// 	Sample Output - First Diagonal -> 1+5+9 ->  15
// 			Second Diagonal -> 3+5+7 -> 15
// 			Difference => 15-15 -> 0

input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
sum1 = 0
sum2 = 0
for(i=0;i<input.length;i++){
    sum1 = sum1 + input[i][i]
    sum2 = sum2 + input[input.length-1-i][i]
}
console.log('Difference is ' +(sum1 - sum2))