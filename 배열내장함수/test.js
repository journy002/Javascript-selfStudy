// pop() : 배열의 맨 마지막 요소를 반환 및 제거합니다.
// push(new data) : 배열의 맨 마지막 인덱스에 새로운 데이터를 추가합니다.
// shift() : 배열의 맨 처음 요소를 반환 및 제거 합니다.
// unshift(new data) : 배열 맨 앞에 인덱스에 새로운 데이터를 추가합니다.
// join(연결할 문자) : 배열 객체의 요소들을 인자로 넘긴 문자로 연결한 새로운 데이터를 반환합니다.(하나의 값으로 반환)
// reverse() : 배열 객체의 데이터의 순서를 바꾼 새로운 배열을 반환합니다.
// sort() : 배열 객체 데이터들을 오름차순으로 정렬합니다.
// slice(startIndex, endIndex) : 인자로 넘긴 인덱스 구간만큼 잘라서 새로운 배열 객체를 만들어 반환합니다.
// splice() : 배열 객체의 지정한 데이터를 삭제하고 새로운 데이터를 삽입 합니다.
// concat() : 2개의 배열객체를 하나로 합친 배열 객체를 반환합니다.

console.log('-----------forEach-------------')
// forEach()는 주어진 함수를 배열 요소에 각각에 대해 실행할 수 있게 해줍니다.
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지']

superheroes.forEach((hero) => {
  console.log(hero)
})

const array = [1, 2, 3, 4, 5, 6, 7]

console.log(array, 'not forEach')

const squared = []

array.forEach((n) => {
  squared.push(n * n)
})

