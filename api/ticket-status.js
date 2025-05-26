// api/ticket-status.js

export default function handler(req, res) {
  const { email, site } = req.query;

  if (!email || !site) {
    return res.status(400).json({ error: 'Missing email or site parameter' });
  }

  // Mock success response
  return res.status(200).json({
    purchased: true,
    boostVotes: 5,
  });
}
