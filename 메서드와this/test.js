// 메서드와 this

// 객체는 사용자(user), 주문(order) 등과 같이 실제 존재하는 개체(entity)를 표현하고자 할 때 생성합니다.
let user = {
  name: 'Jhon',
  age: 30,
}

// 사용자는 현실에서 장바구니에서 물건 선택하기, 로그인하기, 로그아웃하기 등의 행동을 합니다.
// 이와 마찬가지로 사용자를 나타내는 객체 user도 특정한 행동을 할 수 있습니다.
// 자바스크립트에선 객체의 프로퍼티에 함수를 할당해 객체에게 행동할 수 있는 능력을 부여해줍니다.

// 메서드 만들기
// 객체 user에게 인사할 수 있는 능력을 부여해 봅니다.

user.sayHi = function () {
  console.log('안녕하세요!')
}

user.sayHi() // 안녕하세요!

// 함수 표현식으로 혐수를 만들고, 객체 프로퍼티 user.sayHi에 함수를 할당해 주었습니다.
// 이제 객체에 할당된 함수를 호출하면 user가 인사를 해줍니다.
// 이렇게 객체 프로퍼티에 할당된 함수를 메서드(method) 라고 부릅니다.
// 위 예시에선 user에 할당된 sayHi가 메서드이죠.

// 메서드는 이미 정의된 함수를 이용해서 만들 수도 있습니다.

let user2 = {
  name: 'Jonadan',
  age: 32,
}

function sayHello() {
  console.log('Hello~?', 'user2에 대입한 메서드')
}

user2.sayHello = sayHello
user2.sayHello() //안녕하세요

// 메서드 단축 구문

// 아래 두 객체는 동일하게 동작합니다.

let user3 = {
  sayHello: function () {
    console.log('hiihihi', 'user3 메서드')
  },
}

user3.sayHello() // hihihi

let user4 = {
  sayHello() {
    console.log('hihihi', 'user4 메서드 단축 구문')
  },
}

user4.sayHello() // hihihi

// 메서드와 this

// 메서드는 객체에 저장된 정보에 접근할 수 있어야 제 역할을 할 수 있습니다. 모든 메서드가 그런 건 아니지만, 대부분의 메서드가 객체 프로퍼티의 값을 활용합니다.

// user.sayHi()의 내부 코드에서 객체 user에 저장된 이름(name)을 이용해 인사말을 만드는 경우가 이런 경우에 속합니다.

// 메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있습니다.

// 이때 '점 앞’의 this는 객체를 나타냅니다. 정확히는 메서드를 호출할 때 사용된 객체를 나타내죠.

// 예시

let homeUser = {
  name: 'Ohhao',
  age: 30,

  sayHello() {
    console.log('Hello~! ' + this.name, ', 메서드와 this')
  },
}

homeUser.sayHello()

let homeUser2 = {
  name: 'Horangrang',
  age: 30,

  sayHi() {
    console.log('Hello~! ' + homeUser2.name) // Error: Cannot read property of null (reading 'name) at Object.sayHi
  },
}

let admin2 = homeUser2

homeUser2 = null // null로 덮어씁니다.
admin2.sayHi() // sayHi()가 엉뚱한 객체를 참고하면서 에러가 발생합니다.

// console.log()가 homeUser2.name 대신 this.name을 인수로 받았다면 에러가 발생하지 않았을 겁니다.

// 자유로운 this
