<template>
  <div>
    현재 잔고: <span>{{ info.balance }}</span>
    <hr />
    <label>거래 금액: </label>
    <input type="number" v-model.number="info.amount" /><br /><br>
    <!--TODO: 03-02. inline 또는 method 방식을 이용해서 입금 또는 출금 처리하시오.-->
    <button @click="info.balance += info.amount">입금(함수 미사용)</button>
    <button @click="deposite()">입금(함수 직접 호출)</button>
    <button @click="deposite">입금(함수 등록)</button> | 
    <button @click="withdraw">출금</button>

    <!-- END -->
    <hr />

    <!--TODO: 03-04. id를 입력하고 enter키를 누르면 비밀번호를 입력할 수 있게 해보자.-->
    <input type="text" placeholder="id" @keyup.enter="toPass"/>
    <input type="pass" placeholder="pass" ref="pass"/>

    <!--END-->

    <hr>
    <!--TODO: 03-05. valid 할 경우만 submit 되도록 처리하시오.(login 활용)-->
    <form action="#" @submit.prevent="login">
      <label>ID:</label><input type="text" placeholder="ID는 4~8글자입니다." ref="userid" />
      <button type="submit">전송 1(form)</button>
    </form>

    <!--END-->
  </div>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue';
const info = ref({ balance: 100, amount: 10 });
// TODO: 03-01. 입금을 위한 deposited와 출금을 위한 withdraw 함수를 작성하시오.
//  withdraw는 event 객체를 파라미터로 받아서 console에 출력해보자.
const deposite = () => {
  info.value.balance += info.value.amount;
}

const withdraw = (event) => {
  info.value.balance -= info.value.amount;
  console.log(event);
}
// END

//TODO: 03-03. 화면에서 pass 요소로 이동할 수 있는 기능(toPass)을 구현하세요.
const pass = useTemplateRef("pass"); // pass 가져오는건가?
const toPass = () => {
  pass.value.focus();
}
// END

const userid = useTemplateRef('userid');
const login = (e) => {
  console.log(userid.value.value)
  if (!/^.{4,8}$/.test(userid.value.value)) { // 정규표현식, !부정
    alert('ID는 4~8글자입니다.');
  } else {
    e.target.submit();
  }
};
</script>

<style lang="scss" scoped></style>
