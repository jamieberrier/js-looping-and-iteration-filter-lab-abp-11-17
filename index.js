// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function (name){
    return name===string || name===string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string){
  let lengthOfName = string.length;
  return drivers.filter(function(name){
    return name.slice(0, lengthOfName)===string;
  });
}

function matchName(drivers, string){
  return drivers.filter(function(name){
       return drivers.keys(name);
  });
}
