process.stdin.setEncoding("utf8");
let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  input = input.split("\n");
  let t = parseInt(input[0]);
  console.log(t);
  // let Arr = input[i].split(" ").map(Number);
  console.log(t);
});
console.log("t");
