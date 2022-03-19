export const listUser = (req, res) => {
  res.json(data);
};
export const postUser = (req, res) => {
  res.json(data);
};
export const getUser = (req, res) => {
  const newData = data.find((item) => item.id === parseInt(req.params.id));
  res.json(newData);
};
export const updateUser = (req, res) => {
  const newData = data.map((item) =>
    item.id == parseInt(req.params.id) ? req.body : item
  );
  res.json(newData);
};
export const deleteUser = (req, res) => {
  const newData = data.find((item) => item.id != parseInt(req.params.id));
  res.json(newData);
};
