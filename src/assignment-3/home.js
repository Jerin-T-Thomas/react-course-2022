//1. Write a function named addNumbers which takes two numbers as input and returns their sum

function addNumbers(num1, num2){
sum = num1 + num2
return sum
}
console.log(addNumbers(3,4))


//2. Write a function to find the absolute difference between two numbers
// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14

function absoluteDiff(){
    console.log(Math.abs(3 - 9))
}
absoluteDiff()

//3. Write a function isOdd which returns a boolean value based the number is odd or not

function isOdd(num1){
    if(num1%2 == 0){
        return false
    }
    else{
        return true
    }
}
console.log(isOdd(5))

//4. Given an array with name, age and gender convert it to object and print keys and values by looping over it using for in loop
// Sample Input: [‘radhe’, 22, ‘M’]
// Sample Output: name - radhe
// 		  age - 22
// 		  gender - M

input = ['radhe', 22, 'M']
output = {'name':'radhe', 'age':22, 'gender':'M'}

console.log(Object.keys(output))
console.log(Object.values(output))
console.log(output);

//5. Given a string , calculate the occurrence of each and every character and print the output.
// Sample Input: ‘edstem’
// Sample Output: e - 2
// 		 d - 1
// 		 s - 1
// 		 t - 1
// 		 m - 1

var input = 'edstem'

const counts = {}

for (const ch of input) {
    const count = counts[ch] || 0;
    counts[ch] = count + 1;
}
for (const ch in counts) {
    console.log(`${ch} - ${counts[ch]}`);
}

//6. Given users' names and their phone numbers, query the given user and find the phone number.
function userPhone(str){ 
user = {'sam':9876567489, 'aby':8987564738, 'ash':89057683920}
console.log(user[str]);
}
userPhone('ash')