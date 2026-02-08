

```
README.md
```

Paste this:

````md
# VeidaLabs Hiring Assignment — Learn with Jiji Backend

## Overview
This project implements a backend service for the "Learn with Jiji" AI learning assistant. The backend accepts user queries and returns learning resources along with an answer.

The service is built using Node.js, Express, and Supabase.

---

## Tech Stack
- Node.js
- Express.js
- Supabase (Database, Auth, Storage)
- REST API

---

## API Endpoint

### POST /ask-jiji

Accepts a user query and returns learning resources.

Example request:

```json
{
  "query": "Explain RAG"
}
````

Example response:

```json
{
  "answer": "Retrieval-Augmented Generation...",
  "resources": [...]
}
```

---

## Database Structure

Table: resources

Fields:

* id
* title
* topic
* type (ppt/video)
* file_url

---

## Setup Instructions

1. Clone repository

```
git clone <repo-url>
```

2. Install dependencies

```
npm install
```

3. Create `.env` file

```
SUPABASE_URL=your_url
SUPABASE_KEY=your_key
PORT=5000
```

4. Run server

```
node server.js
```

---

## Supabase Configuration

Row Level Security policy allows public read access to resources.

---

## Future Improvements

* Add real AI integration
* User authentication
* Query logging & analytics
* Smarter resource search

````

---

## ✅ Step 10
Commit README:

```bash
git add .
git commit -m "Added README"
git push
````
