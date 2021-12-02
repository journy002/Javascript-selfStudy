const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach(hero => {
    console.log(hero)
});

console.log('-----------forEach-------------');

const array = [1,2,3,4,5,6,7];

console.log(array , 'not forEach');

const squared = [];

array.forEach(n => {
    squared.push(n * n);
})

console.log(squared, 'forEach')

console.log('-------------map--------------')


const array2 = [1,2,3,4,5,6,7,8];

const squared2 = n => n * n;
const squared3 = array2.map(squared2)
console.log(squared3)

console.log('------------indexOf--------------');

const index = superheroes.indexOf('닥터 스트레인지');
console.log(index, 'index');


console.log('----------findIndex--------------');
// 배열 안에 있는 값이 객체이거나, 배열이면 findIndex를 이용해서 몇번째 원소인지 찾을 수 있다.
const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];

  const todoResult = todos.findIndex(todo => todo.done === false);
  console.log(todoResult,'todos done')


console.log('---------------find -------------');
const todoFind = todos.find(todo => todo.id === 3);
console.log(todoFind, 'todoFind');


console.log('--------------splice--------------');

const numbers = [10,20,30,40];
const index2 = numbers.indexOf(30);
numbers.splice(index2, 1);
console.log(numbers,'splice');

console.log('------slice--------');

const numberss = [10,20,30,40,];
const sliced = numbers.slice(0, 2);

console.log(sliced,'slice');
console.log(numberss,'sliced numbers');

console.log('------------shift, pop -----------');
// 배열의 첫번째 항목,원소를 추출
const numbers33 = [10,20,30,40];
const value = numbers33.shift();
console.log(numbers33, 'number33');
console.log(value,'value');

const number44 = [10,20,30,40,50,];
// 배열의 맨 마지막 항목을 추출한다.
const value2 = number44.pop();
console.log(number44,'number44');
console.log(value2,'value2');

console.log('-------------join ----------');
// 배열안에 값들을 문자열 형태로 합쳐준다.
const arrayJoin = [1,2,3,4,5];
console.log(arrayJoin.join(), 'join');
console.log(arrayJoin.join(' '), 'join" "');
console.log(arrayJoin.join(', '), 'join", "');

console.log('------------concat-----------');
const arr1 = [1,2,3];
const arr2 = [5,6,7];
const concated = arr1.concat(arr2);
console.log(concated,'concated')


console.log('------reduce ---------');

const reduceNumber = [1,2,3,4,5];

let reduceSum = reduceNumber.reduce((accumulated, current) => {
    console.log({accumulated, current});
    return accumulated + current
},0);

console.log(reduceSum);