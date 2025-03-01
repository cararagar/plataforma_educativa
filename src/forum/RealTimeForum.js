import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const RealTimeForum = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const socketRef = useRef(null);

  useEffect(() => {
    // Conectar al servidor WebSocket (ajusta la URL según tu backend)
    socketRef.current = io('http://localhost:3001');

    socketRef.current.on('newMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      socketRef.current.emit('newMessage', { content: newMessage, sender: 'Usuario' });
      setNewMessage('');
    }
  };

  return (
    <div className="container">
      <h3>Foro en Tiempo Real</h3>
      <ul className="list-group">
        {messages.map((msg, index) => (
          <li key={index} className="list-group-item">
            <strong>{msg.sender}: </strong>{msg.content}
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <label htmlFor="messageInput" className="form-label">Escribe tu mensaje:</label>
        <input 
          type="text" 
          id="messageInput" 
          className="form-control" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)}
          aria-label="Campo para escribir mensaje"
        />
        <button className="btn btn-primary mt-2" onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default RealTimeForum;
