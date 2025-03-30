# AI Chatbot (Text-to-Text)

A simple, text-based AI chatbot built with React, Tailwind CSS, and the Google Gemini API. This project focuses on providing quick answers to your questions without unnecessary overhead like login requirements or conversation history.

## Features

- **Simple Text-to-Text Interaction:** Ask a question, get an answer. It's that easy!
- **No Login Required:** Jump right in and start chatting.
- **No Conversation History:** Each interaction is fresh and independent. Your privacy is respected.
- **Powered by Google Gemini API:** Leverages the power of Google's AI for generating responses.
- **Clean and Responsive UI:** Built with Tailwind CSS and DaisyUI for a visually appealing and user-friendly experience.

## Tech Stack

- **Frontend:**
  - [React](https://reactjs.org/): JavaScript library for building user interfaces.
  - [Vite](https://vitejs.dev/): Fast build tool and development server.
  - [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development.
  - [DaisyUI](https://daisyui.com/): Tailwind CSS Components
- **Backend:**
  - [Node.js](https://nodejs.org/): JavaScript runtime environment.
  - [npm](https://www.npmjs.com/): Package manager for JavaScript.
- **API:**
  - [Google Gemini API](https://ai.google.dev/): Used for generating AI-powered responses.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd [YOUR_PROJECT_DIRECTORY]
    ```

2.  **Install frontend dependencies:**

    ```bash
    cd client
    npm install
    ```

3.  **Install backend dependencies:**

    ```bash
    cd server
    npm install
    ```

4.  **Configure the Google Gemini API Key:**

    - Obtain an API key from the [Google AI Studio](https://ai.google.dev/).
    - Create a `.env` file in the `server` directory.
    - Add the following line to your `.env` file, replacing `YOUR_API_KEY` with your actual API key:

      ```
      GEMINI_API_KEY=YOUR_API_KEY
      ```

5.  **Run the application:**

    - **Start the backend server:**

      ```bash
      cd server
      npm start
      ```

    - **Start the frontend development server:**

      ```bash
      cd client
      npm run dev
      ```

    The frontend should now be accessible in your browser, usually at `http://localhost:5173`. (Check your terminal output for the exact URL).

## Usage

Simply type your question into the input field and press Enter or click the "Send" button. The chatbot will then generate a response based on your query.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for any bugs or feature requests.

## License

[Choose a License, e.g., MIT License] - See the `LICENSE` file for details.
