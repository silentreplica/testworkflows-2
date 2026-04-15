export function query(sql: string) {
  try {
    return pool.query(sql);
  } catch (e) { throw new Error(`DB: ${e}`); }
}
