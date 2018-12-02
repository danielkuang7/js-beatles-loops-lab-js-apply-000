// add solution here
function theBeatlesPlay(musicians, instruments) {

     var allMusicians = [];

     for (var i=0; i < musicians.length; i++) {
         allMusicians.push(musicians[i]  + " plays " + instruments[i]);
     }
     return allMusicians;
 }
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

var facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];

function johnLennonFacts(arr) {
var result= [];
var i = 0;
while(i < arr.length) {
result.push(arr[i] + '!!!')
i++;
}
return result;
}


function iLoveTheBeatles(number) {

let allMusicians = [];
do {
allMusicians.push(`I love the Beatles!`); //this will happen one time, whether or not number meets condition below
number++; //increment number of times string above is pushed into newArray
} while (number < 15); //(that number subracted from 15 will be the output number of times the string is logged);

return allMusicians; // this needs to be outside the loop, otherwise only first item will be returned
}
