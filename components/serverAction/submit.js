"use server";
import { getSearchQuery } from "@/API/service";
export const submit = async (formdata) => {
  const data = formdata.get();
  const res = await getSearchQuery("fuck");
  console.log("handle submit test", res);
};
