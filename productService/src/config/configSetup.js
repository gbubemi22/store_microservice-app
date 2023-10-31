import { config as _config } from 'dotenv';
_config();

const config = {
  NODE_ENV: process.env.NODE_ENV,
  //PORT: Number(process.env.PORT),
  JWT_SECRET: process.env.JWT_SECRET,
  DBNAME: process.env.DBNAME,
  DBUSERNAME: process.env.DBUSERNAME,
  DBPASSWORD: process.env.DBPASSWORD,
  DBHOST: process.env.DBHOST,
  DBPORT: Number(process.env.DBPORT),
  DBDIALECT: process.env.DBDIALECT,
};

const getSanitizedConfig = (config) => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env`);
    }
  }
  return config;
};

const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;
