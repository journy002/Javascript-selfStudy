// pop() : 배열의 맨 마지막 요소를 반환 및 제거합니다.
// push(new data) : 배열의 맨 마지막 인덱스에 새로운 데이터를 추가합니다.
// shift() : 배열의 맨 처음 요소를 반환 및 제거 합니다.
// unshift(new data) : 배열 맨 앞에 인덱스에 새로운 데이터를 추가합니다.
// join(연결할 문자) : 배열 객체의 요소들을 인자로 넘긴 문자로 연결한 새로운 데이터를 반환합니다.
// reverse() : 배열 객체의 데이터의 순서를 바꾼 새로운 배열을 반환합니다.
// sort() : 배열 객체 데이터들을 오름차순으로 정렬합니다.
// slice(startIndex, endIndex) : 인자로 넘긴 인덱스 구간만큼 잘라서 새로운 배열 객체를 만들어 반환합니다.
// splice() : 배열 객체의 지정한 데이터를 삭제하고 새로운 데이터를 삽입 합니다.
// concat() : 2개의 배열객체를 하나로 합친 배열 객체를 반환합니다.

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지']

superheroes.forEach((hero) => {
  console.log(hero)
})

console.log('-----------forEach-------------')

const array = [1, 2, 3, 4, 5, 6, 7]

console.log(array, 'not forEach')

const squared = []

array.forEach((n) => {
  squared.push(n * n)
})

console.log(squared, 'forEach')

console.log('-------------map--------------')

const array2 = [1, 2, 3, 4, 5, 6, 7, 8]

const squared2 = (n) => n * n
const squared3 = array2.map(squared2)
console.log(squared3)

console.log('------------indexOf--------------')

const index = superheroes.indexOf('닥터 스트레인지')
console.log(index, 'index')

console.log('----------findIndex--------------')
// 배열 안에 있는 값이 객체이거나, 배열이면 findIndex를 이용해서 몇번째 원소인지 찾을 수 있다.
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true,
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true,
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true,
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false,
  },
]

const todoResult = todos.findIndex((todo) => todo.done === false)
console.log(todoResult, 'todos done')

console.log('---------------find -------------')
const todoFind = todos.find((todo) => todo.id === 3)
console.log(todoFind, 'todoFind')

console.log('--------------splice--------------')

const numbers = [10, 20, 30, 40]
const index2 = numbers.indexOf(30)
numbers.splice(index2, 1)
console.log(numbers, 'splice')

console.log('------slice--------')
// 기존의 배열은 건드리지 않은채 첫번재 인자부터 두번째 인자 앞까지의 데이터를 잘라 새로운 배열 객체를 반환합니다.
const numberss = [10, 20, 30, 40]
const sliced = numbers.slice(0, 2)
console.log(sliced, 'slice')
console.log(numberss, 'sliced numbers')

console.log('------------shift, pop -----------')
// shift() 배열의 첫번째 항목,원소를 추출
const numbers33 = [10, 20, 30, 40]
const value = numbers33.shift()
console.log(numbers33, 'number33')
console.log(value, 'value')

const number44 = [10, 20, 30, 40, 50]
// pop() 배열의 맨 마지막 항목을 추출한다.
const value2 = number44.pop()
console.log(number44, 'number44')
console.log(value2, 'value2')

console.log('-------------join ----------')
// 배열안에 값들을 문자열 형태로 합쳐준다.
const arrayJoin = [1, 2, 3, 4, 5]
console.log(arrayJoin.join(), 'join')
console.log(arrayJoin.join(' '), 'join" "')
console.log(arrayJoin.join(', '), 'join", "')

console.log('------------concat-----------')
const arr1 = [1, 2, 3]
const arr2 = [5, 6, 7]
const concated = arr1.concat(arr2)
console.log(concated, 'concated')

console.log('------reduce ---------')

const reduceNumber = [1, 2, 3, 4, 5]

let reduceSum = reduceNumber.reduce((accumulated, current) => {
  console.log({ accumulated, current })
  return accumulated + current
}, 0)

console.log(reduceSum)
