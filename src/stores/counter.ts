import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { api } from "@/http/api";

export const useCounterStore = defineStore("counter", () => {
  const count = ref([]);
  const doubleCount = computed(() => count);
  async function increment() {
    return await api
      .get("/currentActivePosition")
      .then((countData: any) => (count.value = countData.data));
  }

  return { count, doubleCount, increment };
});
