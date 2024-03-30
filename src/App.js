import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([
    {
      content: "It's over Anakin, I have the high ground.",
      role: "assistant"
    },
    {
      content: "You underestimate my power!",
      role: "user"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);

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
      <div className=" border bg-base-300 w-full h-full  flex flex-col">
        <div className='p-5 pb-8 flex-grow overflow-auto'>
          {
            messages.map((msg, i) => (
              <div className={`chat ${msg.role === 'assistant' ? 'chat-start' : 'chat-end'}`} key={'chatKey' + i}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                  <img src={msg.role === 'assistant' ? 'https://example.com/assistant-image.jpg' : 'https://example.com/user-image.jpg'} alt="Avatar" />
                  </div>
                </div>
                <div className="chat-bubble">{msg.content}</div>
              </div>
            ))
          }
        </div>

        <form className="form-control  m-5 items-center" onSubmit={(e) => handleSubmit(e)}>
          <div className="input-group flex  max-w-full w-[490px] relative">
            {isTyping && <small className='absolute -top-5 left-0.5 animate-pulse'>Jarvis is Typing...</small>}
            <input type="text" placeholder="Type a question ask anything!" className="input input-bordered flex-grow w-80 h-12" required />
            <button className="btn btn-square" type="submit">
              <img src="https://example.com/your-image.png" alt="Submit" className="h-6 w-6" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default App;
