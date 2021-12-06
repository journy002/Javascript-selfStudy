// 자료형

// no error
// 이처럼 자료의 타입은 있지만 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있습니다.
// 이런 언어를 '동적 타입(dynamically typed)'언어라고 부릅니다.
let message = 'hello'
message = 123456
console.log(message)

// 문자열
// 자바스크립트에선 문자열(string)을 따옴표로 묶습니다.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// 따옴표는 세 종류가 있습니다.

// 큰따옴표: "Hello"
// 작은따옴표: 'Hello'
// 역 따옴표(백틱, backtick): `Hello`

let name = "John";

// 변수를 문자열 중간에 삽입
alert( `Hello, ${name}!` ); // Hello, John!

// 표현식을 문자열 중간에 삽입
alert( `the result is ${1 + 2}` ); // the result is 3

// 불린형
// 불린형(논리 타입)은 true와 false 두 가지 값밖에 없는 자료형입니다.

// 불린형은 긍정(yes)이나 부정(no)을 나타내는 값을 저장할 때 사용합니다. true는 긍정, false는 부정을 의미합니다.
let nameFieldChecked = true; // 네, name field가 확인되었습니다(checked).
let ageFieldChecked = false; // 아니요, age field를 확인하지 않았습니다(not checked)

let isGreater = 4 > 1;

alert( isGreater ); // true (비교 결과: "yes")

// ‘null’ 값
// null 값은 지금까지 소개한 자료형 중 어느 자료형에도 속하지 않는 값입니다.

// null 값은 오로지 null 값만 포함하는 별도의 자료형을 만듭니다.
// 자바스크립트의 null은 자바스크립트 이외 언어의 null과 성격이 다릅니다. 다른 언어에선 null을 '존재하지 않는 객체에 대한 참조’나 '널 포인터(null pointer)'를 나타낼 때 사용합니다.
// 하지만 자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용합니다.
// let age = null;은 나이(age)를 알 수 없거나 그 값이 비어있음을 보여줍니다.


// ‘undefined’ 값
// undefined 값도 null 값처럼 자신만의 자료형을 형성합니다.
// undefined는 '값이 할당되지 않은 상태’를 나타낼 때 사용합니다.
// 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당됩니다.

let age;
alert(age); // 'undefined'가 출력됩니다.

// 개발자가 변수에 undefined를 명시적으로 할당하는 것도 가능하긴 합니다.
let age2 = 100;

// 값을 undefined로 바꿉니다.
age2 = undefined;
alert(age2); // "undefined"

// typeof 연산자
// typeof 연산자는 인수의 자료형을 반환합니다. 자료형에 따라 처리 방식을 다르게 하고 싶거나 변수의 자료형을 빠르게 알아내고자 할 때 유용합니다.

// typeof 연산자는 두 가지 형태의 문법을 지원합니다.

// 연산자: typeof x
// 함수: typeof(x)
// 괄호가 있든 없든 결과가 동일합니다.

// typeof x를 호출하면 인수의 자료형을 나타내는 문자열을 반환합니다.

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)