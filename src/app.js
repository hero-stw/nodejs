// const http = require("http");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   console.log(url);
//   if (url === "/") {
//     res.setHeader("Content-Type", "text/html");
//     res.write(/*html*/ `<html><body><h1>Homepage</h1></body></html>`);
//     res.end();
//   } else if (url === "/api/products") {
//     const data = [
//       {
//         id: 1,
//         name: "Pro ABC",
//       },
//       {
//         id: 2,
//         name: "Pro DEF",
//       },
//     ];

//     res.end(JSON.stringify(data));
//   }
// });

const express = require("express");
const app = express();
const PORT = 3001;
app.listen(PORT, () => {
  console.log("Listening....", PORT);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/product", (req, res) => {
  const data = [
    {
      id: 1,
      name: "Pro ABC",
    },
    {
      id: 2,
      name: "Pro DEF",
    },
  ];
  res.json(data);
});
