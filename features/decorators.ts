@classDecorator // using on a class itself
class Boat {
  @testDecorator // using with properties, but we can only access the property name,
  // nothing else
  color: string = 'red'

  @testDecorator // using with a get accessor
  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  @logError('Oops, boat was sunk') // using on a method
  pilot(@parameterDecorator speed: string): void {
    //using with a parameter of a method
    if (speed === 'fast') {
      console.log('swish')
    } else {
      console.log('nothing')
    }
    throw new Error()
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

// only gets executed when we declare class not when instantiated
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    //actual decorator
    //wrapping the pilot method to log errors
    const method = desc.value
    try {
      method()
    } catch (err) {
      console.log(errorMessage)
    }
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index)
}

function testDecorator(target: any, key: string) {
  // console.log(target) //can't get access to the property since the target is always the prototype.
  // we can only see the property name and nothing else
  console.log(key)
}

//we can also use with static methods and properties
