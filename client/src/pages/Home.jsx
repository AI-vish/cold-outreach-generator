import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";
import Form from "../components/Form";
import MessageList from "../components/MessageList";

const Home = () => {
  const [generatedMessage, setGeneratedMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState("");
  const [copyFeedback, setCopyFeedback] = useState("");

  const fetchMessages = async () => {
    setHistoryLoading(true);
    try {
      const response = await apiClient.get("/messages");
      setMessages(response.data.data || []);
    } catch (_error) {
      setError("Unable to fetch message history.");
    } finally {
      setHistoryLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleMessageGenerated = (savedMessage) => {
    setGeneratedMessage(savedMessage);
    setMessages((prev) => [savedMessage, ...prev]);
  };

  const copyToClipboard = async () => {
    if (!generatedMessage?.message) return;
    try {
      await navigator.clipboard.writeText(generatedMessage.message);
      setCopyFeedback("Copied!");
      setTimeout(() => setCopyFeedback(""), 1500);
    } catch (_error) {
      setCopyFeedback("Copy failed");
      setTimeout(() => setCopyFeedback(""), 1500);
    }
  };

  return (
    <main className="container">
      <header>
        <h1>Cold Outreach Message Generator</h1>
        <p>Create and save personalized outreach messages.</p>
      </header>

      {error && <p className="error">{error}</p>}

      <Form
        onMessageGenerated={handleMessageGenerated}
        onLoadingChange={setSubmitLoading}
        onError={setError}
      />

      {submitLoading && <p>Generating message...</p>}

      {generatedMessage && (
        <section className="card output">
          <h2>Generated Message</h2>
          <p>{generatedMessage.message}</p>
          <button type="button" className="btn-secondary" onClick={copyToClipboard}>
            Copy to Clipboard
          </button>
          {copyFeedback && <span className="copy-feedback">{copyFeedback}</span>}
        </section>
      )}

      <MessageList messages={messages} loading={historyLoading} />
    </main>
  );
};

export default Home;
