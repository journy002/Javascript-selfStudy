// 문자열 string

// 문자열의 길이
// length 프로퍼티엔 문자열의 길이가 저장됩니다.

// length는 프로퍼티입니다.
// 자바스크립트 이외의 언어를 사용했던 개발자들은 str.length가 아닌 str.length()로 문자열의 길이를 알아내려고 하는 경우가 있습니다. 하지만 원하는 대로 동작하지 않습니다.

// length는 함수가 아니고, 숫자가 저장되는 프로퍼티라는 점에 주의하시기 바랍니다. 뒤에 괄호를 붙일 필요가 없습니다.

// 특정 글자에 접근하기

// 문자열 내 특정 위치인 pos에 있는 글자에 접근하려면 [pos]같이 대괄호를 이용하거나
// str.charAt(pos)라는 메서드를 호출하면 됩니다.
// 위치는 0부터 시작합니다.

let str = `Hello`

// 첫 번째 글자
console.log(str[0]) // H
console.log(str.charAt(0)) // H

// 마지막 글자
console.log(str[str.length - 1]) // o

// 근래에는 대괄호를 이용하는 방식을 사용합니다.
// charAt은 하위 호환성을 위해 남아있는 메서드라고 생각하시면 됩니다.

// let str = `Hello`;

// alert( str[1000] ); // undefined
// alert( str.charAt(1000) ); // '' (빈 문자열)

// for..of를 사용하면 문자열을 구성하는 글자를 대상으로 반복 작업을 할 수 있습니다.

for (let char of 'Hello') {
  // alert(char) // H,e,l,l,o (char는 순차적으로 H, e, l, l, o가 됩니다.)
}

// 대소문자 변경하기

let spell = 'Hello'
console.log(spell.toUpperCase()) // HELLO
console.log(spell.toLowerCase()) // hello

// 부분 문자열 찾기
// 문자열에서 부분 문자열(substring)을 찾는 방법은 여러 가지가 있습니다.

// 첫 번째 방법은 str.indexOf(substr, pos) 메서드를 이용하는 것입니다.

// 이 메서드는 문자열 str의 pos에서부터 시작해, 부분 문자열 substr이 어디에 위치하는지를 찾아줍니다.
// 원하는 부분 문자열을 찾으면 위치를 반환하고 그렇지 않으면 -1을 반환합니다.

let str2 = 'Widget with id'

console.log(str2.indexOf('Widget')) // 0, str은 'Widget'으로 시작함
console.log(str2.indexOf('widget')) // -1, indexOf는 대·소문자를 따지므로 원하는 문자열을 찾지 못함

console.log(str2.indexOf('id')) // 1, "id"는 첫 번째 위치에서 발견됨 (Widget에서 id)

// 문자열 내 부분 문자열 전체를 대상으로 무언가를 하고 싶다면 반복문 안에 indexOf를 사용하면 됩니다.
// 반복문이 하나씩 돌 때마다 검색 시작 위치가 갱신되면서 indexOf가 새롭게 호출됩니다.

let str3 = 'As sly as a fox, as strong as an ox'
let target = 'as'

let pos = 0
while (true) {
  let foundPos = str3.indexOf(target, pos)
  if (foundPos == -1) break

  console.log('위치: ' + foundPos)
  pos = foundPos + 1 // 다음 위치를 기준으로 검색을 이어갑니다.
  console.log('다음 위치: ' + pos)
}
