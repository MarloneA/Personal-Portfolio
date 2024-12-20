"use client";

import React, { useState } from "react";
import { ChatMessageList } from "../_ui/chat/chat-message-list";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "../_ui/chat/chat-bubble";
import { ChatInput } from "../_ui/chat/chat-input";
import { Button } from "../_ui/button";
import axios from "axios";

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      type: "received",
      content:
        "Hello, I'm your AI chat assistant bot. Ask me anything about this video and I will answer it.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { type: "sent", content: input }]);
    setLoading(true);

    try {
      const response = await axios.post("/api/chat", {
        question: input,
      });

      const { answer } = response.data;

      setMessages((prev) => [
        ...prev,
        {
          type: "received",
          content:
            answer || "I'm sorry, I couldn't find an answer to that question.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "received",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col py-10 md:p-10 pr-0">
      <ChatMessageList>
        {messages.map((msg, index) => (
          <ChatBubble key={index} variant={msg.type}>
            <ChatBubbleAvatar fallback={msg.type === "sent" ? "US" : "AI"} />
            <ChatBubbleMessage variant={msg.type}>
              {msg.content}
            </ChatBubbleMessage>
          </ChatBubble>
        ))}
        {loading && (
          <ChatBubble variant="received">
            <ChatBubbleAvatar fallback="AI" />
            <ChatBubbleMessage isLoading />
          </ChatBubble>
        )}
      </ChatMessageList>
      <form
        onSubmit={handleSendMessage}
        className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
      >
        <ChatInput
          placeholder="Ask a question about the video..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center p-3 pt-0">
          <Button variant="ghost" size="icon">
            <span className="sr-only">Attach file</span>
          </Button>
          <Button variant="ghost" size="icon">
            <span className="sr-only">Use Microphone</span>
          </Button>
          <Button type="submit" size="sm" className="ml-auto gap-1.5">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
