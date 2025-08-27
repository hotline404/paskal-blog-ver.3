"use server";
import { getSearchQuery } from "@/API/service";
async function submit (formData) {
  try {
    const data = formData.get('검색');
    console.log("handle submit test", data);
  } catch (error) {
    console.error(error);
  }
};

export default submit;