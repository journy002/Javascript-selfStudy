// 가비지 컬렉션

// 자바스크립트는 눈에 보이지 않는 곳에서 메모리 관리를 수행합니다.
// 원시값, 객체, 함수 등 우리가 만드는 모든 것은 메모리를 차지합니다. 그렇다면 더는 쓸모 없어지게 된 것들은 어떻게 처리될까요? 지금부턴 자바스크립트 엔진이 어떻게 필요 없는 것을 찾아내 삭제하는지 알아보겠습니다.

// 가바지 컬렉션 기준

// 자바스크립트는 도달 가능성(reachability) 이라는 개념을 사용해 메모리 관리를 수행합니다.
// ‘도달 가능한(reachable)’ 값은 쉽게 말해 어떻게든 접근하거나 사용할 수 있는 값을 의미합니다.
// 도달 가능한 값은 메모리에서 삭제되지 않습니다.

// 1. 아래 값들은 그 태생부터 도달 가능하기 때문에, 명백한 이유 없이는 삭제되지 않습니다.

// 현재 함수의 지역 변수와 매개변수
// 중첩 함수의 체인에 있는 함수에서 사용되는 변수와 매개변수
// 전역 변수
// 기타 등등

// 이런 값은 루트(root)라고 부릅니다.

// 2. 루트가 참조하는 값이나 체이닝으로 루트에서 참조할 수 있는 값은 도달 가능한 값이 됩니다.

// 전역 변수에 객체가 저장되어있다고 가정해 봅시다.
// 이 객체의 프로퍼티가 또 다른 객체를 참조하고 있다면, 프로퍼티가 참조하는 객체는 도달 가능한 값이 됩니다. 이 객체가 참조하는 다른 모든 것들도 도달 가능하다고 여겨집니다.

// 바스크립트 엔진 내에선 가비지 컬렉터(garbage collector)가 끊임없이 동작합니다. 가비지 컬렉터는 모든 객체를 모니터링하고, 도달할 수 없는 객체는 삭제합니다

// 예시

// user엔 객체 참조 값이 저장됩니다.
let user = {
  name: 'John',
}

// 전역 변수 "user"는 {name: "John"} (줄여서 John)이라는 객체를 참조합니다.
// John의 프로퍼티 "name"은 원시값을 저장하고 있기 때문에 객체 안에 표현했습니다.

user = null

// user의 값을 다른 값으로 덮어쓰면 참조했던 값이 사라집니다.
// 이제 John은 도달할 수 없는 상태가 되었습니다.
// John에 접근할 방법도, John을 참조하는 것도 모두 사라졌습니다.
// 가비지 컬렉터는 이제 John에 저장된 데이터를 삭제하고, John을 메모리에서 삭제합니다.

console.log(user, '가비지 컬렉션 user')

let user2 = {
  name: 'HOHOa',
}

let admin = user2

console.log(user2, 'user2')
console.log(admin, 'admin')

user2 = null

console.log(user2, 'null값을 할당해준 user2')
console.log(admin, 'admin')
// 전역 변수 admin을 통하면 여전히 객체 John에 접근할 수 있기 때문에 John은 메모리에서 삭제되지 않습니다.
// 이 상태에서 admin을 다른 값(null 등)으로 덮어쓰면 John은 메모리에서 삭제될 수 있습니다.

let user3 = {
  name: 'yayayaya',
}

let minmin = user3

minmin.name = 'shdoshdo' // 참조 값을 바꿔 버리면 같은 참조 값을 가지고 있는 usre3 의 name 프로퍼티의 값도 바뀝니다.

console.log(user3, 'user3') // name: shdoshdo
console.log(minmin, 'minmin')

// 연결된 객체

function marry(man, woman) {
  woman.husband = man
  man.wife = woman

  return {
    father: man,
    mother: woman,
  }
}

let family = marry({ name: 'Jhon' }, { name: 'Ann' })
console.log(family, 'original family')
// 함수 marry(결혼하다)는 매개변수로 받은 두 객체를 서로 참조하게 하면서 '결혼’시키고, 두 객체를 포함하는 새로운 객체를 반환합니다.

delete family.father
//delete family.mother.husband
console.log(family, 'after delete property')

// 삭제한 두 개의 참조 중 하나만 지웠다면, 모든 객체가 여전히 도달 가능한 상태였을 겁니다.

// 하지만 참조 두 개를 지우면 John으로 들어오는 참조(화살표)는 모두 사라져 John은 도달 가능한 상태에서 벗어납니다.
