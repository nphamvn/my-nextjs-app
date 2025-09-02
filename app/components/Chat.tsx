'use client';

import { useEffect, useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(prev => [...prev, `New message ${prev.length + 1}`]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Chat (CSR)</h3>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
