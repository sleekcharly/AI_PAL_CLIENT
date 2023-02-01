import React, { useEffect, useRef } from 'react';
import autoAnimate from '@formkit/auto-animate';

type Props = {
  chat: string[];
};

function ChatBody({ chat }: Props) {
  // create style for ai
  const aiStyle =
    'bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-md mr-auto';

  // set ref
  const parent = useRef(null);
  const bottomRef: any = useRef(null);

  // run useffect for animation login
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  //   useEffect for scrolling bottom behavior
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  return (
    <div className="flex flex-col gap-4" ref={parent}>
      {chat.map((message: any, i) => {
        return (
          <div
            key={i}
            className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
              message.sender === 'ai' && aiStyle
            }`}
          >
            <pre className="whitespace-pre-wrap">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}

      <div ref={bottomRef} className="h-3"></div>
    </div>
  );
}

export default ChatBody;
