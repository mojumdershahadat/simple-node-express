const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from node and express");
});

const users = [
  { id: 0, name: "bobita", email: "bobita@gmail.com", phone: "018334329" },
  { id: 1, name: "kobita", email: "bobita@gmail.com", phone: "018334329" },
  { id: 2, name: "nobita", email: "bobita@gmail.com", phone: "018334329" },
  { id: 3, name: "hobita", email: "bobita@gmail.com", phone: "018334329" },
  { id: 4, name: "tobita", email: "bobita@gmail.com", phone: "018334329" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  //   use query patameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  //   res.send("inside post");
  res.json(newUser);
});

// dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
