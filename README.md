# 🔍 AI Research Assistant – Perplexity AI Clone

An AI-powered research assistant inspired by Perplexity AI that helps users find information, explore topics, and get intelligent answers using AI and real-time web search.

The platform combines conversational AI, web search, and document-based question answering into a single interface, allowing users to research information more efficiently.

## 🚀 Features

- **AI-Powered Chat:** Ask questions and receive intelligent, contextual responses.
- **Web Search:** Search the web and generate answers using relevant online information.
- **PDF Upload:** Upload PDF documents and interact with their content.
- **RAG-Based Question Answering:** Retrieve relevant document information to generate context-aware answers.
- **Conversation Management:** Maintain and manage previous chat conversations.
- **Contextual Responses:** Maintain conversation context for better interactions.
- **Responsive UI:** Clean and responsive interface for a smooth user experience.

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- Tailwind CSS
- Redux Toolkit
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- REST APIs
- JWT Authentication

### Generative AI
- LangChain.js
- Google Gemini API
- Retrieval-Augmented Generation (RAG)
- PDF Processing
- Embeddings

### Real-Time Communication
- Socket.IO

## 🏗️ How It Works

### 1. AI Chat
User sends a query through the chat interface. The backend processes the request and sends it to the AI model to generate a relevant response.

### 2. Web Search
The application retrieves relevant information from the web and uses the available context to generate informative answers.

### 3. PDF-Based Question Answering
- User uploads a PDF document.
- Document content is extracted.
- Text is divided into smaller chunks.
- Embeddings are generated.
- Relevant chunks are retrieved based on the user's query.
- The LLM generates an answer using the retrieved context.

## 📂 Project Structure

```text
AI-Research-Assistant/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── redux/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── config/
│   ├── app.js
│   └── server.js
│
└── README.md
```

## 🎯 Project Objective

The main objective of this project is to build an intelligent research platform that combines Large Language Models, web search, and Retrieval-Augmented Generation to make information discovery faster and more accessible.

## 🔮 Future Improvements

- Source citations and reference links.
- Streaming AI responses.
- Advanced search and research mode.
- Conversation memory.
- Multi-agent research workflow.
- Improved document retrieval.
- Cloud deployment and Docker integration.

## 👨‍💻 Author

**Aman Sharma**

MERN Stack Developer | Full-Stack Developer | Generative AI 

- GitHub: [@amansharma052](https://github.com/amansharma052)

---

⭐ If you find this project interesting, consider giving it a star!
