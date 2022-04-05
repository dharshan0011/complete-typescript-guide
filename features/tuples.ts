const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

//Tuple is a array like structure describing properties of something.
// It often contains different types.

//aliases
type Drink = [string, boolean, number]

//tuple with consistent order
const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 30]
// pepsi[0] = true

// Tuple vs Object
const carSpecs: [number, number] = [500, 2245]

// much more meaningful than a tuple
const carStats = {
  horsepower: 500,
  weight: 2245,
}
