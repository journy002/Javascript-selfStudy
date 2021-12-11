// ** 논리 연산자 ** //

// 세 종류의 논리 연산자가 있습니다.
// || (OR)
// && (AND)
// !  (NOT)

// 연산자에 '논리'라는 수식어가 붙긴 하지만 논리 연산자는 피연산자로 불린형뿐만 아니라
// 모든 타입의 값을 받을 수 있습니다.
// 연산 결과 역시 모든 타입이 될 수 있습니다.

// || (OR)
// 인수 중 하나라도 true이면 true를 반환하고, 그렇지 않으면 false를 반환합니다.

console.log(true || true) // true
console.log(false || true) // true
console.log(true || false) // true
console.log(false || false) // false

// 피연산자가 모두 false인 경우를 제외하고 연산 결과는 항상 true입니다.

// 예를 들어, 연산 과정에서 숫자 1은 true, 숫자 0은 false로 바뀝니다.
if (1 || 0) {
  console.log('truthy!!')
}

// OR연산자는 if문에서 자주 사용됩니다. 주어진 조건 중 하나라도 참 인지를 테스트하는 용도로 사용됩니다.
let hour = 9
if (hour < 10 || hour > 18) {
  console.log('영업시간이 아닙니다.')
}

// if문 안에 여러 가지 조건을 넣을 수 있습니다.
let hour2 = 12
let isWeekend = true

if (hour2 < 10 || hour2 > 18 || isWeekend) {
  console.log('노 영업 타임입니다.') // 주말이기 때문임
}

const a = !true // false
const b = !false // true

// And 연산자.  양쪽 다 참이 나와야 결과값이 참으로 나온다.
const c = true && true //true
const f = false && false // false
const g = false && true // false

// OR 연산자. 둘 중 하나만 참이 나와도 결과값이 참.

const value = !((true && false) || (true && false) || !false)
// 결과는 참
