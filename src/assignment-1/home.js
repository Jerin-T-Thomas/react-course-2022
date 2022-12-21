//1. Print your name, age, and Marital Status by storing them in different variables

var name1 = 'Jerin'
var age = 24
var maritalStatus = 'Single'

console.log('Hi I\'m ' + name1 + ', ' + age + ' and ' + maritalStatus + '\n')

//2. Given the year of birth of a person, calculate his/her age (You can store the current year in a variable)

var yob = 1998
var currentYear = 2022

console.log('Age is ' +(currentYear-yob) + '\n')

//3. Given the 3 subject marks of a particular student calculate the total marks obtained

var maths = 95, physics = 98, chemistry = 100
console.log('Total Marks obtained is ' + (maths+physics+chemistry) + ' out of 300' + '\n') 

//4. Given the sides of a rectangle print the perimeter and area

var side1 = 20, side2 = 60
var perimeter = 2 * (side1+side2)
var area = side1 * side2
console.log('Perimeter of the rectangle is ' + perimeter + '\n')
console.log('Area of the rectangle is ' + area + '\n')

//5. Given a number of total months find the number of months remaining after converting the total months to years
// Sample Total Months - 26 Remaining Months - 2

var totalMonths = 54
var remainingMonths = totalMonths % 12
console.log('Remaining number of months is ' + remainingMonths + '\n') 

//6. Given 3 product prices and their quantity calculate the total amount of items in the cart

var product1 = 1080.5
var product2 = 234
var product3 = 99.9
var total = product1 + product2 + product3
console.log('Total value of products in cart is: ' + total + '\n')

//7. Give a single character (small or upper case) if it is a Vowel print "V" in the case of consonant print "C"

key = 'i'
vowel = ['a','A','E','e','I','i','O','o','U','u']
consonant = ['Z','z','B','b','T','t','G','g','H','h']
if(vowel.includes(key)){
    console.log(key + ' is a vowel \n')
}
else if(consonant.includes(key)){
    console.log(key + ' is a consonant \n')
}
 
//8. Given a number print if it is either "EVEN" or "ODD" (Use ternary Operators)

num = 50
num % 2 == 0 ? console.log(num + ' is an even number \n') : console.log(num + ' is an odd number \n')

//9. Given the shirt size code "S", "M", "L", "XL" print the corresponding names "Small", "Medium", "Large", "Extra Large", "None" (For not a valid code)
 
code = 'M'
switch (code) {
    case 'S':
        console.log('Small')
        break
    
    case 'M':
        console.log('Medium')
        break
    
    case 'L':
        console.log('Large')
        break
            
    case 'XL':
        console.log('Extra Large')
        break
    
    default:
        console.log('None')
}

//10. Given a string of PIN Code (with all digits) and print "VALID" or "INVALID" (a PIN code is only valid if it has 6 digits)

pin = '685514'
pin.length == 6 ? console.log('VALID') : console.log('INVALID')