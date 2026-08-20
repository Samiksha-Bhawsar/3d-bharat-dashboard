import deals from "../data/deals.json";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchDeals(params = {}) {
  await wait(350 + Math.random() * 450);
  let result = [...deals];
  const { search = "", industry = "All", risk = "All", minRoi = 0, maxInvestment = Infinity, sort = "match", page = 1, pageSize = 9 } = params;
  const q = search.trim().toLowerCase();

  if (q) result = result.filter(d => `${d.company} ${d.industry} ${d.city}`.toLowerCase().includes(q));
  if (industry !== "All") result = result.filter(d => d.industry === industry);
  if (risk !== "All") result = result.filter(d => d.risk === risk);
  result = result.filter(d => d.roi >= Number(minRoi) && d.investment <= Number(maxInvestment));

  if (sort === "roi") result.sort((a,b) => b.roi-a.roi);
  else if (sort === "investment") result.sort((a,b) => a.investment-b.investment);
  else if (sort === "risk") result.sort((a,b) => ({Low:1,Medium:2,High:3}[a.risk]-{Low:1,Medium:2,High:3}[b.risk]));

  const total = result.length;
  const start = (page - 1) * pageSize;
  return { data: result.slice(start, start + pageSize), total, page, pageSize };
}

export async function fetchDealById(id) {
  await wait(300 + Math.random() * 350);
  return deals.find(d => d.id === id) || null;
}

export function getAllDeals() { return deals; }
