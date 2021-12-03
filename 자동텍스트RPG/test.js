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

function Character(name, hp, att) {
  this.name = name
  this.hp = hp
  this.att = att
}

Character.prototype.attacked = function (damage) {
  this.hp -= damage
  logMessage(this.name + '의 체력이' + this.hp + '되었습니다.')
  if (hp <= 0) {
    battle = false
  }
}

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
  logMessage(this.name + '의 체력이' + this.hp + '남았습니다.')
  if (this.hp <= 0) {
    logMessage(
      '죽었습니다. 레벨' +
        this.lev +
        '에서 모험이 끝났습니다. F5를 눌러 다시 시작하겠습니까?',
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
  logMessage('전투에 승리하여 ' + target.xp + '의 경험치를 얻었습니다', blue)
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


