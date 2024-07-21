const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(
    "select * from messages order by added desc"
  );
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query("select * from messages where id = $1", [
    id,
  ]);
  return rows[0];
}

async function insertMessage(text, username) {
  await pool.query(
    "INSERT INTO messages (text,username,added) VALUES ($1,$2,NOW())",
    [text, username]
  );
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertMessage,
};
