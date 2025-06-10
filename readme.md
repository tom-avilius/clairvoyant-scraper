# Clairvoyant Scraper

**Clairvoyant Scraper** is a lightweight, flexible Node.js service designed to scrape the latest news results (not limited to) from DuckDuckGo. Built with Express and a modular scraper, it enables rapid prototyping of news aggregation workflows or integration into larger TypeScript/JavaScript applications.

---

## 🚀 Features

- **Fast & Simple API** — Fetches news search results via HTTP with a single endpoint.
- **DuckDuckGo Powered** — Leverages DuckDuckGo News (no API key needed).
- **TypeScript Ready** — Easy to plug into TS projects with promise-based APIs.
- **Error Handling** — Validates query parameters and responds with clear status codes.
- **Minimal Dependencies** — Lightweight footprint and configurable for broader search scraping.

---

## 💻 Getting Started

### Prerequisites

- Node.js v16+
- NPM or Yarn
- Internet access (to DuckDuckGo News)

---

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/tom-avilius/clairvoyant-scraper.git
   cd clairvoyant-scraper
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the server**

   ```bash
   npm run build
   npm start
   ```

   By default, it starts at `http://localhost:7000`.

---

## ⚙️ Usage

### Endpoint: `/scrape`

- **Method**: `GET`
- **Query**: `query` – the search term to look up

**Example Request**

```
GET http://localhost:7000/scrape?query=latest%20tech%20news
```

**Example Response**

```json
{
  "query": "latest tech news",
  "result": [
0: ""
1: ""
2: ""
n: ""
]
}
```

**Error Handling**

- **400 Bad Request** – Missing `query`
- **500 Internal Server Error** – Scraper encountered an error

---

## 🧱 Architecture & Code Structure

```
src/
 ├─ scraper.ts           # Core scraping logic (DuckDuckGo parsing)
 ├─ server.ts            # Express server setup and API routing

package.json
tsconfig.json
README.md
```

---

## 🛠️ Development

For local development:

```bash
npm run dev
# or
yarn dev
```

This uses `ts-node-dev` for hot-reloading. Available scripts:

- `build`: compile TypeScript
- `start`: run compiled JavaScript
- `dev`: hot-reload server

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Propose improvements
- Report bugs or scraping edge cases
- Add support for custom search engines or new endpoint formats
- Write tests and CI workflows

Please follow standard git workflows: fork → branch → PR.

---

## 📜 License

This project is distributed under the **MIT License**. See the [LICENSE](./LICENSE) for details.

---

## 👤 Author

**Tom Avilius**
Open-source web scraper enthusiast
[GitHub](https://github.com/tom-avilius) | [Website](https://tomavilius.in) | [Contact](https://www.tomavilius.in/contact)

---

## 🔮 Future Enhancements

- Support for pagination and result limits
- Rate-limiting or caching middleware
- Docker container and GitHub Actions CI workflows

---
