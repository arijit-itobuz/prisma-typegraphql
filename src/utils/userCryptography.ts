import { hash, compare } from 'bcrypt';

export async function userEncryption(password: string): Promise<string> {
  return hash(password, 10);
}

export async function userDecryption(password: string, hash: string): Promise<boolean> {
  return compare(password, hash);
}
