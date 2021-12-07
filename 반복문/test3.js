// ** switch문 ** //

// 복수의 if 조건문은 switch문으로 바꿀 수 있습니다.

// switch문을 사용한 비교법은 특정 변수를 다양한 상황에서 비교할 수 있게 해줍니다.
// 코드 자체가 비교 상황을 잘 설명한다는 장점도 있습니다.

// 문법

// `switch(x) {
//     case 'value1' :
//     ...
//     [break]

//     case 'value2' :
//     ...
//     [break]

//     case 'value3' :
//     ...
//     [break]

//     default
//     ...
//     [break]
// }

let a = 2

switch (a) {
  case 4:
    console.log('숫자 4의 케이스 결과 입니다.')
    break

  case 3:
    console.log('숫자 3의 케이스 결과 입니다.')
    break
  default:
    console.log('어떤 값인지 파악이 되지 않습니다.')
    break
}

// switch/case 문의 인수엔 어떤 표현식이든 올 수 있습니다.

let t = '2'
let y = 0

switch (+t) {
  case y + 2:
    console.log(t, 't의 값')
    console.log('표현식 +t는 2, 표현식 y+1는 1이므로 이 코드가 실행됩니다.')
    break
  default:
    console.log('코드가 실행되지 않습니다.')
}

// 여러개의 'case'문 묶기

let q = 5

switch (q) {
  case 4:
    console.log('계산이 맞습니다!')
    break

  case 3:
  case 5:
    console.log('계산이 틀립니다!')
    console.log('다시 한번 생각해 보시면 좋겠습니다!')
    break

  default:
    console.log('계산 결과가 이상합니다!')
}

// case 3과 case 5는 동일한 메시지를 보여줍니다.
// switch/case문에서 break문이 없는 경우엔 조건에 상관없이 다음 case문이 실행되는 부작용이 발생합니다.
// 위 예시에서 case 3이 참인 경우엔 (*)로 표시한 줄 아래의 코드가 실행되는데, 그 아래 줄엔 case 5가 있고 break문도 없기 때문에 12번째 줄의 break문을 만날 때까지 코드는 계속 실행됩니다.

// 자료형의 중요성
let arg = prompt('값을 입력해주세요.')
switch (arg) {
  case '0':
  case '1':
    console.log('0 or 1를 입력하셨습니다')
    break

  case '2':
    console.log('2를 입력하셨습니다.')
    break

  case 3:
    console.log('이 코드는 절대 실행 될 수 없습니다.')
    break
  default:
    console.log('알 수 없는 값을 입력하셨습니다.')
}

// 0이나 1을 입력한 경우엔 첫 번째 console.log가 실행됩니다.
// 2를 입력한 경우엔 두 번째 console.log가 실행됩니다.
// 3을 입력하였더라도 세 번째 console.log는 실행되지 않습니다.
// 앞서 배운 바와 같이 prompt 함수는 사용자가 입력 필드에 기재한 값을 문자열로 변환해 반환하기 때문에 숫자 3을 입력하더라도 prompt 함수는 문자열 '3'을 반환합니다.
// 그런데 세 번째 case문에선 사용자가 입력한 값과 숫자형 3을 비교하므로, 형 자체가 다르기 때문에 case 3 아래의 코드는 절대 실행되지 않습니다. 대신 default문이 실행됩니다.

// "switch"문을 "if"문으로 변환하기
// "switch"문을 사용해 작성된 아래 코드를 if..else문을 사용한 코드로 변환해 보세요.

// switch (browser) {
//   case 'Edge':
//     alert('Edge를 사용하고 계시네요!')
//     break

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.')
//     break

//   default:
//     alert('현재 페이지가 괜찮아 보이길 바랍니다!')
// }

let browser = prompt('사용하고 있는 브라우저를 알려주세요!')

if (browser === 'Edge') {
  console.log('Edge를 사용하고 계시네요!')
} else if (
  browser === 'Chrome' ||
  browser === 'Firefox' ||
  browser === 'Safari' ||
  browser === 'Opera'
) {
  console.log('저희가 지원하는 브라우저를 사용하고 계시네요!')
} else {
  console.log('현재 페이지가 괜찮아 보이길 바랍니다!')
}
