function create() {
  reponse = 23;
  return function (x) { return x + reponse; }
}

reponse = 101
let a = create()
console.log(a(12))
console.log(reponse)
