const express = require("express");
const cors = require("cors");
const { v4 } = require("uuid");

const port = 8080;
const app = express();
app.use(cors());

app.get("/angilal", (req, res) => {
  res.json([
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
  ]);
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
