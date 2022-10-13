function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for(let i = 0; i < cars.length; i++) {
    if (cars[i]["available"] === true) {
      result.push(cars[i])
    }
  }
  // Ini cara yang ga boleh ternyata WKWK 
  // let filterred = cars.filter(cars => cars.available === "true");

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