console.log(squared, 'forEach')
;['bilbo', 'gandalf', 'nazgul'].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`)
})

console.log('------------indexOf--------------')

const index = superheroes.indexOf('닥터 스트레인지')
console.log(index, 'index')

console.log('------------lastindexOf--------------')

const array3 = ['a', '2', 'c']
let last_array3 = array3.lastIndexOf('c')
console.log(last_array3, ' // lastindexOf')

console.log('----------findIndex--------------')
// let result = arr.find(function(item, index, array) {
//   // true가 반환되면 반복이 멈추고 해당 요소를 반환합니다.
//   // 조건에 해당하는 요소가 없으면 undefined를 반환합니다.
//      index, array 인자는 잘 사용되지 않습니다.
// })
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

let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Keya' },
  { id: 3, name: 'Hona' },
]

let user = users.find((item) => item.name === 'John')
let user2 = users.find((item) => item.id === 2)
console.log(user, ' // find user!')
console.log(user2, ' // find user2!')

console.log('------- filter ---------')
// find 메서드는 함수의 반환 값을 true로 만드는 단 하나의 요소를 찾습니다.
// 조건을 충족하는 요소가 여러개라면 arr.filter(fn)를 사용하면 됩니다.

// let result = 변수이름.filter(function(item, index, array) {
//   // 조건을 충족하는 요소는 result에 순차적으로 더해집니다.
//   // 조건을 충족하는 요소가 하나도 없으면 빈 배열이 반환됩니다.
// })

let someUsers = users.filter((item) => item.id < 3)
console.log(someUsers, ' // check filter function')

console.log('--------------splice--------------')
// splice() 첫 번째 매개변수는 조작을 가할 첫 번째 요소를 가리키는 인덱스 입니다.
// 두 번째 매개변수는 제거하고자 하는 요소의 개수를 나타냅니다.
// 세번째는 배열에 추가할 요소를 나타냅니다.
const numbers = [10, 20, 30, 40]
const index2 = numbers.indexOf(30)
numbers.splice(index2, 1)
console.log(numbers, 'splice')

const numbers2 = ['html5', 'css3', 'javascript(Es6)']
numbers2.splice(0, 2, 'React', 'React-redux')
console.log(numbers2, ' // splice ')
console.log(numbers2[0], ' // splice number2[0]')

let numbers3 = ['i', 'study', 'javascript']
numbers3.splice(2, 0, 'complex', 'language')
console.log(numbers3, ' // splice number3')

console.log('------slice--------')
// 기존의 배열은 건드리지 않은채 첫번재 인자부터 두번째 인자 앞까지의 데이터를 잘라 새로운 배열 객체를 반환합니다.
const numberss = [10, 20, 30, 40]
const sliced = numbers.slice(0, 2)
console.log(numberss, ' after slice ')
console.log(sliced, 'slice')

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

let arr5 = [1, 2]
let arrayLike = {
  0: 'something',
  lenght: 1,
  // [Symbol.isConcatSpreadable]: true, [Symbol.isConcatSpreadable]이 있으면 concat은 이 객체를 배열처럼 취급합니다. 따라서 객체 전체가 아닌 객체 프로퍼티의 값이 더해집니다.
  habbit: 'what?',
}

alert(arr5.concat(arrayLike), ' // arr5.concat')

console.log('------reduce ---------')

const reduceNumber = [1, 2, 3, 4, 5]
let reduceSum = reduceNumber.reduce((accumulated, current) => {
  console.log({ accumulated, current })
  return accumulated + current
}, 0)

console.log(reduceSum)

console.log('------------- map --------------')
// map은 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환해줍니다.

const array2 = [1, 2, 3, 4, 5, 6, 7, 8]

const squared2 = (n) => n * n
const squared3 = array2.map(squared2)
console.log(squared3)

let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map((item) => item.length)
console.log(lengths, ' // check map function')

console.log('------------- sort --------------')
// sort()는 배열의 요소를 정렬해줍니다. 배열 자체가 변경됩니다.
// 메서드를 호출하면 재정렬 된 배열이 반환되는데, 이미 배열 자체가 수정되었기 때문에 반환 값은 잘 사용되지 않는 편 입니다.
let arr6 = [1, 2, 15]
arr6.sort()
console.log(arr6, ' // check sort function')

// 재정렬 후 배열 요소가 1, 15, 2가 되었습니다. 기대하던 결과(1, 2, 15)와는 다릅니다.
// 요소는 문자열로 취급되어 재 정렬되기 때문입니다.
// 모든 요소는 문자형으로 변환된 이후에 재 정렬됩니다. 앞서 배웠듯이 문자열 비교는 사전편집 순으로 진행되기 때문에 2는 15보다 큰 값으로 취급됩니다.("2" > "15")

// 기본 정렬 기준 대신 새로운 정렬 기준을 만들려면 arr6.sort()에 새로운 함수를 넘겨줘야 합니다.
// 새로운 함수)
// function compare(a,b) {
//   if(a > b) return 1 // 첫번째 값이 두번째 값보다 큰 경우
//   if(a === b) return 0 // 두 값이 같은 경우
//   if(a < b) return -1 // 첫번째 값이 두번째 값보다 작은 경우
// }

function compareNumeric(a, b) {
  if (a > b) return 1
  if (a === b) return 0
  if (a < b) return -1
}

let arr7 = [1, 2, 15]

arr7.sort(compareNumeric)
console.log(arr7, ' // check compareNumeric func')

// sort()에서 숫자 정렬
// 오름차 순으로 정렬: arr.sort((a, b) => a - b);
// 내림차 순으로 정렬: arr.sort((a, b) => b - a);

let arr8 = [1, 15, 3, 2, 26, 7]
console.log(
  arr8.sort((a, b) => a - b),
  ' // sort 오름차 순',
)
console.log(
  arr8.sort((a, b) => b - a),
  ' // sort 내림차 순',
)

// 문자열 배열을 정렬할땐 localeCompare를 사용합니다.
let countries = ['Österreich', 'Andorra', 'Vietnam']
console.log(countries.sort((a, b) => a.localeCompare(b)))

console.log('------------- reverse --------------')
let result_reverse = [1, 2, 3, 4, 5]
console.log(result_reverse.reverse(), ' // check reverse function')

console.log('------------- split, join --------------')
// 메세지 전송 애플리케이션을 만들고 있다 가정했을때 수진자가 여러명일 경우, 발신자는 쉼표로 각 수진자를 구분할 겁니다.
// John, Pete, Mary 같이 말이죠. 긴 문자열 형태의 수신자 리스트를 배열 형태로 전환해 처리하고 싶을때 split, join을 사용하면 좋습니다.

// split(delim)을 이용하면 원하는 것을 정확히 할 수 있습니다.
// 이 메소드는 구분자(delimiter) delim을 기준으로 문자열을 쪼개줍니다.
// 아래 예시에선 쉼표와 공백을 합친 문자열이 구분자로 사용되고 있습니다.
let names = 'Bilbo, Gandalf, Nazgul'
let arr9 = names.split(', ')
for (let name of arr9) {
  console.log(`${name}에게 보내는 메세지`)
}

console.log('------------- reduce, reduceRight --------------')
// forEach, for, for ..of를 사용하면 배열 내 요소를 대상으로 반복 작업을 할 수 있습니다.
// 각 요소를 돌면서 반복 작업을 수행하고, 작업 결과물을 새로운 배열 형태로 엳으려면 map을 사용하면 되죠.
// reduce와 reduceRight는 배열을 기반으로 값 하나를 도출할 때 사용됩니다.

// 문법:
// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// },[initial])

// accumulator - 이전 함수 호출의 결과. initial은 함수 최초 호출시 사용되는 초기값을 나타탬
// item - 현재 배열 요소
// index - 요소의 위치
// array - 배열

let arr11 = [1, 2, 3, 4, 5]
let result_reduce = arr11.reduce((sum, current) => sum + current, 0)
console.log(result_reduce, ' // check reduce function')

console.log('------------- Array.isArray --------------')
// Array.isArray로 배열 여부 알아내기

// 자바스크립트에서 배열은 독립된 자료형으로 취급하지 않고 객체형에 속합니다.
// 따라서 typeof로는 일반 객체와 배열을 구분할 수가 없습니다.
// 이때, Array.isArray(value)를 사용하면 매우 유용합니다.
// value가 배열이라면 true, 배열이 아니라면 false 반환해줍니다.
let arr12 = [1, 2, 3]
console.log(Array.isArray(arr12)) // true
console.log(Array.isArray({}), ' // check isArray({})') // flase
console.log(Array.isArray([]), ' // check isArray([])') // true

// 문자열을 글자 단위로 분리하기
// split(s)의 s를 빈 문자열로 지정하면 문자열을 글자 단위로 분리할 수 있습니다.
let str = 'test'
console.log(str.split(''), ' // split() 빈문자열 test')

// join()
// arr.join(glue)는 split과 반대 역할을 하는 메소드입니다.
// 인수 glue를 접착제처럼 사용해 배열 요소를 모두 합친 후 하나의 문자열을 만들어줍니다.

let arr10 = ['Bilbo', 'Gandalf', 'Nazgul']
let str3 = arr10.join(';')
console.log(str3, 'joinnnnnn')

console.log('------------- 배열 메서드와 thisArg --------------')

// 함수를 호출하는 대부분의 배열 메서드(find, filter, map 등. sort는 제외)는 thisArg라는 매개변수를 옵션으로 받을 수 있습니다.
// thisArg는 아래와 같이 활용할 수 있습니다.

// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
// ...
// thisArg는 선택적으로 사용할 수 있는 마지막 인수입니다.
// thisArg는 func의 this가 됩니다.

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge
  },
}

let users3 = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }]

// army.canJoin 호출 시 참을 반환해주는 user를 찾음
let soldiers = users3.filter(army.canJoin, army)
console.log(soldiers, ' // check thisArg soldiers')
console.log(soldiers.length, ' // check thisArg soldiers.length')
console.log(soldiers[0].age, ' // check thisArg soldiers[0].age')
console.log(soldiers[1].age, ' // check thisArg soldiers[1].age')

// thisArgs에 army를 지정하지 않고 단순히 users.
// filter(army.canJoin)를 사용했다면 army.canJoin은 단독 함수처럼 취급되고,
// 함수 본문 내 this는 undefined가 되어 에러가 발생했을 겁니다.

// users.filter(user => army.canJoin(user))를 사용하면 users.filter(army.canJoin, army)를 대체할 수 있긴 한데
// thisArg를 사용하는 방식이 좀 더 이해하기 쉬우므로 더 자주 사용됩니다.

// 배열은 복사가 될까요?
// 배열은 객체이기 때문에 모두 같은 배열을 참조합니다.
let ffruits = ['사과', '복숭아', '배']
let shoppingCart = ffruits
shoppingCart.push('바나나')
console.log(shoppingCart, ' shoppingCart')

// 배열과 관련된 연산

// 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
// "Rock-n-Roll"을 배열 끝에 추가합니다.
// 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
// 배열의 첫 번째 요소를 꺼내서 출력합니다.
// "Rap"과 "Reggae"를 배열의 앞에 추가합니다.

let styles = ['Jazz', 'Blues']
styles.push('Rock-n-Roll')
// styles[1] = 'Classics'
styles[Math.floor((styles.length - 1) / 2)] = 'Classics'
console.log(styles.shift())
styles.unshift('Rap', 'Reggae')
console.log(styles)

// 배열 컨텍스트에서 함수 호출하기
let arr3 = ['a', 'b']
arr3.push(function () {
  console.log(this, 'this')
})
arr3[2]() // ['a', 'b', f]

// arr3[2]()를 호출하는 것은 obj가 arr이고, method는 2인 메소드 ojb[method]()를 호출하는 것과 문법적으로 동일합니다.
// 즉, arr3[2]에 있는 함수가 객체 메소드처럼 호출되는 것이죠.
// 따라서 arr3[2]는 arr3을 참조하는 this를 받고, 배열을 출력합니다.

// 입력한 숫자의 합 구하기

function sumInput() {
  let number = []

  while (true) {
    let value = prompt('숫자를 입력하세요', 0)

    if (value === '' || value === null) break

    number.push(+value)
  }

  let sum = 0

  for (let key of number) {
    sum += key
  }

  return sum
}

console.log(sumInput(), '입력한 숫자의 합 구하기')
