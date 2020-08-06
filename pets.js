class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal
    this.age = age
    this.breed = breed
    this.sound = sound
  }

  get activity() {
    const today = new Date();
    const hour = today.getHours()

    if (hour > 8 && hour < 20) {
      return 'playing'
    } else {
      return 'sleeping'
    }
  }

  stringAGE() {
    return this.age.toString()
  }

}

class Owner {
  constructor(name, address) {
    this.name = name
    this.address = address
  }

  set phone(phone) {
    const phoneNormalized = phone.replace(/[^0-9]/g, '')
    this._phone = phoneNormalized
  }

  get phone() {
    return this._phone;
  }
}

const stella = new Pet('cat', 9, 'domestic short', 'meow')

stella.owner = new Owner('Viktor', '123 Main Street')
stella.owner.phone = '(123) 456-789'

console.log(stella.owner)