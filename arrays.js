//Ejercicio 1

let cities = ["miami", "barcelona", "madrid"];
let cities2 = 'miami barcelona madrid';

//ARRAYS
const capCities = (arr) => arr.map((e) => e.charAt(0).toUpperCase() + e.slice(1));
console.log(capCities(cities));


//STRINGS
const capCities1 = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.info(capCities1(cities2));
//does not iterate through the string! works for only ONE word

//solution split
const capCities2 = (str) => str.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.substr(1), []).join(' ');
console.info(capCities2(cities2));

//solution regex
const capCities4 = (str) => str.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
console.log(capCities4(cities2));
/*
(^\w{1}): match first char of string
|: or (do NOT leave white spaces, is SENSITIVE!!Neither || as it only iterates through the first word!)
(\s{1}\w{1}): match one char that came after one space
g: match all
match => match.toUpperCase(): replace with can take function, so; replace match with upper case match
 */
//solution for
let names = cities2;
let arr = names.split(' ');
for(let name of arr){
  console.log(`${name.charAt(0).toUpperCase() + name.slice(1)}`);
};
//REDUCE ARRAY
const capCities3 = (str) => [...str].reduce((a, b, i, arr) => ((a) + (i === 0 || arr[i - 1] === ' ' ? b.toUpperCase() : b)), '');
//transform str => arr , so why I can't make it work with cities?
//toUpperCase character if first element (i === 0) || if there is an empty space infront character
console.log(capCities3(cities2));

//REDUCE String
const ciudades = (str) => str.split(' ').reduce((a, b) => a.concat(b[0].toUpperCase() + b.slice(1)), []).join(' ');
console.log(ciudades(cities2));

const ciudades2 = (str) => {
   return str.split(' ').reduce((a, b) => {
          const word = `${b.charAt(0).toUpperCase()}${b.slice(1)}`;
          return a ? `${a} ${word}` : word;
      }, '');
};
console.log(ciudades2(cities2));
//Ejercicio 2


const finalGrades = students.map(function(elem) {
  let projectsAvg = (elem.firstProject + elem.secondProject) / 2;//average of the two projects
  let finalGrade  = elem.finalExam * 0.6 + projectsAvg * 0.4;// sum of 60% final exam + 40% of project's avrg
  return {
    name: elem.name,//name of the student
    finalGrade: Math.round(finalGrade)//make it integer!
  }
});
console.log(finalGrades);

const finalGrades1 = (arrObj) => arrObj.map((data) => {
  return {
    name: data.name,
    finalGrade: Math.round(((data.firstProject + data.secondProject) / 2) * 0.4 + (data.finalExam * 0.6)),
  }
}, []);
console.log(finalGrades1(students));
//Ejercicio 3


 let averageCalories=menu.reduce(
  (sum,food,i,a) => {
    console.log("accumulator is: ", sum, "and current value is: ", food.calories);
    return sum + food.calories / a.length},0);
console.log(averageCalories);

//Ejercicio 3.bis Filtra los elemntos con indice calórico superior a la media

let overCalorics= menu.filter(e => e.calories > averageCalories);
console.log(overCalorics);

//Ejercicio 4


let avgRate = product.reviews.reduce(function(p,c,i,a){return p + (c.rate/a.length)},0);
console.log(avgRate);

const avgRate1 = (objArr) => objArr.reviews.reduce((a, b, i, arr) => a + (b.rate / arr.length), 0);
console.log(avgRate1(product));

//Ejercicio 4.bis Filtra los comentarios de mayor a  menor rate

//sort
product.reviews.sort((a,b) => a.rate - b.rate);
console.log(product.reviews);

const lowerThan1 = (objArr) => objArr.reviews.sort(((a, b) => a.rate - b.rate), []);
console.log(lowerThan1(product));

//Filter
const lowerThan = (objArr) => objArr.reviews.filter((a) => a.rate > 0, []);
console.log(lowerThan(product));

//Bonus: Pintar estrellitas de valoración
//index.html
//stars.js
function pintarEstrellitas(){
  let stars = document.getElementsByClassName("fa fa-star");

  for(i=0; i<Math.round(avgRate);i++){
      stars[i].classList.add('checked');
  }
}

onload = pintarEstrellitas();


