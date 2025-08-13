const {notion_key, notion_DB} = require("./instance.js");

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: notion_key,
  request_timeout: 10000,
});

const db_id = notion_DB;

module.exports = async function getNotion () {
  const { results } = await notion.databases.query({
    database_id: db_id,
  });

  console.log("시발 api 결과", results);

   const post = results.map((page) => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.date,
      allProperties: page.properties,
    };
  });


  return post

};
