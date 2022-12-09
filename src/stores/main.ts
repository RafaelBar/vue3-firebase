import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getCurrentActivePosition } from "@/http/api";

export const useMainStore = defineStore("main", () => {
  const data = ref([]);
  const computedData = computed(() => data);

  async function currentActivePosition(): Promise<any> {
    return await getCurrentActivePosition().then(
      (_data) => (data.value = _data)
    );
  }

  return { data, computedData, currentActivePosition };
});
