const app = require("./app/app");
const { PORT } = require("./secret");

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
