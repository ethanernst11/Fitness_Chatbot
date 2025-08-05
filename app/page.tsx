"use client";

import Chat from "./Chat";
import "./home.css";

export default function HomePage() {
  return (
    <main className="home-container">
      <div className="chat-box">
        <h1 className="chat-title">Your Personal Fitness Chatbot</h1>
        <p className="chat-subtitle">
          Ask questions about workouts, nutrition, recovery, and anything else related to your fitness goals.
        </p>

        {/* Use the Chat component that connects to the OpenAI API */}
        <Chat />

        <footer className="chat-footer">
          Built with Next.js and OpenAI API
        </footer>
      </div>
    </main>
  );
}