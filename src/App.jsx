import React, { useState } from 'react';
import './index.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (input) {
      setMessages([...messages, { text: input, id: Date.now() }]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-3xl font-bold mb-6">Chat App</header>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-4">
          {messages.map((message) => (
            <li key={message.id} className="p-2 bg-blue-200 rounded-md">
              {message.text}
            </li>
          ))}
        </ul>
        <form onSubmit={sendMessage} className="mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
            placeholder="Type a message..."
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
