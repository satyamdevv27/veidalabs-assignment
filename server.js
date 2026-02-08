import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.get("/", (req, res) => {
  res.send("Jiji backend running");
});

app.post("/ask-jiji", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    // simple topic detection (mock)
    const topic = "RAG";

   const { data, error } = await supabase
  .from("resources")
  .select("*");


    if (error) throw error;

    const answer =
      "Retrieval-Augmented Generation (RAG) combines retrieval systems with language models to improve response accuracy.";

    res.json({
      answer,
      resources: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});
