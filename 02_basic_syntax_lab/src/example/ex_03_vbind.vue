<template>
  <div>
    <!-- TODO: 02-02. 01에서 선언한 속성들을 이용해서 a 태그를 구성하세요. -->
    <a ></a>
    <div :class="classSet">다양하게 class를 적용시키자.</div>
    <!-- TODO: 02-04. class를 선택 과정을 변경하기 위한 checkbox를 확인하세요. -->
    <input type="checkbox" name="set1" id="set1" v-model="classSet.set1" /><label for="set1">Set1</label>
    <input type="checkbox" name="set2" id="set2" v-model="classSet.set2" /><label for="set2">Set2</label>
    <input type="checkbox" name="set3" id="set3" v-model="classSet.set3" /><label for="set3">Set3</label>

    <!-- END-->
  </div>
</template>

<script setup>
import { ref } from 'vue';
// TODO: 02-01. 다음을 구성하기 위한 반응형 데이터를 개별적으로 선언하세요.
//  label="vuejs.org", id="vue" href="http://vuejs.org" title="뷰 공식 사이트"
const label = ref("vuejs.org")
const id = ref("vue")
const href = ref("http://vuejs.org")
const info = ref({
  href: "http://vuejs.org",
  title: "뷰 공식 사이트",
})

// END

// TODO: 02-03. set1, set2, set3를 적용하기 위해 classSet을 구성하세요.
 const classSet = {};

// END
</script>

<style lang="scss" scoped>
.set1 {
  background-color: aqua;
  color: purple;
}

.set2 {
  text-decoration: overline;
  font-style: italic;
}

.set3 {
  border: 1px solid blue;
}
</style>
