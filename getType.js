// 데이터 타입 확인 함수
export default function getType(data) { //default일 경우 함수 이름 생략함.
  return Object.prototype.toString.call(data).slice(8, -1)
}

