import { MessageSquare } from "lucide-react";

const ZendeskWidgetPlaceholder = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-full shadow-lg flex items-center transition-transform transform hover:scale-105"
        onClick={() => alert("Zendesk Support Widget Placeholder: Clicking this would normally open a support chat.")}
        aria-label="Open support chat"
      >
        <MessageSquare size={24} className="mr-2" />
        Support
      </button>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
        (Zendesk Widget Mock)
      </p>
    </div>
  );
};

export default ZendeskWidgetPlaceholder;

