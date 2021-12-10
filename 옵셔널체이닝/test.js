// ** 옵셔널 체이닝 '?.' ** //

// 스펙이 추가된 지 얼마 안 된 문법입니다. 사용시 브라우저에서 지원이 되는지 확인이 필요합니다.
// 옵셔널 체이닝(optional chaining) ?.을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있습니다.

// 옵셔널 체이닝이 필요한 이유

// 이제 막 자바스크립트를 배우기 시작했다면 옵셔널 체이닝이 등장하게 된 배경 상황을 직접 겪어보지 않았을 겁니다.
// 몇 가지 사례를 재현하면서 왜 옵셔널 체이닝이 등장했는지 알아봅시다.

// 사용자가 여러 명 있는데 그중 몇 명은 주소 정보를 가지고 있지 않다고 가정해봅시다.
// 이럴 때 user.address.street를 사용해 주소 정보에 접근하면 에러가 발생할 수 있습니다.

let user = {}
// console.log(user.address.street) // TypeError: Cannot read property 'street' of undefined

// 또 다른 사례론 브라우저에서 동작하는 코드를 개발할 때 발생할 수 있는 문제가 있습니다.
// 자바스크립트를 사용해 페이지에 존재하지 않는 요소에 접근해 요소의 정보를 가져오려 하면 문제가 발생하죠.

// querySelector(...) 호출 결과가 null인 경우 에러 발생
// let html = document.querySelector('.my-element').innerHTML

// 명세서에 ?.이 추가되기 전엔 이런 문제들을 해결하기 위해 && 연산자를 사용하곤 했습니다.
// console.log(user && user.address && user.address.street) // undefined, 에러가 발생하지 않습니다.

// 그런데 이렇게 AND를 연결해서 사용하면 코드가 아주 길어진다는 단점이 있습니다.

// ** 옵셔널 체이닝 등장 ** //

// ?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다.
console.log(user?.address?.street, '옵셔널 체이닝') // undefined, 에러가 발생하지 않습니다.

// user?.address로 주소를 읽으면 아래와 같이 user 객체가 존재하지 않더라도 에러가 발생하지 않습니다.
user = null
console.log(user?.address) // undefined
console.log(user?.address?.street) // undefined

// 위 예시를 통해 우리는 ?.은 ?. ‘앞’ 평가 대상에만 동작되고, 확장은 되지 않는다는 사실을 알 수 있습니다.

// 참고로 위 예시에서 사용된 user?.는 user가 null이나 undefined인 경우만 처리할 수 있습니다.

// user가 null이나 undefined가 아니고 실제 값이 존재하는 경우엔 반드시 user.address 프로퍼티는 있어야 합니다.
// 그렇지 않으면 user?.address.street의 두 번째 점 연산자에서 에러가 발생합니다.

let user2 = {
  address: null,
}

// console.log(user2?.address.street, 'user2') // Cannot read properties of null
// console.log(user2.address?.street, 'user2') // undefined

// 옵셔널 체이닝을 남용하지 마세요.
// ?.는 존재하지 않아도 괜찮은 대상에만 사용해야 합니다.

// 사용자 주소를 다루는 위 예시에서 논리상 user는 반드시 있어야 하는데 address는 필수값이 아닙니다.
// 그러니 user.address?.street를 사용하는 것이 바람직합니다.

// 실수로 인해 user에 값을 할당하지 않았다면 바로 알아낼 수 있도록 해야 합니다.
// 그렇지 않으면 에러를 조기에 발견하지 못하고 디버깅이 어려워집니다.

// 요약

// 옵셔널 체이닝 문법 ?.은 세 가지 형태로 사용할 수 있습니다.

// obj?.prop – obj가 존재하면 obj.prop을 반환하고, 그렇지 않으면 undefined를 반환함
// obj?.[prop] – obj가 존재하면 obj[prop]을 반환하고, 그렇지 않으면 undefined를 반환함
// obj?.method() – obj가 존재하면 obj.method()를 호출하고, 그렇지 않으면 undefined를 반환함
