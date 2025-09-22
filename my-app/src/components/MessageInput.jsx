import { Mic, Send, Phone } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export const MessageInput = ({
  message,
  onChange,
  onKeyDown,
  onSend,
  textareaRef,
  disabled = false,
  onVoiceMode,
  onVoiceChatMode,
}) => {
  const { colors, isDark } = useTheme();

  return (
    <div className={`border-t ${colors.border} p-4`}>
      <div className="max-w-3xl mx-auto">
        <div
          className={`flex items-center gap-3 ${colors.bgInput} ${colors.border} border rounded-2xl px-4 py-2`}
        >
          <textarea
            ref={textareaRef}
            value={message}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder="Ask about college policies..."
            className={`
              flex-1 
              bg-transparent 
              resize-none 
              outline-none 
              ${colors.text} 
              placeholder:${colors.textMuted} 
              max-h-32 
              py-2 
              overflow-y-auto 
              scrollbar-custom ${isDark ? "scrollbar-dark" : "scrollbar-light"}
            `}
            rows={1}
            disabled={disabled}
          />

          <div className="flex gap-2">
            {/* Voice dictation (single message) */}
            <button
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'hover:bg-zinc-700' 
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => onVoiceMode(true)}
            >
              <Mic size={18} className={colors.textMuted.replace("text-", "text-")} />
            </button>

            {/* Continuous voice chat */}
            <button
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'hover:bg-zinc-700' 
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => onVoiceChatMode(true)}
            >
              <Phone size={18} className={colors.textMuted.replace("text-", "text-")} />
            </button>

            {/* Send text */}
            <button
              onClick={onSend}
              disabled={!message.trim() || disabled}
              className={`p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${colors.buttonPrimary}`}
            >
              <Send size={18} className="text-white" />
            </button>
          </div>
        </div>

        <p className={`text-xs ${colors.textMuted} text-center mt-2`}>
          College Assistant can make mistakes. Verify important information with official college resources.
        </p>
      </div>
    </div>
  );
};

export default MessageInput;
