import { create } from "zustand";

const useStore = create((set) => ({
  initialData: [],
  initialize: (newPost) =>
    set((state) => ({ initialData: newPost })),
  setSearchedData: (newPost) =>
    set((state) => ({ initialData: newPost })),
}));

export default useStore;
