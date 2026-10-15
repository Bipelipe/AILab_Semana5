export function getApiUrl() {
  const base = process.env.NEXT_PUBLIC_API_URL ?? "";
  return `${base}/api/health/`;
}
