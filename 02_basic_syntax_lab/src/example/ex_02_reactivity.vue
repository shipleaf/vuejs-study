<template>
  <div>
    <!-- TODO: 01-04. 버튼을 클릭하면서 반응성을 확인하시오. -->
    <button @click="normalState.count++">일반형, 화면 갱신 X: {{ normalState }}</button><br />
    <button @click="reactiveState.count++">반응형: 화면 갱신 O: {{ reactiveState }}</button><br />
    <button @click="reactiveState.user.age++">깊은 반응성</button><br />
    <button @click="destState++">분해할당된 값: {{ destState }}</button><br />

    <button @click="arr.push('1')">{{ arr }}</button><br />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const msg = ref('Hello'); // 반응성 - 모든 데이터 처리 가능, 단 script에서 사용 시 .value 필요
const normalState = { count: 10, user: { age: 10 } }; // 반응성 x
const reactiveState = reactive(normalState); // 반응성 - 객체를 대상으로만 처리, .value 불필요
const arr = reactive(['Hello', 'Reactive']);

// TODO: 01-03. 위에서 선언한 상수의 타입을 확인하시오. 
console.log('일반 객체:', normalState);
console.log('반응형 객체:', reactiveState);
console.log('배열: ', arr);

// javascript에서 값에 접근하는 방법
console.log("ref 값 접근: ", msg.value); // ref는 getter/setter로 관리
console.log("reactive 접근: ", reactiveState.count); // reactive는 proxy로 관리

// 분해해서 가져가면(ref도 동일)
const { count: destState, user: destUser } = reactiveState;
console.log("분해 결과: ", destState, destUser);
</script>

<style scoped></style>
