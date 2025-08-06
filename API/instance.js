import axios from "axios";
require("dotenv").config();

module.exports = {
  notion_key: process.env.NOTION_KEY,

  notion_DB: process.env.API_URL
}
