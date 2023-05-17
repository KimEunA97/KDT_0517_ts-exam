
// * 매개변수를 배열로 받을 예정
// * typeof(arrayData) === string
function first(arrayData: string[]): string[] {
  //1. 첫번째 배열 인덱스의 값을 변환하는 함수를 만들고 싶다.
  let result: string = "강지민";
  let arr: string[] = [];

  //unshift는 배열 앞에 놓겠다. 
  arr.unshift(result);
  return arr;
}

let data = ["최대건", "정성철", "허진", "이세민"]

console.log(first(data))