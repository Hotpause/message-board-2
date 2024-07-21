#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT NOt NULL,
  username VARCHAR(255) NOT NULL,
  added TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO messages (text,username,added) 
VALUES
  ('Hi from me','Amanda',NOW()),
  ('Hi from me','Amanda-2',NOW()),
  ('Hi from me','Amanda-3',NOW());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
