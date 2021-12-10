// ** 객체를 원시형으로 변환하기 ** //

// ToPrimitive
// 특수 객체 메서드를 사용하면 숫자형이나 문자형으로의 형 변환을 원하는 대로 조절할 수 있습니다.

// 객체 형 변환은 세 종류로 구분되는데, 'hint’라 불리는 값이 구분 기준이 됩니다. 'hint’가 무엇인지는 명세서에 자세히 설명되어 있는데, ‘목표로 하는 자료형’ 정도로 이해하시면 될 것 같습니다.

// "string"
// alert 함수같이 문자열을 기대하는 연산을 수행할 때는(객체-문자형 변환), hint가 string이 됩니다.

// 객체를 출력하려고 함
// alert(obj)

// 객체를 프로퍼티 키로 사용하고 있음
// anotherObj[obj] = 123

// Symbol.toPrimitive //

//자바스크립트엔 Symbol.toPrimitive라는 내장 심볼이 존재하는데, 이 심볼은 아래와 같이 목표로 하는 자료형(hint)을 명명하는 데 사용됩니다.

let user = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`)
    return hint == 'string' ? `{name: "${this.name}"}` : this.money
  },
}

// 데모:
alert(user) // hint: string -> {name: "John"}
alert(+user) // hint: number -> 1000
alert(user + 500) // hint: default -> 1500
