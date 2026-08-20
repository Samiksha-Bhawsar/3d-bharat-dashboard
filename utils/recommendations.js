export function scoreDeal(deal, preferences) {
  let score = 0;
  if (preferences.risk === "Any" || preferences.risk === deal.risk) score += 30;
  if (preferences.industry === "Any" || preferences.industry === deal.industry) score += 25;
  if (deal.investment <= preferences.budget) score += 20;
  score += Math.min(25, Math.max(0, deal.roi - 8));
  return Math.round(score);
}

export function recommendDeals(deals, preferences) {
  return deals
    .map(d => ({ ...d, matchScore: scoreDeal(d, preferences) }))
    .sort((a,b) => b.matchScore-a.matchScore);
}
