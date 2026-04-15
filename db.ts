import { log } from './log';

export function query(sql: string) {
  log('query', sql);
  try {
    return pool.query(sql);
  } catch (e) { throw new Error(`DB: ${e}`); }
}
