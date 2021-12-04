// JSON : 하나의 객체를 사용해서 데이터를 표현합니다.
// 문자열, 숫자, 불린, 배열, 객체 사용 가능
// 함수는 들어가면 안된다.
// "큰따옴표"로 감싸져야 한다.
// 키(Key)값 또한 반드시 "쌍따옴표"로 감싸져야 한다.

// 예)

let example = {
    "stringfyMe": "please",
    "andParseMe": "thankYou"
}

let string = JSON.stringify(example);
console.log(string) // {"stringfyMe":"please","andParseMe":"thankYou"}
let parsed = JSON.parse(string)
console.log(parsed) // {stringfyMe: 'please', andParseMe: 'thankYou'}


// 주의할 점은 JSON.parse를 할 때 인자가 undefined나 객체가 JSON 형태가 아닌 문장열이면 안된다.
// 만약 이와 같은 인자가 들어간다면 Uncaught SyntaxError: Unexpected token 에러가 뜨게 된다.

// 또한, JSON.stringify와 JSON.parse를 한번에 사용하면 객체를 복사할 수 있다.
// 참조가 아닌 "복사"

// 예)
let obj = { test: 'yes' }
let obj2 = JSON.parse(JSON.stringify(obj)) // { test: 'yse' }
console.log('obj2.test = no : ', obj2.test = 'no')
console.log('obj.test: ' , obj.test)

// 객체는 원래 서로 참조를 하기 때문에 하나의 값을 바꾸면 다른 것들의 값도 따라서 바뀌지만 이런 동작 대신
// 진짜 복사를 가능하게 만들어줍니다.