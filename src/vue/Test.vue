<template>
  <div class="test">
    <p>message:{{ message }}</p>
    <p>doubleCount:{{ doubleCount }}</p>
    <button @click="add">add count</button>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "TestComponent",
  setup() {
    const message = "hello test vue";
    const count = ref(1);
    const doubleCount = computed(() => count.value * 2);
    const add = () => {
      count.value++;
    };
    return {
      message,
      doubleCount,
      add,
    };
  },
};
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>
