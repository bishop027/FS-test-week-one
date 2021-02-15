/*------------------
1)
Write a function that determines
if a number is a palindrome. A number is a
palindrome if it reads the same forwards and
backwards. 

Note:
- All negative numbers should return false.
- Single numbers should return true.

------------------*/
function isPalindrome(num) {
    num = num + "";
    return num.split("").reverse().join("") == num;
}

// I converted the numbers into a string (what we did in a previous hmwk assignment)
// which automatically returned negative numbers as FALSE. 
// I did not need to callback any numbers, since there was no const array.
// Split/reverse/join takes the number and breaks it down into 'individual elements', reverses the order, and joins it back together into one string.
// I only returned numbers that were equal to the original number presented in the console.log.
// Hope this makes sense!


//In our previous homework assignment, we used these methods to check for palindromes.
//(.split('').reverse().join(''));

// Test cases:
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(1)); // true
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false

/*------------------
2)
Create a function that takes a grid
as an argument and adds all the numbers
in that grid together.

Examples:
const y = [[[1], [2]]];
console.log(addGridItems(y)); // 3

------------------*/
const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];

function addGridItems(grid, arr) {
    let total = 0;
    for (let i  = 0; i < x.length; i++){
       total = x.reduce((acc, curVal) => acc + curVal);
 
    }
    return total;
}

// I've been trying to get this for a while now, but unfortunately, I'm running out of time. 


console.log(addGridItems(x)); // 50

/*------------------
3)
Create a function that turns a string into a
file name: all letters are lowercase, spaces are
swapped for underscores, and it includes a
file extension. 

This function should take two parameters: the string, 
and the type of file it is (so you know what file
extension to add). You only need to cover
the extensions below:
- PDF: .pdf
- image: .png
- JSON: .json
------------------*/
function createFileName(x, y) {
    return (x.replace(/ /g,"_").toLowerCase() + "." + y.toLowerCase());
}

// I probably could have done this a more efficient way, but I'm worried about time.
// Originally, I tried ".join" to add to join parameter y with a period, but it didn't work.
// I looked up the "replace" method online to help shorten my code. 


// Examples:
console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"

/*------------------
4) Print the following pattern
99 96 93 90 88
99 96 93 90
99 96 93
99 96
99
------------------*/
// Hints:
// - Use a loop within a loop.

// My computer has crashed a lot during this exercise. Sorry about the long
// time lapse to hand in the assignment! Originally, I thought I needed to
// a math equation to get the pattern, but after failing, I am trying to do
// the nested loops. (similar to a star pattern exercise we did during our Loops lesson)


// **1st attempt**
// let arr = [99, 96, 93, 90, 88];
// for (let i = 5; i >= 1; i--) {
//     for(let j = 1; j <= i; j++) {
//     }
//     console.log(arr);
// }


// **Second attempt**
// unable to loop through the array correctly.

// let arr = [99, 96, 93, 90, 88];
// for (let i = 5; i >= arr.length; i--) {
//     for(let j = 5; j <= i; j++) {
//     }
//     console.log(arr);
// }



