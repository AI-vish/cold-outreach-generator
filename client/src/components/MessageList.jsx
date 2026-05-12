const MessageList = ({ messages, loading }) => {
  if (loading) {
    return (
      <div className="card">
        <p>Loading message history...</p>
      </div>
    );
  }

  return (
    <section className="card history">
      <h2>Past Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {messages.map((item) => (
            <li key={item._id}>
              <p className="meta">
                {item.company} • {item.role}
              </p>
              <p>{item.message}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MessageList;
