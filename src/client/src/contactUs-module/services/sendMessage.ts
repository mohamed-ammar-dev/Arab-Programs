export const sendMessage = async (params: any) => {
  const data = {
    name: params.name,
    email: params.email,
    message: params.message,
  };

  const response = await fetch("/contactUs/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) return alert("Something went wrong!");
};
