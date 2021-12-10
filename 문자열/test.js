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

// 동일한 알고리즘을 사용해 코드만 짧게 줄이기

let str5 = 'As sly as a fox, as strong as an ox'
let target5 = 'as'

let pos2 = -1
// target을 이용해 찾은 후 다음 자리를 찾기 위해 +1을 해주되, indexOf()의 위치값은 0이 기본이 되어야 하기 때문이다.
while ((pos2 = str5.indexOf(target, pos2 + 1)) != -1) {
  console.log(`str5 위치: ${pos2}`)
}

// indexOf()를 조건문에서 사용할 때 주의할 점이 있습니다.
// if() 조건문은 조건식에 0이 들어오면 false를 반환합니다.
// Webkit은 맨 처음 발견되는 단어로서 0을 반환하기 때문에 조건문에서 false로 간주합니다.
// substr이 -1과 같지 않으면 이라는 조건을 할당하여 0인 값 또한 true로 간주하여 값을 반환해 줍니다.
let str77 = 'Webkit with id'
if (str77.indexOf('Webkit') != -1) {
  console.log('I found!!')
}

// includes, startsWith, endsWith

// str.includes(substr, pos)는 str에 부분 문자열 substr이 있는지에 따라 true / false를 반환합니다.
// 부분 문자열의 위치 정보는 필요하지 않고 포함 여부만 알고 싶을 때 적합한 메소드 입니다.
console.log(str77.includes('with'), 'includes() 메소드')

// 메서드 str.startsWith와 str.endsWith는 메서드 이름 그대로 문자열 str이 특정 문자열로 시작하는지(start with) 여부와 특정 문자열로 끝나는지(end with) 여부를 확인할 때 사용할 수 있습니다.
console.log(str77.startsWith('Web'), 'startWith() 메소드')
console.log(str77.endsWith('with'), 'endsWith() 메소드')

// 부분 문자열 추출하기

// str.slice(start, [, end])
// 문자열의 start부터 end까지(end는 미포함)를 반환합니다.
let slstr = 'stringify'
console.log(slstr.slice(0, 3), 'slice') // str
// 두번째 인수가 생략된 경우엔, 명시한 위치부터 문자열 끝까지 반환합니다.
console.log(slstr.slice(2), '두번째 인수가 생략된 경우') // ringify

// 문자열 비교하기

// str.codePointAt(pos)
// pos에 위치한 글자의 코드를 반환합니다.
console.log('zo'.codePointAt(0), '소문자 z') // 122
console.log('Z'.codePointAt(0), '대문자 Z') // 90

// String.fromCodePoint(code)
// 숫자 형식의 code에 대응하는 글자를 만들어줍니다.
console.log(String.fromCodePoint(90), '숫자 형식의 코드에 대응하는 글자를 반환') // Z

// 65 ~ 220 사이 글자 출력
let str09 = ''
for (let i = 65; i <= 220; i++) {
  str09 += String.fromCodePoint(i)
}
console.log(str09, ' // 65 ~ 220사이 글자 출력')

// 문자열 제대로 비교하기

// 언어마다 문자 체계가 다르기 때문에 문자열을 '제대로' 비교하는 알고리즘을 만드는건 생각보다 어렵습니다.
// 문자열을 비교하려면 일단 페이지에서 어떤 언어를 사용하고 있는지 브라우저가 알아야 합니다.

// 다행히도 모던 브라우저 대부분이 국제화 관련 표준인 ECMA-402를 지원합니다(IE10은 아쉽게도 Intl.js 라이브러리를 사용해야 합니다).

// ECMA-402엔 언어가 다를 때 적용할 수 있는 문자열 비교 규칙과 이를 준수하는 메서드가 정의되어있습니다.

// str.localeCompare(str2)를 호출하면 ECMA-402에서 정의한 규칙에 따라 str이 str2보다 작은지, 같은지, 큰지를 나타내주는 정수가 반환됩니다.
// str이 str2보다 작으면 음수를 반환합니다.
// str이 str2보다 크면 양수를 반환합니다.
// str과 str2이 같으면 0을 반환합니다.

console.log('Österreich'.localeCompare('Zealand'), ' 문자열 제대로 비교하기') // -1

// 첫 글자를 대문자로 변경하기

function ucFirst(str) {
  if (!str) {
    alert('글자를 입력해주세요')
    return str
  }

  return str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst('hobanya'), '첫글자 대문자로 변경하기')

// 스팸 문자열 걸러내기

function checkSpam(str) {
  let lowerStr = str.toLowerCase()

  return lowerStr.includes('viagra') || lowerStr.includes('xxx')
}

console.log(checkSpam('buy ViAgRa now'), 'check viagra spam')
console.log(checkSpam('free xxxxx'), 'check free xxxxx')
console.log(checkSpam('innocent rabbit'), 'check innocent rabbit')

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength) + '...' : str
}
console.log(
  truncate("What I'd like to tell on this topic is:", 20),
  '글자수 줄이기',
)
