'use client';

import { useState } from 'react';

export default function ChatPanel() {
  // Define and reset state variables
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  return (
    <div className="flex flex-col align-middle h-full p-5 items-center">
      <div id="chat-output" className="bg-green-200 grow">
        Hello
      </div>
      <div id="chat-input" className='flex flex-col w-3/5 grow-0 gap-3 bg-blue-200'>
        <textarea className="textarea textarea-primary" placeholder="Type here"></textarea>
        <button className="btn btn-primary">Chat</button>
      </div>
    </div>
  );
};
