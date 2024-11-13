function getDrinksProfesion(params) {

  let profesion = params.toLowerCase();

  let drinks = {
    "programmer" : "Hipster Craft Beer",
    "bike gang member" : "Moonshine",
    "politician" : "Your tax dollars",
    "rapper" : "Cristal",
    "jabroni" : "Patron Tequila",
    "school counselor" : "Anything with Alcohol"
  };

  return drinks[profesion];
}
