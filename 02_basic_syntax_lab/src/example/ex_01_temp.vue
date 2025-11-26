<template>
  <ul>
    <!-- TODO: 01-02. vue의 다양한 문자열 보간 방식을 테스트하시오. -->
    <!--  {{  }} 활용: '오늘의 메시지 : '라고 출력하세요.-->
         <li>오늘의 메시지 : {{ message }}</li>
    <!--  html 형태로 출력하세요.-->
         <li v-html="message"></li>
    <!--  text 형태로 출력하세요. 단 대문자로 처리한다.-->
        <li v-text="message.toUpperCase()"></li>
    <!--  text 형태로 출력하세요. 단 출력 후 반응성을 삭제한다.-->
        <li v-text="message" v-once></li>
    <!-- 디버거로 테스트 -->
    <!-- END -->
  </ul>
</template>

<script setup>
// TODO: 01-01. message라는 이름으로 '<h1>Hi Vue</h1>'를 반응형으로 설정하세요.
import {ref} from "vue";
const message = ref("<h1>Hi Vue</h1>");
</script>
<style scoped></style>
