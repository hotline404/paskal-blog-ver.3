import { create } from "zustand";

const useStore = create((set) => ({
  initialData: [],
  searchedData: [],
  initialize: (newPost) =>
    set((state) => ({ initialData: newPost })),
  setSearchedData: (query) =>
    set(() => ({
      searchedData: [query],
    })),
}));

export default useStore;
