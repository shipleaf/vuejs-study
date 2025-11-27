<template>
  <div>
    <h1>watch 소스 타입</h1>
    <div>x: {{ x }}, y: {{ y }}</div>
    <button @click="x++">x++</button><button @click="y++">y++</button>
    <h1>깊은 감시자</h1>
    <div>{{ obj.count }}</div>
    <button @click="obj.count++">obj.count++</button>
    <h1>watchEffect</h1>
    <div>{{ data }}</div>
    <button @click="todoId++">todoId++</button>
    <!-- <div>{{ arr }}</div> -->
  </div>
</template>

<script setup>
import { ref, watch, watchEffect, reactive } from 'vue'
const x = ref(0)
const y = ref(0)

/** Watch 소스 타입 */
// TODO: 04-1. 단일 ref 인 x에 대해 감시해보자. 추가로 immediate 옵션을 적용해보자.
watch(x, (nv, ov) => {
  console.log(ov, '=>', nv); // immediate가 머임

}, {immediate: true})
// END

// TODO: 04-2. x.value와 y.value의 합 처럼 ref가 아닌 값을 감시해보자.
watch(() => x.value + y.value, (nv, ov) => {
  console.log('합 변경', ov, '=>', nv);
}) 
// END

// TODO: 04-3. 여러 소스의 배열을 감시할 수도 있다. 
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x는 ${newX}이고 y는 ${newY}입니다`)
})

/** 깊은 감시자 */
const obj = ref({
  count: 0,
  user: {
    name: 'Kim',
    address: {
      city: 'Seoul'
    }
  }
})

// TODO: 04-4. state에 대한 깊은 감시를 처리해보자.
watch(obj, (nv, ov) => {
  //nv와 ov는 다를까? 같을까? 객체 자체는 같기 때문에 같긴 함
  console.log('obj 변경?', nv);
},{
  deep: true, // 객체 내부 값도 감지 가능
})
// END

/** watchEffect */
const todoId = ref(1)
const data = ref({})
// TODO: 04-5. 내부적으로 사용되는 todoId가 변경되면 자동적으로 watch 되는 과정을 살펴보자. 
watchEffect(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  data.value = await response.json()
}) // 내부에 있는 todoId를 감시한다!
</script>

<style scoped></style>
