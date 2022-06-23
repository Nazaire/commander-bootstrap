export function sleep(seconds = 1000) {
  return new Promise((resolve) => setTimeout(resolve, seconds));
}
