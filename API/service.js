const { userAgent } = require("next/server.js");
const {notion_key, notion_DB} = require("./instance.js");
// import { NotionAPI } from "notion-client";
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: notion_key,
  request_timeout: 10000,
});

// const notionAPI = new NotionAPI({
//   activeUser: "b8d00329-393d-4390-9f8e-b783e2fe1768",
//   authToken: "v03%3AeyJhbGciOiJkaXIiLCJraWQiOiJwcm9kdWN0aW9uOnRva2VuLXYzOjIwMjQtMTEtMDciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0..PbSFRsSH0LhIkZdcgtpn9Q.RTW1xXnlrViPlU1NFWGrXtlQrHupN-eHGvfNIsVBpU8l2kHV8wiqPliKce-HKvxlOIertDmJ87GHz2LUMxrYBZLRLkU1HSRe7aG8xaTumA0oGdSfGWABbk7_t2sP7VzjBf5sRm-isZwVTixT05poHFw1Y4L_w9bnMKExcD1OE5dXg-xgJMTzqChyLaTcWT1Z3PxZzz0V_xapAakJEdDoYLt0UFr9qfmnfAY8a-5S7CV-6yDhXLZplvixnBAyaxBPvXyB7mzzZpPkNWp4nPcFBiI8F7mUBjcL7GJ_MyBQ5qEu4Me80gutoTHfQ0tL_R0i06BTwIuxPflJ9fQ1wnEcdkGFs66xFmzGEWA4dz9WB1U.ANYk0XXT7n_LUxr0kJ9spIuZ5itMcrHLqQIv76pL6mo"
// });

const db_id = notion_DB;

exports.getNotion = async function () {
  const { results } = await notion.databases.query({
    database_id: db_id,
     filter: {
      property: "상태",
      status: {
        equals: "공개",
      },
    },
  });

  console.log("시발 api 결과", results);

   const post = results.map((page) => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.date,
      allProperties: page.properties,
      icon: page.icon.emoji
    };
  });
  
  
  return post
  
};

// exports.getPost = async function (page_id) {
//   const results = await notionAPI.getPage(page_id)
//   console.log("getPost notion api", results);

// }

exports.getPost = async function (page_id) {
  const { results } = await notion.blocks.children.list({
    block_id: page_id,
  })

  console.log("result block get", results);
}


