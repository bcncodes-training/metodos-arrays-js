let persona={
    name:'Pepe',
    surmane:'Mujica',
    fullname:(function(){return this.name+' '+this.surmane;})
}
console.log(persona.fullname());
console.log('////////////////');
let arr2=[],arr3=[];
[1,2,3,4,5,6,7,8,9].forEach((e,i)=>{
  arr2.push(e*2);
  console.log('Value: '+arr2[i]+' postition:'+i);
  });
console.log('////////////////');

  [1,2,3,4,5,6,7,8,9].forEach(function(e,i){
  arr3.push(e*2);
  console.log('Value: '+arr3[i]+' postition:'+i);
  });
console.log('////////////////');

  let foods=['pizza','sandwitch','croissant'];

  foods.forEach((e,i)=>{
    foods[i]=e.toUpperCase();
    console.log(foods[i]);
  });
console.log('////////////////');

  foods.forEach(function(e,i){
    foods[i]=e.toUpperCase();
    console.log(foods[i]);
  });
console.log('////////////////');

  function convertToUpper(){
    let foods2=[];
    foods.forEach((e,i)=>{
      foods2.push(e.toUpperCase());
    console.log(foods2[i]);
    })
    console.log(foods2);
  }
  convertToUpper();
console.log('////////////////');

let newFoods=foods.map((e)=>{return e.toLowerCase();});
console.log(foods);
console.log(newFoods);
console.log('////////////////');

let cities=['miami','barcelona','madrid']
cities.forEach((e)=>{
 let newW= e.charAt(0).toUpperCase();
  for(i=1;i<e.length;i++){
    //console.log(e.charAt(i));
    newW+=e.charAt(i);
  }
  console.log(newW);
})
console.log('////////////////');

let cities2=cities.map((e)=>{
 let newW= e.charAt(0).toUpperCase();
  for(i=1;i<e.length;i++){
    newW+=e.charAt(i);
  }
  console.log(newW);
  return newW;
})
console.log(cities2);
console.log('////////////////');

let cities3=cities.map((e)=>{
  return e.substring(0,1).toUpperCase()+e.substring(1);
})
console.log(cities3);
console.log('////////////////');


