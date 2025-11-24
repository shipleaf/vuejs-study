// computed property name
let oldDynamicPropObj = {}; // 일단 빈 객체 생성
oldDynamicPropObj["name" + "_1"] = "hong"; // 나중에 동적 프로퍼티 추가
console.log(oldDynamicPropObj);

let dynamicPropObj = {
  ["name" + "_1"]: "hong", // 객체 리터럴 내부에서 동적 프로퍼티 이름 사용
};
console.log(dynamicPropObj);

const keys = { key1: "THE_MAX_LENGTH_OF_LINE", key2: "😀" };
const objWithKeys = {
  HisNameIsVeryLongSoICantRemember: "홍길동", // 다른 곳에서도 이 키를 써야 한다고 가정하면..
  [keys.key1]: 30,
  [keys.key2]: "seoul",
};
console.log(objWithKeys);
