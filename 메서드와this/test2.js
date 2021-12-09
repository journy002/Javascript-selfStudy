let user = {
  name: 'john',
  age: 30,

  //   sayHi: function () {
  //     console.log(' say Hi~! ')
  //   },

  sayHi() {
    console.log(this.name + ' second say Hi ~!')
  },
}

user.sayHi()
