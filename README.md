## JS 백과사전
***
1. 모듈 불러오기 : 함수명, 모듈 경로
```javascript
  import getType from "./getType"
```

2. 일치연산자 : 동등연산자(`==`)는 자동 형변환되어 사용 안함
```javascript
  A === B
  A !== B
```

3. 논리연산자
```javascript
  a && b
  a || b
```

4. 삼항연산자 : if 문을 한줄로 표현
```javascript
  c ? true : false
```

5. 변수의 유효범위
  - const : 블럭 { } 레벨에서만 유효
  - let : 블럭 { } 레벨에서만 유효
  - var : 함수 레벨에서 유효 (너무 광범위함) 

***
#### 쉬어가기 : JS를 통해 HTML에 리스트를 추가하고 Event도 추가해보기
```javascript
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
```
***
6. 객체 (리터럴 방식 = 직접 입력 방식)
```javascript
const myname={
  firstName: 'CheolWoo',    //속성 (맴버)
  lastName: 'Lee',          //속성 (맴버)
  getFullName: function() { //메소드 (맴버)
    return `${this.firstName}${this.lastName}`
  }
}
console.log(myname.getFullName())
```

7. 클래스 (프로토타입 방식? = 생성자 입력 방식)
```javascript
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName}${this.lastname}`
  }
}
const myname = new User('CheolWoo', 'Lee')
console.log(myname.getFullName())
```

7-1. 함수 (프로토타입 방식? = 생성자 입력 방식)
```javascript
function User(first, last){
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function() {
  return `${this.firstName}${this.lastName}`
}

const leename = new User('CheolWoo', 'Lee') 
    //leename: 인스턴스
console.log(leename.getFullName())
```

7-2. 함수 인수 (arguments를 이용해 동적 인수를 입력할 수 있다.)
```javascript
function sum() {
  return arguments[0] + arguments[1]
}
console.log(sum(7,3))
```

7-3. 함수 상속/확장
```javascript
//함수1
class Vehicle{
  constructor(name, wheel){
    this.name = name
    this.wheel = wheel
  }
}

//함수2
class Car extends Bicycle{        //상속 선언
  constructor(name, wheel, license){
    super(name, wheel)            //상속 내용
    this.license = license
  }
}
```

7-4. 콜백 함수
```javascript
function timeout(callback){
  setTimeout(() =>{
    console.log('Hello!')
    callback()                      //함수 호출
  }, 3000)
}
timeout(() => console.log('done!')) //콜백 함수 선언
```
7-5. 타이머 함수
```javascript
setTimeout(함수, 시간 ms) : 일정 시간 후 함수 실행,
setInterval(함수, 시간 ms) : 시간 간격마다 함수 실행
clearTimeout('setTimeout') : Timeout 함수 종료
clearInerval('setInterval') : Interbal 함수 종료
```
8. this의 범위 (???)
- 일반 함수 : "호출 범위"에 따라 범위 결정
- 화살표 함수 : 선언된 함수에서 범위 결정


