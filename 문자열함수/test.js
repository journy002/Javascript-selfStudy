// 문자열 함수
let divv = document.createElement('div')
// charAt()
let sample = 'Hello'
let result = sample.charAt(1)
console.log(result, 'charAt()')

// IndexOf(), lastIndexOf()
// 문자열을 검사하여 찾을 문자와 일치하는 최초의 문자의 index를 반환하는 함수입니다.
let sample2 = 'Hello World! OMS PROGRAMMER World'
let result_indexOf = sample2.indexOf('World')
let result_lastindexoF = sample2.lastIndexOf('World')
console.log(result_indexOf, ' // indexOf()')
console.log(result_lastindexoF, ' // lastindexOf()')

// replace()
// String.replace('찾을문자', '치환할 문자');
let sample3 = 'Hello World'
let result2 = sample3.replace('Hello', 'Hi ~!')
console.log(result2, ' // replace()')

// substring(), substr()
// String.substring(startIndex, endIndex);
// String.substr(stratIndex, 문자개수)

// substring() 함수는 첫 번째 인사로 전달된 startIndex부터 시작하여 두 번째 인자로 전달된 endIndex 앞까지의 문자열을 반환해줍니다.
// substr() 함수는 첫 번째 인자로 넘겨준 startIndex부터 시작하여 두 번째 인자로 넘겨준 문자개수만큼 문자열을 잘라 반환해 줍니다.

let sample5 = 'Hello world'
let result_substring = sample5.substring(0, 5)
let result_substr = sample5.substr(6, 5)
console.log(result_substring, ' // substring() func')
console.log(result_substr, ' // substr() func')
document.write('<p>' + result_substring + '</p>')
document.write('<p>' + result_substr + '</p>')

// split()
// String.split('문자)
// split() 함수는 첫 번째 인자로 넘긴 문자를 기준으로 하여 문자열을 잘라 각 배열 요소에 담은 뒤에 해당 배열 객체를 반환해줍니다.
let sample6 = 'Hello/Wolrd'
let result_split = sample6.split('/')
console.log(result_split[0], ' // result[0] split()')
console.log(result_split[1], ' // result[1] split()')

// toLowerCase() , toUpperCase()
let sample7 = 'Hello'
let sample8 = 'wolrd'
console.log(sample7.toUpperCase(), ' // toUpperCase()')
console.log(sample8.toLowerCase(), ' // toLowerCase()')

// String.concat('합칠 문자열');
let sample9 = 'Hi?'
let sample10 = 'ommsss'
console.log(sample9.concat(sample10), ' // concat()')

// trim()
// trim() 함수는 문자열을 양쪽 끝에 공백을 제거해주는 함수입니다.
let sample11 = '  Hello?   '
console.log(sample11.trim(), ' // trim()')
