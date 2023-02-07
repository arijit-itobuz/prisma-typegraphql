import { Request } from 'express';
import { context } from '../../prisma/context';
import * as jwt from 'jsonwebtoken';
import {config} from '../config/config'

export async function createContext({ req }: { req: Request }) {
  const authHeader = req.headers.authorization;
  const token = authHeader ? String(authHeader).split(' ')[1] : null;

  if (authHeader) {
    // const decode = jwt.verify(token, config.JWT_SECRET)
    return { ...context, req };
  } else {
    return { ...context, req };
  }
}
