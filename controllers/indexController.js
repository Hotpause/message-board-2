const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

exports.getMessages = asyncHandler(async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageashuboard", messages: messages });
});

exports.getMessage = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).send("Invalid message ID");
  }

  const message = await db.getMessageById(id);

  if (!message) {
    return res.status(404).send("Message not found");
  }

  console.log("Retrieved message:", message); // Debugging line

  res.render("messageDetail", {
    title: "Message Info",
    message: message,
  });
});

exports.getForm = asyncHandler(async (req, res) => {
  res.render("form", { title: "New Message" });
});

exports.postForm = asyncHandler(async (req, res) => {
  const text = req.body.messageText;
  const user = req.body.messageUser;
  await db.insertMessage(text, user);
  res.redirect("/");
});

// module.exports = {
//   getMessages,
//   getForm,
// };
