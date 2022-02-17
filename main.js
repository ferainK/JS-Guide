import getType from "./getType"
import random from "./getRandom"

//일치&동등 연산자
// 동등 연산자 == : 자동 행변환이 일어남 (1 = '1')
// 일치 연산자 === : 행변환이 일어나지 않음

//논리 연산자
const a = false
const b = true
console.log('&& :',a && b)
console.log('|| :',a || b)

//삼항 연산자
const c = 1 < 2
console.log(c ? true : false)

//변수의 유효범위
const var1 = 1 //블럭{} 레벨에서만 유효
let var2 = 1 //블럭{} 레벨에서만 유효
var var3 = 1 // 함수 레벨에서 유효 (너무 광범위하여 의도하지 않게 동작할 수 있어 사용하지 않음)


//활용 예제
const ulEl = document.querySelector('ul')
for(let i = 0; i < 10; i += 1){
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if ((i + 1) % 2 == 0){
    li.addEventListener('click', function(){
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}

//함수 중 arguments 기능 (매개변수를 입력하지 않고 사용 가능)
//javascript에서 함수 먼저 읽음 (Hoisting)
function sum() {
  return arguments[0] + arguments[1]
}

console.log(sum(7,3))

//타이머함수
//setTimeout(함수, 시간 ms) : 일정 시간 후 함수 실행
//setInterval(함수, 시간 ms) : 시간 간격마다 함수 실행
//clearTimeout(선언된 'setTimeout') : 설정된 Timeout 함수 종료
//clearInerval(선언된 'setInterval') : 설정된 Interbal 함수 종료

//콜백함수
function timeout(callback){
  setTimeout(() =>{
    console.log('Hello!')
    callback()  //함수임을 반드시 명심하자! ()붙여라
  }, 3000)
}
timeout(() => {
  console.log('done!')
})

//객체 (리터럴 방식 = 직접입력)
const myname = {
  firstName: 'CheolWoo', //속성 (맴버)
  lastName: 'Lee', //속성 (객체의 맴버)
  getFullName: function() { //메소드 (객체의 맴버)
    return `${this.firstName}${this.lastName}`
  }
}
console.log(myname.getFullName())

//함수 (프로토타입 방식? = 생성자 입력 방식)
function User(first, last){
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function() {
  return `${this.firstName}${this.lastName}`
}

const leename = new User('CheolWoo', 'Lee') //인스턴스 생성
console.log(leename.getFullName()) //메소드는 꼭 괄호 붙이쟈;;

//함수 상속
class Vehicle{
  constructor(name, wheel){
    this.name = name
    this.wheel = wheel
  }
}

class Bicycle extends Vehicle{
  constructor(name, wheel){
    super(name, wheel)
  }
}

class Car extends Bicycle{
  constructor(name, wheel, license){
    super(name, wheel)
    this.license = license
  }
}

//클래스 (프로토타입 방식? = 생성자 입력 방식)
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName}${this.lastname}`
  }
}

//this의 범위... 어렵다...
//일반 함수에서는 "호출 위치"에 따라 this 범위 결정 (leename.getFullName() => 메소드 내에 있는 this 범위 : leename)
//화살표 함수는 자신이 선언된 함수 범위에서 this 범위 결정 (????)

