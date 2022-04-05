import { CharacterCollection } from './CharacterCollection'
import { LinkedList } from './LinkedList'
import { NumbersCollection } from './NumbersCollection'
import { Sorter } from './Sorter'

const numbersCollection = new NumbersCollection([10, 3, 5, -1])
const characterCollection = new CharacterCollection('Dharshan')
const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-100)
linkedList.add(-2)
linkedList.add(15)
linkedList.print()
numbersCollection.sort()
characterCollection.sort()
console.log(numbersCollection.data)
console.log(characterCollection.data)
