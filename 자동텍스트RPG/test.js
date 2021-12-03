// #log에 태그를 추가하는 코드
// color값을 따로 인자로 제공하면 해당하는 색의 에러 메세지가 표시된다.
function logMessage(msg, color) {
  if (!color) {
    color = 'black'
  }
  let div = document.createElement('div')
  div.innerText = msg
  div.style.color = color
  document.getElementById('log').appendChild(div)
}

let gameover = false
let battle = false
// 캐릭터 생성자 생성
function Character(name, hp, att) {
  this.name = name
  this.hp = hp
  this.att = att
}
// 캐릭터가 공격 받는 메소드
Character.prototype.attacked = function (damage) {
  this.hp -= damage
  logMessage(this.name + '의 체력이' + this.hp + '되었습니다.')
  if (this.hp <= 0) {
    battle = false
  }
}
// 캐릭터가 공격 하는 메소드
Character.prototype.attack = function (target) {
  logMessage(this.name + '이 ' + target.name + '을 공격합니다.')
  target.attacked(this.att)
}

function Hero(name, hp, att, lev, xp) {
  Character.apply(this, arguments)
  this.lev = lev || 1
  this.xp = xp || 0
}

Hero.prototype = Object.create(Character.prototype)
Hero.prototype.constructor = Hero
Hero.prototype.attacked = function (damage) {
  this.hp -= damage
  logMessage(this.name + '의 체력이' + this.hp + '남았습니다.', 'skyblue')
  if (this.hp <= 0) {
    logMessage(
      '죽었습니다. 레벨' +
        this.lev +
        '에서 모험이 끝났습니다. F5를 눌러 다시 시작하겠습니까?', 'red'
    )
    battle = false
    gameover = true
  }
}

Hero.prototype.attack = function (target) {
  logMessage(this.name + '님이' + target.name + '을 공격합니다.')
  target.attacked(this.att)
  if (target.hp <= 0) {
    this.gainXp(target)
  }
}

Hero.prototype.gainXp = function (target) {
  logMessage('전투에 승리하여 ' + target.xp + '의 경험치를 얻었습니다', 'blue')
  this.xp += target.xp
  if (this.xp > 100 + 10 * this.lev) {
    this.lev++
    logMessage('레벨업!' + this.lev + ' 레벨이 되었습니다', 'green')
    this.hp = 100 + this.lev * 10
    this.xp -= 10 * this.lev + 100
  }
}

function Monster(name, hp, att, lev, xp) {
  Character.apply(this, arguments)
  this.lev = lev || 1
  this.xp = xp || 10
}

Monster.prototype = Object.create(Character.prototype)
Monster.prototype.constructor = Monster

function makeMonster() {
  let monsterArray = [
    ['rabbit', 25, 3, 1, 1, 35],
    ['skeleton', 50, 6, 2, 50],
    ['soldier', 80, 4, 3, 75],
    ['king', 110, 8, 4, 110],
    ['devil', 500, 25, 6, 250],
  ]
  let monster = monsterArray[Math.floor(Math.random() * 5)]
  return new Monster(monster[0], monster[1], monster[2], monster[3], monster[4])
}

let hero = new Hero(prompt('name'), 200, 12)

logMessage(hero.name + '님의 모험이 시작합니다.')

while (!gameover) {
  let monster = makeMonster()
  logMessage(monster.name + '을 마주쳤습니다. 전투가 시작됩니다.', 'green')
  battle = true
  while (battle) {
    hero.attack(monster)
    if (monster.hp > 0) {
      monster.attack(hero)
    }
  }
}
