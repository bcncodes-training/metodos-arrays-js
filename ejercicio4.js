

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


let avgRate;

avgRate = calculateAverage(product.reviews);

let boton = document.getElementById('boton');
let valoracion = document.getElementById('valoracion');
let clases = document.getElementsByClassName('fa-star');
boton.onclick = drawValoracion;

////////////////////////////////////////////////////////////////////////////////////////////

function calculateAverage(mArray) {
  return mArray.reduce((prev,cur) => prev + cur.rate,0) / mArray.length;
}

function drawValoracion(){
  if(valoracion.classList.contains('open')){
      valoracion.classList.replace('open','close');
      for(let i=0; i<clases.length-1; i++)
        clases[i].classList.replace('open','close');  
  }
  else{
      valoracion.classList.replace('close','open');
      for(let i=0; i<clases.length-1; i++)
        clases[i].classList.replace('close','open');  
  }
  pintarEstrellitas();
}

function pintarEstrellitas(){
  let stars = document.getElementsByClassName('fa-star');

  for(let i=0; i<Math.round(avgRate);i++){
      stars[i].classList.add('checked');
  }
}
