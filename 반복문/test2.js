// while과 for반복문

// 개발을 하다 보면 여러 동작을 반복해야 하는 경우가 종종 생깁니다.

// 상품 목록에서 상품을 차례대로 출력하거나 숫자를 1부터 10까지 하나씩 증가시키면서 동일한 코드를 반복 실행해야 하는 경우같이 말이죠.

// 반복문(loop) 을 사용하면 동일한 코드를 여러 번 반복할 수 있습니다.

// 'while' 반복문

// while(condition) {
//     // 코드
//     // '반복문 본문(body)'이라 불림
// }

// condition(조건)이 truthy이면 반복문 본문의 코드가 실행됩니다.
// 아래 반복문은 조건 i < 3을 만족할 동안 i를 출력합니다.

let i = 0
while (i < 3) {
  console.log(i, 'while 반복문')
  i++
}

// 반복문 본문이 한 번 실행되는 것을 반복(iteration, 이터레이션) 이라고 부릅니다. 위 예시에선 반복문이 세 번의 이터레이션을 만듭니다.

// i++가 없었다면 이론적으로 반복문이 영원히 반복되었을 겁니다. 그런데 브라우저는 이런 무한 반복을 멈추게 해주는 실질적인 수단을 제공합니다. 서버 사이드 자바스크립트도 이런 수단을 제공해 주므로 무한으로 반복되는 프로세스를 죽일 수 있습니다.

// 반복문 조건엔 비교뿐만 아니라 모든 종류의 표현식, 변수가 올 수 있습니다. 조건은 while에 의해 평가되고, 평가 후엔 불린값으로 변경됩니다.

// 'do ...while' 반복문
// do..while 문법을 사용하면 condition을 반복문 본문 아래로 옮길 수 있습니다.

// do {
//     // 반복문 본문
//   } while (condition);

// 예시
let j = 0
do {
  console.log(j, 'do ...while')
  j++
} while (j < 3)

// do..while 문법은 조건이 truthy 인지 아닌지에 상관없이, 본문을 최소한 한번이라도 실행하고 싶을 때만 사용해야 합니다.
//  대다수의 상황에선 do..while보다 while(…) {…}이 적합합니다.

// 'for' 반복문
// for 반복문은 while 반복문보다는 복잡하지만 가장 많이 쓰이는 반복문입니다.

// for (begin; condition; step) {
//   // ... 반복문 본문 ...
// }

for (let i = 0; i < 3; i++) {
  console.log(i, 'for 반복문')
}

// 구성 요소

// begin i = 0; 반복문에 진입할 때 단 한번 실행됩니다.
// condition i < 3 반복마다 해당 조건이 확인됩니다. false면 반복문이 멈춥니다.
// body console.log(i) condition이 truthy일 동안 계속해서 실행됩니다.
// step i++ 각 반복의 body가 실행된 이후에 실행됩니다.

// 일반적인 반복문 알고리즘

// begin을 실행함
// → (condition이 truthy이면 → body를 실행한 후, step을 실행함)
// → (condition이 truthy이면 → body를 실행한 후, step을 실행함)
// → (condition이 truthy이면 → body를 실행한 후, step을 실행함)
// → ...

// begin이 한 차례 실행된 이후에, condition 확인과 body, step이 계속해서 반복 실행되죠.

// 반복문을 처음 배우신다면, 위 예시를 실행했을 때 어떤 과정을 거쳐 얼럿 창이 출력되는지 종이에 적어가며 공부해보세요. 이렇게 하면 반복문을 쉽게 이해할 수 있습니다.

// 정확히 어떤 과정을 거치는지는 아래 예시에서 확인할 수 있습니다.

// 인라인 변수 선언

// for(let i = 0; i < 3; i++) {
//     console.log(i) // 0, 1, 2
// }
// console.log(i) // Error: i is not defined

// 인라인 변수 선언 대신, 정의되어 있는 변수를 사용할 수 있습니다.
let k = 0
for (k = 0; k < 3; k ++) {
    console.log(k, 'for k') // 0, 1, 2
}
console.log(k , 'out of for kkk') // 3