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

// pop, push, shift, unshift

// push - 맨 끝에 요소를 추가
// shift - 제일 앞 요소를 꺼내 제거한 후 남아있는 요소들을 앞으로 밀어줍니다. 제거한 요소를 반환합니다.
// pop - 제일 끝 요소를 추출합니다.
// upshift - 배열 앞에 요소를 추가합니다.

// 큐(queue)는 배열을 사용해 만들 수 있는 대표적인 자료구조로, 배열과 마찬가지로 순서가 있는 컬렉션을 저장하는 데 사용합니다.

// 큐 주요 연산
// push
// shift

// 배열엔 두 연산을 가능하게 해주는 내장 메서드 push와 pop이 있습니다.
// 화면에 순차적으로 띄울 메세지를 비축해 놓을 자료 구조를 만들 때 큐를 사용하는 것처럼 큐는 실무에서 상당히 자주 쓰이는 자료구조입니다.

// 배열은 큐 이외에 스택(stack)이라 불리는 자료구조를 구현할 때도 쓰입니다.

// 스택 주요 연산
// push
// pop

// 스택은 이처럼 '한쪽 끝'에 요소를 더하거나 뺄 수 있게 해주는 자료구조입니다.
// 스택은 흔히 카드 한 벌과 비교됩니다. 쌓여있는 카드 맨 위에 새로운 카드를 더해주거나 빼는 것처럼 스택도 '한쪽 끝'에 요소를 집어넣거나 추출 할 수 있기 때문입니다.

// 스택을 사용하면 가장 나중에 집어넣은 요소가 먼저 나옵니다. 이 특징을 줄여 후입선출 (Last-In-First-Out)
// 큐를 사용하면 먼저 집어넣은 요소가 먼저 나오기 때문에 선입선출(First-In-First-Out) 자료구조라고 부릅니다.

// 처음이나 끝에 요소를 더하거나 빼주는 연산을 제공하는 자료구조 컴퓨터 과학 분야에선 데큐(deque, Double Ended Queue)라고 부릅니다.

// pop
// 배열 끝 요소를 제거하고, 제거한 요소를 반환합니다.

let langu = ['a', 'b', 'c', 'd']
let emptySpa = []
emptySpa = langu.pop() // ['a','b','c']
console.log(langu, 'pop')
console.log(emptySpa, 'empty space')

// push
// 배열 끝에 요소를 추가합니다.

langu.push('oo')
console.log(langu, 'push')

// shift
// 배열 앞 요소를 제거하고, 제거한 요소를 반환합니다.

// unshift
// 배열 앞에 요소를 추가합니다.
langu.unshift('unshift')
console.log(langu, 'check unshift')

// sort
// 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.
let langu2 = ['c', 'b', 'a', 'x', 'd']
langu2.sort()
console.log(langu2, 'sort func')
