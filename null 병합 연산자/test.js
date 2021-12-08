// null 병합 연산자 '??'

// 최근에 추가됨
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저에선 확인이 필요합니다.

// null 병합 연산자(nullish coalescing operator) ??를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 '확정되어있는' 변수를 찾을 수 있습니다.

// a ?? b의 평가 결과는 다음과 같습니다.
// * a가 null도 아니고 undefined도 아니면 a
// * 그 외의 경우는 b

// null 병합 연산자 ??없이 x = a ?? b와 동일한 동작을 하는 코드를 작성하면 다음과 같습니다.
// x = (a !== null && a !== undefined) ? a : b;

// 비교 연산자와 논리 연산자만으로 null병합 연산자와 같은 기능을 하는 코드를 작성하니 코드가 길어집니다.

// firstName, lastName, nickName이란 변수에 사용자 이름이나 별명을 저장하는데,
// 사용자가 아무런 정보도 입력하지 않는 케이스도 허용한다고 해보겠습니다.
// 화면엔 세 변수 중 실제 값이 있는 변수의 값을 출력하는데, 세 번수 모두 값이 없다면 '익명의 사용자'가 출력되도록 해봅시다.
// 이럴 때 null 병합 연산자 ?? 를 사용하면 값이 정해진 변수를 간편하게 찾아낼 수 있습니다.

let firstName = undefined;
let lastName = undefined;
let nickName = null;

// null이나 undefined가 아닌 첫 번째 피연산자
console.log(firstName ?? lastName ?? nickName ?? '익명의 사용자') // 익명의 사용자

// '??' 와 '||'의 차이
// null 병합 연산자는 OR 연산자 ||와 상딩히 유사해 보입니다.
// 실제로 위 예시에서 ??를 ||로 바꿔도 그 결과는 동일합니다.
// 두 연산자 사이에는 중요한 차이점이 있습니다.

// * ||는 첫 번째 truthy 값을 반환합니다.
// * ??는 첫 번째 정의된(defined) 값을 반환합니다.

// null, undefined, 숫자 0을 구분 지어 다뤄야 할 때 이 차이점은 매우 중요한 역할을 합니다.

// 예)
let hegith = 0

console.log(height = height ?? 100) // 0
console.log(height = height || 100) // 100

// height || 100은 height에 0을 할당했지만 0을 falsy한 값으로 취급했기 때문에 null이나 undefined를 할당한 것과 동일하게 처리합니다.
// 따라서 height || 100의 평가 결과는 100 입니다.
// 반면 height ?? 100의 평가 결과는 height가 정확하게 null, undefined일 경우에만 100이 됩니다.
// 예시에선 height에 0이라는 값을 할당했기 때문에 콘솔창엔 0이 출력됩니다.

// 이런 특징 때문에 높이처럼 0이 할당될 수 있는 변수를 사용해 기능을 개발할땐 || 보단 ??가 적합합니다.

// 연산자 우선순위
// ??의 연산자 우선순위는 5로 꽤 낮습니다.

// 안정성 관련 이슈 때문에 ??는 &&나 ||와 함께 사용하지 못합니다.
// 예) let x = 1 && 2 ?? 3; // SyntaxError: Unexpected token '??'

// 제약을 피하려면 괄호를 사용하면 됩니다.
// let x = (1 && 2) ?? 3
// console.log(x) // 2