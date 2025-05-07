export default async function wordOfTheDayHandler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.WORDNIK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key is not set' });
  }

  const apiUrl = `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${apiKey}`;

  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const wordnikReponse = await fetch(apiUrl);
    if (!wordnikReponse.ok) {
      return res.status(wordnikReponse.status).json({ error: 'Failed to fetch word of the day' });
    }
    const wordData = await wordnikReponse.json();
    return res.status(200).json(wordData);
  } catch (error) {
    console.error('Error fetching word of the day:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
