let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let number = []

// 랜덤한 숫자를 받아오는 부분
for (let i = 0; i < 4; i++) {
  let select = Math.floor(Math.random() * list.length) // 리스트배열의 길이에서 랜덤한 숫자를 받아와 select변수에 전달
  console.log('list', list, 'number', number, 'length', list.length)
  number[i] = list.splice(select, 1)[0]
  console.log(number[i], 'number')
}

let count = 0
let strike = 0
let ball = 0

while (count < 10) {
  // 숫자를 입력받고 비교를 준비
  let input = prompt('숫자를 입력하세요.') // 숫자를 받는 부분
  let inputArray = input.split('')
  strike = 0 // 스트라이크 개수 초기화
  ball = 0 // 볼 개수 초기화
  count++ // 시도 횟수는 하나 증가

  //입력 받은 숫자를 비교분석하는 부분
  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4; k++) {
      if (number[j] === number[k]) {
        strike++
      } else {
        ball++
      }
      break
    }
  }

  // 결과를 표시하는 부분
  if (strike === 4) {
    console.log('홈런~!!' + (count - 1) + '번 만에 맞추셨습니다!')
    break
  } else if (count >= 10) {
    console.error('시도 횟수를 초과하셨습니다.')
  } else {
    console.info(
      inputArray.join('') + ': ' + strike + '스트라이크' + ball + '볼',
    )
  }
}
