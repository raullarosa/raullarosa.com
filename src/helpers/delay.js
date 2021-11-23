export async function delay(ms = 1000) {
  console.log(`Delay: ${ms}`);
  return await new Promise(resolve => setTimeout(resolve, ms))
}