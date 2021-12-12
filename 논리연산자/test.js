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

// 첫 번째 truthy를 찾는 OR 연산자 ‘||’

// OR 연산자와 피연산자가 여러 개인 경우:
// result = value1 || value2 || value3

// 이때, OR ||연산자는 다음 순서에 따라 연산을 수행합니다.

// 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가합니다.
// 각 피연산자를 불린형으로 변환합니다. 변환 후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환합니다.
// 피연산자 모두를 평가한 경우(모든 피연산자가 false로 평가되는 경우)엔 마지막 피연산자를 반환합니다.

console.log(1 || 0) // 1 (1은 truthy임)
console.log(null || 1) // 1 (1은 truthy임)
console.log(null || 0 || 1) // 1 (1은 truthy임)
console.log(undefined || null || 0) // 0 (모두 falsy이므로, 마지막 값을 반환함)

// 변수 또는 표현식으로 구성된 목록에서 첫 번째 truthy 얻기
let firstName = ''
let lastName = ''
let nickName = '바이올렛'
console.log(firstName || lastName || nickName || '익명') // 바이올렛
// 모든 변수가 falsy면 "익명"이 출력되었을 겁니다.

// && (AND)
//  AND 연산자는 두 피연산자가 모두가 참일 때 true를 반환합니다. 그 외의 경우는 false를 반환하죠.

console.log(true && true) // true
console.log(false && true) // false
console.log(true && false) // false
console.log(false && false) // false

const c = true && true //true
const f = false && false // false
const g = false && true // false

// if문과 and 연산자 함께 활용해보기
let hour3 = 12
let minute = 30
if (hour3 == 12 && minute == 30) {
  console.log('현재 시각은 12시 30분입니다.')
}

// OR 연산자와 마찬가지로 AND 연산자의 피연산자도 타입에 제약이 없습니다.
if (1 && 0) {
  // 피연산자가 숫자형이지만 논리형으로 바뀌어 true && false가 됩니다
  console.log('if문 안에 falsy가 들어가 있으므로 실행되지 않습니다.')
}

// 첫 번째 falsy를 찾는 AND 연산자 ‘&&’

// 첫 번째 피연산자가 truthy이면,
// AND는 두 번째 피연산자를 반환합니다.
console.log(1 && 0, '첫번째 피연산자가 truthy일 때') // 0
console.log(1 && 5, '첫번째 피연산자가 truthy일 때') // 5

// 첫 번째 피연산자가 falsy이면,
// AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
console.log(null && 5, '첫번째 피연산자가 falsy일 때') // null
console.log(0 && '아무거나 와도 상관없습니다.') // 0

console.log(1 && 2 && null && 3) // null
console.log(1 && 2 && 3) // 3

// !(NOT)
// NOT 연산자의 우선순위는 모든 논리 연산자 중에서 가장 높기 때문에 항상 &&, || 보다 먼저 실행됩니다.
// NOT 연산자는 인수를 하나만 받고, 다음 순서대로 연산을 수행합니다.
// 1. 피연산자를 불린형(true / false)으로 변환합니다.
// 2. 1에서 변환된 값의 역을 반환합니다.

const a = !true // false
const b = !false // true

console.log(!true) // false
console.log(!0) //true

// NOT을 두 개 연달아 사용(!!)하면 값을 불린형으로 변환할 수 있습니다.

console.log(!!'non-empty-string', '!! 연산자 사용하기') // true
console.log(!!null, '!! 연산자 사용하기') //false

alert(alert(1) || 2 || alert(3))

// alert 메서드는 값을 반환하지 않습니다. 즉, undefined를 반환하죠.

// 첫 번째 OR || 은 왼쪽 피연산자인 alert(1)를 평가합니다. 이때 첫 번째 얼럿 창에 1이 출력되죠.
// alert메서드는 undefined를 반환하기 때문에, OR 연산자는 다음 피연산자를 평가하게 됩니다. truthy를 찾기 위해 말이죠.
// 두 번째 피연산자(오른쪽 피연산자)인 2는 truthy이기 때문에 실행이 멈추고 2가 반환됩니다. 반환된 값 2는 제일 바깥 alert의 피연산자가 되어 두 번째 얼럿창에 출력됩니다.
// 평가가 alert(3)까지 진행되지 않기 때문에 3은 출력되지 않습니다.

alert(1 && null && 2) // null

alert(alert(1) && alert(2)) // 1 , undefined
// alert를 호출하면 undefined가 반환됩니다.
// alert는 단순히 얼럿 창에 메세지만 띄워주고, 의미 있는 값을 반환해 주지 않습니다.
// &&는 왼쪽 피연산자 alert(1)을 평가하고 (이때 1이 얼럿창에 출력됩니다) 평가를 즉시 멈춥니다.
// alert(!)의 평가 결과는 undefined이기 때문입니다.
// && 연산자는 falsy를 만나면 그 값을 출력하고 즉시 연산을 멈춥니다.

// OR AND OR 연산자로 구성된 표현식
alert(null || (2 && 3) || 4) // 3

// 사이 범위 확인하기
let age = 15
if (age >= 14 && age <= 90) {
  console.log('14 ~ 90세 사이에 포함됩니다')
}

// 바깥 범위 확인하기

let age2 = 8
if (age2 < 14 || age2 > 90) {
  console.log('14세 ~ 90세 이하에 속하지 않는 나이')
}
let age3 = 7
if (!(age3 >= 14 && age3 <= 90)) {
  console.log('not연산자를 이용한 14~90세 이하에 속하지 않는 나이')
}

// if에 관한 고찰
// 아래 표현식에서 어떤 alert가 실행될까요?

if (-1 || 0) alert('first') // -1 이므로 truthy 얼럴트 실행
if (-1 && 0) alert('second') // 0 이므로 falsy 얼럴트 실행 no
if (null || (-1 && 1)) alert('third') // -1 이므로 truthy 얼럴트 실행

// 로그인 구현하기

let user = 'Admin'

if (user === 'Admin') {
  let pw = prompt('비밀번호를 입력하세요')
  if (pw === 'TheMaster') {
    alert('로그인 성공!')
  } else if (pw !== 'TheMaster') {
    alert('인증에 실패하였습니다')
  } else if (pw === '' || pw == null) {
    alert('취소되었습니다.')
  }
} else if (user == '' || user == null) {
  alert('취소되었습니다.')
} else {
  alert('인증되지 않은 사용자 입니다.')
}
