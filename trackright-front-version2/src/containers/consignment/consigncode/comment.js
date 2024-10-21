import styles1 from './style1' 
import React, { useState } from "react";
import { SendOutlined } from "@ant-design/icons";




const Comment = () => {
    const [messages, setMessages] = useState([
      { id: 1, author: 'Tony Fernandez', text: 'Goods have been successfully offloaded' },
      { id: 2, author: 'Marcus', text: 'Good to hear, make sure to deliver other goods on time without any delay' },
      { id: 3, author: 'Marcus', text: 'Good to hear, make sure to deliver other goods on time without any delay' }
    ]);
    const [newMessage, setNewMessage] = useState("");
  
    const handleClick = () => {
      if (newMessage.trim() === '') return;
      setMessages([...messages, { id: messages.length + 1, author: 'You', text: newMessage }]);
      setNewMessage(''); // Clear the input after adding the message
    };
  
    return (
      <>
        <div style={styles1.container}>
          <div style={styles1.messageContainer}>
            {/* Static containers */}
            <div style={styles1.container1}>
              <h3>Tony Fernandez</h3>
              <h4>Goods have been successfully offloaded</h4>
            </div>
  
            <div style={styles1.container2}>
              <h3>Marcus</h3>
              <h4>Good to hear, make sure to deliver other goods on time without any delay</h4>
            </div>
  
            <div style={styles1.container3}>
              <h3>Marcus</h3>
              <h4>Good to hear, make sure to deliver other goods on time without any delay</h4>
            </div>
  
            {/* Dynamically rendered messages */}
            {messages.slice(3).map((message) => (
              <div style={styles1.container2} key={message.id}>
                <h3>{message.author}</h3>
                <h4>{message.text}</h4>
              </div>
            ))}
  
            {/* Input Section */}
            <div style={styles1.container4}>
              <input
                type="text"
                placeholder="Type a message"
                value={newMessage}
                style={styles1.messageInput}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleClick()} // Press "Enter" to send
              />
              <SendOutlined
                style={styles1.sendIcon}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Comment