import { useEffect, useState, useRef } from "react";
import { Mic } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const VoiceModeOverlay = ({ onSend, onCancel, continuous = false }) => {
  const { colors } = useTheme();
  const [isListening, setIsListening] = useState(false);
  const [voiceText, setVoiceText] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = continuous;

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setVoiceText(transcript);
    };

    recognition.onend = () => setIsListening(false);

    recognition.start();
    setIsListening(true);
    recognitionRef.current = recognition;

    return () => recognition.stop();
  }, [continuous]);

  return (
    <div
      className={`absolute inset-0 ${colors.bg} flex flex-col items-center justify-center z-50`}
    >
      <div className="flex flex-col items-center gap-6">
        <div
          className={`w-24 h-24 rounded-full flex items-center justify-center ${
            isListening ? "bg-red-500 animate-pulse" : "bg-gray-500"
          }`}
        >
          <Mic size={32} className="text-white" />
        </div>
        <p className={`${colors.text} text-center`}>Speak now...</p>
        <p className={`${colors.textMuted} text-sm`}>{voiceText}</p>
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-lg ${colors.buttonPrimary}`}
            onClick={() => {
              onSend(voiceText);
              setVoiceText("");
            }}
          >
            Send
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${colors.button}`}
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceModeOverlay;
