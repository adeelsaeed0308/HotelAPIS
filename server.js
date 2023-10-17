const http = require("http");
const app = require("./api/app/app");

const PORT = process.env.PORT || 7000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
