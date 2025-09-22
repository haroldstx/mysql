const dotenv = require("dotenv");
dotenv.config();
const sequelize = require("sequelize");

const db = new sequelize.Sequelize(
  process.env.DB_NAME || "mydb",
  process.env.DB_USER || "user",
  process.env.DB_PASSWORD || "clave123",
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3305,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      connectTimeout: 10000, // 10 seconds
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

async function testConnection() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { sequelize: db, testConnection };
