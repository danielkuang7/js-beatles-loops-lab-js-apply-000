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
