// 형 변환
// 함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환됩니다.
// 이런 과정을 "형 변환(type conversion)"이라고 합니다.

let value = true;
alert (typeof value) // boolean

value = String(value) // 변수 value엔 문자열 'true'가 저장됩니다.
alert(typeof value) // string

// 숫자형으로 변환
// 숫자형으로의 변환은 수학과 관련된 함수와 표현식에서 자동으로 일어납니다.
// 숫자형이 아닌 값에 나누기 / 를 적용한 경우 자동으로 숫자타입으로 변환됩니다.
alert("6" / "3") // 2

let str = "123"
alert(typeof str) // string

let num = Number(str)
alert(typeof num) // number

// 전달받은 값 => 형 변환 후
// undefined => NaN
// null => 0
// true and false => 1, 0
// string => 문자열의 처음과 끝 공백이 제거 됩니다. 공백 제거 후 남아있는 문자열이 없다면 0, 그렇지 않다면 문자열에서 숫자를 읽습니다. 변환에 실패하면 NaN
