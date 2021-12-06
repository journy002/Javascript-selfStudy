// 변수와 상수

// 대다수의 자바스크립트 애플리케이션은 사용자나 서버로부터 입력받은 정보를 처리하는 방식으로 동작합니다.
// 1. 온라인 쇼핑몰 - 판매 중인 상품이나 장바구니 등의 정보
// 2. 채팅 어플리캐이션 - 사용자 정보, 메시지 등의 정보

// 변수는 이러한 정보를 저장하는 용도로 사용됩니다.

// let 키워드를 사용해 변수를 생성합니다.

let message;

// = 연사자를 사용해 변수 안에 데이터를 저장 합니다.
message = 'Hello' // 문자열을 저장합니다.


let Hello = 'Hello World'
let msg

msg = Hello
console.log(Hello) // Hello World
console.log(msg) // Hello World

// 변수 명명 규칙
// 1. 변수명에는 오직 문자와 숫자, 그리고 기호 $, _만 들어갈 수 있습니다.
// 2. 첫 글자에는 숫자가 될 수 없습니다.

// 잘못된 변수명 예시
// let 1a; 숫자로 시작해선 안 됩니다.
// let my-name 하이픈 '-'은 변수명에 올 수 없습니다.

// 예약어(reserved name) 목록에 있는 단어는 변수명으로 사용할 수 없습니다.

// 상수 =  const : 변하지 않는 변수를 선언할 때 사용합니다.
const myBirthday = '19.04.25'

// 대문자 상수
// 기억하기 힘든 값을 변수에 할당해 별칭으로 사용하는 방법이 있습니다.
// 이런 상수는 대문자와 밑줄로 구성된 이름을 명명합니다.
const COLOR_RED = '#F00'
const COLOR_GREEN = '#0F0'
const COLOR_BLUE = '#00F'
const COLOR_ORANGE = '#FF7F00'

// 색상을 고르고 싶을 때 별칭을 사용할 수 있습니다.
let colorRed = COLOR_RED
// alert(colorRed)

let admin
let name = 'John'
admin = name
alert(admin)
