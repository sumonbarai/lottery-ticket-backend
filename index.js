const app = require("./app/app");
const { PORT } = require("./secret");

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running http://localhost:${PORT}`);
});
