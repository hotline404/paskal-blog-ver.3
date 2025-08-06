const {notion_key, notion_DB} = require("./instance.js");

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: notion_key
});

const db_id = notion_DB;

module.exports = async function getNotion () {
  const { results } = await notion.databases.query({
    database_id: db_id,
  });

  console.log("result", results)

  //  const post = results.map((page) => {
  //   return {
  //     id: page.id,
  //     title: page.properties.Name.title[0].text.content,
  //     tags: page.properties.tags.multi_select,
  //     allProperties: page.properties
  //   };
  // });


  // return post
};
