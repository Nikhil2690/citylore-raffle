// api/raffle-metrics.js

export default function handler(req, res) {
  const { site } = req.query;

  if (!site) {
    return res.status(400).json({ error: 'Missing site parameter' });
  }

  // Mock response
  return res.status(200).json({
    ticketsSold: 42,
    revenueCents: 4200,
  });
}
