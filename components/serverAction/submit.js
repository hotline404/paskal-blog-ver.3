"use server";
import { getSearchQuery } from "@/API/service";
async function submit (formdata) {
  try {
    const data = formdata.get('검색');
    const res = await getSearchQuery("fuck");
    console.log("handle submit test", res);
  } catch (error) {
    console.error(error);
  }
};

export default submit;