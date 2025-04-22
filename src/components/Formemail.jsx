import React from "react";
import { useState } from "react";
import { SendEmail } from "../util/SenderEmail";

function Formemail() {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  console.log(import.meta.env);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(FormData);

    try {
      await SendEmail(FormData);
      //   return console.log(SendEmail);
      if (SendEmail === 200) {
        alert("success");
      } else {
        return console.log("gagal");
      }
    } catch (error) {
      console.log(error);
    }

    e.target.reset();
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-4  h-full justify-center"
    >
      <input
        type="text"
        placeholder="Name..."
        className="input-form"
        value={FormData.name}
        onChange={(e) => setFormData({ ...FormData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email..."
        className="input-form"
        value={FormData.email}
        onChange={(e) => setFormData({ ...FormData, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Subject..."
        className="input-form"
        value={FormData.title}
        onChange={(e) => setFormData({ ...FormData, title: e.target.value })}
        required
      />
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="Youre Message.."
        className="input-form"
        value={FormData.message}
        onChange={(e) => setFormData({ ...FormData, message: e.target.value })}
        required
      />
      <button type="submit" className="bg-blue-400 rounded-2xl w-full h-10">
        Send
      </button>
    </form>
  );
}

export default Formemail;
