import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: process.env.APP_URL,
  methods: "GET,POST,HEAD,DELETE,PUT,PATCH",
};

// Initialize Google GenAI
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    // Generate response using Google GenAI
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: message,
    });

    res.json({ response: response.text || "No response from API" });
  } catch (error) {
    res.status(500).json({ error: "API Error: " + error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
