// Promise

// promise 객체 만들기

// let promise = new Promise(function(resolve, reject) {
//     // executor (실행자, 실행 함수)
// });

// new Promise에 전달되는 함수는 executor(실행자, 실행 함수) 라고 부릅니다.
// executor는 new Promise가 만들어질 때 자동으로 실행되는데, 결과는 최종적으로 만들어내는 제작 코드를 포함합니다.

// executor에선 결과를 즉시 얻든 늦게 얻든 상관없이 상황에 따라 인수로 넘겨준 콜백 중 하나를 반드시 호출해야 합니다.
// resolve(value) - 일이 성공적으로 끝난 경우 그 결과를 나타내는 value 와 함께 호출
// reject(error) - 에러 발생 시 에러 객체를 나타내는 error와 함께 호출

// new Promise 생성자가 반환하는 promise 객체는 다음과 같은 내부 프로퍼티를 갖습니다.

// state - 처음엔 "pending(보류)" =》 resolve 호출시 "fulfilled", reject가 호출되면 "rejected"로 변환
// result - 처음엔 "undefined" => resolve(value) 호출시 value로, reject(error)가 호출되면 error로 변환

// let promise = new Promise(function(resolve, reject) {
//     // 프로미스가 만들어지면서 executor 함수는 자동으로 실행됩니다.

//     // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 done이 됩니다.
//     setTimeout(() => resolve('done'), 1000)
// });

// 위 예시를 통해 알 수 있는 것은 두가지 입니다.

// 1. executor는 new Promise에 의해 자동으로 즉각적으로 실행됩니다.
// 2. executor는 인자로 resolve와 reject 함수를 받습니다. resolve와 reject중 하나는 반드시 호출해야 합니다.
//    executor '처리'가 시작 된 지 1초 후, resolve('done')이 호출되고 결과가 만들어집니다.
//    이때 promise 객체의 상태는 다음과 같이 변합니다.

// new Promise(executor)
// state: "Pending"  --- resolve('done') ---> state: "fulfilled"
// result: undefined --- resolve('done') ---> result: "done"

// 이처럼 일이 성공적으로 처리되었을 때의 프로미스는 'fulfilled promise(약속이 이행된 프로미스)'라고 불립니다.

// 이번에는 executor가 에러와 함게 약속한 작업을 거부하는 경우에 대해 살펴보겠습니다.

// let promise = new Promise(function(resolve, reject) {
//     // 1초 뒤에 에러와 함께 실행이 종료되었다는 신호를 보냅니다.
//     setTimeout(() => reject(new Error("에러 발생!")), 1000)
// });

// 1초 후 rejedt(...)가 호출되면 promise 상태가 rejected로 변합니다.
// new Promise(executor)
// state: "Pending"  --- resolve('error') ---> state: "rejected"
// result: undefined --- resolve('error') ---> result: "error"

// 소비 함수: .then(), .catch(), .finally()

// .then은 프로미스에서 가장 중요하고 기본이 되는 메소드입니다.

// 사용방법
// promise.then(
//     function(result) { 결과(result)를 다룹니다. }
//     function(error) { 에러(error)를 다룹니다. }
// )

// .then의 첫번재 인수는 프로미스가 이행되었을 때 실행되는 함수이고, 여기서 실행 결과를 받습니다.
// .then의 두번째 인수는 프로미스가 거부되었을 때 실행되는 함수이고, 여기서 에러를 받습니다.

// 아래 예시는 성공적으로 이행된 프로미스에 어떻게 반응하는지 보여줍니다.

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
});

// resolve 함수는 .then의 첫번째 함수(인수)를 실행시킵니다.
promise.then(
    result => console.log(result), // 1초 후 'done!'을 출력 
    error => console.log(error) // 실행되지 않음
);

// let prmoise2 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('에러 발생!')), 2000)
// });

// promise2.then(
//     result => console.log(result),
//     error => console.log(error)
// );

// catch
// 에러가 발생한 경우만 다루고 싶다면 .then(null, errorHandlingFunction) 같이 null을 첫 번째 인수로 전달하면 됩니다.
// .catch(errorHandlingFunction)를 써도 되는데, .catch는 .then에 null을 전달하는 것과 동일하게 작동합니다.

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Error!!!')), 1000);
})

promise3.catch(console.log());

// finally

// try {...} catch {...}에 finally 절이 있는 것처럼, 프로미스에도 finally가 있습니다.
// 프로미스가 처리되면(이행이나 거부) f가 항상 실행된다는 점에서 .finally(f) 호출은 .then(f, f)과 유사합니다.
// 쓸모가 없어진 로딩 인디케이터(loading indicator)를 멈추는 경우 같이, 결과가 어떻든 마무리가 필요하면 finally가 유용합니다.

// 사용법
let promise5 = new Promise((resolve, reject) => {
        // 시간이 걸리는 어떤 일을 수행하고, 그 후 resolve, reject를 호출
        setTimeout(() => resolve('promise5 done!!'));
    }).finally(() => console.log('Ready for promise // finally'))
    .then(result => console.log(result, 'promise5 result!'))

// finally는 .then(f,f)과 완전히 같진 않습니다.
// 1. finally 헨들러엔 인수가 없습니다. finally에선 프로미스가 이행되었는지, 거부되었는지 알 수 없습니다.
// finally에선 성공, 실패 여부를 몰라도 됩니다.

// 2. finally 핸들러는 자동으로 다음 헨들러에 결과와 에러를 전달합니다.
// 예시

let promise6 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise6 결과"), 2500)
    })
    .finally(() => console.log('프로미스6가 준비되었습니다.'))
    .then(result => console.log(result))