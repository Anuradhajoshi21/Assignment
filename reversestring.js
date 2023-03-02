/*1.Reverse a string: Write a function that takes a string as input and
 returns the reversed version of the string.*/

function reversestring(string) {

    let newstring = "";
    for (let i = string.length; i >= 0; i--) {
        newstring += string[i];

    }
    return newstring;

}
 let revstr= reversestring("HEllo");
console.log('reverse string',revstr);

//2.reverse a string
/*const string = "anuradha";
const result = reversestring(string);
console.log(result);
*/



/*2.Find the largest number in an array: Write a function that takes
 an array of numbers as input and returns the largest number in the array.*/

function largestnumber(arr = [1, 16, 3, 8, 5]) {
    let max = arr[0];
    for (let i = 0; i < 5; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    const ans = console.log('max:', max);
    //return max;

}
largestnumber();


/*3. Find the longest word in a string: 
Write a function that takes a string as input and returns the longest word in the string.*/
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
console.log(longestWord("Anuradha is a beautiful girl"));



/*4.Merge two arrays: Write a function that takes two arrays as input
 and returns a new array that contains all the elements from both arrays.*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
function mergearray(arr1, arr2) {
    const arr3 = arr1.concat(arr2); 
    console.log('mergearray is', arr3);
}
mergearray(arr1, arr2);



/*5.Sort an array: Write a function that takes an array of numbers as input and 
returns a new array that is sorted in ascending order*/

function sort_array(arr){
    let i,j;
    for(i=0;i<5;i++){
        for(j=i+1;j<5;j++){
            if(arr[i]>arr[j]){
                 let temp =arr[i];
                 arr[i]=arr[j];
                 arr[j]=temp;
            }
        }
    }
    for(i=0;i<5;i++){
        console.log(arr[i]);
    }
}
sort_array([2,5,7,3,1]);



/*6.Find the average of an array: Write a function that takes an array of numbers as input
 and returns the average of all the numbers in the array.*/

 const array=[1,2,3,6];
 function avg(array){
    var avg =0;
    for(let i=0;i<array.length;i++){
        avg +=array[i];
    }
    let AVG=avg/array.length;
    console.log("avg is",AVG);
 }
 avg(array);
 
 /*7.Count the number of vowels in a string: Write a function that takes a string as
  input and returns the number of vowels in the string.*/

  const string="anuradha";
 function vowelsno(str){
    var vowelscount=0;
const vowels =['a','e','i','o','u'];
for(let i=0;i<string.length-1;i++){
    if(vowels.includes(i)){
        vowelscount++;
    }
}
console.log("vowels:",vowelscount);
 }
 vowelsno(string);




 /*8.Remove whitespace from a string: Write a function that takes a string as input
  and returns the same string with all whitespace characters removed.*/

const string1 ="     HELLO     ";
 function remove_whitespace(string){
    let res=string1.trim();
    console.log('all whitespace is removed:',res);
 }
 remove_whitespace(string1);




 /*9.Remove duplicates from an array: Write a function that takes an array as input
  and returns a new array that contains only unique elements from the input array.*/
 var inputArray = [];
 var n = 5; 
 for(var i=0; i<n; i++) {
	inputArray[i] = prompt('Enter Element ' + (i+1));
}

console.log(inputArray);
 
 function duplicate_element(Arr){

for(i=0;i<n;i++){
    for(j=i+1;j<n;j++){
        if(inputArray[i]===inputArray[j]){
for(k=j;k<n-1;k++){
    inputArray[k]=inputArray[k+1];
    n--;
    j--;
}
        }
    }
}
for(i=0;i<n;i++){
console.log('unique elemnt array is:',inputArray[i])
}
 }
 duplicate_element(inputArray);





 
 


