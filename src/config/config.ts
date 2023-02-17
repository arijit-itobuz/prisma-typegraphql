import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  APP: {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
  }

};
