function checkScope() {
  if (true) {
    let blockVar = "블록 변수";
    console.log(blockVar);
  }
  console.log(blockVar); // not defined - 오류가 맞음
}
try {
  checkScope();
} catch (e) {
  console.error("check scope error :" + e);
}

let some; // 변수 선언. 할당은 아직~~~ - undefined - 오류가 아님!!

console.log("-----");

const config = {
  apiUrl: "/api/v1",
};

function updateConfig() {
  config.apiUrl = "/api/v2"; // 안에 있는 녀석들은 불변이 아님!
  console.log("Config updated");
  config = { apiUrl: "/api/v3" }; // 이게 안된다잉
  console.log("Config reassigned");
}
try {
  updateConfig();
} catch (e) {
  console.error(e.name, e.message);
  // console.error(e.stack);
}
console.log(config.apiUrl);
