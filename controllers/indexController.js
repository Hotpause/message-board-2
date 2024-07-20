const asyncHandler = require("express-async-handler");

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
  res.render("index", { title: "Mini Messageashuboard", messages: messages });
});

exports.getMessage = asyncHandler(async (req, res) => {
  const message = messages[req.params.id];
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
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect("/");
});

// module.exports = {
//   getMessages,
//   getForm,
// };
