import "../shared/css/mdb.min.css";
import "../shared/css/style.css";

import { sendMessage } from "./services/sendMessage";

document.getElementById("sendFeedback")!.onclick = async () => {
  const email = document.getElementById("email")! as HTMLInputElement;
  const name = document.getElementById("name")! as HTMLInputElement;
  const message = document.getElementById("message")! as HTMLInputElement;

  if (!email.value) return alert("Email is required");
  if (!name.value) return alert("Name is required");
  if (!message.value) return alert("Message is required");

  await sendMessage({
    name: name.value,
    email: email.value,
    message: message.value,
  });

  alert("Thanks for your feedback");

  email.value = "";
  name.value = "";
  message.value = "";
};
