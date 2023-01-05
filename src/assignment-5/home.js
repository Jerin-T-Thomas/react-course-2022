// 1. Given an array of numbers print the square of those numbers
//     Sample Input: [2, 3, 5, 7, 9]
//     Sample Output: 4 9 25 49 81
//     Bonus: use square() function and forEach HOF

numbers = [2, 3, 5, 7, 9]
numbers.forEach(element => {
    console.log(Math.pow(element,2));
});


// 2. Given an array of numbers generate an array containing the double value of the numbers
//     Sample Input [1, 2]
//     Sample Output [2, 4]

input = [1, 2]
output = []
input.forEach(element => {
   output.push(element*2);
});
console.log(output)

// 3. Given an array of numbers extract the numbers divisible by 3
//     Sample Input - [1,2, 3]
//     Sample Output - [3]

input = [1,2,3]
output = []
input.forEach(element => {
    if(element%3==0){
    output.push(element);
    }
 });
 console.log(output)

// 4. Given an array of numbers print the product of all numbers
//     Sample Input - [2,3, 4]
//     Sample Output - 24

input = [2,3,4]
var num = 1
for(i in input){
    num = num * input[i]
}
console.log(num)

// 5. Given an array of strings print the length of each string

input = ['samsung','rollercoaster','pam','apple']
input.forEach(e =>{
    console.log('length of ' +e +' is ' +e.length)
})

// 6. Given an array of string generate an array with their first characters
//         Sample Input - ["Edstem", "Tech"]
//         Sample Output - ["E", "T"]

input = ["Edstem","Tech"]
output = []
input.forEach(e => {
output.push(e.charAt(0))
})
console.log(output)

// 7. Given an array of string generate an array whose first or last character is a
//         Sample Input- ("assignment", "problem", "media", "upload"]
//         Sample Output - ["assignment", "media"]

input = ["assignment", "problem", "media", "upload"]
output = []
input.forEach(e => {
    length = e.length
    if(e.charAt(0) == 'a' || e.charAt(length-1) == 'a'){
        output.push(e)
    }
})
console.log(output)

// 8. Given an array of strings print the snake case of the strings [Assume Small case strings]
//         Sample Input - ["edstem", "tech"]
//         Sample Output edstem_tech

input = ["edstem", "tech"]
var output = ''
input.forEach(e => {
    if(e == input[0]){
    output = e
    }
    else{
    output = output +'_' +e
    }        
})
console.log(output)