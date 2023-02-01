export const fetchResponse = async (chat: any) => {
  try {
    const response = await fetch('https://ai-pal-server-node.vercel.app/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: chat.map((message: any) => message.message).join('\n'), // the last message in the chat
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
