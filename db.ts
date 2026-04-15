export function query(sql: string) {
  return pool.query(sql);
}
