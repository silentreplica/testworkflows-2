import { log } from './log';

export async function fetchData(url: string) {
  log('fetch', url);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
