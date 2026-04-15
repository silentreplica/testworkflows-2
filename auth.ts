import { log } from './log';

export function verify(token: string) {
  log('verify', token.slice(0, 4) + '...');
  if (!token) throw new Error('empty token');
  if (token.length < 8) throw new Error('token too short');
  return true;
}
