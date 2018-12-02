// add solution here
function theBeatlesPlay(musicians, instruments) {

     var allMusicians = [];

     for (var i=0; i < musicians.length; i++) {
       // John Lennon plays Guitar
       allMusicians.push(`${musicians[i]} plays ${instruments[i]}`)
        //  allMusicians.push(musicians[i]  + " plays wells with " + instruments[i]);
         // ["John Lennon plays Guitar"] 0
         // ["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar"] 1
     }
     //["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]
     return allMusicians;
 }

function johnLennonFacts(facts) {

  var result= [];
  for (var i=0; i< facts.length; i++){
    result.push(`${facts[i]}!!!`)
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
