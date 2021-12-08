// 함수

// 스크립트를 작성하다 보면 유사한 동작을 하는 코드가 여러 곳에서 필요할 때가 많습니다.

// 사용자가 로그인이나 로그아웃을 했을 때 안내 메시지를 보여주는 동작 같은 경우 말이죠.

// 함수는 프로그램을 구성하는 주요 '구성 요소(building block)'입니다. 함수를 이용하면 중복 없이 유사한 동작을 하는 코드를 여러 번 호출할 수 있습니다.

// 우리는 앞서 다양한 예시에서 alert(message), prompt(message, default), confirm(question)과 같은 내장 함수를 사용해 보았습니다.

// 이번 챕터에선 함수를 직접 만드는 방법에 대해 알아보겠습니다.

// 함수선언

// function name(parameters) {
//     ...함수 본문...
//   }

// function showMessage() {
//   alert('안녕하세요!')
// }

// showMessage()

// 지역 변수
// 함수 내에서 선언한 변수인 지역 변수(local variable)는 함수 안에서만 접근할 수 있습니다.

// function showMessage() {
//     let message = "안녕하세요!"; // 지역 변수

//     alert( message );
//   }
//   showMessage(); // 안녕하세요!
//   alert( message ); // ReferenceError: message is not defined (message는 함수 내 지역 변수이기 때문에 에러가 발생합니다.)

// 외부 변수, 전역변수
// 함수 내부에서 함수 외부의 변수인 외부 변수(outer variable)에 접근할 수 있습니다.

// let userName = 'John';
// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }
// showMessage(); // Hello, John

let userName = 'Johnsina'

function showMessage() {
  userName = 'BBob' // (1) 외부 변수를 수정함
  let message = 'Hello, ' + userName
  console.log(message, '함수 안에 message 출력')
}

console.log(userName) // 함수 호출전 이므로 Johnsina가 호출됨
showMessage()
console.log(userName) // 함수에 의해 BBob으로 값이 바뀜

// 외부 변수는 지역 변수가 없는 경우에만 사용할 수 있습니다.
// 함수 내부에 외부 변수와 동일한 이름을 가진 변수가 선언되었다면, 내부 변수는 외부 변수를 가립니다.

// 매개변수
// 매개변수(parameter)를 이용하면 임의의 데이터를 함수 안에 전달할 수 있습니다.
// 매개변수에 값을 전달하지 않으면 그 값은 undefined가 됩니다.
// 매개변수에 값을 전달하지 않아도 그 값이 undefined가 되지 않게 하려면 '기본값(default value)'을 설정해주면 됩니다.
// 예) text = 'no text give'
function noTextFnc() {
  console.log('text에 값이 할당되지 않았습니다')
  return 'no text no text'
}

function paraMsg(from, text = noTextFnc()) {
  console.log(from + ': ' + text)
}

paraMsg('Ann') // 두번째 인자를 전달하지 않아도 undefined가 할당될 뿐 에러가 발생하지는 않습니다.
paraMsg('Ann', "what's up?!")

// 매개변수 기본값 평가 시점

// 자바스크립트에선 함수를 호출할 때마다 매개변수 기본값을 평가합니다.
// 물론 해당하는 매개변수가 없을 때만 기본값을 평가합니다.
// 위 예시에선 매개변수 text에 값이 없을 경우 pargaMsg()를 호출할 때마다 noTextFnc()이 호출됩니다.

// 매개변수 기본값을 설정할 수 있는 또 다른 방법
// 가끔은 함수 선언부에서 매개변수 기본값을 설정하는 것 대신 함수가 실행되는 도중에 기본값을 설정하는게 논리에 맞는 경우가 생깁니다.
// 이럴 경우 일단 매개변수를 undefined와 비교하여 함수 호출 시 매개변수가 생략되었는지를 확인합니다.

// 방법 1)
function showshow(text) {
  if (text === undefined) {
    text = '빈 문자열'
  }
  console.log(text, '빈 문자열 나타내기 방법 1')
}
showshow() // 빈 문자열

// 방법 2)
function showshow2(text) {
  text = text || '빈 문자열'
  console.log(text, '빈 문자열 나타내기 방법 2')
}
showshow2()

// 방법 3) 모던 자바스크립트가 지원하는 null 병합 연산자 '??'를 사용하면 0처럼 falsy로 평가되는 값들을 일반 값처럼 처리할 수 있어 좋습니다.

// 매개변수 'count'가 넘어오지 않으면 'unknown'을 출력해주는 함수
function showshow3(count) {
  console.log(count ?? 'unknown 방법3')
}

showshow3(0) // 0
showshow3('string') // string
showshow3(null) // unknown
showshow3() // unknown

// 함수 선언문, 함수 표현식

// 함수 선언문
// 함수 선언문이 정의되기 전에도 호출할 수 있습니다.
function sum(a, b) {
  // 실행시킬 내용
  return a + b
}

// sayHi('john')   // Hello, john
// function sayHi(name) {
//     console.log(`Hello ${name}`)
// }

// 함수 표현식
// 함수 표현식은 코드의 실행 흐름이 해당 함수에 도달했을때 함수를 실행합니다.
let sum2 = function (a, b) {
  return a + b
}

// sayHi('john') // error
// let sayHi = function(name) {
//     console.log(`Hello ${name}`)
// }

let agee = prompt('나이를 입력해 주세요', 18)
let welcome =
  agee < 18
    ? function () {
        alert('hi!')
      }
    : function () {
        alert('Hello!')
      }
welcome()

// 함수 선언문과 함수 표현식 중 무엇을 선택해야 하나요?

// 제 경험에 따르면 함수 선언문을 이용해 함수를 선언하는 걸 먼저 고려하는 게 좋습니다.

//함수 선언문으로 함수를 정의하면, 함수가 선언되기 전에 호출할 수 있어서 코드 구성을 좀 더 자유롭게 할 수 있습니다.

// 함수 선언문을 사용하면 가독성도 좋아집니다. 코드에서 let f = function(…) {…}보다 function f(…) {…} 을 찾는 게 더 쉽죠. 함수 선언 방식이 더 “눈길을 사로잡습니다”.

// 그러나 어떤 이유로 함수 선언 방식이 적합하지 않거나, (위 예제와 같이) 조건에 따라 함수를 선언해야 한다면 함수 표현식을 사용해야 합니다.
