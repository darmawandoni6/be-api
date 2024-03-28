import apiHandler from "./router";
import server from "./app";
import createHttpError from "http-errors";
import { errorHandler } from "./middleware/handlingError";

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

server.get("/", (req, res) => {
  res.send("OK");
});
server.use("/api", apiHandler);

server.use("/api", (req, res, next) => {
  next(createHttpError.NotFound());
});
server.use("/api", errorHandler);

server.listen(PORT, () => {
  console.log(`> Ready on http://localhost:${PORT}`);
});

export default server;
