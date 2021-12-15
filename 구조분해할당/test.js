// 구조 분해 할당

// 키를 가진 데이터 여러 개를 하나의 엔티티에 저장할 땐 객체를
// 컬렉션에 데이터를 순서대로 저장할 땐 배열을 사용 합니다.

// 개발을 하다 보면 함수에 객체나 배열을 전달해야 하는 경우가 종종 생기곤 합니다.
// 가끔은 객체나 배열에 저장된 데이터 전체가 아닌 일부만 필요한 경우가 생기기도 합니다.

// 이럴 때 객체나 배열을 변수로 '분해'할 수 있게 해주는 특별한 문법인 '구조 분해 할당'을 사용할 수 있습니다.
// 이 외에도 함수의 매개변수가 많거나 매개변수 기본값이 필요한 경우 등에서 구조 분해는 진가를 발휘합니다.

// 배열 분해하기
// 배열이 어떻게 변수로 분해되는지 예제를 통해 살펴보기

// 이름과 성을 요소로 가진 배열
let arr = ['Bora', 'Lee'];

// 구조 분해 할당을 이용하여
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [firstName, surname] = arr
console.log(firstName, ' // 구조 분해 할당 ');
console.log(surname, ' // 구조 분해 할당');

// 이제 인덱스를 이용해 배열에 접근하지 않고도 변수로 이름과 성을 사용할 수 있게 되었습니다.

// 아래 예시처럼 split 같은 반환 값이 배열인 메서드를 함께 활용해도 좋습니다.
let [firstName2, surname2] = 'Peter Sam'.split(' ');
console.log(firstName2, ' // 구조 분해 할당2 ');
console.log(surname2, ' // 구조 분해 할당2');

// 쉼표를 사용하여 요소 무시하기
// 쉼표를 사용하면 필요하지 않은 배열 요소를 버릴 수 있습니다.

let [firstName3, , title] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Republic',
];

console.log(firstName3, ' // 쉼표를 사용하여 요소 무시하기 firstName3');
console.log(title, ' // 쉼표를 사용하여 요소 무시하기 title');

// .entries()로 반복하기
// Object.entries(obj) 메소드와 구조 분해를 조합하면 객체의 키와 값을 순회해 변수로 분해 할당할 수 있습니다.

let user = {
  name: 'John',
  age: 30,
};

// 객체의 키와 값 순회하기
for (let [key, value] of Object.entries(user)) {
  console.log(
    `${key}: ${value} 입니다.`,
    ' // check Object.entries 구조분해할당',
  );
};

// 맵에서도 활용이 가능합니다.
let user2 = new Map();
user2.set('name', 'Peter');
user2.set('age', '35');

for (let [key, value] of user2) {
  console.log(`${key} : ${value}`, ' // check check map 구조분해할당')
};

// 변수 교환 트릭
let guest = 'OMS';
let owner = 'peter';
[guest, owner] = [owner, guest];
console.log(
  `guest: ${guest} 와 owner: ${owner} 가 바뀌었습니다. 기존: guest : oms, owner: peter`,
);

// ...(spread)문법 으로 나머지 요소 가져오기
// 배열 앞쪽에 위치한 값 몇개만 필요하고 그 이후 이어지는 나머지 값들은 한데 모아서 저장하고 싶을 때가 있습니다.
// 이럴 때는 점 세게 ...를 붙인 매개변수 하나를 추가해주면 나머지 요소를 가져올 수 있습니다.

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1, 'name1')
console.log(name2, 'name2')

// rest는 배열입니다.
// rest는 나머지 배열 요소들이 저장된 새로운 배열이 됩니다.
console.log(rest, 'rest')
console.log(rest[0], 'rest[0]')
console.log(rest[1], 'rest[1]')