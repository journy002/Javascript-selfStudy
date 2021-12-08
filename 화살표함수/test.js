// 화살표 함수 기본
// 함수 표현식보다 단순하고 간결한 문법으로 함수를 만들 수 있는 방법이 있습니다.

// 바로 화살표 함수(arrow function)를 사용하는 것입니다. 화살표 함수라는 이름은 문법의 생김새를 차용해 지어졌습니다.

// let func = (arg1, arg2, ...argN) => expression

// 이렇게 코드를 작성하면 인자 arg1..argN를 받는 함수 func이 만들어집니다.
// 함수 func는 화살표(=>) 우측의 표현식(expression)을 평가하고, 평가 결과를 반환합니다.

// 아래 함수의 축약 버전이라고 할 수 있습니다.
// let func = function (arg1, arg2, ...argN) {
//   return expression
// }

// 좀 더 구체적인 예시
let sum = (a, b) => a + b

/* 위 화살표 함수는 아래 함수의 축약 버전입니다.

let sum = function(a, b) {
  return a + b;
};
*/

alert(sum(1, 2)) // 3

// 인수가 하나밖에 없다면 인수를 감싸는 괄호를 생략할 수 있습니다.
// 괄호를 생략하면 코드 길이를 더 줄일 수 있습니다.

let double = (n) => n * 2
// let double = function(n) { return n * 2 }과 거의 동일합니다.

alert(double(3)) // 6

// 인수가 하나도 없을 땐 괄호를 비워놓으면 됩니다. 다만, 이 때 괄호는 생략할 수 없습니다.
let sayHi = () => alert('안녕하세요!')
sayHi()

// 화살표 함수는 함수 표현식과 같은 방법으로 사용할 수 있습니다.

let age = prompt('How old are you?', 18)

let welcome = age < 18 ? () => alert('Hi?') : () => alert('Hello?')

welcome()

// 본문이 여러 줄인 화살표 함수
// 평가해야 할 표현식이나 구문이 여러 개인 함수가 있을 수도 있습니다.
// 이 경우, 중괄호 안에 평가해야 할 코드를 넣어주어야 합니다.
// 그리고 return 지시자를 사용해 명시적으로 결과값을 반환해 주어야 합니다.

// 예)

let summ = (a, b) => {
  let result = a + b
  return result
}

console.log(summ(1, 3), '// 여러줄인 화살표 함수 구현해 보기')

let hihi = prompt('몇살인가요')

let adult = () => {
  console.log('성인 입니다.')
}

let kids = () => {
  console.log('아직 어립니다.')
}

let schoolGrade =
  hihi < 20
    ? () => {
        kids()
      }
    : () => {
        adult()
      }
schoolGrade()

// 함수 표현식을 화살표 함수로 만들어보기

// function ask(question, yes, no) {
//     if(confirm(question)) yes()
//     else no()
// }

// ask(
//     "동의 하십니까",
//     function(){ console.log('동의합니다.') },
//     function(){ console.log('동의하지 않습니다.') }
// )

let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no()
}

ask(
  '동의하십니까?',
  () => {
    console.log('동의합니다.')
  },
  () => {
    console.log('취소를 눌렀습니다.')
  },
)
