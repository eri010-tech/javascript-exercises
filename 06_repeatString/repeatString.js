const repeatString = function(string, num) { 
  for (let i = num; i < 4; i++) {
    const duplicateString = string; 
    let result = duplicateString++;
    return result;  
  }
};

// Do not edit below this line
module.exports = repeatString;
