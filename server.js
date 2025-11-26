const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

// Mock scrape endpoint
app.post('/api/scrape', (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL required' });
  
  // Return mock data (safe for local testing)
  res.json({
    title: "Demo Site",
    headings: [{ tag: "H1", text: "Welcome" }],
    paragraphs: ["This is a test paragraph for Qwen2611."],
    links: [{ text: "GitHub", href: "https://github.com/DeemaJS/qwen2611" }]
  });
});

// Qwen/DeepSeek analysis endpoint (mock)
app.post('/api/analyze', (req, res) => {
  const { model } = req.body;
  res.json({
    analysis: {
      purpose: `AI analysis using ${model || 'Qwen'}`,
      audience: "Developers testing qwen2611",
      recommendations: ["Add real scraping logic", "Integrate API keys"],
      scores: { content: 10, seo: 10, accessibility: 10, ux: 10 }
    },
    model: model || 'qwen'
  });
});

app.get('/', (req, res) => {
  res.send(`
    <h1>qwen2611</h1>
    <p>✅ Repo initialized</p>
    <p>Run: <code>npm install && npm run dev</code></p>
    <p>API endpoints:</p>
    <ul>
      <li>POST /api/scrape</li>
      <li>POST /api/analyze</li>
    </ul>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
