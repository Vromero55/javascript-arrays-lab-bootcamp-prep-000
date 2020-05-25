var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
function destructivelyAppendKitten(a, b){
  a=[];
  a.push(b);
  return a;
}
kittens.destructivelyAppendKitten(kittens, "Ralp");
// Add your functions and code here
