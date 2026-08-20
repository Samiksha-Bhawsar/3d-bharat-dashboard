import investors from "../data/investors.json";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchInvestors() {
  await wait(300 + Math.random() * 400);
  return investors;
}
