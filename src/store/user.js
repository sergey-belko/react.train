import { decorate, observable } from 'mobx'
class User {
  name = 'Fedor'
  updateName = () => {
    this.name = this.name + 1
  }
}

decorate(User, { name: observable })

export default new User()
