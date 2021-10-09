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

function print(hero) {
    const { name, actor, alias } = hero; // 객체 구조 분해
    const text = `${alias}(${name}) 역할은 ${actor}가 한다.`
    console.log(text);
}

print(ironMan);
print(captainAmerica);