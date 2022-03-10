const dataProduct = [
  {
    id: 1,
    name: "Pro ABC",
  },
  {
    id: 2,
    name: "Pro DEF",
  },
];
export const list = (req, res) => {
  res.json(dataProduct);
  console.log(dataProduct);
};
export const post = (req, res) => {
  dataProduct.push(req.body);
  console.log(dataProduct);
  res.json(dataProduct);
};
