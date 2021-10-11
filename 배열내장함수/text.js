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

