//Exercise One:

var layer = "#";
while(layer.length < 8) {
  console.log(layer);
  layer += "#";
}

//Exercise Two:

for(var i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if(i % 3 === 0) {
    console.log("Fizz");
  }
  else if(i % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }  
}

//Exercise Three:

var size = Number(prompt("Grid Size: "));
var str = "";
for(var row = 1; row <= size; row++) {
  if(row % 2 !== 0) {
    for(var col = 1; col <= size; col++) {
      if(col % 2 !== 0) {
        str+= " ";
      }
      else {
        str+= "#";
      }
    }
  }
  else {
    for(var col = 1; col <= size; col++) {
      if(col % 2 !== 0) {
        str+= "#";
      }
      else {
        str+= " ";
      }
    }
  } 
  str+= "\n"; 
}
console.log(str);