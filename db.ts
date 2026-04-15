import { Pool } from 'pg';

const pool = new Pool();

export const query = (sql: string) => pool.query(sql);
