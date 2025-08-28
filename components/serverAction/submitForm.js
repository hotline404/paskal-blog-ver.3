"use server";
import { getSearchQuery } from "@/API/service";
async function submitForm(formData) {
  const query = formData.get("검색");
  console.log("뭔 에러야 이거 시발", formData)

  console.log("Submitted query is", query);
  try {
    const res = await getSearchQuery(query);
    console.log("search api res is ", res);
    return res;
  } catch (err) {
    console.error("error is ", err);
    return "검색 실패"
  }
}

export default submitForm;
