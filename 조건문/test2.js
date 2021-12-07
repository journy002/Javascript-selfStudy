// if와 '?'를 사용한 조건 처리

// 조건에 따라 다른 행동을 취해야 할 때가 있습니다.
// 이럴땐, if문 또는 '물음표' 연산라고도 불리는 조건부 연산자 ?를 사용하면 됩니다.

let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?')
if (year === '2015') {
  alert('정답입니다!')
} else {
  alert('다시 한번 생각해 보세요!')
}

// 불린형으로의 변환
// if(...) 문은 괄호 안의 표현식을 평가하고 그 결과를 불린값으로 변환합니다.
// 숫자 0, 빈 문자열 "", null, undefined, NaN은 불린형으로 변환 시 모두 false가 됩니다.
// 이런 값들은 'falsy(거짓 같은)' 값 이라고 부릅니다.
// 이 외의 값은 불린형으로 변환시 true가 되므로 'truthy(참 같은)'값이라고 부릅니다.

if (0) {
  // 0은 falsy입니다.
  // 실행되지 않는 코드
  console.log('실행되지 않습니다.')
}

if (1) {
  // 1은 truthy입니다.
  console.log('실행되는 조건문 입니다.')
}

// 아래와 같이 평가를 통해 확정된 불린값을 if문에 전달할 수도 있습니다
// prompt 입력창에서 전달 받은 값은 문자열로 들어옵니다.
// === 연산자를 사용할 경우 값과 값의 종류(Data Type)가 모두 같은지 비교해서 맞으면 true 다르면 false를 반환합니다.
// == a와 b의 값이 같은지만 비교합니다.
let cond = year == 2015
if (cond) {
  console.log('이미 평가를 통해 확정된 불린 값은 전달 받은 조건문 입니다.')
}

// 조건부 연산자 ‘?’
// 조건에 따라 다른 값을 변수에 할당해줘야 할 때가 있습니다.
// '물음표(question mark) 연산자’라고도 불리는 '조건부(conditional) 연산자’를 사용하면 위 예시를 더 짧고 간결하게 변형할 수 있습니다.
// 조건부 연산자는 물음표?로 표시합니다. 피연산자가 세 개이기 때문에 조건부 연산자를 '삼항(ternary) 연산자’라고 부르는 사람도 있습니다.
// 참고로, 자바스크립트에서 피연산자가 3개나 받는 연산자는 조건부 연산자가 유일합니다.

// 예시 1)
// let result = condition ? value1 : value2

// 예시 2)
// let accessAllowed = (age > 18) ? true : false

// 다중 '?'
let age = prompt('나이를 입력해주세요.', 18)
let msg =
  age < 3
    ? '아가야 안녕?'
    : age < 18
    ? '안녕!'
    : age < 100
    ? '안녕하세요!'
    : '어디서 온 누구니??'

alert(msg)
