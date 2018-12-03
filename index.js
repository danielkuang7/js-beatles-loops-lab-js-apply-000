function theBeatlesPlay(musicians, instruments){
  var allMusicians = [];
  for (var i=0; i < musicians.length; i++){
  allMusicians.push(musicians[i] + " plays " + instruments[i]);
}
  return allMusicians;
}

function johnLennonFacts(arr){
  var result = [];
  var i = 0;
  while(i < arr.length){
  result.push(arr[i] + '!!!')
  i++;
}
  return result;
}

function iLoveTheBeatles(number){

  let newArray = [];
  do {
    newArray.push(`I love the Beatles!`);
    number++;
     } while (number < 15);
  return newArray;
}
