import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  APP: {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
    REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY
  }

};
