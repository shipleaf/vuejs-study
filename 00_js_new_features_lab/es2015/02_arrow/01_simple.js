// 기존 함수 표현식
const add = function (a, b) {
  return a + b;
};

// 화살표 함수
const addArrow = (a, b) => a + b;

// this 바인딩 차이, 사용하기 전에 console.log 출력해보기
const person = {
  name: "Alice",
  sayHello: function () {
    const that = this; // 변경되기 전에 캡쳐해두기. that 용법(밈)
    setTimeout(function () {
      console.log("Hello, " + this.name, that);
    }, 100);
  },
  sayHelloArrow: function () {
    setTimeout(() => {
      console.log("Hello, " + this.name, this);
    }, 100);
  },
};

person.sayHello();
person.sayHelloArrow();
