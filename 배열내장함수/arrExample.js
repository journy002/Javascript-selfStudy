// border-left-width를 borderLeftWidth로 변경하기

function camelize(str) {
  return console.log(
    str
      .split('-')
      .map((word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1),
      )
      .join(''),
  )
}

camelize('bakground-color')
camelize('list-style-image')

// 특정 범위에 속하는 요소 찾기
// 배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요.
// 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b
// 작성한 함수는 기존 배열을 변경하기만 하고 아무것도 반환하지 않아야 합니다.

let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4)

// function filterRange(arr, a, b) {
//   let newArr = []
//   console.log(arr, 'arr')

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= a && arr[i] <= b) {
//       newArr.push(arr[i])
//       console.log(newArr, ' // newArr in for func')
//     } else {
//       continue
//     }
//   }

//   return newArr
// }

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b)
}

console.log(filtered, 'filtered')
console.log(arr, 'arr')

// 내림차순으로 정렬하기

let arr2 = [5, 2, 1, -10, 8]
console.log(
  arr2.sort((a, b) => b - a),
  '내림차순으로 정렬하기',
)

// 배열 복사본을 정렬하기
// 문자열이 담긴 배열 arr3을 복사한 다음 해당 배열을 정렬해 봅시다.
// 단 이때 arr3은 변경되면 안 됩니다.
// 함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.
// slice() 메소드는 기존 배열은 건드리지 않고 요소를 복사한 새로운 배열을 반환합니다.

let arr3 = ['HTML', 'JAVASCRIPT', 'CSS']
let sorted = copySorted(arr3)

function copySorted(arr) {
  let newArr = arr.slice()
  console.log(newArr, 'newArr')
  return newArr.sort()
}

console.log(arr3, 'arr3')
console.log(sorted, 'sorted')
