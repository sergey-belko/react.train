import { action, observable } from 'mobx'

class User {

  @observable
  name = 'Fedor'

  @action
  updateName = () => {
    this.name = this.name + 1
  }
}

export default new User()
