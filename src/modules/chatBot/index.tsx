import { useState } from "react";
import styles from "./Chatbot.module.scss";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSendSharp } from "react-icons/io5";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "How are you?", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className={styles.chatContainer}>
      {isOpen && (
        <div className={styles.chatbotContainer}>
          <div className={styles.chatWindow}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "bot" ? styles.botMessage : styles.userMessage
                }
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className={styles.chatInput}
            />
            <button onClick={sendMessage} className={styles.sendButton}>
              <IoSendSharp />
            </button>
          </div>
        </div>
      )}
      <button className={styles.chatIcon} onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineMessage size={30} />
      </button>
    </div>
  );
};

export default Chatbot;
