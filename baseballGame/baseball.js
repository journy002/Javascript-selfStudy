let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] // 랜덤 값을 뽑기 위해 숫자가 들어간 배열을 만들어준다.
let num = [] // 랜덤으로 뽑은 숫자를 담을 빈 배열 만들어 주기

// for()문으로 4개의 숫자를 반복적으로 뽑는다.
// list 배열의 길이만큼 랜덤을 돌려 select 변수에 넣어준 다음
// splice() 함수를 사용하여 랜덤으로 가져온 숫자를 list 배열에서 잘라 num의 빈 배열에 넣어준다.
// 배열.splice(시작위치, 길이) 시작위치 부터 주어진 길이만큼 잘라서 원래 배열에서 빼낸다.
// splice() 함수 뒤에 [0]을 써준 이유는 splice()함수만 사용하여 값을 빼온다면 [숫자] 로 넘어오기 때문에
// 배열의 숫자만 빼오기 위해 [0] (즉, 배열의 첫번째 원소를 빼오시오) 라는 의미로 사용하였음.
for (let i = 0; i < 4; i++) {
  let select = Math.floor(Math.random() * list.length)
  num[i] = list.splice(select, 1)[0]
  console.log(num, 'num')
}

let strike = 0
let ball = 0
let count = 0

// 10번의 기회를 준다.
while (count < 10) {
  // 유저가 4가지의 숫자를 써서 게임을 실행할 수 있게 한다.
  // prompt()로 들어오는 값은 string으로 입력된다.
  // 예) 입력: 1234 => 들어오는 값: '1234'
  let input = prompt('Write Number what you want(4 number)')

  strike = 0
  ball = 0
  count++

  // input 값이 null이 아닌 조건이 들어오면 input안에 들어있는 값을 split()함수를 이용해서 문자열을 쪼개준다
  // 예) 들어온 값: '1234' => split() 결과: ['1','2','3','4']
  if (input !== null) {
    let inputArray = input.split('')
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (num[i] == inputArray[j]) {
          if (i === j) {
            strike++
          } else {
            ball++
          }
          break
        }
      }
    }
  }


  // 여기서 개선해야할 문제
  // 1. 랜덤값을 다시 받아와야한다.
  // 해결 : prompt의 cancel을 누르면 null값이 전달된다. null값을 받아올 경우 조건문을 통해 break;를 걸어주어 종료 시켜준다.
  if (input === null) {
    alert('Game is Done')
    break;
  }

  if (strike === 4) {
    console.log('Homerun!!')
  } else if (count >= 10) {
    console.error('count over!!')
  } else {
    console.info('strike: ' + strike + ' ball: ' + ball  + ' count : ' + count)
  }
}
