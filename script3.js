let menu = [
    { name: "Carrots", calories: 150 },
    { name: "Steak", calories: 350 },
    { name: "Broccoli", calories: 120 },
    { name: "Chicken", calories: 250 },
    { name: "Pizza", calories: 520 }
  ];
  //calcula la mitja de les calories
  let mitja=menu.reduce((t,e,i,a)=>t+e.calories/a.length,0);
  console.log(mitja);

  //per llistar els que superen la mitja 
  const result = menu.filter(cal => cal.calories > mitja);
  console.log(result);
