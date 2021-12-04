
// 이미 구현된 객체의 prototype을 확인할 때는 __proto__를 사용합니다.

function Person(name) {this.name = name}

Person.prototype.sayHello = function() {
    alert(this.name)
}

let oms = new Person('oms')
console.log(oms.__proto__ ,' Check prototype of Object ') // {sayHello: ƒ, constructor: ƒ}
console.log(oms.__proto__.__proto__ , ' 생성자를 통해 만든 객체의 prototype의 prototype도 Obejct입니다. ')

// 객체.hasOwnProperty(속성명)
// 객체의 속성이 상속받지 않은 속성인지 알려줍니다.
// 자신의 속성이면 true, 아니면 부모의 속성이거나 아예 속성이 아니면 false를 반환합니다.

let obj = {
    example: 'yes'
}

console.log(obj.example, ' // obj example') // yes
console.log(obj.hasOwnProperty('example')) // true
console.log(obj.toString()) // [object Object]
console.log(obj.hasOwnProperty('toString')) // false
