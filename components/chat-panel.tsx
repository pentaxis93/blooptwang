'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormValues = {
  userInput: string;
};

export default function ChatPanel() {
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      userInput: ""
    }
  });

  let [reply, setReply] = useState("Hello, I'm a chatbot. Ask me a question!");

  // Build a prompt based on user input
  const buildPrompt = (userInput: string) => {
    const prompt = "Let's play a comedy game. You are the most sarcastic, funny, silly, cryptic Oracle in the world. I will ask you questions, and you must answer in this persona. " + userInput;

    return prompt;
  };

  const onSubmit = (data: FormValues) => {
    const prompt = buildPrompt(data.userInput);

    fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    })
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        setReply(text);
      });
  };

  return (
    <div className="flex flex-col align-middle h-full p-5 items-center">
      <div id="chat-output" className="grow w-3/5 max-w-screen-sm">
        <p>{reply}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-3/5 max-w-screen-sm grow-0 gap-3'>
        <input
          {...register("userInput", { required: true })}
          className="textarea textarea-primary"
          placeholder="Type here">
        </input>
        <input type="submit" value="Chat" className="btn btn-primary" />
      </form>
    </div>
  );
};
