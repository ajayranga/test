const app = require("./app");
const port = process.env.PORT || 8000;
app.set(port);
app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`);
});
