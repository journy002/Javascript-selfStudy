const dog = {
    // key: value
    name: 'dog',
    age: 2
};

console.log(dog.name);
console.log(dog.age);

const ironMan = {
    name: 'tony',
    actor: 'robert dauny junior',
    alias: 'IronMan'
};

const captainAmerica = {
    name: 'rojer',
    actor: 'chrys',
    alias: 'Captain America'
};

console.log(ironMan);
console.log(captainAmerica);


// 함수에서 객체를 파라미터로 받기
function print(hero) {
    const { name, actor, alias } = hero; // 객체 구조 분해
    const text = `${alias}(${name}) 역할은 ${actor}가 한다.`
    console.log(text);
}

print(ironMan);
print(captainAmerica);


// 객체 안에 함수 넣기
const dog2 = {
    name: 'dog2',
    sound: 'wal wal',
    say: function say() {
        console.log(this.sound);
    }
};

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


// 배열 알아보기
const object = [
    {
        name: 'mung mung e'
    },
    {
        name: 'ya ong e'
    }
];

console.log(object)
console.log(object[0]);
console.log(object[1]);
console.log(object.length)

object.push({
    name: 'mongmong i'
});

console.log(object.length);

console.log('------반복문---------')

// 반복문
for( let i = 5; i > 0; i-- ) {
    console.log(i)
}

const names = ['mungmung', 'yaong', 'mengmung'];

for(let i = 0; i < names.length; i++) {
    console.log(names[i])
}

console.log('-----------while------------')

// while

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

console.log('===========')


const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach(hero => console.log(hero))

const array = [1,2,3,4,5];

const square = n => n * n;
const squared = array.map(square);
console.log(squared)
