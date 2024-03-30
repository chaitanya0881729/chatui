import React, { useState, useEffect, useRef } from 'react';
import { TextField, Button, Avatar } from '@mui/material';

import './App.css';

function Mni() {
  const [messages, setMessages] = useState([
    {
      content: "It's over Anakin, I have the high ground.",
      role: "assistant"
    },
    {
      content: "You underestimate my power!",
      role: "user"
    },

  ]);

  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      content: e.target[0].value,
      role: "user"
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    e.target.reset();

    setIsTyping(false);
  };

  return (
    <section className='container mt-10 mx-auto p-5 fixed inset-0'>
      <div ref={chatContainerRef} className="border bg-base-300 w-full h-full flex flex-col overflow-auto">
        <div className='p-5 pb-8 flex-grow'>
          {messages.map((msg, i) => (
            <div className={`chat ${msg.role === 'assistant' ? 'chat-start' : 'chat-end'}`} key={'chatKey' + i}>
              <Avatar className="chat-image" alt="Avatar" src={msg.role === 'assistant' ? 'https://example.com/assistant-image.jpg' : 'https://example.com/user-image.jpg'} />
              <div className="chat-bubble">{msg.content}</div>
            </div>
          ))}
        </div>

        <form className="form-control m-5 items-center" onSubmit={(e) => handleSubmit(e)}>
          <div className="input-group flex max-w-full w-[490px] relative">
            {isTyping && <small className='absolute -top-5 left-0.5 animate-pulse'>Jarvis is Typing...</small>}
            <TextField type="text" label="Type a question ask anything!"  className="flex-grow w-80 h-15" required     sx={{
    backgroundColor: 'white', 
    border: '1px solid #ccc', 
    borderRadius: '4px',
  }}/>



  
            <Button type="submit" variant="contained" color="primary">
              <img src="https://example.com/your-image.png" alt="Submit" className="h-6 w-6" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Mni;
