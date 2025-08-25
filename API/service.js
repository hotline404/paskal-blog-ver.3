const {
  notion_key,
  notion_DB,
  notion_token_v2,
  notion_user_id,
} = require("./instance.js");
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: notion_key,
  request_timeout: 100000,
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

  const post = results.map((page) => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.date,
      allProperties: page.properties,
      icon: page.icon.emoji,
    };
  });

  console.log('get notion post : ', results);

  return post;
};

// paragraph 일 때, image일 때 나눠서 map 리턴 값으로 div와 image태그로 보이게 하기
// 다음 릴리즈에서는 annotations에서 볼드랑 코드 true일 때 스타일 다르게 해서 div에 넣기

exports.getPost = async function (page_id) {
  const { results } = await notion.blocks.children.list({
    block_id: page_id,
    page_size: 50,
  });

  console.log("results in getPost notion api", results);

  return results;
};

// 제목 검색
exports.getSearchQuery = async function (query) {
  const { results } = await notion.search.query({
    filter: {
      properties: "title",
      rich_text: {
        contain: query,
      },
    },
  });

  return results;
};
