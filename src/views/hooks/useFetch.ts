import { reactive, toRefs } from 'vue';

interface State<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}
export const useFetch = async <T>(url: string, options?: Record<string, unknown>) => {
  const state = reactive<State<T>>({
    data: null,
    error: null,
    loading: false
  });

  const fetchDate = async () => {
    state.loading = true;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      state.data = await response.json();
    } catch (error: unknown) {
      const typedError = error as Error;
      state.error = typedError; // todo: check
    } finally {
      state.loading = false;
    }
  };

  await fetchDate();

  return {
    ...toRefs(state)
  };
};
