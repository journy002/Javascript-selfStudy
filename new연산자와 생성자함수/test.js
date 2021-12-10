// **new 연산자와 생성자 함수** //

// 객체 리터럴 {...} 을 사용하면 객체를 쉽게 만들 수 있습니다.
// 그런데 개발을 하다 보면 유사한 객체를 여러 개 만들어야 할 때가 생기곤 합니다.
// 복수의 사용자, 메뉴 내 다양한 아이템을 객체로 표현하려고 하는 경우가 그렇죠.

// 'new' 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만들 수 있습니다.

// ** 생성자 함수 ** //

// 생성자 함수(constructor function)와 일반 함수에 기술적인 차이는 없습니다.
// 다만 생성자 함수는 아래 두 관례를 따릅니다.

// 1. 함수 이름의 첫글자가 무조건 대문자 입니다.
// 2. 반드시 'new' 연산자를 붙여 실행합니다.

// 얘)

function User(name) {
  this.name = name
  this.isAdmin = false
}

let user = new User('Tony')

console.log(user.name, '생성자 함수') // Tony
console.log(user.isAdmin, '생성자 함수') // false

// new User(...)를 써서 함수를 실행하면 아래와 같은 알고리즘이 동작합니다.
// 1. 빈 객체를 만들어 this에 할당합니다.
// 2. 함수 본문을 실행합니다. this에 새로운 프로퍼티를 추가해 this를 수정합니다.
// 3. this를 반환합니다.

// function User(name) {
//     // this = {}; 빈 객체가 암시적으로 만들어짐
//     this.name = name;
//     this.isAdmin = false;

//     // return this this가 암시적으로 반환됨

// }

// 이제 let user = new User('보라')는 아래 코드를 입력한 것과 동일하게 동작합니다.
// let user = {
//     name: '보라',
//     isAdmin: false
// };

// new function() {...}
// 재사용할 필요가 없는 복잡한 객체를 만들어야 한다고 해봅시다.
// 많은 양의 코드가 필요할 겁니다.
// 이럴 땐 아래와 같이 코드를 익명 생성자 함수로 감싸주는 방식을 사용할 수 있습니다.

let user20 = new (function () {
  this.name = 'John'
  this.isAdmin = false

  // 사용자 객체를 만들기 위한 여러 코드.
  // 지역 변수, 복잡한 로직, 구문 등의
  // 다양한 코드가 여기에 들어갑니다.
})()

console.log(user20.name, 'user20')

// 위 생성자 함수는 익명 함수이기 때문에 어디에도 저장되지 않습니다.
// 처음 만들 때부터 단 한 번만 호출할 목적으로 만들었기 때문에 재사용이 불가능합니다.
// 이렇게 익명 생성자 함수를 이용하면 재사용은 막으면서 코드를 캡슐화 할 수 있습니다.

// 생성자 내 메서드

// 생성자 함수를 사용하면 매개변수를 이용해 객체 내부를 자유롭게 구성할 수 있습니다.
// 엄청난 유연성이 확보되죠.
// this에 프로퍼티 뿐만 아니라 메서드를 더해주는 것도 가능합니다.

function User2(name) {
  this.name = name

  this.sayHo = function () {
    console.log(`제 이름은 ${this.name} 입니다.`, '생성자 내 메서드')
  }
}

let bora = new User2('Bora')

bora.sayHo()
