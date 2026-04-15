export function verify(token: string) {
  if (!token) throw new Error('empty token');
  if (token.length < 8) throw new Error('token too short');
  return true;
}
