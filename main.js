// type 을 확인하는 두가지 방법
// 첫째 typeof
// 두번째 getType 함수를 만들어서 사용

console.log(typeof 'hello');
console.log(typeof 123 );
console.log(typeof undefined);
// typeof을 사용하면 정확한 타입을 찾기가 어려울때도 있다.
console.log(typeof null);
console.log(typeof {})
console.log(typeof []);

console.log('------------------------')
// Object prototype을 string화 시켜 넣은 데이터 값을 불러오면 정확한 타입을 확인할 수 있다.
function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
};

console.log(getType('hello'));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));
