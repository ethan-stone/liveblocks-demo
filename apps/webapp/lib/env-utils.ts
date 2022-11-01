export function assertNotUndefined(
  envVar: string | undefined,
  msg: string
): string {
  if (!envVar) throw new Error(msg);
  return envVar;
}
