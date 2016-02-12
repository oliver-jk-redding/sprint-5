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

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

var size = Number(prompt("Grid Size: "));
var s = "";
for(var row = 1; row <= size; row++) {
  if(row % 2 !== 0) {
    for(var col = 1; col <= size; col++) {
      if(col % 2 !== 0) {
        s+= " ";
      }
      else {
        s+= "#";
      }
    }
  }
  else {
    for(var col = 1; col <= size; col++) {
      if(col % 2 !== 0) {
        s+= "#";
      }
      else {
        s+= " ";
      }
    }
  } 
  s+= "\n"; 
}
console.log(s);