const userInfo = [
  {name: 'Jon Doe', hobby: 'Skating', age: '25'},
  {name: 'Jane Doe', hobby: 'Reading', age: '30'},
  {name: 'John Doe', hobby: 'Coding', age: '35'},
  {name: 'Jenny Doe', hobby: 'Skiing', age: '40'},
];

console.table(userInfo);  //prints the array in a table format

//swap two elements in the 
const swap = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

//word occurence in a string
//this counts the total number of occurences of a word in a string
const countOccurence = (str, word) => {
  const regex = new RegExp(word, 'gi');
  return str.match(regex).length;
}
console.log(countOccurence('The quick brown fox jumps over the lazy dog', 'the'));

//extract the first and last name from a string
const extractName = (str) => {
  const name = str.split(' ');
  return {firstName: name[0], lastName: name[name.length - 1]};
}
console.log(extractName('Jon Doe'));

//sum of all the numbers in an array
const sum = (arr) => {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sum([1, 2, 3, 4, 5]));

//return the average of all the numbers in an array
const average = (arr) => {
  return sum(arr) / arr.length;
}
console.log(average([1, 2, 3, 4, 5]));

//determine if a string is a palindrome
const isPalindrome = (str) => {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome('racecar'));

//validate a credit card number
const validateCreditCard = (num) => {
  const digits = num.toString().split('');
  let sum = 0;
  for(let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);
    if(i % 2 !== 0) {
      digit *= 2;
      if(digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}
console.log(validateCreditCard(79927398713));

//convert a string to an array
const stringToArray = (str) => {
  return str.split('');
}
console.log(stringToArray('hello'));

//eligible to vote
//this determines if a person is eligible to vote based on their age
const eligibleToVote = (age) => {
  return age >= 18;
}
console.log(eligibleToVote(18));

//validate a phone number
const validatePhoneNumber = (num) => {
  const digits = num.toString().split('');
  return digits.length === 10 && digits[0] === '1';
}
console.log(validatePhoneNumber(1234567890));
