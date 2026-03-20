export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(200).json({
      status: 'ERROR',
      message: 'ANTHROPIC_API_KEY is not set in Vercel environment variables'
    });
  }

  // Test the API key with a minimal request
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 10,
        messages: [{ role: 'user', content: 'Say OK' }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(200).json({
        status: 'API_ERROR',
        http_status: response.status,
        error: data.error?.message || JSON.stringify(data)
      });
    }

    return res.status(200).json({
      status: 'SUCCESS',
      message: 'API key works and Anthropic is reachable',
      response: data.content?.[0]?.text
    });
  } catch (err) {
    return res.status(200).json({
      status: 'FETCH_ERROR',
      message: err.message
    });
  }
}
