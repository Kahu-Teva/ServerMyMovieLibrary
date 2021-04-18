const express = require('express');
const app = express();
const port = 3001;

app.use("/api/", require("./routes"));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})