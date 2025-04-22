import emailjs from "@emailjs/browser";
export const SendEmail = async (templateParams) => {
  try {
    const send = await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_PUBLIC_KEY
    );
    return send.status;
  } catch (error) {
    console.log(error);
  }
};
