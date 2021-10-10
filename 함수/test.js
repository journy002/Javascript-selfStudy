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