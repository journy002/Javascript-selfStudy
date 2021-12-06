const a = 1
const b = 2;
const sum = a + b;

console.log(sum);

function add (a, b) {
    return a + b
};

const sum2 = add(1, 3);
console.log(sum2);

console.log('--------------------');

function hello (name) {
    console.log( '나와라 ' + name + '!');
}

hello('jjjjjj')

// 템플릿 리터널 사용하여 구현해보기

function hello2 (name) {
    console.log(`Hello ${name} ? `)
}

hello2('kkkk')

// 화살표 함수

const add3 = (a,b) => {
    return a + b;
}
console.log(add(1,3));

const addTest = (c, d) => c + d;

console.log(addTest(5,8))

// 매개변수
// 매개변수(parameter)를 이용하면 임의의 데이터를 함수 안에 전달할 수 있습니다.
// 매개변수는 인수(argument)라고 불리기도 합니다.
// 매개변수와 인수는 엄밀히 같진 않지만, 튜토리얼 원문 토대로 가져왔습니다.

function showMessage(from, text) {

    from = '*' + from + '*'

    console.log(from + ": " + text)
}

showMessage('oms', 'Hello!') // oms: Hello!
showMessage('omms', "What's up?") // omms: What's up?

// 매개변수 'count'가 넘어오지 않으면 'unknown'을 출력해주는 함수
// 모던 자바스크립트 엔진이 지원하는 null 병합 연산자 ?? 를 사용하면 0처럼 falsy로 평가되는 값들을 일반 값처럼 처리할 수 있어서 좋습니다.
function showCount(count) {
    console.log(count ?? "unknown")
}

showCount(0) // 0
showCount(null) // unknown
showCount() // unknown

// 반환 값
// 함수를 호출했을 때 함수를 호출한 그곳에 특정 값을 반환하게 할 수 있습니다.
// 이때 이 특정 값을 반환 값(return value)라고 부릅니다.
function sum3 (a,b) {
    return a + b
}

function checkAge(age) {
    if( age >= 18 ) {
        return true
    } else {
        return confirm('보호자의 동의를 받으셨나요?')
    }
}

let age = prompt('나이를 알려주세요' , 17)
if(checkAge(age)) {
    console.log('접속 허용')
} else {
    console.log('접속 차단')
}

// return 과 사이에 절대 줄을 삽입하지 마세요.
// 반환하려는 값이 긴 표현식인 경우, 아래와 같이 지시자 return 과 반환하려는 값 사이에 새 줄을 넣어 코드를 작성하고 싶을 수 있습니다.

// 예)
// return
// (some + long + expression + or + whatever * f(a) + f(b))

// 따라서 반환하고자 했던 표현식을 반환하지 못하고 아무것도 반환하지 않는 것 처럼 됩니다.
// 표현식을 여러 줄에 걸쳐 작성하고 싶다면 표현식이 return 지시자가 있는 줄에서 시작하도록 작성해야 합니다.
// 또는, 아래와 같이 여는 괄호는 return 지시자와 같은 줄에 써줘도 괜찮습니다.

// 예)
// return (
//     some + long + expression
//     + or +
//     whatever * f(a) + f(b)
// )


// Callback function 콜백함수
// 매개변수가 3개 있는 함수 작성, ask(question, yes, no)
// question: 질문 yes: yes라고 답한 경우 실행되는 함수 no: no라고 답한 경우 실행되는 함수
// 함수는 반드시 question(질문)을 해야 하고, 사용자의 답변에 따라 yes() or no()를 호출합니다.

function ask (question, yes, no) {
    if(confirm(question)) yes()
    else no()
}

function showOk() {
    console.log(" 동의하셨습니다. ")
}

function showCancle() {
    console.log(" 취소 버튼을 누르셨습니다. ")
}

// 사용법: 함수 showOk와 showCancle가 ask 함수의 인수로 전달됨
ask("동의하십니까?", showOk, showCancle)


// 함수 표현식 vs 함수 선언문

// 함수 선언문
function exm(a,b) {return a + b}

// 함수 표현식
let exm2 = function(a,b) {return a + b}

// 참조에 의한 객체 복사
// 객체와 원시 타입의 근본적인 차이 중 하나는 
// 객체는 '참조에 의해' 저장되고 복사된다는 것 입니다.
// 원시값(문자열, 숫자, 불린 값)은 '값 그대로' 저장, 할당되고 복사됩니다.

// 객체의 동작 방식은 객체가 저장되어있는 '메모리 주소'인 객체에 대한 '참조 값'이 저장됩니다.
// 객체는 메모리 내 어딘가에 저장되고, 변수 user엔 객체를 '참조'할 수 있는 값이 저장됩니다.
let exUser = {
    name: 'John'
}

let exAdmin = exUser
exAdmin.name = 'Konan' // exAdmin 참조 값에 의해 변경 됨

console.log(exUser, 'exUser') // { name: 'Konan' }  exAdmin 참조 값에 의해 변경 됨
console.log(exAdmin, 'exAdmin') // { name: 'Konan' }

// 객체 복사, 병합과 Object.assing()
// Object.assign(target, ...sources)  =>  sources가 가지고 있는 속성들을 target에 반영한다.

const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }
const returnedTarget = Object.assign(target, source)

console.log(target, 'Object.assign target') // { a: 1, b: 4, c: 5 }
console.log(returnedTarget, 'Object.assign returnedTarget') // { a: 1, b: 4, c: 5 }


const bbbb = {
    name: 'johoh',
    age: 30,
    bubu: true
}

let clone = {} // 새로운 빈 객체

for(let key in bbbb) {
    console.log(key,' keyeyeyey')

    setTimeout(() => {
        console.log(bbbb[key], 'bbbb value')
    }, 2000)

    clone[key] = bbbb[key] // 빈 객체에 bbbb 프로퍼티 전부를 복사해 넣었습니다.
    // 이제 clone은 완전히 독립적인 복제본이 되었습니다.
    clone.name = 'Petty' // clone의 데이터를 변경합니다.
    setTimeout(() => {
        console.log(clone[key], 'clone value')
    },3000)

    setTimeout(() => {
        console.log(bbbb.name, 'clone.name을 변경 했지만 기존 객체는 여전히 johoh가 있습니다.')
    },4000)
}

// 중첩 객체 복사
let bodyUser = {
    name: 'JOJOhn',
    sizes: {
        height: 180,
        width: 76
    }
}

console.log(bodyUser.sizes.height, 'bodyUser size height') // 180