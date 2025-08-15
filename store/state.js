import { create } from "zustand";
import { getPost } from "@/API/service";

const useStore = create((set) => ({
  initialData: [],
  searchedData: [],
  initialize: (newPost) =>
    set((state) => ({ initialData: newPost })),
  setSearchedData: (query) =>
    set(() => ({
      searchedData: [query],
    })),
  
  postData: [],
  setPostData: () => {
    const res = getPost(id).then(data => {return data});
    set(() => ({
      postData: res
    }))
  }
    
}));

export default useStore;
