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