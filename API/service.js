const {notion_key, notion_DB} = require("./instance.js");

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: notion_key,
  request_timeout: 10000,
});

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


  


  exports.getPost = async function () {
    const results = await notion.blocks.children.list({
      page_id: "2451600f-02ad-80e5-b932-c90add82d2ae",
    })

    console.log("아 몰랑", results)
  }


