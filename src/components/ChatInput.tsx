import React, { useState } from 'react';

type Props = {
  sendMessage: any;
  loading: boolean;
};

const ChatInput = ({ sendMessage, loading }: Props) => {
  // set input state
  const [value, setValue] = useState('');

  //   create submit functionality
  const handleSubmit = () => {
    if (value === '') return;
    sendMessage({ sender: 'user', message: value });
    setValue('');
  };

  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 overflow-auto relative">
      {loading ? (
        <img src="./loader.gif" className="w-8 m-auto" />
      ) : (
        <>
          <textarea
            rows={1}
            className="border-0 bg-transparent outline-none w-11/12"
            value={value}
            placeholder="Ask me anything"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && handleSubmit();
            }}
          />
          <img
            src="./send.png"
            alt="submit button icon"
            width={20}
            className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125"
            onClick={handleSubmit}
          />
        </>
      )}
    </div>
  );
};

export default ChatInput;
