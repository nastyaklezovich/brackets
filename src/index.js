module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let brackets = "";
  let flag = true;


  for (let items of bracketsConfig) {
      for (let item of items) {
          brackets += item;
      }
  }

  for (let bracket of str) {

      let bracketsIndex = brackets.indexOf(bracket);
      let lastBracketsIndex = brackets.lastIndexOf(bracket);

      if (bracketsIndex === -1) {
          continue;
      }
      
      if (bracketsIndex === lastBracketsIndex){
          if (bracketsIndex % 2 === 0) {
              stack.push(bracketsIndex + 1);
          } else {
              if (stack.pop() !== bracketsIndex) {
                  return false;
              }
          }
      }
      else{
          let n = stack.pop();
          if (n !== lastBracketsIndex) {
              if (n !== undefined){
                  stack.push(n);
              }
              stack.push(bracketsIndex + 1);
          } 
      }
  }
  return stack.length === 0;
};
