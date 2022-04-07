import { Collection } from './models/Collection'
import { User, UserProps } from './models/User'
import { UserForm } from './views/UserForm'
import { UserList } from './views/UserList'

const users = new Collection(
  'http://localhost:3000/user',
  (json: UserProps) => {
    return User.buildUser(json)
  }
)

users.on('change', () => {
  const root = document.getElementById('root')

  if (root) {
    new UserList(root, users).render()
  }
})
users.fetch()
