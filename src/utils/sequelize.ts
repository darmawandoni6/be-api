import { Sequelize } from "sequelize";

// const db = process.env.DATABASE ?? "local-test";
// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: `./sqlite/${db}.sqlite3`,
// });

const sequelize = new Sequelize(
  "postgres://default:8ltYpAmUiRT6@ep-snowy-snow-a1lqcjjk.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
);

export default sequelize;
