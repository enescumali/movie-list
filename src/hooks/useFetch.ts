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

  const fetchData = async () => {
    state.loading = true;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(
          'Something went wrong! Please try again. Meanwhile we are trying hard to fix it!'
        );
      }

      state.data = await response.json();
    } catch (error: unknown) {
      state.error = error as Error; // todo: check
    } finally {
      state.loading = false;
    }
  };

  await fetchData();

  return {
    ...toRefs(state)
  };
};
