import { useState, useRef } from "react";
import { useTheme } from "../hooks/useTheme";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatArea from "./ChatArea";
import { MessageInput } from "./MessageInput";
import VoiceModeOverlay from "./VoiceModeOverlay";

const CollegeChatInterface = () => {
  const { colors } = useTheme();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showVoiceOverlay, setShowVoiceOverlay] = useState(false);
  const [continuousMode, setContinuousMode] = useState(false);
  const textareaRef = useRef(null);

  const handleSendMessage = (msg = message) => {
    if (!msg.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), sender: "user", text: msg }]);
    setMessage("");
    setIsTyping(true);

    // Mock bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: `Bot reply to: ${msg}` },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`flex h-screen ${colors.bg} ${colors.text}`}>
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        {/* Chat Area */}
        <ChatArea messages={messages} isTyping={isTyping} />

        {/* Input */}
        <MessageInput
          message={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          onSend={() => handleSendMessage()}
          textareaRef={textareaRef}
          disabled={isTyping}
          onVoiceMode={() => {
            setContinuousMode(false);
            setShowVoiceOverlay(true);
          }}
          onVoiceChatMode={() => {
            setContinuousMode(true);
            setShowVoiceOverlay(true);
          }}
        />
      </div>

      {/* Voice Overlay */}
      {showVoiceOverlay && (
        <VoiceModeOverlay
          continuous={continuousMode}
          onSend={handleSendMessage}
          onCancel={() => setShowVoiceOverlay(false)}
        />
      )}
    </div>
  );
};

export default CollegeChatInterface;
