var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
function destructivelyAppendKitten(a, b){
  a=kittens;
  b="Ralph"
  a.push(b);
  return a;
}
function destructivelyPrependKitten(a, b){
  a=kittens;
  b="Bob";
  a.unshift(b);
  return a;
}
function destructivelyRemoveLastKitten(a){
  a=kittens;
  
}
// Add your functions and code here
