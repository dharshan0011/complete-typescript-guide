const empty: string[] = []
const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

// 2D arrays
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']]

// Help with inference when extracting values
const myCar = carMakers[0]

// Prevent incompatible value
// carMakers.push(true)

// Help with 'map'
carMakers.map((car: string): string => {
  return car
})

// Flexible types, hover to know
const importantDate: (Date | string)[] = [new Date()]
