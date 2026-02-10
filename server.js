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

    const topic = query.split(" ").pop(); // last word as topic

    const { data, error } = await supabase
      .from("resources")
      .select("*")
      .ilike("topic", `%${topic}%`);

    if (error) throw error;

    if (!data || data.length === 0) {
      return res.json({
        message: "No resources available for this topic.",
        resources: [],
      });
    }

    const answer = `Here are learning resources related to ${topic}.`;

    res.json({
      answer,
      resources: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error is there" });
  }
});


app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});