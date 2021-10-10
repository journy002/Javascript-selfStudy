const a = !true; // false
const b = !false // true

// And 연산자.  양쪽 다 참이 나와야 결과값이 참으로 나온다.
const c = true && true; //true
const f = false && false; // false
const g = false && true; // false

// OR 연산자. 둘 중 하나만 참이 나와도 결과값이 참.


const value = !((true && false) || (true && false) || !false);
// 결과는 참

