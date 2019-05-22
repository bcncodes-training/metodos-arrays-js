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
  let mitja=product.reviews.reduce((t,e,i,a)=>{return t+e.rate/a.length},0);
  console.log(`Producte: ${product.name} \nmitja: ${mitja}`);
  
  function calculaMitja(arr){
   return arr.reviews.reduce((prev,cur,ind,a)=>{return prev+cur.rate/a.length},0);
  }
  console.log(calculaMitja(product));