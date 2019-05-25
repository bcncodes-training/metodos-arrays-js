
let menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 }
];

let results;

results = calculateAverage(menu,'cur.calories');

let mFiltra = menu.filter(food => food.calories > results);

console.log(results);
console.log(mFiltra);

////////////////////////////////////////////////////////////////////////////////////////////

function calculateAverage(mArray,tt) {
    let salida = mArray.reduce((prev,cur) => prev + eval(tt),0) / mArray.length;
    console.log(salida);
}

/*
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
*/

/*
[0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
    return valorAnterior + valorActual;
  });

  let numbers = [1, 2, 3, 4, 5, 6]
let total = numbers.reduce((prev, cur) => prev + cur, 0)
// 21
*/