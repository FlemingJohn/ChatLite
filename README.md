
# 🤖 Gemini API Chatbot

A simple AI chatbot web application using the **Google Gemini API** (via [Google AI Studio](https://makersuite.google.com/app)).



---

## 🚀 Features

- 💬 User-friendly chat UI (HTML, CSS, JavaScript)
- 🧠 Backend powered by Express.js & Node.js
- 🔐 Connects securely to Gemini API using your API key
- 📄 Supports multiline and markdown-like formatting in responses
- 🌐 Testable via browser and Postman

---



## 📁 Folder Structure
```
Chatlite/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .env
├── index.js
├── package.json
└── README.md
```



---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/gemini-chatbot.git
cd gemini-chatbot
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
GEMINI_API_KEY=your_api_key_here
```

> 🔑 Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app)

### 4. Start the server

```bash
node index.js
```

### 5. Open the app in your browser

Visit: [http://localhost:3000](http://localhost:3000)

---

## 💡 Usage

* Type your query in the input field.
* Press **Send** to interact with the Gemini model.
* Responses are displayed with clean formatting.

---

## 📬 API Used

**Endpoint:**

```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=API_KEY
```

**Sample Payload:**

```json
{
  "contents": [
    {
      "parts": [
        {
          "text": "Your prompt here"
        }
      ]
    }
  ]
}
```

---

## ✨ Credits

* 🧠 Gemini API by Google AI
* 🎨 UI styled using HTML/CSS
* 👨‍💻 Developed by Fleming John

---

