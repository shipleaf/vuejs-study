<template>
  <div>
    <div>
      <!--TODO: 03-1. key가 있을 때와 없을 때의 동작을 확인해보세요. -->
      <div v-for="item in items" :key="item.id">
        {
        <input v-model="item.id" type="text" />
        <input v-model="item.name" type="text" />
        <input type="text" placeholder="score" />
        }
      </div>
      <button @click="shift">shift</button>
    </div>

    <hr>

    <button @click="randomSplice">splice</button>
    <span ref="spanTarget"></span>
    <hr />
    <ul>
      <!--TODO: 03-2. index와 item으로 key를 바인딩하면서 dom의 재활용에 대해서 살펴보자.-->
      <li v-for="(item, index) in arr" :key="item">{{ item }}</li>
      <!-- index를 키로 한다면 변경 시 다음 노드들이 전부 다시 그려짐 -->
      <!--END-->
    </ul>

    <!--TODO: 03-3. arr의 내용을 정렬해서 출력해보자.-->

    <!--END-->
  </div>
</template>

<script setup>
import { ref, useTemplateRef, computed } from 'vue'

let id = 0

const items = ref([
  { id: id++, name: 'Alice' },
  { id: id++, name: 'Bella' },
  { id: id++, name: 'Hong' },
])

const shift = () => {
  const value = items.value
  value.push(value.shift())
}


const arr = ref([])
for (let i = 0; i < 20; i++) {
  arr.value.push(i)
}
const spanTarget = useTemplateRef('spanTarget')
const randomSplice = () => {
  const target = parseInt(Math.random() * arr.value.length)
  spanTarget.value.innerHTML = `삭제: ${target}`
  arr.value.splice(target, 1)
}
// 원본과 별도로 정렬된 결과를 가져가려면 정말 별도의 객체가 필요하다.
const sorted = computed(() => [...arr.value].sort())
</script>

<style lang="scss" scoped></style>
