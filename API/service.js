const {
  notion_key,
  notion_DB,
} = require("./instance.js");
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: notion_key,
  request_timeout: 100000,
});

exports.getNotion = async function () {
  const { results } = await notion.databases.query({
    database_id: notion_DB,
    filter: {
      property: "상태",
      status: {
        equals: "공개",
      },
    },
  });

  const post = results.map((page) => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.date,
      allProperties: page.properties,
      icon: page.icon.emoji,
    };
  });

  console.log("get notion post : ", results);

  return post;
};

exports.getPost = async function (page_id) {
  const { results } = await notion.blocks.children.list({
    block_id: page_id,
    page_size: 70,
  });

  console.log("results in getPost notion api", results);

  return results;
};

// 제목 검색
exports.getSearchQuery = async function (query) {
  const { results } = await notion.search({
    query: query,
  });
  const post = results.map((page) => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.date,
      allProperties: page.properties,
      icon: page.icon.emoji,
    };
  });

  return post;
};
