// ** 배열 ** //
// 순서가 있는 컬렉션을 저장할 때 쓰는 자료구조인 배열을 사용할 수 있습니다.

// 배열 선언
// let arr = new Array();
// let arr = [];

// 대부분 두 번째 방법으로 배열을 선언하는데, 이때 대괄호 안에 초기 요소를 넣어주는 것도 가능합니다.
let fruits = ['사과', '오렌지', '자두', '딸기']

// 각 배열 요소엔 0부터 시작하는 숫자(인덱스)가 매겨져 있습니다. 이 숫자들은 배열 내 순서를 나타냅니다.

// 배열 내 특정 요소를 얻고 싶다면 대괄호 안에 순서를 나타내는 숫자인 인덱스를 넣어주면 됩니다.

console.log(fruits[0]) // 사과
console.log(fruits[1]) // 오렌지
console.log(fruits[2]) // 자두
console.log(fruits[3]) // 딸기

// 같은 방법으로 요소를 수정할 수 있습니다.
fruits[2] = '배' // 배열이 ['사과','오렌지','배','딸기]로 바뀜

// 새로운 요소를 배열에 추가하는 것도 가능합니다.
fruits[4] = '파인애플'
console.log(fruits, 'fruits array')

// length를 사용하면 배열에 담긴 요소가 몇 개인지 알아낼 수 있습니다.
console.log(fruits.length, 'fruits length')

// 배열 요소의 자료형엔 제약이 없습니다.

let array2 = [
  '사과',
  { name: 'oms' },
  true,
  function () {
    console.log('Hi array')
  },
]
// index가 1인 요소(객체)의 name 프로퍼티를 출력합니다.
console.log(array2[1].name)

// index 3인 요소(함수)를 실행합니다.
array2[3]() // Hi array

function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

const array = [1, 2, 3, 4, 5]

console.log(array)
console.log(array.length)
console.log(getType(array))

console.log('---------------')

const object = [{ name: 'dog' }, { name: 'cat' }]

console.log(object[0])
console.log(object[1])
console.log(object.length, 'length')

object.push({
  name: 'ggoggodack',
})

console.log(object)
console.log(object.length, 'length')
