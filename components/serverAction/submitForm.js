"use server";
import { getSearchQuery } from "@/API/service";
async function submitForm(formData) {
  const query = formData.get("검색");

  console.log("Submitted query is", query);
  try {
    const res = await getSearchQuery(query);
    console.log("search api res is ", res);
    return res;
  } catch (err) {
    console.error("error is ", err);
  }
}

export default submitForm;
