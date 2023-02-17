import * as jwt from 'jsonwebtoken';
import { config } from '../config/config';

export async function userGenerateToken(userId: string) {
  const accessToken = jwt.sign(
    {
      userId,
      accessToken: true,
    },
    String(config.APP.JWT_SECRET),
    { expiresIn: config.APP.ACCESS_TOKEN_EXPIRY }
  );

  const refreshToken = jwt.sign(
    {
      userId,
      refreshToken: true,
    },
    String(config.APP.JWT_SECRET),
    { expiresIn: config.APP.REFRESH_TOKEN_EXPIRY }
  );

  return {
    accessToken,
    refreshToken,
  };
}
