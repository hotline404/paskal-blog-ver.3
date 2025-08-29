"use server";
import { getSearchQuery, getNotion } from "@/API/service";
async function submitForm(formData) {
  const query = formData.get("검색");

  console.log("Submitted query is", query);
  try {
    const res = await getSearchQuery(query);
    return res;
  } catch (err) {
    console.error("error is ", err);
    const res = await getNotion();
    return res;
  }
}

export default submitForm;
