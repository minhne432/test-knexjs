const express = require("express");
const config = require("./knexfile");
const knex = require("knex")(config);
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  let books = await knex("books").select("*");
  return res.json(books);
});

app.listen(3000, () => {
  console.log("Server start on port 3000");
});
