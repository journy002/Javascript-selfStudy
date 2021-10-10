const dog = {
    name: 'dogdog',
    age: 2
};

console.log(dog.name);
console.log(dog.age);

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

const dog2 = {
    name: 'mungmung',
    sound: 'wuwuwua!',
    say: function () {
        console.log(this.sound);
    }
}

dog2.say();