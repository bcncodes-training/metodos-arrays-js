// Ejercicio 1
let cities = ['miami', 'barcelona', 'madrid'];

let capital = cities.map(e => {
  return e.charAt(0).toUpperCase() + e.slice(1);
});

console.log('');
console.log('Ejercicio 1');
console.log(capital);

// Ejercicio 2
let students = [
  {
    name: 'Tony Parker',
    firstProject: 80,
    secondProject: 75,
    finalExam: 90
  },
  {
    name: 'Marc Barchini',
    firstProject: 84,
    secondProject: 65,
    finalExam: 65
  },
  {
    name: 'Claudia Lopez',
    firstProject: 45,
    secondProject: 95,
    finalExam: 99
  },
  {
    name: 'Alvaro Briattore',
    firstProject: 82,
    secondProject: 92,
    finalExam: 70
  },
  {
    name: 'Isabel Ortega',
    firstProject: 90,
    secondProject: 32,
    finalExam: 85
  },
  {
    name: 'Francisco Martinez',
    firstProject: 90,
    secondProject: 55,
    finalExam: 78
  },
  {
    name: 'Jorge Carrillo',
    firstProject: 83,
    secondProject: 77,
    finalExam: 90
  },
  {
    name: 'Miguel López',
    firstProject: 80,
    secondProject: 75,
    finalExam: 75
  },
  {
    name: 'Carolina Perez',
    firstProject: 85,
    secondProject: 72,
    finalExam: 67
  },
  {
    name: 'Ruben Pardo',
    firstProject: 89,
    secondProject: 72,
    finalExam: 65
  }
];

let studentsFinalGrade = students.map(e => {
  let studentGrade = {
    name: e.name,
    final_grade:
      (e.firstProject + e.firstProject) * 0.5 * 0.4 + e.finalExam * 0.6
  };
  return studentGrade;
});

console.log('');
console.log('Ejercicio 2');
console.log(studentsFinalGrade);

// Ejercicio 3 --> REDUCE
let menu = [
  { name: 'Carrots', calories: 150 },
  { name: 'Steak', calories: 350 },
  { name: 'Broccoli', calories: 120 },
  { name: 'Chicken', calories: 250 },
  { name: 'Pizza', calories: 520 }
];

let mediaCaloriasMenu =
  menu.reduce((total, e) => {
    return total + e.calories;
  }, 0) / menu.length;

console.log('');
console.log('Ejercicio 3');
console.log('Media Calorías Menú : ' + mediaCaloriasMenu);

// Ejercicio 4
let product = {
  name:
    "JIM'S STORE 2 Bobina 10W Cargador Inalámbrico Titular Anti-Deslizamiento Diseño",
  price: 15.69,
  manufacturer: "JIM'S STORE",
  reviews: [
    { user: 'Pavel Nedved', comments: 'Muy contento', rate: 4 },
    { user: 'Alvaro Trezeguet', comments: 'No tiene carga rápida', rate: 1 },
    {
      user: 'David Recoba',
      comments: 'Excelente relación calidad/precio.',
      rate: 5
    },
    { user: 'Maribel Romero', comments: 'Pocas prestaciones', rate: 2 },
    { user: 'Antonio Cano', comments: 'Materiales malos', rate: 1 }
  ]
};

let valoraciones = product.reviews;
let numeroValoraciones = product.reviews.length;
let valoracionMedia = valoraciones.reduce((total, e) => {
    return total + e.rate;
}, 0) / numeroValoraciones;

console.log('');
console.log('Ejercicio 4');
console.log('Valoración media : ' + valoracionMedia);