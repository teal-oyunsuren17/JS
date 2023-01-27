const express = require("express");
const cors = require("cors");
const { v4 } = require("uuid");

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());

let angilal = [
  { id: v4(), title: "Нүүр будалт" },
  { id: v4(), title: "Арьс арчилгаа" },
  { id: v4(), title: "Уруулын будаг" },
  { id: v4(), title: "Нүдний будаг" },
  { id: v4(), title: "Үнэртэн" },
  { id: v4(), title: "Үс,бие арчилгаа " },
  { id: v4(), title: "Эрэгтэй бүтээгдэхүүн" },
  { id: v4(), title: "Цэвэрлэгээ" },
  { id: v4(), title: "Нарны тос" },
  { id: v4(), title: "Багцууд" },
  { id: v4(), title: "Бэлгийн карт" },
  { id: v4(), title: "Хямдрөл" },
];

app.get("/angilal", (req, res) => {
  res.json(angilal);
});

app.get("/angilal/:id", (req, res) => {
  const { id } = req.params;
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
  angilal.push(newAngilal);
  res.sendStatus(201);
});

app.delete("angilal/:id"),
  (req, res) => {
    const { id } = req.params;
    const one = angilal.find((angilal) => angilal.id === id);
    if (one) {
      const newList = angilal.filter((angilal) => angilal.id !== id);
      angilal = newList;
      res.json({ deletedId: id });
    } else {
      res.sendStatus(404);
    }
  };

app.put("angilal/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const index = angilal.findIndex((angilal) => angilal.id === id);
  if (index > -1) {
    angilal[index].title = title;
    res.json({ updatedId: id });
  } else {
    res.sendStatus(404);
  }
});

app.get("/buteegdehuun", (req, res) => {
  res.json([
    {
      id: v4(),
      title: "HEIMISH Varnish Velvet Lip Tint",
      price: 28800 + "₮",
      category: "Нүүр будалт",
    },
    {
      id: v4(),
      title: "DERMATORY Hypoallergenic Moisturizing Knit Mask",
      price: 8800 + "₮",
      category: "Арьс арчилгаа",
    },
    {
      id: v4(),
      title: "MISSHA Damaged Hair Therapy Shampoo",
      price: 25000 + "₮",
      category: "Үс, бие арчилгаа",
    },
    {
      id: v4(),
      title: "DERMATORY Allantion Feminine Wash 190ml",
      price: 48000 + "₮",
      category: "Цэвэрлэгээ",
    },
  ]);
});

app.listen(port, () => {
  console.log("Server is running on " + port);
});
