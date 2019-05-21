//Ejercicio 1

let cities = ["miami", "barcelona", "madrid"];

const capCities = cities.map(e=> 
  e.charAt(0).toUpperCase()+ e.slice(1));

console.log(capCities);

//Ejercicio 2

const finalGrades = students.map(function(elem) {
  let projectsAvg = (elem.firstProject + elem.secondProject)/2;
  let finalGrade  = elem.finalExam*0.6 + projectsAvg*0.4;
  return {
    name: e.name,
    finalGrade: Math.round(finalGrade)
  }
})

//Ejercicio 3

 let averageCalories=menu.reduce(
  (sum,food,i,a) => {
    console.log("accumulator is: ", sum, "and current value is: ", food.calories);
    return sum+food.calories/a.length}
,0)


console.log(averageCalories);

//Ejercicio 3.bis Filtra los elemntos con indice calórico superior a la media

let overCalorics= menu.filter(e => e.calories>averageCalories);
console.log(overCalorics);

//Ejercicio 4


let avgRate = product.reviews.reduce(function(p,c,i,a){return p + (c.rate/a.length)},0);
console.log(avgRate);

//Ejercicio 4.bis Filtra los comentarios de mayor a  menor rate

product.reviews.sort((a,b) => a.rate - b.rate);

console.log(product.reviews);

