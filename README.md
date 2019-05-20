# metodos-arrays-js

## MAP

### ejercicio 1

Dada un array de nombre de ciudades, devolver un array con la primera letra de cada ciudad en mayúsculas.

```let cities = ["miami", "barcelona", "madrid"];```

### ejercicio 2

Imaginad que sois profesores y queréis calificar a los estudiantes en función de sus resultados en 2 proyectos (40% de la nota final) y el examen final (60% de la nota final). La información de partida es la siguiente:

Imagine we are a Math teacher and we need to grade our students basing on their performance on 2 projects (40% of final grade) and their final exam (60% of final grade). We got the info for each student in an object that looks like this:

```javascript=
{
  name: "Student Name",
  firstProject: 80,
  secondProject: 75,
  finalExam:
}
```

So basically for the whole class, we have an array of objects, and we need an array only with student´s name, and their final grade. Let´s do it:

Here is the data:

```javascript
        let  students = [
        {
        name: "Tony Parker",
        firstProject: 80,
        secondProject: 75,
        finalExam: 90
        },
        {
        name: "Marc Barchini",
        firstProject: 84,
        secondProject: 65,
        finalExam: 65
        },
        {
        name: "Claudia Lopez",
        firstProject: 45,
        secondProject: 95,
        finalExam: 99
        },
        {
        name: "Alvaro Briattore",
        firstProject: 82,
        secondProject: 92,
        finalExam: 70
        },
        {
        name: "Isabel Ortega",
        firstProject: 90,
        secondProject: 32,
        finalExam: 85
        },
        {
        name: "Francisco Martinez",
        firstProject: 90,
        secondProject: 55,
        finalExam: 78
        },
        {
        name: "Jorge Carrillo",
        firstProject: 83,
        secondProject: 77,
        finalExam: 90
        },
        {
        name: "Miguel López",
        firstProject: 80,
        secondProject: 75,
        finalExam: 75
        },
        {
        name: "Carolina Perez",
        firstProject: 85,
        secondProject: 72,
        finalExam: 67
        },
        {
        name: "Ruben Pardo",
        firstProject: 89,
        secondProject: 72,
        finalExam: 65
        }
        ]
   ```
El resultado se presentará como un array de objetos con dos campos `name` y `final_grade`.

## REDUCE

### ejercicio 3

Dado un menu de alimentos con sus calorías calcula la **media** de calorías de todo el menú.

Los datos de partida son:

```
let menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 }
];
```

### ejercicio 4


![Imgur](https://i.imgur.com/W7R22Cw.png)

Estamos desarrollando nuestro super e-commerce, cada producto tiene comentarios de usuario y una puntuación almacenada en un array con el nombre de `reviews`. Cada `review` tiene la siguiente estructura:

```javascript
let product = {
  name: "JIM'S STORE 2 Bobina 10W Cargador Inalámbrico Titular Anti-Deslizamiento Diseño",
  price: 15.69,
  manufacturer: "JIM'S STORE",
  reviews:
  [
    {  user: "Pavel Nedved",
      comments: "Muy contento",
      rate: 4
    },
    {  user: "Alvaro Trezeguet",
      comments: "No tiene carga rápida",
      rate: 1
    },
    {  user: "David Recoba",
      comments: "Excelente relación calidad/precio.",
      rate: 5
    },
    {  user: "Maribel Romero",
      comments: "Pocas prestaciones",
      rate: 2
    },
    {  user: "Antonio Cano",
      comments: "Materiales malos",
      rate: 1
    },
  ]
}

```
Queremos mostrar el producto en nuestra web pero no queremos mostrar todos los comentarios de primera vista. Sólo necesitamos la valoración media para que los clientes se hagan una idea rápida de la valoración del producto.

