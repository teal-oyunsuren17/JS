const express = require("express");
const cors = require("cors");
const { v4 } = require("uuid");
const fs = require("fs");

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());

function readAngilal() {
  const content = fs.readFileSync("angilal.json");
  const angilal = JSON.parse(content);
  return angilal;
}

app.get("/angilal", (req, res) => {
  const { q } = req.query;
  const angilal = readAngilal();
  if (q) {
    const filteredAngilal = angilal.filter((angilal) =>
      angilal.title.toLowerCase().includes(q.toLowerCase())
    );
    res.json(filteredAngilal);
  } else {
    res.json(angilal);
  }
});

app.get("/angilal/:id", (req, res) => {
  const { id } = req.params;
  const angilal = readAngilal();
  const one = angilal.find((angilal) => angilal.id === id);
  if (one) {
    res.json(one);
  } else {
    res.sendStatus(404);
  }
});

app.post("/angilal", (req, res) => {
  const { title } = req.body;
  const newAngilal = { id: v4(), title: title };
  const angilal = readAngilal();
  angilal.push(newAngilal);
  fs.writeFileSync("angilal.json", JSON.stringify(angilal));
  res.sendStatus(201);
});

app.delete("/angilal/:id", (req, res) => {
  const { id } = req.params;
  let angilal = readAngilal();
  const one = angilal.find((angilal) => angilal.id === id);
  if (one) {
    const newList = angilal.filter((angilal) => angilal.id !== id);
    fs.writeFileSync("angilal.json", JSON.stringify(newList));
    angilal = newList;
    res.json({ deletedId: id });
  } else {
    res.sendStatus(404);
  }
});

app.put("/angilal/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const angilal = readAngilal();
  const index = angilal.findIndex((angilal) => angilal.id === id);
  if (index > -1) {
    angilal[index].title = title;
    fs.writeFileSync("angilal.json", JSON.stringify(angilal));
    res.json({ updatedId: id });
  } else {
    res.sendStatus(404);
  }
});

// ---------------------------------------------------------- //

function readButeegdehuun() {
  const content = fs.readFileSync("buteegdehuun.json");
  const buteegdehuun = JSON.parse(content);
  return buteegdehuun;
}

app.get("/buteegdehuun", (req, res) => {
  const { q } = req.query;
  const buteegdehuun = readButeegdehuun();
  if (q) {
    const filteredButeegdehuun = buteegdehuun.filter((buteeg) =>
      buteeg.title.toLowerCase().includes(q.toLowerCase())
    );
    res.json(filteredButeegdehuun);
  } else {
    res.json(buteegdehuun);
  }
});

app.get("/buteegdehuun/:id", (req, res) => {
  const { id } = req.params;
  const buteegdehuun = readButeegdehuun();
  const one = buteegdehuun.find((buteegdehuun1) => buteegdehuun1.id === id);
  if (one) {
    res.json(one);
  } else {
    res.sendStatus(404);
  }
});

app.post("/buteegdehuun", (req, res) => {
  const { title } = req.body;
  const { price } = req.body;
  const { category } = req.body;
  const { thumbnail } = req.body;

  const newButeegdehuun = {
    id: v4(),
    title: title,
    price: price,
    category: category,
    thumbnail: thumbnail,
  };

  const buteegdehuun = readButeegdehuun();
  buteegdehuun.unshift(newButeegdehuun);
  fs.writeFileSync("buteegdehuun.json", JSON.stringify(buteegdehuun));
  res.sendStatus(201);
});

app.delete("/buteegdehuun/:id", (req, res) => {
  const { id } = req.params;

  let buteegdehuun = readButeegdehuun();
  const one = buteegdehuun.find((buteegdehuun1) => buteegdehuun1.id === id);

  if (one) {
    const newButeegdehuun = buteegdehuun.filter(
      (buteegdehuun1) => buteegdehuun1.id !== id
    );
    fs.writeFileSync("buteegdehuun.json", JSON.stringify(newButeegdehuun));
    buteegdehuun = newButeegdehuun;
    // res.json({ buteegdehuun: newButeegdehuun });
    res.json({ deletedId: id });
  } else {
    res.sendStatus(404);
  }
});

app.put("/buteegdehuun/:id", (req, res) => {
  const { id } = req.params;
  const buteegdehuun = readButeegdehuun();
  const index = buteegdehuun.findIndex(
    (buteegdehuun1) => buteegdehuun1.id === id
  );

  if (-1 < index) {
    buteegdehuun[index] = req.body;
    fs.writeFileSync("buteegdehuun.json", JSON.stringify(buteegdehuun));
    res.json({ updatedId: id });
  } else {
    res.sendStatus(404);
  }
});

// app.get("/users/save", (req, res) => {
//   const newUser = [{ name: "Sarnai", id: 1 }];
//   fs.writeFileSync("data.json", JSON.stringify(newUser));
//   res.json(["success"]);
// });

// app.get("/users/read", (req, res) => {
//   const content = fs.readFileSync("data.json");
//   res.json(JSON.parse(content));
// });

// app.get("/users/update", (req, res) => {
//   const content = fs.readFileSync("data.json");
//   const users = JSON.parse(content);
//   users.push({ name: "Bold", id: 2 });
//   fs.writeFileSync("data.json", JSON.stringify(users));
//   res.json({});
// });

app.listen(port, () => {
  console.log("Server is running on " + port);
});
