import React from "react";
import { useState } from "react";
import { SendEmail } from "../util/SenderEmail";
import Notif from "./Notif";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { Flex, Spin } from "antd";
function Formemail() {
  const [IsLoading, setIsLoading] = useState(false);
  const [showNotifSuccess, setSetshowNotifSuccess] = useState(false);
  const [showNotifFailed, setSetshowNotifFailed] = useState(false);
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await SendEmail(FormData);

      if (response === 200) {
        setSetshowNotifSuccess(true);
        setTimeout(() => {
          setSetshowNotifSuccess(false);
        }, 3000);
      } else {
        setSetshowNotifFailed(true);
        setTimeout(() => {
          setSetshowNotifFailed(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    setFormData({
      name: "",
      email: "",
      title: "",
      message: "",
    });
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-4  h-full justify-center"
    >
      {IsLoading && (
        <Notif text="Sending Email..." bg="bg-black/50">
          <Flex align="center" gap="middle">
            <Spin />
          </Flex>
        </Notif>
      )}
      {showNotifSuccess && (
        <Notif text="Email Sent" bg="bg-green-500/80">
          <FaCheckCircle className="text-2xl text-green-500" />
        </Notif>
      )}
      {showNotifFailed && (
        <Notif text="Error" bg="bg-red-500/80">
          <IoMdAlert className="text-2xl text-red-500" />
        </Notif>
      )}
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
      <button
        type="submit"
        className="bg-blue-400 rounded-2xl w-full h-10 cursor-pointer"
      >
        Send
      </button>
    </form>
  );
}

export default Formemail;
