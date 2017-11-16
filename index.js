// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function (name){ return name===string || name===string.toLowerCase();});
}
/*
function fuzzyMatch(drivers, string){

}
*/
function matchName(drivers, string){
  return drivers.filter(function(name){ return name===string;});
  
}
