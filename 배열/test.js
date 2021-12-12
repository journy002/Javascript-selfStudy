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

// push와 unshift는 요소 여러 개를 한 번에 더해줄 수 도 있습니다.
let arx = [1]

arx.push(3, 5)
arx.unshift(99, 77)

console.log(arx, 'push, unshift')

// 배열의 내부 동작 원리

// 배열 arr의 요소를 arr[0]처럼 대괄호를 사용해 접근하는 방식은 객체 문법에서 왔습니다.
// 다만 배열은 키가 숫자라는 점만 다릅니다.

// 숫자형 키를 사용함으로써 배열은 객체 기본 기능 이외에도 순서가 있는 컬렉션을 제어하게 해주는 특별한 메서드를 제공합니다.
// length라는 프로퍼티도 제공합니다. 어쨌든 배열의 본질은 객체입니다.
// 배열은 원시 자료형에 해당하지 않고, 객체형에 속하기 때문에 객체처럼 동작합니다.

let fruits3 = ['바나나']

let arr = fruits3 // 참조를 복사함(두 변수가 같은 객체를 참조)

alert(arr === fruits3) // true

arr.push('배') // 참조를 이용해 배열을 수정합니다.

alert(fruits3) // 바나나,배 - 요소가 두 개가 되었습니다.

// 배열을 잘못 다루고 있는 예
// arr.test = 5 같이 숫자가 아닌 값을 프로퍼티 키로 사용하는 경우
// arr[0]과 arr[1000]만 추가하고 그사이에 아무런 요소도 없는 경우
// arr[1000], arr[999]같이 요소를 역순으로 채우는 경우

// 성능

// push, pop은 빠르지만 shift, unshift는 느립니다.

// shift 메서드를 호출한 것과 동일한 효과를 보려면 인덱스가 0인 요소를 제거하는 것만으론 충분하지 않습니다.
// 제거 대상이 아닌 나머지 요소들의 인덱스를 수정해 줘야 하죠.

// shift 연산은 아래 3가지 동작을 모두 수행해야 이뤄집니다.

// 1. 인덱스가 0인 요소를 제거합니다.
// 2. 모든 요소를 왼쪽으로 이동시킵니다. 이때 인덱스 1은 0, 2는 1로 변합니다.
// 3. length 프로퍼티 값을 갱신합니다.

// 그런데 배열에 요소가 많으면 요소가 이동하는 데 걸리는 시간이 길고 메모리 관련 연산도 많아집니다.

// unshift를 실행했을 때도 이와 유사한 일이 일어납니다. 요소를 배열 앞에 추가하려면 일단 기존 요소들을 오른쪽으로 이동시켜야 하는데, 이때 인덱스도 바꿔줘야 합니다.

// 그렇다면 push나 pop은 어떨까요? 이 둘은 요소 이동을 수반하지 않습니다. pop 메서드로 요소를 끝에서 제거하려면 마지막 요소를 제거하고 length 프로퍼티의 값을 줄여주기만 하면 되죠.

// sort
// 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.
let langu2 = ['c', 'b', 'a', 'x', 'd']
langu2.sort()
console.log(langu2, 'sort func')
