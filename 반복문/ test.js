// 기본 반복문 for

for (let i = 0; i <= 3; i++) {
  console.log(i)
}

console.log('------------------')

const name = ['mung mung', 'yaaaong', 'mung mung eee']

for (let i = 0; i < name.length; i++) {
  console.log(name[i])
}

console.log('---------------------for[e]------')

let i = 0
while (i < 5) {
  console.log(i)
  i++
}

console.log('-----------while[e]-----------')

const doggy = {
  name: 'yoyo',
  sound: 'yobyobyob',
  age: 222,
}

console.log(Object.entries(doggy), 'entries')
console.log(Object.keys(doggy), 'keys')
console.log(Object.values(doggy), 'value')

console.log('------------------------------')

function sumOf(numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

const result = sumOf([1, 2, 3, 4, 5])
console.log(result)

console.log('-----------------------------')

function biggerThanThree(number) {
  const array = []

  for (let i = 0; i < number.length; i++) {
    if (number[i] > 3) {
      array.push(number[i])
    }
  }
  return array
}

const number = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(biggerThanThree(number))

// for ...in 반복문
// for ...in 반복문을 사용하면 객체의 모든 키를 순회할 수 있습니다.

// for (key in object) {
//     // 각 프로퍼티 키를 이용하여 본문을 실행합니다.
// }

let foUser = {
  name: 'ohohho',
  age: 30,
  isAdmin: true,
}

for (let key in foUser) {
  // key
  console.log(key, ' for ...in key ') // name, age, isAdmin
  console.log('----------------------')
  // value
  setTimeout(() => {
    console.log(foUser[key], ' for ...in value of key ')
  },2000)
}

// for(let prop in foUser) 같이 key 말고 다른 변수명을 사용해도 괜찮습니다.
