var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
function destructivelyAppendKitten(a,b){
  a.unshift(b);
  return a;
}
destructivelyAppendKitten(kittens, "Ralph");
//var kittens = ["Milo", "Otis", "Garfield"];
// Add your functions and code here
