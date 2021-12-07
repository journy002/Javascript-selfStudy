// 객체
// 자바스크립트에는 여덟가지 자료형이 있습니다.
// 이 중 일곱개는 오직 하나의 데이터(문자열,숫자 등)만 담을 수 있어서 '원시형(primitive type)'이라 부릅니다.

// 객체형은 원시형과 달리 다양한 데이터를 담을 수 있습니다.
// 객체는 중괄호 {...}를 이용해 만들 수 있습니다.
// 중괄호 안에는 '키(key): 값(value)' 쌍으로 구성된 프로퍼티(property)를 여러 개 넣을 수 있는데, 키엔 문자형, 값엔 모든 자료형이 허용됩니다.

const dog = {
    name: 'dogdog',
    age: 2
};
// 프로퍼티 값 얻기
console.log(dog.name);
console.log(dog.age);

// 상수 객체는 수정될 수 있습니다.
// const는 dog의 값을 고정하지만, 그 내용은 고정하지 않습니다.
// const는 dog = ...를 전체적으로 설정하려고 할 때만 오류가 발생합니다.
dog.name = 'ddalsun'
console.log(dog.name) // ddalsun

console.log('------------------------');


const ironMan = {
    name: 'tony',
    actor: 'robert douny junior',
    alias: 'ironMan'
};

const captainAmerica = {
    name:'steve',
    actor: 'chris',
    alias: 'captain America'
};

console.log(ironMan);
console.log(captainAmerica);

function print (hero) {
    const { name, actor, alias } = hero; //구조 분해 할당
    console.log(`${name}(${actor})는는 ${alias}`)
}

print(ironMan);
print(captainAmerica);

console.log('-----------------------');

// 객체 안에 함수 넣기
const dog2 = {
    name: 'mungmung',
    sound: 'wuwuwua!',
    say: function () {
        console.log(this.sound);
    }
}

dog2.say();

// Getter Setter

const numbers = {
    a: 1,
    b: 2,
    // Getter 함수는 특정 값을 조회 할 때 우리가 설정한 함수로 연산된 값을 반환합니다.
    get sum() {
        console.log('sum 함수가 실행');
        return this.a + this.b
    }
};
console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

let user = {}

// set
user["I like birds"] = true

// get
alert(user["I like birds"]); // true

// delete
delete user["I like birds"]

console.log('-----------------------');

// 대괄호 표기법
// 키가 유효한 변수 식별자가 아닌 경우엔 점 표기법 대신에 '대괄호 표기법(square bracket notation)'이라 불리는 방법을 사용할 수 있습니다.
// 대괄호 표기법은 키에 어떤 문자열이 있던지 상관없습니다.
let atUser = {
    name: 'Hoob',
    age: 30
}

let key = prompt("사용자 정보", "name")
alert(atUser[key]) // name 입력시 => 'Hoob' , age 입력시 => 30


// 'in' 연산자로 프로퍼티 존재 여부 확인하기
// 자바스크립트 객체는 다른 언어와 달리 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined를 반환합니다.
let inUser = {}
// alert( inUser.noSuchProperty === undefined ) // true는 '프로퍼티가 존재하지 않음'을 의미합니다.

// 'in' 연산자 사용해서 프로퍼티 존재 여부 확인하기
// 문법 => "key" in object

let ckProper = { name: 'JOJOha', age: 24 }
console.log("age" in ckProper, 'check property')
console.log("bababa" in ckProper, 'check none property')