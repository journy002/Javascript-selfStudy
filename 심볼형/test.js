// ** 심볼형 ** //

// 자바스크립트는 객체 프로퍼티 키로 오직 문자형과 심볼형만을 허용합니다.

// 심볼
// 심볼(Symbol)은 유일한 식별자(unique identifier)를 만들고 싶을 때 사용합니다.
// Symbol() 을 사용하면 심볼값을 만들 수 있습니다.

// id는 새로운 심볼이 됩니다.
// 심볼을 만들 때 심볼 이름이라 불리는 설명을 붙일 수도 있습니다.
// 심볼 id에는 "id"라는 설명이 붙습니다.
let id = Symbol('id')

// 심볼은 유일성이 보장되는 자료형이기 때문에, 설명이 동일한 심볼을 여러개 만들어도 각 심볼값은 다릅니다.
// 심볼에 붙이는 설명은 어떤 것에도 영향을 주지 않는 이름표 역할만을 합니다.

let id1 = Symbol('id')
let id2 = Symbol('id')
console.log(id1 == id2, 'id1과 id2 비교') // false

// 심볼은 문자형을 자동 형 변환이 되지 않습니다.
// 자바스크립트에선 문자형으로의 암시적 형 변환이 비교적 자유롭게 일어나는 편입니다.
// 그러나 심볼은 예외입니다. 심볼형 값은 다른 자료형으로 암시적 형 변환(자동 형 변환)되지 않습니다.

// 에러를 발생시키는 예시
// alert(id) // TypeError: Cannot convert a Symbol value to a string

// 문자열과 심볼은 근본이 다르기 때문에 우연히라도 서로의 타입으로 변환되선 안 됩니다.
// 자바스크립트에선 '언어 차원의 보호장치(language guard)'를 마련해 심볼형이 다른 형으로 변환되지 않게 막아줍니다.

// 심볼을 반드시 출력해줘야 하는 상황이라면 .toString()메서드를 명시적으로 호출해주면 됩니다.

let id3 = Symbol('id')
console.log(id3.toString(), 'id3 심볼을 toString()메서드를 사용해 명시적 호출') // Symbol(id)가 콘솔창에 출력됨
console.log(id3.description, 'description 프로퍼티를 사용해 설명만 출력')
// symbol.description 프로퍼티를 이용하면 설명만 보여주는 것도 가능합니다.
