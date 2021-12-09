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
