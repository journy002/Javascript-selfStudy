// Vehicle 생성자 생성
function Vehicle(name, speed) {
  this.name = name
  this.speed = speed
}
// prototype을 이용하여 drive에 Vehicle 정보를 담아온다.
Vehicle.prototype.drive = function () {
  console.log(this.name + ' run at ' + this.speed)
}

let tico = new Vehicle('tico', 50)
tico.drive()
// Sedan 생성자 생성
function Sedan(name, speed, maxSpeed) {
  // apply() 함수는 '적용하는' 메소드이다.
  // this는 Vehicle에 담겨있는 this를 그대로 받으라는 의미.
  // arguments는 매개변수를 의미한다.
  // Sedan 매개변수 name, speed, maxSpeed가 그대로 Vehicle과 연결된다. 다만, maxSpeed는 Vehicle이 가지고 있지 않기 때문에 무시 된다.
  Vehicle.apply(this, arguments)
  this.maxSpeed = maxSpeed
}

// Object.create() => 프로토타입 객체 및 속성(property)을 갖는 새 객체를 만든다.
// Object.create()는 Vehicle.prototype을 상속하는 새로운 객체를 만들어 Sedan.prototype에 대입을 한다.
// 즉 Sedan이 Vehicle을 상속하게 된다.
Sedan.prototype = Object.create(Vehicle.prototype)
console.log(Sedan.prototype)

// 오류를 수정하는 코드.
// 생성자.prototype.constructor === 생성자 이여야 한다.
// 생성자의 부모의 자식을 찾으면 당연히 원래 생성자가 나와야 한다.
// 하지만 이 줄을 뺀다면 Sedan.prototype.constructor === Vehicle이 나온다.
// 이 문제를 해결하기 위해 Sedan.prototype.constructor에 Sedan을 다시 넣어준다.
Sedan.prototype.constructor = Sedan
// Sedan.prototype.boost로 boost 메소드를 Sedan에 만든다.
// 이제 Sedan은 Vehicle에 상속 받은 drive와 boost 메소드를 사용할 수 있다.
Sedan.prototype.boost = function () {
  console.log(this.name + ' boosts its speed at ' + this.maxSpeed)
}

let Genesis = new Sedan('Genisis', 200, 300)
Genesis.drive()
Genesis.boost()
