import 'reflect-metadata'

// * Metadata with object and its properties
// const plane = {
//   color: 'red',
// }

// Reflect.defineMetadata('note', 'hi there', plane)
/*its like adding a property called metadata to plane , but will not be shown anywhere
 plane.metadata = {
note: 'hi there'
}*/

// const note = Reflect.getMetadata('note', plane)
// console.log(note)

// Reflect.defineMetadata('additionalNote', 'hi property', plane, 'color')
// const additionalNote = Reflect.getMetadata('additionalNote', plane, 'color')

// console.log(additionalNote)

@printMetadata
class Plane {
  color: string = 'red'

  @markFunction('hi there!')
  fly(): void {
    console.log('vrrrr')
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key)
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')
// console.log(secret)

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key)
    console.log(secret)
  }
}
