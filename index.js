const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const fetch = require("node-fetch");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: userMessage }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    const botReply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
    res.json({ reply: botReply });
  } catch (error) {
  console.error("API ERROR:", error);
  res.status(500).json({ error: error.message });
}

});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
