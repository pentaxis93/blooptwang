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

  // const onSubmit = data => console.log(data);
  const onSubmit = (data: FormValues) => {
    fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: data.userInput,
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
      <div id="chat-output" className="bg-green-200 grow">
        <p>{reply}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-3/5 grow-0 gap-3 bg-blue-200'>
        <textarea
          {...register("userInput", { required: true })}
          className="textarea textarea-primary"
          placeholder="Type here">
        </textarea>
        <input type="submit" value="Chat" className="btn btn-primary" />
      </form>
    </div>
  );
};
