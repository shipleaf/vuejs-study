<template>
  <div>
    <!--TODO: 05-01. 요청사항을 만족시키도록 처리하시오.-->
    <label>user.id가 change이벤트 시점에 적용되도록 input을 작성하시오. 단 공백은 제외시킨다.</label><br />
    <input type="text" v-model.lazy.trim="user.id">
    <label>사용자의 나이가 숫자로 적용되도록 input을 작성하시오.</label><br />
    <input type="text" v-model.number="user.age" />
    <label>사용자의 통신사 정보를 skt, kt, lgup 중 하나를 선택하도록 input을 작성하시오</label><br />
    <input type="radio" v-model="user.comm" value="skt" id="skt"><label for="skt">SKT</label>
    <input type="radio" v-model="user.comm" value="kt" id="kt"><label for="kt">KT</label>
    <input type="radio" v-model="user.comm" value="lgup" id="lgup"><label for="lgup">lgUP</label>
    <label>사용자의 전공 정보를 com, sw, etc에서 복수개 선택하도록 처리하시오</label><br />
    <label>사용자의 주소지를 select에서 선택할 수 있도록 select를 작성하시오.</label><br />
    <select v-model="user.addr">
      <option disabled value="">지역 선택</option>
      <option>서울</option>
      <option>광주</option>
      <option>대전</option>
      <option>부울경</option>
      <option>구미</option>
    </select>

    <!-- END -->
    <hr />
    <label>사용자 정보</label>
    {{ user }}, {{ user.age + 10 }} {{ user.id?.length }}

  </div>
</template>

<script setup>
import { ref } from 'vue';
const user = ref({ major: [], age: 0, addr: "" });

</script>

<style lang="scss" scoped></style>
